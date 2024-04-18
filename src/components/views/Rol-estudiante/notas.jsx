import React from 'react';
import _aside from '../../_aside';
import Layout from '../../layaout';

import { HiArrowSmallLeft } from "react-icons/hi2";

const Notas = () => {
    return (
      <Layout>
       
        <div>
        {/* Contenedor principal */}
        <div className='bg-[#A0BFE0] flex overflow-y-scroll w-full h-screen'>
   
       
          <section className='w-[100%] p-2   m-auto h-full '>
          <div className="w-[90%] mt-10    ">
                <div className= " flex items-center gap-2  text-gray-900  uppercase font-bold   p-[0.9rem] font   rounded-xl mr-20 mt-8">
                  <HiArrowSmallLeft className="text-3xl "  />   
                  <h1 className="  ">   Notas  </h1> 
                </div>
              
          </div>
          
         
            <div>
              {/* Encabezado */}
              <div className='bg-[#7895CB] w-[90%] m-auto rounded-lg h-[4rem]' >
               <div className=''>
                
               <select className="p-2 rounded-md ml-2 mr-4 mt-4 placeholder-gray-800 font-semibold focus:outline-none pr-10  border-solid bg-[#C5DFF8] shadow-md shadow-[#4A55A2]        "> 
                  <option value="">Grado</option>
                                      <option value="">5A</option>
                                      <option value="">7A</option>
                                      <option value="">9B</option>
                                      <option value="">9B</option>
                                      <option value="">9B</option>
                  <option value="">9B</option>
              </select>
               
              <select className="p-2 rounded-md ml-2 mr-4 mt-4 placeholder-gray-800 font-semibold focus:outline-none pr-10  border-solid bg-[#C5DFF8] shadow-md shadow-[#4A55A2]        "> 
                  <option value="">Periodo</option>
                                      <option value="">5A</option>
                                      <option value="">7A</option>
                                      <option value="">9B</option>
                                      <option value="">9B</option>
                                      <option value="">9B</option>
                  <option value="">9B</option>
              </select>
               </div>
              </div>
              <div className='w-2/5 rounded-xl shadow-[8px_8px_3px_5px_rgba(0,0,0,0.08)] bg-[#C5DFF8] m-auto mt-4 h-[20vh]'>
                <h1 className='font-normal p-2 text-gray-800 text-center text-2xl'>Promedio Acumulado</h1>
                <p className='text-4xl text-center font-semibold text-gray-800 mt-8'>4.45</p>
              </div>

              <article className=' mt-4 overflow-y-scroll h-[57vh]'>
              <div className='w-[90%] bg-[#7895CB] rounded-xl mt-8 m-auto h-[46vh]'>
                <div className='m-4'>
                  <h1 className='font-semibold text-indigo-500 text-xl uppercase'>Educacion artistica y valores</h1>
                  <p className='font-semibold text-lg uppercase pt-2 text-indigo-500'>Docente: <span className='text-black font-normal'>Yepez camargo</span></p>
                  <div>
                    <div className='flex justify-end gap-12 mr-6'>
                      <h1 className='font-bold pt-4 pb-2 mr-auto pl-2 text-indigo-500 uppercase'>logro: <span className='text-black font-normal underline italic'>Cognitivo</span></h1> 
                      <p>porcentaje</p>
                      <p>notas</p>
                    </div>
                    <div className='w-full p-2 bg-[#C5DFF8] rounded-2xl'>
                      <div className='flex justify-between gap-20 mr-10 items-center'>
                        <p className="mr-auto">evidencias de desempeño</p>
                        <p>40%</p>
                        <p>4</p>
                      </div>
                    </div>
                    <div className='w-full mt-4 p-2 bg-[#C5DFF8] rounded-2xl'>
                      <div className='flex justify-between gap-20 mr-10 items-center'>
                        <p className="mr-auto">evidencias de desempeño</p>
                        <p>40%</p>
                        <p>4</p>
                      </div>
                    </div>
                    <div className='w-full mt-4 p-2 bg-[#C5DFF8] rounded-2xl'>
                      <div className='flex justify-between gap-20 mr-10 items-center'>
                        <p className="mr-auto">evidencias de desempeño</p>
                        <p>40%</p>
                        <p>4</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-[90%] bg-[#7895CB] rounded-xl mt-12 m-auto h-[46vh]'>
                <div className='m-4'>
                  <h1 className='font-semibold text-indigo-500 text-xl uppercase'>Educacion artistica y valores</h1>
                  <p className='font-semibold text-lg uppercase pt-2 text-indigo-500'>Docente: <span className='text-black font-normal'>Yepez camargo</span></p>
                  <div>
                    <div className='flex justify-end gap-12 mr-6'>
                      <h1 className='font-bold pt-4 pb-2 mr-auto pl-2 text-indigo-500 uppercase'>logro: <span className='text-black font-normal underline italic'>Cognitivo</span></h1> 
                      <p>porcentaje</p>
                      <p>notas</p>
                    </div>
                    <div className='w-full p-2 bg-[#C5DFF8] rounded-2xl'>
                      <div className='flex justify-between gap-20 mr-10 items-center'>
                        <p className="mr-auto">evidencias de desempeño</p>
                        <p>40%</p>
                        <p>4</p>
                      </div>
                    </div>
                    <div className='w-full mt-4 p-2 bg-[#C5DFF8] rounded-2xl'>
                      <div className='flex justify-between gap-20 mr-10 items-center'>
                        <p className="mr-auto">evidencias de desempeño</p>
                        <p>40%</p>
                        <p>4</p>
                      </div>
                    </div>
                    <div className='w-full mt-4 p-2 bg-[#C5DFF8] rounded-2xl'>
                      <div className='flex justify-between gap-20 mr-10 items-center'>
                        <p className="mr-auto">evidencias de desempeño</p>
                        <p>40%</p>
                        <p>4</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-[90%] bg-[#7895CB] rounded-xl mt-12 m-auto h-[46vh]'>
                <div className='m-4'>
                  <h1 className='font-semibold text-indigo-500 text-xl uppercase'>Educacion artistica y valores</h1>
                  <p className='font-semibold text-lg uppercase pt-2 text-indigo-500'>Docente: <span className='text-black font-normal'>Yepez camargo</span></p>
                  <div>
                    <div className='flex justify-end gap-12 mr-6'>
                      <h1 className='font-bold pt-4 pb-2 mr-auto pl-2 text-indigo-500 uppercase'>logro: <span className='text-black font-normal underline italic'>Cognitivo</span></h1> 
                      <p>porcentaje</p>
                      <p>notas</p>
                    </div>
                    <div className='w-full p-2 bg-[#C5DFF8] rounded-2xl'>
                      <div className='flex justify-between gap-20 mr-10 items-center'>
                        <p className="mr-auto">evidencias de desempeño</p>
                        <p>40%</p>
                        <p>4</p>
                      </div>
                    </div>
                    <div className='w-full mt-4 p-2 bg-[#C5DFF8] rounded-2xl'>
                      <div className='flex justify-between gap-20 mr-10 items-center'>
                        <p className="mr-auto">evidencias de desempeño</p>
                        <p>40%</p>
                        <p>4</p>
                      </div>
                    </div>
                    <div className='w-full mt-4 p-2 bg-[#C5DFF8] rounded-2xl'>
                      <div className='flex justify-between gap-20 mr-10 items-center'>
                        <p className="mr-auto">evidencias de desempeño</p>
                        <p>40%</p>
                        <p>4</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </article>
            </div>
          </section>
        </div>
      </div>
      </Layout>
    );
  }
export default Notas;