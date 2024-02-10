import React from 'react';
import Aside from './AsideCO';
import { Link } from 'react-router-dom';


const Coordinador = () => {
  return (
    <div className='bg-[#A6DCF1] h-screen flex'>
      <Aside />
      <div className='flex-grow overflow-y-auto'>

        <div className='w-[18%] max-w-[20%] lg:max-w-[10%]'></div>
        <div className='w-[90%] mx-auto mt-20 flex flex-col lg:flex-row justify-start items-start gap-8 rounded-2xl bg-gradient-to-t from-indigo-700 via-indigo-500 to-indigo-400 pl-8'> {/* Agregado pl-8 para mover los contenedores de asistencias a la izquierda */}
          <div className='flex flex-col gap-2 items-start ml-16 mt-8'>
            <p className='text-white font-light mb-2 lg:mb-10 text-lg lg:text-base'>Septiembre 3 de 2023</p>
            <h1 className='text-white font-bold text-[2.5rem]'>Bienvenido Coordinar (a)</h1>
            <p className='text-white font-normal text-lg lg:text-base'>Nos complace volverte a ver</p>
          </div>

          <div className='w-1/2 lg:w-auto'>
            <img src="Scholarcap scroll.png" alt="" draggable="false" className='h-72' />
          </div>
        </div>

        <div className='mt-16 mx-auto max-w-6xl'>
          <h1 className='font-semibold text-2xl'>¿Qué quieres consultar?</h1>
          <div className='flex flex-wrap gap-8 justify-start mt-8'>

            <button className='shadow-3xl flex justify-center flex-col items-center shadow-[0_8px_40px_20px_rgba(0,0,0,0.08)] rounded-3xl h-[14rem] w-[16rem] lg:w-1/5 mr-4'> {/* Ajuste en el margen derecho de mr-8 a mr-4 */}
              <h1 className='font-medium text-2xl'>Registrar huellas</h1>
            </button>
            <button className='shadow-3xl flex justify-center flex-col items-center shadow-[0_8px_40px_20px_rgba(0,0,0,0.08)] rounded-3xl h-[14rem] w-[16rem] lg:w-1/5 mr-4'> {/* Ajuste en el margen derecho de mr-8 a mr-4 */}
              <h1 className='font-medium text-2xl'>Asistencias</h1>
            </button>
            <button className='shadow-3xl flex justify-center flex-col items-center shadow-[0_8px_40px_20px_rgba(0,0,0,0.08)] rounded-3xl h-[14rem] w-[16rem] lg:w-1/5 mr-4'> {/* Ajuste en el margen derecho de mr-8 a mr-4 */}
              <h1 className='font-medium text-2xl'>Asistencias</h1>
            </button>
            <button className='shadow-3xl flex justify-center flex-col items-center shadow-[0_8px_40px_20px_rgba(0,0,0,0.08)] rounded-3xl h-[14rem] w-[16rem] lg:w-1/5 mr-4'> {/* Ajuste en el margen derecho de mr-8 a mr-4 */}
              <h1 className='font-medium text-2xl'>Asistencias</h1>
            </button>
            <div className="max-w-[754px]">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex grow gap-5 justify-between items-start self-stretch px-8 py-6 w-full text-lg font-semibold rounded-3xl shadow-2xl border-4 border-indigo-700 border-solid bg-violet-500 bg-opacity-30 max-md:px-5 max-md:mt-6">
                    <div className="flex flex-col flex-1 mt-1">
                      <div className="ml-2.5 w-60 leading-6 text-indigo-700">
                        Registro de horas laboradas
                      </div>

                      <button className="justify-center px-7 py-1.5 mt-8 text-sky-200 bg-indigo-700 rounded-xl max-md:px-5">
                        Ver Mas

                      </button>

                    </div>

                  </div>
                </div>
                <div className="flex flex-col ml-20 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex grow gap-5 justify-between items-start self-stretch px-8 py-6 w-full text-lg font-semibold rounded-3xl border-4 border-indigo-700 border-solid shadow-2xl bg-violet-500 bg-opacity-30 max-md:px-5 max-md:mt-6">
                    <div className="flex flex-col mt-1">
                      <div className="leading-6 text-indigo-700">
                        Registro de Asistencias
                      </div>
                      <Link to="/Registroasistencias">
                        <button className="justify-center px-7 py-1.5 mt-8 text-sky-200 whitespace-nowrap bg-indigo-700 rounded-xl max-md:px-5">
                          Ver Más
                        </button>
                      </Link>

                    </div>
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6dfecb29216232462caf2acccebc4fc65e5eb978ff9e000af410f4fa20e511ab?apiKey=e6a49df5c7c7454db0095562764e4f8c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6dfecb29216232462caf2acccebc4fc65e5eb978ff9e000af410f4fa20e511ab?apiKey=e6a49df5c7c7454db0095562764e4f8c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6dfecb29216232462caf2acccebc4fc65e5eb978ff9e000af410f4fa20e511ab?apiKey=e6a49df5c7c7454db0095562764e4f8c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6dfecb29216232462caf2acccebc4fc65e5eb978ff9e000af410f4fa20e511ab?apiKey=e6a49df5c7c7454db0095562764e4f8c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6dfecb29216232462caf2acccebc4fc65e5eb978ff9e000af410f4fa20e511ab?apiKey=e6a49df5c7c7454db0095562764e4f8c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6dfecb29216232462caf2acccebc4fc65e5eb978ff9e000af410f4fa20e511ab?apiKey=e6a49df5c7c7454db0095562764e4f8c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6dfecb29216232462caf2acccebc4fc65e5eb978ff9e000af410f4fa20e511ab?apiKey=e6a49df5c7c7454db0095562764e4f8c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6dfecb29216232462caf2acccebc4fc65e5eb978ff9e000af410f4fa20e511ab?apiKey=e6a49df5c7c7454db0095562764e4f8c&"
                      className="aspect-[1.03] w-[97px]"
                      draggable="false" 
                      
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coordinador;
