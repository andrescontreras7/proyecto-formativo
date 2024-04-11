import React from 'react';
import _aside from '../../_aside';
import { useState, useEffect } from "react";

const Observaciones = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <div>
      <div className='flex h-screen bg-[#A6DCF1] '>
      <aside className="w-[15%]  ">
        <_aside />
      </aside>
      <div className='w-[80%]   '>
        <section className='w-[90%] h-2/3 shadow-[0_8px_20px_20px_rgba(0,0,0,0.08)] rounded-2xl m-auto mt-10 '>
          <div className='p-4'>
          <div className='w-[90%] m-auto  bg-[#925FE24D] rounded-xl h-[3rem]'>

              </div>
            <div className='text-center mt-4  '>
              <input placeholder='BUSCAR POR CRITERIOS' className='rounded-xl w-1/2 bg-[#e1e9ec]  shadow-md  border-none p-2' type="search" name="" id="" />
            </div>
          </div>
          <div className='p-4 '>
                    {modal && <div className='border-2  w-[20%] h-[20vh]   top-14 z-10 absolute  bg-white   border-red-600  '>
                      <p >ver criterios presentes </p>
                    </div>}
           
            <table className="mt-4 m-auto   ">
            <h1 className='font-semibold text-[1.2rem] text-start mb-10 text-black'>Ver criterios de aspectos presentes: <span className='text-[1rem] underline cursor-pointer uppercase italic font-Roboto font-normal 'onClick={toggleModal} >Atencion motivacion mala convivencia</span> </h1>
             <tbody className='2 hidden md:block'>
             <tr className="grid grid-cols-10 border-2  gap-4">
                <th className="text-left col-span-4">Observacion</th>
                <th className="text-left col-span-3">Asignatura</th>
                <th className="text-left col-span-1 mr-4">Periodo</th>
                <th className="text-left col-span-2">Tipo Criterio</th>
              </tr>
           
              <tr className="grid grid-cols-10  border-[1px] gap-4">
                <td className="text-left col-span-4">Estuvo distraido durante la clase</td>
                <td className="col-span-3">QUIMICA</td>
                <td className="col-span-1">1</td>
                <td className="col-span-2">Mala Convivencia</td>
              </tr>
              <tr className="grid grid-cols-10 border-[1px]  gap-4">
                <td className="text-left col-span-4">Otra observacion</td>
                <td className="col-span-3">MATEMATICA</td>
                <td className="col-span-1">2</td>
                <td className="col-span-2 ">Buena Convivencia</td>
              </tr>
              <tr className="grid grid-cols-10 border-[1px] gap-4">
                <td className="text-left col-span-4">Más observaciones</td>
                <td className="col-span-3">LENGUAJE</td>
                <td className="col-span-1">3</td>
                <td className="col-span-2">Atención</td>
              </tr>
              <tr className="grid grid-cols-10 border-[1px] gap-4">
                <td className="text-left col-span-4">Se tiro del septimo piso </td>
                <td className="col-span-3">ALGEBRA</td>
                <td className="col-span-1">3</td>
                <td className="col-span-2">Murio </td>
              </tr>
              <tr className="grid grid-cols-10 border-[1px] gap-4">
                <td className="text-left col-span-4">le dio por llorar porque perdio el junior</td>
                <td className="col-span-3">SOCIALES</td>
                <td className="col-span-1">2</td>
                <td className="col-span-2">Lloron</td>
              </tr>
              
             </tbody>
            </table>
          </div>
         
        </section>

      </div>
      
      
      
      </div>
      </div>
  
  );
}

export default Observaciones;
