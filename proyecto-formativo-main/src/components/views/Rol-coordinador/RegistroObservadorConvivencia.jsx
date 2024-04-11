import React, { useState } from 'react';
import Aside from './AsideCO';

const RegistroObservadorConvivencia = () => {
  return (
    <>
      <div className='bg-[#A6DCF1] h-screen flex'>
      <Aside />
      <div className='flex-grow overflow-y-auto'>
      <div className=" flex flex-col justify-center items-stretch  ">
        <div className="shadow-inner bg-[#A6DCF1] flex w-full flex-col justify-center items-center px-16 py-12 max-md:max-w-full max-md:px-5">
          <div className="flex w-full max-w-[1113px] flex-col mb-11 max-md:max-w-full max-md:mb-10">
            <div className="items-stretch shadow-2xl bg-[#925FE2] bg-opacity-50 self-stretch flex -mt-4 justify-between gap-5 pl-6 pr-20 py-4 rounded-3xl max-md:max-w-full max-md:flex-wrap max-md:px-5">
              
                <button>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c30b563c1b498bb6ee6166c046b0c99187a1cfb9c2ddcb702766aa4a24c16412?apiKey=83a41f7c3fac45f48041df59c87c3d79&"
                    className="aspect-[1.22] object-contain object-center w-7 stroke-[3px] stroke-black overflow-hidden shrink-0 max-w-full"
                  />
                </button>
              
              <div className="text-black text-center text-xl font-semibold self-center grow whitespace-nowrap my-auto">
                Registro Observador de convivencia
              </div>
            </div>
            <div className=" w-[100vh] flex gap-1.5 py-1.5 mt-4 px-px items-start max-md:max-w-full max-md:flex-wrap">
              <select name="" className=' w-[45%] mr-5 ml-11 p-2 rounded-xl' id="">
                <option value="">Grado</option>
                <option value="">Grado 1° A</option>
                <option value="">Grado 1° B</option>
                <option value="">Grado 2° A</option>
                <option value="">Grado 2° B</option>
                <option value="">Grado 3° A</option>
                <option value="">Grado 3° B</option>
              </select>
              <input className= 'mt-4 bg-white w-[75%] m-5 p-2 py-1.5 border-[1px]  rounded-md border-gray-500' type="date" name="" id="" style={{ marginTop: "-1px", marginLeft: "-10px"}}  />

              <select name="" className=' w-[45%] mr-5  p-2 rounded-xl' id="">
                <option value="">Grado</option>
                <option value="">Grado 1° A</option>
                <option value="">Grado 1° B</option>
                <option value="">Grado 2° A</option>
                <option value="">Grado 2° B</option>
                <option value="">Grado 3° A</option>
                <option value="">Grado 3° B</option>
              </select>
              <div className="items-center w-[110%] bg-white flex gap-4 px-5 py-1.5 rounded-xl" style={{ marginTop: "-1px", marginLeft: "-10px", padding: "8px" }}>
                
                
<form class="max-w-md mx-auto">   
    <div class="relative ">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-0.5 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar por id de estudiante" required />
       
    </div>
</form>

                
                
                
              </div>
              
              
              
            </div>

            <div className="flex-col overflow-hidden self-stretch relative flex h-[440px] w-full items-stretch mt-1 pb-3 px-11 max-md:max-w-full max-md:px-5">
  <div className='bg-[#AEE4F5] shadow-2xl rounded-2xl p-6 '>
    <div className="grid grid-cols-2 gap-5 max-md:max-w-full max-md:grid-cols-1">
      <div className="flex flex-col">
        <input className='mt-0 bg-white w-full m-1 p-2 py-1.5 border-[1px] rounded-md border-gray-500' type="text" placeholder="Nombre" />
        <input className='mt-3 bg-white w-full m-1 p-2 py-1.5 border-[1px] rounded-md border-gray-500' type="date" placeholder="Fecha de un evento" />
        <input className='mt-3 bg-white w-full m-1 p-2 py-1.5 border-[1px] rounded-md border-gray-500' type="text" placeholder="Responsable" />
        <input className='mt-3 bg-white w-full m-1 p-2 py-1.5 border-[1px] rounded-md border-gray-500' type="text" placeholder="Asunto" />
        <input className='mt-3 bg-white w-full m-1 p-2 py-1.5 border-[1px] rounded-md border-gray-500' type="text" placeholder="Detalle Asunto" />
        <select className='mt-3 bg-white w-full m-1 p-2 py-1.5 border-[1px] rounded-md border-gray-500'>
          <option value="" disabled selected hidden>Criterios</option>
          {/* Opciones para el select de criterios */}
        </select>
        <select className='mt-3 bg-white w-full m-1 p-2 py-1.5 border-[1px] rounded-md border-gray-500'>
          <option value="" disabled selected hidden>Clasificación</option>
          {/* Opciones para el select de clasificación */}
        </select>
        
        
      </div>
      <div className="flex flex-col">
        
      <select className='mt-0 bg-white w-full m-1 p-2 py-1.5 border-[1px] rounded-md border-gray-500'>
          <option value="" disabled selected hidden>Periodo</option>
          {/* Opciones para el select de periodo */}
        </select>
      <input className='mt-3 bg-white w-full m-1 p-2 py-1.5 border-[1px] rounded-md border-gray-500' type="text" placeholder="Estrategia a seguir" />
        <input className='mt-3 bg-white w-full m-1 p-2 py-1.5 border-[1px] rounded-md border-gray-500' type="text" placeholder="Compromiso del estudiante" />
        <input className='mt-3 bg-white w-full m-1 p-2 py-1.5 border-[1px] rounded-md border-gray-500' type="text" placeholder="Protocolo utilizado" />

        <div className="flex justify-end mt-28">
          <button className="bg-[#925FE2]  hover:bg-blue-700 text-white font-bold py-2 px-8 rounded">Guardar</button>
        </div>
      </div>
    </div>
    
  </div>
</div>


           

          </div>
        </div>
      </div>
      </div>
      </div>

    </>
  )
}

export default RegistroObservadorConvivencia; 
