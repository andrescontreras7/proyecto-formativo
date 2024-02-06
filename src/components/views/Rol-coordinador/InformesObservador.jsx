

import React from 'react'
import { Link } from 'react-router-dom';

const InformeObservador = () => {
  return (
    <>
        <div className=" flex flex-col justify-center items-stretch ">
      <div className="shadow-inner bg-[#A6DCF1] flex w-full flex-col justify-center items-center px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="flex w-full max-w-[1113px] flex-col mb-11 max-md:max-w-full max-md:mb-10">
          <div className="items-stretch shadow-2xl bg-[#925FE2] bg-opacity-50 self-stretch flex justify-between gap-5 pl-6 pr-20 py-4 rounded-3xl max-md:max-w-full max-md:flex-wrap max-md:px-5">
          <Link to="/Panel">
            <button>
                <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c30b563c1b498bb6ee6166c046b0c99187a1cfb9c2ddcb702766aa4a24c16412?apiKey=83a41f7c3fac45f48041df59c87c3d79&"
                className="aspect-[1.22] object-contain object-center w-7 stroke-[3px] stroke-black overflow-hidden shrink-0 max-w-full"
                />
            </button>
            </Link>
            <div className="text-black text-center text-xl font-semibold self-center grow whitespace-nowrap my-auto">
              Observadores-Informes
            </div>
          </div>
          <div className="self-center w-[100vh] flex gap-1.5 mt-10 px-px items-start max-md:max-w-full max-md:flex-wrap">
          <select name="" className= ' w-[100%] mr-5 ml-4 p-2 rounded-xl' id="">
                    <option value="">Grado</option>
                    <option value="">Grado 1° A</option>
                    <option value="">Grado 1° B</option>
                    <option value="">Grado 2° A</option>
                    <option value="">Grado 2° B</option>
                    <option value="">Grado 3° A</option>
                    <option value="">Grado 3° B</option>
                </select> 
            <div className="items-center w-[110%] bg-white flex gap-4 px-5 py-2.5 rounded-xl">
              <div className="text-neutral-400 text-base grow shrink basis-auto my-auto">
                Buscar por nombre de estudiante
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f47560ca428a0f6adc0e248ede7c6f32c17a566dc25459f7cfab649ef269e0e?apiKey=83a41f7c3fac45f48041df59c87c3d79&"
                className="aspect-square object-contain object-center w-6 fill-neutral-400 overflow-hidden self-stretch shrink-0 max-w-full"
              />
            </div>
          </div>
          <div className="flex-col overflow-hidden self-stretch relative flex min-h-[677px] w-full items-stretch mt-10  pb-3 px-11 max-md:max-w-full max-md:px-5">
            <div className='bg-[#AEE4F5] shadow-2xl rounded-2xl p-6 '>

            <div className="relative flex items-stretch justify-between gap-0 px-px max-md:max-w-full max-md:flex-wrap max-md:justify-center">
              <div className="text-white text-center text-base font-bold leading-5 items-stretch shadow-sm bg-fuchsia-800 bg-opacity-40 pt-2 pb-4 px-4">
                N°
              </div>
              <div className="text-white text-center text-base font-bold leading-5 items-stretch shadow-sm bg-fuchsia-800 bg-opacity-40 grow pt-2 pb-4 px-4">
                Nombre del estudiante
              </div>
              <div className="text-white text-center text-base font-bold leading-5 items-stretch shadow-sm bg-fuchsia-800 bg-opacity-40 pt-2 pb-4 px-4">
                Grado
              </div>
              <div className="text-white text-center text-base font-bold leading-5 items-stretch shadow-sm bg-fuchsia-800 bg-opacity-40 grow pt-2 pb-4 px-4">
                Observador de Convivencia
              </div>
              <div className="text-white text-center text-base font-bold leading-5 items-stretch shadow-sm bg-fuchsia-800 bg-opacity-40 grow pt-2 pb-4 px-4">
                Observador Académico
              </div>
            </div>
            <div className="relative flex items-stretch justify-between gap-0 px-px max-md:max-w-full max-md:flex-wrap max-md:justify-center">
              <div className="text-black text-center text-base leading-5 items-stretch shadow-sm bg-white pt-2 pb-4 px-4">
                1
              </div>
              <div className="text-black text-center text-base leading-5 items-stretch shadow-sm bg-white grow pt-2 pb-4 px-4">
                ALONSO YAMITH
              </div>
              <div className="text-black text-center text-base leading-5 items-stretch shadow-sm bg-white pt-2 pb-4 px-4">
                3°
              </div>
              <div className="items-center shadow-sm bg-white flex grow basis-[0%] flex-col justify-center px-14 py-2 max-md:px-5">
                
                <div className='bg-[#925FE2] opacity-70 py-0.1 rounded-xl'>
                <button className=' flex-col justify-center text-white text-center text-base relative fill-violet-500 fill-opacity-70 overflow-hidden aspect-[5.645161290322581] w-[175px] items-stretch px-3 py-2'>
                 Generar
                </button>
                </div>
                
              </div>
              <div className="items-center shadow-sm bg-white flex grow basis-[0%] flex-col justify-center pl-16 pr-11 py-2 max-md:px-5">
              <div className='bg-[#925FE2] opacity-70 py-0.1 rounded-xl'>
                <button className=' flex-col justify-center text-white text-center text-base relative fill-violet-500 fill-opacity-70 overflow-hidden aspect-[5.645161290322581] w-[175px] items-stretch px-3 py-2'>
                 Generar
                </button>
                </div>
              </div>
            </div>
            <div className="relative flex items-stretch justify-between gap-0 px-px max-md:max-w-full max-md:flex-wrap max-md:justify-center">
              <div className="text-black text-center text-base leading-5 items-stretch shadow-sm bg-white aspect-[1.608695652173913] pt-2 pb-5 px-4">
                2
              </div>
              <div className="text-black text-center text-base leading-5 items-stretch shadow-sm bg-white grow pt-2 pb-5 px-4">
                CAMARGO KEVELYN
              </div>
              <div className="text-black text-center text-base leading-5 items-stretch shadow-sm bg-white pt-2 pb-5 px-4">
                3°
              </div>
              <div className="items-center shadow-sm bg-white flex grow basis-[0%] flex-col justify-center px-14 py-2 max-md:px-5">
              <div className='bg-[#925FE2] opacity-70 py-0.1 rounded-xl'>
                <button className=' flex-col justify-center text-white text-center text-base relative fill-violet-500 fill-opacity-70 overflow-hidden aspect-[5.645161290322581] w-[175px] items-stretch px-3 py-2'>
                 Generar
                </button>
                </div>
              </div>
              <div className="items-center shadow-sm bg-white flex grow basis-[0%] flex-col justify-center pl-16 pr-11 py-2 max-md:px-5">
              <div className='bg-[#925FE2] opacity-70 py-0.1 rounded-xl'>
                <button className=' flex-col justify-center text-white text-center text-base relative fill-violet-500 fill-opacity-70 overflow-hidden aspect-[5.645161290322581] w-[175px] items-stretch px-3 py-2'>
                 Generar
                </button>
                </div>
              </div>
            </div>
            <div className="relative flex items-stretch justify-between gap-0 px-px max-md:max-w-full max-md:flex-wrap max-md:justify-center">
              <div className="text-black text-center text-base leading-5 items-stretch shadow-sm bg-white aspect-[1.6444444444444444] pt-2 pb-4 px-4">
                3
              </div>
              <div className="text-black text-center text-base leading-5 items-stretch shadow-sm bg-white grow pt-2 pb-4 px-4">
                CONDE LOPEZ ESTEBAN
              </div>
              <div className="text-black text-center text-base leading-5 items-stretch shadow-sm bg-white pt-2 pb-4 px-4">
                3°
              </div>
              <div className="items-center shadow-sm bg-white flex grow basis-[0%] flex-col justify-center px-14 py-2 max-md:px-5">
              <div className='bg-[#925FE2] opacity-70 py-0.1 rounded-xl'>
                <button className=' flex-col justify-center text-white text-center text-base relative fill-violet-500 fill-opacity-70 overflow-hidden aspect-[5.645161290322581] w-[175px] items-stretch px-3 py-2'>
                 Generar
                </button>
                </div>
              </div>
              <div className="items-center shadow-sm bg-white flex grow basis-[0%] flex-col justify-center pl-16 pr-11 py-2 max-md:px-5">
              <div className='bg-[#925FE2] opacity-70 py-0.1 rounded-xl'>
                <button className=' flex-col justify-center text-white text-center text-base relative fill-violet-500 fill-opacity-70 overflow-hidden aspect-[5.645161290322581] w-[175px] items-stretch px-3 py-2'>
                 Generar
                </button>
                </div>
              </div>
            </div>
            <div className="relative flex items-stretch justify-between gap-0 px-px max-md:max-w-full max-md:flex-wrap max-md:justify-center">
              <div className="text-black text-center text-base leading-5 items-stretch shadow-sm bg-white pt-2 pb-4 px-4">
                4
              </div>
              <div className="text-black text-center text-base leading-5 items-stretch shadow-sm bg-white grow pt-2 pb-4 px-4">
                ALONSO YAMITH
              </div>
              <div className="text-black text-center text-base leading-5 items-stretch shadow-sm bg-white pt-2 pb-4 px-4">
                3°
              </div>
              <div className="items-center shadow-sm bg-white flex grow basis-[0%] flex-col justify-center px-14 py-2 max-md:px-5">
              <div className='bg-[#925FE2] opacity-70 py-0.1 rounded-xl'>
                <button className=' flex-col justify-center text-white text-center text-base relative fill-violet-500 fill-opacity-70 overflow-hidden aspect-[5.645161290322581] w-[175px] items-stretch px-3 py-2'>
                 Generar
                </button>
                </div>
              </div>
              <div className="items-center shadow-sm bg-white flex grow basis-[0%] flex-col justify-center pl-16 pr-11 py-2 max-md:px-5">
              <div className='bg-[#925FE2] opacity-70 py-0.1 rounded-xl'>
                <button className=' flex-col justify-center text-white text-center text-base relative fill-violet-500 fill-opacity-70 overflow-hidden aspect-[5.645161290322581] w-[175px] items-stretch px-3 py-2'>
                 Generar
                </button>
                </div>
              </div>
            </div>
            <div className="relative flex items-stretch justify-between gap-0 px-px max-md:max-w-full max-md:flex-wrap max-md:justify-center">
              <div className="text-black text-center text-base leading-5 items-stretch shadow-sm bg-white aspect-[1.608695652173913] pt-2 pb-5 px-4">
                5
              </div>
              <div className="text-black text-center text-base leading-5 items-stretch shadow-sm bg-white grow pt-2 pb-5 px-4">
                CAMARGO KEVELYN
              </div>
              <div className="text-black text-center text-base leading-5 items-stretch shadow-sm bg-white pt-2 pb-5 px-4">
                3°
              </div>
              <div className="items-center shadow-sm bg-white flex grow basis-[0%] flex-col justify-center px-14 py-2 max-md:px-5">
              <div className='bg-[#925FE2] opacity-70 py-0.1 rounded-xl'>
                <button className=' flex-col justify-center text-white text-center text-base relative fill-violet-500 fill-opacity-70 overflow-hidden aspect-[5.645161290322581] w-[175px] items-stretch px-3 py-2'>
                 Generar
                </button>
                </div>
              </div>
              <div className="items-center shadow-sm bg-white flex grow basis-[0%] flex-col justify-center pl-16 pr-11 py-2 max-md:px-5">
              <div className='bg-[#925FE2] opacity-70 py-0.1 rounded-xl'>
                <button className=' flex-col justify-center text-white text-center text-base relative fill-violet-500 fill-opacity-70 overflow-hidden aspect-[5.645161290322581] w-[175px] items-stretch px-3 py-2'>
                 Generar
                </button>
                </div>
              </div>
            </div>
            <div className="relative flex items-stretch justify-between gap-0 px-px max-md:max-w-full max-md:flex-wrap max-md:justify-center">
              <div className="text-black text-center text-base leading-5 items-stretch shadow-sm bg-white pt-2 pb-4 px-4">
                6
              </div>
              <div className="text-black text-center text-base leading-5 items-stretch shadow-sm bg-white grow pt-2 pb-4 px-4">
                CONDE LOPEZ ESTEBAN
              </div>
              <div className="text-black text-center text-base leading-5 items-stretch shadow-sm bg-white pt-2 pb-4 px-4">
                3°
              </div>
              <div className="items-center shadow-sm bg-white flex grow basis-[0%] flex-col justify-center px-14 py-2 max-md:px-5">
              <div className='bg-[#925FE2] opacity-70 py-0.1 rounded-xl'>
                <button className=' flex-col justify-center text-white text-center text-base relative fill-violet-500 fill-opacity-70 overflow-hidden aspect-[5.645161290322581] w-[175px] items-stretch px-3 py-2'>
                 Generar
                </button>
                </div>
              </div>
              <div className="items-center shadow-sm bg-white flex grow basis-[0%] flex-col justify-center pl-16 pr-11 py-2 max-md:px-5">
              <div className='bg-[#925FE2] opacity-70 py-0.1 rounded-xl'>
                <button className=' flex-col justify-center text-white text-center text-base relative fill-violet-500 fill-opacity-70 overflow-hidden aspect-[5.645161290322581] w-[175px] items-stretch px-3 py-2'>
                 Generar
                </button>
                </div>
              </div>
            </div>
            
            
            
            <div className="relative flex items-stretch justify-between gap-0 px-px max-md:max-w-full max-md:flex-wrap max-md:justify-center">
              
              
             
    
              <div className="flex grow basis-[0%] flex-col items-stretch max-md:max-w-full">
                <div className="z-[1] flex items-stretch justify-between gap-0 px-px max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                  
                  
            
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



  export default InformeObservador;