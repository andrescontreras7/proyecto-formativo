import React,{useState, useContext} from 'react';
import Layout from '../../components/layaout';
import { getEstudiante } from '../../endpoints/useGet';
import {counterContext} from '../../../context/CRMcontext'
import { useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Tabs, Tab } from "@nextui-org/react";
import { Link } from "react-router-dom";



function InfoEstudiantes() {
   
const {auth } = useContext(counterContext);
const {id } = useParams()


    getEstudiante(auth,id).then(data => {
        console.log(data)
    })
  return (
    <div className='h-screen'>
    <nav className='flex  justify-center h-[20%] w-screen '>
       <div className='border border-gray-700 mt-2 flex justify-center items-center h-[90%] w-[90%] '>
       <Tabs aria-label="Tabs" className='p-2'>
        <Tab
          key="Asistencias"
          title={<Link to="Asistencias">Asistencias</Link>} 
          className="tab-item"
        />
        
        <Tab
          key="listado"
          title={<Link to="Listado-estudiantes">Listado estudiantes </Link>} 
          className="tab-item"
        />
        <Tab
          key="Actividades"
          title={<Link to="InformacionGeneral">Informacion general </Link>} 
          className="tab-item"
        />
        <Tab
          key="Tematicas"
          title={<Link to="Estadisticas">Estadisticas </Link>} 
          className="tab-item"
        />
      </Tabs>

       </div>
    </nav>

    <div  className='h-[75%] rounded-md    shadow-[0_8px_20px_12px_rgba(0,0,0,0.08)]  w-[90%] m-auto'>
    <div className='h-full w-full  '>
      

         <div className='w-full h-full' >
         <Outlet/>

         </div>
        </div>
    </div>
      
    </div>
  );
}

export default InfoEstudiantes;
