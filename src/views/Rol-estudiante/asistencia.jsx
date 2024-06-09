import React, { useState, useEffect, useContext } from 'react';
import { getAsistencias } from '../../endpoints/useGet';
import { counterContext } from "../../../context/CRMcontext";
import {useParams} from 'react-router-dom';
import { AsistenciasData } from '../Rol-docente/datatable';
import {DateRangePickerHero} from '../../components/utils/calendar.jsx'


const Asistencia = () => {
  const [asistencias, setAsistencias] = useState([]);
  const { id, grupcod} = useParams();
  const {auth} = useContext(counterContext)
  const [mensaje, setmensaje] = useState("");


  useEffect(() => {
    getAsistencias(auth, id, grupcod).then(res => {

      if(res === undefined){
        setmensaje("No hay asistencias registradas en este grupo")
      }else{
        setAsistencias(res.data);
      }

   
    });



  }, [
    
  ])
  return (
    <div className="p-8 bg-opacity-30  shadow-[0_8px_20px_20px_rgba(0,0,0,0.08)] h-[80%] rounded-3xl ">
      
      <h1 className='text-center font-bold   text-[2rem] mb-8'>Asistencias del grupo  <p className='text-gray-600 text-start font-bold text-[1rem] mb-8' ><DateRangePickerHero/>  </p> </h1>
     
        <AsistenciasData asistencias={asistencias} />
        {mensaje && <p className='text-center font-bold text-2xl text-gray-600'>{mensaje}</p>}

    </div>
  );
}

export default Asistencia;










