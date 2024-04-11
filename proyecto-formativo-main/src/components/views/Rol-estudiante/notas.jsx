import React from 'react';
import _aside from '../../_aside';

const Notas = () => {
    return (
      <div>
        {/* Contenedor principal */}
        <div className='bg-[#A6DCF1] flex w-screen h-screen'>
          {/* Aside */}
          <aside className='w-[15%]'>
            <_aside />
          </aside>
          {/* Section */}
          <section className='w-[80%]  m-auto h-full '>
            <div>
              {/* Encabezado */}
              <div className='bg-[#86A7E7] mt-4 w-[90%] m-auto rounded-xl h-[5rem]' >
               <div className=''>
                
                <select name="" className= 'mt-4 w-[30%] mr-10 ml-4 p-2 rounded-xl' id="">
                    <option value="">Asignatura</option>
                    <option value="">sads</option>
                    <option value="">sads</option>
                    <option value="">sads</option>
                </select> 
               
                <select name="" className='w-[30%] p-2 rounded-xl' id="">
                    <option value="">Periodo</option>
                    <option value="">sads</option>
                    <option value="">sads</option>
                    <option value="">sads</option>
                </select>
               </div>
              </div>
              <div className='w-2/5 rounded-xl shadow-[8px_8px_3px_5px_rgba(0,0,0,0.08)] bg-[#AEECFF] m-auto mt-4 h-[20vh]'>
                <h1 className='font-normal p-2 text-gray-800 text-center text-2xl'>Promedio Acumulado</h1>
                <p className='text-4xl text-center font-semibold text-gray-800 mt-8'>4.45</p>
              </div>

              <article className=' mt-4 overflow-y-scroll h-[60vh]'>
              <div className='w-[90%] bg-[#86A7E7] rounded-xl mt-12 m-auto h-[50vh]'>
                <div className='m-4'>
                  <h1 className='font-semibold text-indigo-500 text-xl uppercase'>Educacion artistica y valores</h1>
                  <p className='font-semibold text-lg uppercase pt-2 text-indigo-500'>Docente: <span className='text-black font-normal'>Yepez camargo</span></p>
                  <div>
                    <div className='flex justify-end gap-12 mr-6'>
                      <h1 className='font-bold pt-4 pb-2 mr-auto pl-2 text-indigo-500 uppercase'>logro: <span className='text-black font-normal underline italic'>Cognitivo</span></h1> 
                      <p>porcentaje</p>
                      <p>notas</p>
                    </div>
                    <div className='w-full p-2 bg-[#DDF9FF] rounded-2xl'>
                      <div className='flex justify-between gap-20 mr-10 items-center'>
                        <p className="mr-auto">evidencias de desempeño</p>
                        <p>40%</p>
                        <p>4</p>
                      </div>
                    </div>
                    <div className='w-full mt-4 p-2 bg-[#DDF9FF] rounded-2xl'>
                      <div className='flex justify-between gap-20 mr-10 items-center'>
                        <p className="mr-auto">evidencias de desempeño</p>
                        <p>40%</p>
                        <p>4</p>
                      </div>
                    </div>
                    <div className='w-full mt-4 p-2 bg-[#DDF9FF] rounded-2xl'>
                      <div className='flex justify-between gap-20 mr-10 items-center'>
                        <p className="mr-auto">evidencias de desempeño</p>
                        <p>40%</p>
                        <p>4</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-[90%] bg-[#86A7E7] rounded-xl mt-12 m-auto h-[50vh]'>
                <div className='m-4'>
                  <h1 className='font-semibold text-indigo-500 text-xl uppercase'>Educacion artistica y valores</h1>
                  <p className='font-semibold text-lg uppercase pt-2 text-indigo-500'>Docente: <span className='text-black font-normal'>Yepez camargo</span></p>
                  <div>
                    <div className='flex justify-end gap-12 mr-6'>
                      <h1 className='font-bold pt-4 pb-2 mr-auto pl-2 text-indigo-500 uppercase'>logro: <span className='text-black font-normal underline italic'>Cognitivo</span></h1> 
                      <p>porcentaje</p>
                      <p>notas</p>
                    </div>
                    <div className='w-full p-2 bg-[#DDF9FF] rounded-2xl'>
                      <div className='flex justify-between gap-20 mr-10 items-center'>
                        <p className="mr-auto">evidencias de desempeño</p>
                        <p>40%</p>
                        <p>4</p>
                      </div>
                    </div>
                    <div className='w-full mt-4 p-2 bg-[#DDF9FF] rounded-2xl'>
                      <div className='flex justify-between gap-20 mr-10 items-center'>
                        <p className="mr-auto">evidencias de desempeño</p>
                        <p>40%</p>
                        <p>4</p>
                      </div>
                    </div>
                    <div className='w-full mt-4 p-2 bg-[#DDF9FF] rounded-2xl'>
                      <div className='flex justify-between gap-20 mr-10 items-center'>
                        <p className="mr-auto">evidencias de desempeño</p>
                        <p>40%</p>
                        <p>4</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-[90%] bg-[#86A7E7] rounded-xl mt-12 m-auto h-[50vh]'>
                <div className='m-4'>
                  <h1 className='font-semibold text-indigo-500 text-xl uppercase'>Educacion artistica y valores</h1>
                  <p className='font-semibold text-lg uppercase pt-2 text-indigo-500'>Docente: <span className='text-black font-normal'>Yepez camargo</span></p>
                  <div>
                    <div className='flex justify-end gap-12 mr-6'>
                      <h1 className='font-bold pt-4 pb-2 mr-auto pl-2 text-indigo-500 uppercase'>logro: <span className='text-black font-normal underline italic'>Cognitivo</span></h1> 
                      <p>porcentaje</p>
                      <p>notas</p>
                    </div>
                    <div className='w-full p-2 bg-[#DDF9FF] rounded-2xl'>
                      <div className='flex justify-between gap-20 mr-10 items-center'>
                        <p className="mr-auto">evidencias de desempeño</p>
                        <p>40%</p>
                        <p>4</p>
                      </div>
                    </div>
                    <div className='w-full mt-4 p-2 bg-[#DDF9FF] rounded-2xl'>
                      <div className='flex justify-between gap-20 mr-10 items-center'>
                        <p className="mr-auto">evidencias de desempeño</p>
                        <p>40%</p>
                        <p>4</p>
                      </div>
                    </div>
                    <div className='w-full mt-4 p-2 bg-[#DDF9FF] rounded-2xl'>
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
    );
  }
export default Notas;