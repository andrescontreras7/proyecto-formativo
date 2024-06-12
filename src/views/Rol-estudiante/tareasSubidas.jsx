import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import AnimatedPage from '../../components/animatedPage';
import { getEvaluacionesPorEstudiante } from '../../endpoints/useGet';
import { counterContext } from '../../../context/CRMcontext';
import CrearEntregaTarea from "../../components/CrearEntregaTarea";
import Swal from "sweetalert2";
import {jwtDecode} from "jwt-decode";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);



const TareasSubidas = () => {
  const { idasig, idgrupo } = useParams();
  const { auth } = useContext(counterContext);
  const [actividad, setActividad] = useState({});
  const [idEstudiante, setidEstudiante] = useState({});
  const [idTarea, setidTarea] = useState({});
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  
  useEffect(() => {
    const decodedToken = jwtDecode(auth.token);
    setidEstudiante(decodedToken.id)
    getEvaluacionesPorEstudiante(auth, decodedToken.id,idasig, idgrupo).then(res => {
      setActividad(res);
    });
  }, [auth, idasig, idgrupo]);

  return (
    <div className='h-auto'>
      <AnimatedPage>
        <h1 className='font-black text-3xl text-center py-5'>
          Actividades
        </h1>
        <div className='w-full h-[500px] shadow-[0_8px_20px_20px_rgba(0,0,0,0.08)] rounded-2xl'>
          <div className='rounded-xl w-[90%] m-auto h-[85%] p-4 overflow-y-auto'>
            <table className='w-full'>
              <thead>
                <tr className='border-b-4'>
                  <th className="border border-gray-200 px-4 py-2">CODIGO</th>
                  <th className="border border-gray-200 px-4 py-2">Descripcion</th>
                  <th className="border border-gray-200 px-4 py-2">ANEXO</th>
                  <th className="border border-gray-200 px-4 py-2">NOTA</th>
                  <th className="border border-gray-200 px-4 py-2">Fecha Envio</th>
                </tr>
              </thead>
              <tbody>
              {Array.isArray(actividad) ? (
                actividad.map((item, index) => (
                  <tr key={index}>
                    <td className="border border-gray-200 px-4 py-2">{item.evaluacione.codigo}</td>
                    <td className="border border-gray-200 px-4 py-2">{item.descripcion}</td>
                    <td className="border border-gray-200 px-4 py-2"><a href={item.url} target="_blank" rel="noopener noreferrer">ANEXO</a></td>
                    <td className="border border-gray-200 px-4 py-2">{ item.nota }</td>
                    <td className="border border-gray-200 px-4 py-2">{ item.fec_envio }</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9">No hay items disponibles</td>
                </tr>
              )}
              </tbody>
            </table>
          </div>
        </div>
      </AnimatedPage>
    </div>
  );
};

export default TareasSubidas;
