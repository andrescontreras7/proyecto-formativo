import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import AnimatedPage from '../../components/animatedPage';
import { getActividadesDelEstudiante } from '../../endpoints/useGet';
import { counterContext } from '../../../context/CRMcontext';
import CrearEntregaTarea from "../../components/CrearEntregaTarea";
import { createTarea } from "../../endpoints/useCreate";
import Swal from "sweetalert2";
import {jwtDecode} from "jwt-decode";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);



const CalificacionesEstudiante = () => {
  const { idasig, idgrupo } = useParams();
  const { auth } = useContext(counterContext);
  const [actividad, setActividad] = useState({});
  const [idEstudiante, setidEstudiante] = useState({});
  const [idTarea, setidTarea] = useState({});
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  
  useEffect(() => {
    const decodedToken = jwtDecode(auth.token);
    setidEstudiante(decodedToken.id)
    getActividadesDelEstudiante(auth, idasig, idgrupo).then(res => {
      setActividad(res);
    });
  }, [auth, idasig, idgrupo]);

  const onCrear = (codigo) => {
    setidTarea(codigo)
    setIsCreateOpen(true);
  };

  const handleCrear = async (uuid, descripcion, URL) => {
    try {
      const nuevosDatos = {
        uid: uuid,
        id_estudiante: idEstudiante,
        id_tarea: idTarea,
        url: URL,
        descripcion: descripcion,
      };
      console.log(nuevosDatos)
      await createTarea(auth, nuevosDatos);

      getActividadesDelEstudiante(auth, idasig, idgrupo).then(res => {
        setActividad(res);
      });
      setIsCreateOpen(false);
      MySwal.fire({
        icon: 'success',
        title: '¡Éxito!',
        text: 'La Actividad se ha creado correctamente.'
      });
    } catch (error) {
      MySwal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Hubo un error al crear La Actividad. Por favor, inténtalo de nuevo.'
      });
      console.error('Error al crear La Actividad:', error);
    }
  };

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
                  <th className="border border-gray-200 px-4 py-2">Titulo</th>
                  <th className="border border-gray-200 px-4 py-2">Descripcion</th>
                  <th className="border border-gray-200 px-4 py-2">ANEXO</th>
                  <th className="border border-gray-200 px-4 py-2">Tipo</th>
                  <th className="border border-gray-200 px-4 py-2">Fecha Limite</th>
                  <th className="border border-gray-200 px-4 py-2">Cargar</th>
                </tr>
              </thead>
              <tbody>
              {Array.isArray(actividad) ? (
                actividad.map((item, index) => (
                  <tr key={index}>
                    <td className="border border-gray-200 px-4 py-2">{item.codigo}</td>
                    <td className="border border-gray-200 px-4 py-2">{item.nombre_tipo_evaluacion}</td>
                    <td className="border border-gray-200 px-4 py-2">{item.descripcion}</td>
                    <td className="border border-gray-200 px-4 py-2"><a href={item.url} target="_blank" rel="noopener noreferrer">ANEXO</a></td>
                    <td className="border border-gray-200 px-4 py-2">{item.tipo_eva}</td>
                    <td className="border border-gray-200 px-4 py-2">{ item.fec_entre }</td> {/* Formato de fecha */}
                    <td className="border border-gray-200 px-4 py-2">
                      <button onClick={() => onCrear(item.codigo)} className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 items-right">
                        Entregar
                      </button>
                    </td>
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
      {isCreateOpen && (
        <CrearEntregaTarea
          isOpen={isCreateOpen}
          idEstudiante={idEstudiante}
          idTarea={idTarea}
          onClose={() => setIsCreateOpen(false)}
          onCrear={handleCrear}
        />
      )}
    </div>
  );
};

export default CalificacionesEstudiante;
