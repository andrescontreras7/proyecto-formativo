import React, { useState, useEffect, useContext } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import Layout from '../../components/layaout';
import DataTable from 'react-data-table-component';
import { getEstudiantesAsignatura } from '../../endpoints/useGet';
import {counterContext} from '../../../context/CRMcontext'
import Select from '../../components/seletct';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import EstudiantesDataTable from "../../views/Rol-docente/datatable"
const ListadoEstudiantes = () => {
  const [estudiantes, setEstudiantes] = useState([]);
  const {auth} = useContext(counterContext); 
  const {id} = useParams()
   console.log(id)



  useEffect(() => {
    getEstudiantesAsignatura(auth, id).then(data => { 
      setEstudiantes(data.data);

    });
  }, [auth]); 
  

 
  

  return (
    <div>
          <div className="bg-[#ffffff]  w-full h-[83vh] 2xl:h-[80vh] ">
        <div>
          <div className='w-[98%] bg-[#6f99e1] bg-opacity-25 rounded-md mt-2 flex justify-between items-center border-[#5d659f] p-2 m-auto h-20 '>
         
           <div>
        
           </div>
           <div className=' p-2'>
         <Link to={"/registrarAlumno"} className='text-end font-bold bg-[#E2EDEA]   uppercase text-gray-600 rounded-md  h-[50px] p-2 '>Agregar Estudiante</Link> 
         </div>
         
          </div>
          <div className='p-2'>
          <EstudiantesDataTable estudiantes={estudiantes} />
          </div>

        </div>
       
        
      </div>

    </div>
 
   
  
  );
};

export default ListadoEstudiantes;