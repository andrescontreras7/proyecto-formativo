import React, { useState, useEffect, useContext } from 'react';
import { getAsistencias } from '../../endpoints/useGet';
import { counterContext } from "../../../context/CRMcontext";
import {useParams} from 'react-router-dom';
const Asistencia = () => {
  const { id, grupcod} = useParams();
  const {auth} = useContext(counterContext)
  console.log(id, grupcod);


  useEffect(() => {
    getAsistencias(auth, id, grupcod).then(res => {
      console.log(res.data);
    });



  }, [
    
  ])
  return (
    <div className="p-8  bg-purple-300 bg-opacity-30  shadow-[0_8px_20px_20px_rgba(0,0,0,0.08)] h-[80%] rounded-3xl ">
      
      <h1 className='text-center font-bold   text-[2rem] mb-8'>Tus Asistencias <p className='text-gray-600 text-start font-bold text-[1rem] mb-8' >13 mayo de 2004</p> </h1>
      <table className='w-full border-t border-4 rounded-2xl'>
       
      </table>
    </div>
  );
}

export default Asistencia;