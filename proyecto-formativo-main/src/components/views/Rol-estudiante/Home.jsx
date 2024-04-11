import { useState } from 'react'
import Aside from '../../_aside';
import _navbar from '../../_navbar';





const  Home = () => {


  return (
<>
  <div className='h-screen  flex  bg-[#A6DCF1] '>
    <div className=' w-[18%] l max-[1990px]:w-[20%]  max-[1375px]:w-[10%] '>
      <Aside/>
    </div>
    <div className='w-[80%]   h-[20rem] min-[2000px]:mt-[2rem]   '>
      <_navbar/>
   
      <div className='w-[90%] min-[1990px]:justify-around ]   mt-20   flex items-center gap-2 min-[1990px]:h-[26rem]  justify-around  rounded-2xl bg-gradient-to-t from-indigo-700 via-indigo-500 to-indigo-400 '>
        <div className='flex flex-col o gap-2  flex-wrap'>
          <p className='text-white font-light mb-10 text-[1rem] ' > Septiembre 3 de 2023</p>
          <h1 className='text-white font-bold text-[2.5rem]'>Bienvenido Estudiante</h1>
          <p className='text-white font-normal text-[1rem]' > Nos complace volverte a ver</p>
        </div>
        <div className='w-1/2' >
          <img src="Scholarcap scroll.png" alt="" draggable="false"   className='  h-72 ' />
        </div>
       </div>

       <div className='mt-16    '>
       <h1 className=' font-semibold h-full text-2xl  ' >¿Que quieres consultar?</h1>
          <div className='flex  gap-20'>
              

              <button className='shadow-3xl flex justify-center flex-col items-center shadow-[0_8px_40px_20px_rgba(0,0,0,0.08)] rounded-3xl h-[14rem] w-1/5'>
                <h1 className='font-medium text-2xl'>Asistencias</h1>
              </button>
              <button className='shadow-3xl flex justify-center flex-col items-center  shadow-[0_8px_40px_20px_rgba(0,0,0,0.08)] h-[14rem]  rounded-3xl  w-1/5'>
                <h1 className='font-medium text-2xl'>Asistencias</h1>
              </button>
              <button className='shadow-3xl flex justify-center flex-col items-center  shadow-[0_8px_40px_20px_rgba(0,0,0,0.08)] h-[14rem] rounded-3xl  w-1/5'>
                <h1 className='font-medium text-2xl'>Asistencias</h1>
              </button>
              <button className='shadow-3xl flex justify-center flex-col items-center  shadow-[0_8px_40px_20px_rgba(0,0,0,0.08)] h-[14rem]  rounded-3xl  w-1/5'>
                <h1 className='font-medium text-2xl'>Asistencias</h1>
              </button>
              
              
          </div>
          
       </div>
       

    </div>
    

   
  </div>
</>
)
}

export default Home
