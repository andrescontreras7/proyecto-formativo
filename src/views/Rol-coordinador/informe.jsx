import React, { useState, useContext, useEffect } from 'react';
import { getEstudiante } from '../../endpoints/useGet';
import {counterContext} from '../../../context/CRMcontext'
import { useParams } from 'react-router-dom';




   

const Informe = () => {
  const {auth } = useContext(counterContext);
  const [estudiante, setEstudiante] = useState({})
const {id } = useParams()


   useEffect(() => {
    getEstudiante(auth,id).then(data => {
      console.log(data)
      setEstudiante(data.data)
  })
   },[auth])

   const {estudid, estudnombre, estudapellido} = estudiante


  return (
    <div>
     <div>
     <h1 className='text-gray-700 font-black uper text-xl text-center  m-2'>
      Informacion 
      </h1>
      <hr />


     </div>

<div className='border grid grid-cols-3  m-2'>
  <div className='col-span-full row-span-full'>
    <ul className='w-full '>
      <h1 className='font-semibold text-indigo-800 '>Informacion General</h1>
      <li className='p-2 font-normal'>
        Nombre Estudiante :
        <span className='ml-2 uppercase '>{estudnombre} </span>
      </li>
      <li className='p-2 font-normal'>
        Apellido del Estudiante :
        <span className='ml-2 uppercase '>{estudapellido} </span>
      </li>
    </ul>
    
  </div>
</div>
    </div>
  );
};

export default Informe;