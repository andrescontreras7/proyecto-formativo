import React, { useState, useEffect, useContext } from 'react';
import Layout from '../../components/layaout';
import { useParams } from 'react-router-dom';
import { getEvaluacionesPorId, getEvaluacionesEstudiantes } from '../../endpoints/useGet';
import { counterContext } from '../../../context/CRMcontext';
import { jwtDecode } from "jwt-decode";
import { button } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import NotaActividad from "../../components/NotaActividad";
import { updateTareaNota } from "../../endpoints/useEditar";
import Swal from 'sweetalert2';
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

function ActividadDetalle() {
  const { idACT } = useParams();
  const { auth } = useContext(counterContext);

  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [actividad, setActividad] = useState({});
  const [actividadNota, setActividadNota] = useState();
  const [actividadEstudiantes, setActividadEstudiantes] = useState([]);

  useEffect(() => {
    getEvaluacionesPorId(auth, idACT).then(res => {
      setActividad(res);
    });
    getEvaluacionesEstudiantes(auth, idACT).then(res => {
      setActividadEstudiantes(res);
      console.log(res)
    });
  }, [auth, idACT]);

  const onCrear = (uuid) => {
    console.log(uuid);
    setActividadNota(uuid);
    setIsCreateOpen(true);
  };

  const handleCrear = async (idActividad, notaActividad) => {
    try {
      const nuevosDatos = {
        nota: Number(notaActividad)
      };
      console.log(idActividad)
      console.log(notaActividad)
      await updateTareaNota(auth, idActividad, nuevosDatos);
      const data = await getEvaluacionesEstudiantes(auth, idACT);
      if (Array.isArray(data)) {
        setActividadEstudiantes(data);
      }
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
      <div className="p-4 w-full h-[84vh] 2xl:h-[84vh]  shadow-[0_8px_10px_15px_rgba(0,0,0,0.08)] rounded-md lg:flex-row gap-4">
        <div className='flex p-2 overflow-auto'>
          <h1 className='font-semibold text-gray-600 text-2xl'>
            {actividad.nombre_tipo_evaluacion}
          </h1>
        </div>
        <p className='p-1'>
          {actividad.descripcion}
        </p>
        <p className='p-1'>
          <a href={actividad.url} target="_blank" rel="noopener noreferrer">ANEXO</a>
        </p>
        <div className="mb-6 border-[1px] border-gray-200 rounded-xl p-4">
          <h3 className="font-bold mb-2">Lista de estudiantes que subieron la actividad</h3>
          <table className="w-full text-left table-auto border-collapse border border-gray-200">
            <thead>
              <tr>
                <th className="border border-gray-200 px-4 py-2">IdEstudiante</th>
                <th className="border border-gray-200 px-4 py-2">Descripcion</th>
                <th className="border border-gray-200 px-4 py-2">Anexo</th>
                <th className="border border-gray-200 px-4 py-2">NOTA</th>
                <th className="border border-gray-200 px-4 py-2">FechaEntrega</th>
                <th className="border border-gray-200 px-4 py-2">Calificacion</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(actividadEstudiantes) ? (
                actividadEstudiantes.map((item, index) => (
                  <tr key={index}>
                    <td className="border border-gray-200 px-4 py-2">{item.id_estudiante}</td>
                    <td className="border border-gray-200 px-4 py-2">{item.descripcion}</td>
                    <td className="border border-gray-200 px-4 py-2"><a href=""><a href={item.url} target="_blank" rel="noopener noreferrer">ANEXO</a></a></td>
                    <td className="border border-gray-200 px-4 py-2">{item.nota}</td>
                    <td className="border border-gray-200 px-4 py-2">{ item.fec_envio }</td> {/* Formato de fecha */}
                    <td className="border border-gray-200 px-4 py-2">
                      <button onClick={() => onCrear(item.uid)} className="focus:outline-none text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 items-right">
                        Calificar
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
        {isCreateOpen && (
          <NotaActividad
            isOpen={isCreateOpen}
            idActividad={actividadNota}
            onClose={() => setIsCreateOpen(false)}
            onCrear={handleCrear}
          />
        )}
      </div>
  );
}

export default ActividadDetalle;
