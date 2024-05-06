import React from 'react';

const Obser_estudiante = () => {
  return (
    <div className='relative'>
      <div className='bg-[#A6DCF1] min-h-screen flex justify-start'>
    
        <div className='bg-violet-500 bg-opacity-40 px-5 py-3 rounded-xl absolute top-5 left-80 right-1 max-w-6xl flex justify-between' style={{ marginLeft: '90px' }}>
          <div className="text-black text-xl font-semibold max-w-max mx-auto">Observador del estudiante</div>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex bg-[#AEE4F5] rounded-3xl shadow-3xl shadow-[0_8px_48px_8px_rgba(0,0,0,0.08)] w-[1032px] p-[32px] h-[700px] justify-center items-center">
          <div className="flex flex-col text-xl font-semibold text-center text-black max-w-[741px]">
            <div className="text-3xl mb-14 ">Menú Observador</div>
            <button className="mt-2 px-16 py-8 rounded-3xl border-4 border-indigo-700 border-solid shadow-2xl bg-violet-500 bg-opacity-30 max-md:px-5 max-md:max-w-full">
              Observador de Convivencia
            </button>
            <button className="mt-8 px-16 py-8 rounded-3xl border-4 border-indigo-700 border-solid shadow-2xl bg-violet-500 bg-opacity-30 max-md:px-5 max-md:max-w-full">
              Observador Académico
            </button>
            <button className="mt-8 px-16 py-7 rounded-3xl border-4 border-indigo-700 border-solid shadow-2xl bg-violet-500 bg-opacity-30 max-md:px-5 max-md:max-w-full">
              Registro de Criterios
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Obser_estudiante;
