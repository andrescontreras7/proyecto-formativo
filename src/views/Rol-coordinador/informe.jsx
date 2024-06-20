import React, { useState, useContext, useEffect } from 'react';
import { getEstudiante, getEstudiantesAsignatura } from '../../endpoints/useGet';
import {counterContext} from '../../../context/CRMcontext'
import { useParams } from 'react-router-dom';

const Informe = () => {
  const {auth } = useContext(counterContext);
  const [estudiante, setEstudiante] = useState({})
  const [Asignaturas, setAsignaturas] = useState([])
  const {id } = useParams()

  useEffect(() => {
    getEstudiante(auth,id).then(data => {
      setEstudiante(data.data)
    })

    getEstudiantesAsignatura(auth,id).then(data => {
      data.data.map(item => {
        setAsignaturas(prevAsignaturas => [
          ...prevAsignaturas,
          { nombre: item.asignatura.asignombre, codigo: item.asignatura.asigcod }
        ])
      })
    })
  },[auth])

  const {estudid, estudnombre, estudapellido, estudtelefono, estudcorreo} = estudiante

  return (
    <div className='p-4'>
      <h1 className='text-gray-700 font-black text-xl text-center mb-4'>
        Informacion 
      </h1>
      <div className='border grid grid-cols-2 gap-4'>
        <div>
          <h2 className='font-semibold text-indigo-800 mb-2'>Informacion General</h2>
          <ul>
            <li className='p-2 font-normal'>
              Nombre Estudiante :
              <span className='ml-2 uppercase '>{estudnombre} </span>
            </li>
            <li className='p-2 font-normal'>
              Apellido del Estudiante :
              <span className='ml-2 uppercase '>{estudapellido} </span>
            </li>
            <li className='p-2 font-normal'>
              correo del Estudiante :
              <span className='ml-2 uppercase '>{estudcorreo} </span>
            </li>
            <li className='p-2 font-normal'>
              telefono del Estudiante :
              <span className='ml-2 uppercase '>{estudtelefono} </span>
            </li>
            <li className='p-2 font-normal'>
              Apellido del Estudiante :
              <span className='ml-2 uppercase '>{estudapellido} </span>
            </li>
          </ul>
        </div>
        <div>
          <h2 className='font-semibold text-indigo-800 mb-2'>Asignaturas del estudiante</h2>
          <ul>
            {Asignaturas.map((asignatura, index) => (
              <li key={index} className='p-2 font-normal'>
                {asignatura.nombre} ({asignatura.codigo})
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Informe;