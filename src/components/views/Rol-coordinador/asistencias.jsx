
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layaout from "../../layaout";
import { HiArrowSmallLeft } from "react-icons/hi2";
import Input from '../../input';
import Select from '../../../components/seletct';
const AsistenciasD = () => {

  return (
    <Layaout titulo={"Asistencias estudiantes  "} icono={<HiArrowSmallLeft className='text-2xl font-bold' />}>
    <div className="  overflow-y-scroll  shadow-xl     w-full h-[87vh] max-2xl:h-[85vh]   rounded-md">
    

    

  <div  className='   p-2 '>
  <h1 className='font-semibold text-xl  text-gray-700 p-2'>Filtros</h1>
  <hr />
  <div className='flex gap-6  mt-2 bg-[#6f99e1] bg-opacity-25  rounded-md p-4 w-auto m-10'>
      <Select/>
      <Input/>
      <Input/>
      <Input/>


    </div>
        
    <div className='flex flex-wrap max-2xl:gap-2     justify-center m-auto p-2 gap-4'>

  
  
         <Link to="/AsistenciasEstudiantes"  className='  '  >
          <button className=' col-span-full   p-4 duration-300 border hover:border-[#4A55A2] bg-[#6f99e1] bg-opacity-25   shadow-md hover:shadow-2xl   flex-col items-center   rounded-md h-[18rem] w-[19rem]  '> 
                <div className=''>
                <h1 className='font-medium text-xl text-left  '>Matematicas </h1>
                  <p className='font-normal text-gray-700 text-left'>Lo culpa asperiores accusantium quae excepturi.</p>
                  
                </div>
              </button>
         </Link>
         <Link to="/AsistenciasEstudiantes" className='  '  >
          <button className=' flex  p-4 duration-300 border hover:border-[#4A55A2] bg-[#6f99e1] bg-opacity-25  shadow-md hover:shadow-2xl    rounded-md h-[18rem] w-[19rem]'> 
                <div className='overflow-hidden'>
                  <img src="../../../../public/s.jpg" className=' size-1 w-[100%] rounded-md h-[6rem] ' alt=" " />
                <h1 className='font-medium text-xl text-left  '>Sociales </h1>
                
                  <p className='font-normal text-gray-700 text-left'>Lo culpa asperiores accusantium quae excepturi.</p>
                  
                </div>
          </button>
         </Link>
         <Link to="/AsistenciasEstudiantes" className=' col-span-2 '  >
          <button className=' col-span-full   p-4 duration-300  border hover:border-[#4A55A2] bg-[#6f99e1] bg-opacity-25  shadow-md hover:shadow-2xl   flex-col items-center   rounded-md h-[18rem] w-[19rem] '> 
                <div className=''>
                <h1 className='font-medium text-xl text-left  '>Matematicas </h1>
                  <p className='font-normal text-gray-700 text-left'>Lo culpa asperiores accusantium quae excepturi.</p>
                  
                </div>
              </button>
         </Link>
         <Link to="/AsistenciasEstudiantes" className=' col-span-2 '  >
          <button className='    p-4 duration-300 border hover:border-[#4A55A2] bg-[#6f99e1] bg-opacity-25  shadow-md hover:shadow-2xl   flex-col items-center   rounded-md h-[18rem] w-[19rem] '> 
                <div className=''>
                <h1 className='font-medium text-xl text-left  '>Matematicas </h1>
                  <p className='font-normal text-gray-700 text-left'>Lo culpa asperiores accusantium quae excepturi.</p>
                  
                </div>
              </button>
         </Link>
         <Link to="/AsistenciasEstudiantes" className=' col-span-2 '  >
          <button className=' col-span-full   p-4 duration-300 border hover:border-[#4A55A2] bg-[#6f99e1] bg-opacity-25  shadow-md hover:shadow-2xl   flex-col items-center   rounded-md h-[18rem] w-[19rem] '> 
                <div className=''>
                <h1 className='font-medium text-xl text-left  '>Matematicas </h1>
                  <p className='font-normal text-gray-700 text-left'>Lo culpa asperiores accusantium quae excepturi.</p>
                  
                </div>
              </button>
         </Link>
         
         <Link to="/AsistenciasEstudiantes" >
          <button className='flex p-4 duration-300 border hover:border-[#4A55A2] bg-[#6f99e1] bg-opacity-25  shadow-md hover:shadow-2xl   flex-col items-center   rounded-md h-[18rem] w-[19rem] '> 
                <div>
                <h1 className='font-medium text-xl text-left  '>Matematicas </h1>
                  <p className='font-normal text-gray-700 text-left'>Lo culpa asperiores accusantium quae excepturi.</p>
                  
                </div>
              </button>
         </Link> <Link to="/AsistenciasEstudiantes" >
          <button className='flex p-4 duration-300 border hover:border-[#4A55A2] bg-[#6f99e1] bg-opacity-25  shadow-md hover:shadow-2xl   flex-col items-center   rounded-md h-[18rem] w-[19rem] '> 
                <div>
                <h1 className='font-medium text-xl text-left  '>Matematicas </h1>
                  <p className='font-normal text-gray-700 text-left'>Lo culpa asperiores accusantium quae excepturi.</p>
                  
                </div>
              </button>
         </Link> <Link to="/AsistenciasEstudiantes" >
          <button className='flex p-4 duration-300 border hover:border-[#4A55A2] bg-[#6f99e1] bg-opacity-25  shadow-md hover:shadow-2xl   flex-col items-center   rounded-md h-[18rem] w-[19rem] '> 
                <div>
                <h1 className='font-medium text-xl text-left  '>Matematicas </h1>
                  <p className='font-normal text-gray-700 text-left'>Lo culpa asperiores accusantium quae excepturi.</p>
                  
                </div>
              </button>
         </Link>
         <Link to="/AsistenciasEstudiantes" >
          <button className='flex p-4 duration-300 border hover:border-[#4A55A2] bg-[#6f99e1] bg-opacity-25  shadow-md hover:shadow-2xl   flex-col items-center   rounded-md h-[18rem] w-[19rem] '> 
                <div>
                <h1 className='font-medium text-xl text-left  '>Matematicas </h1>
                  <p className='font-normal text-gray-700 text-left'>Lo culpa asperiores accusantium quae excepturi.</p>
                  
                </div>
              </button>
         </Link>
         <Link to="/AsistenciasEstudiantes" className=' col-span-2 '  >
          <button className=' col-span-full   p-4 duration-300 border hover:border-[#4A55A2] bg-[#6f99e1] bg-opacity-25  shadow-md hover:shadow-2xl   flex-col items-center   rounded-md h-[18rem] w-[19rem] '> 
                <div className=''>
                <h1 className='font-medium text-xl text-left  '>Matematicas </h1>
                  <p className='font-normal text-gray-700 text-left'>Lo culpa asperiores accusantium quae excepturi.</p>
                  
                </div>
              </button>
         </Link>
         <Link to="/AsistenciasEstudiantes" className=' col-span-2 '  >
          <button className=' col-span-full   p-4 duration-300 border hover:border-[#4A55A2] bg-[#6f99e1] bg-opacity-25  shadow-md hover:shadow-2xl   flex-col items-center   rounded-md h-[18rem] w-[19rem] '> 
                <div className=''>
                <h1 className='font-medium text-xl text-left  '>Matematicas </h1>
                  <p className='font-normal text-gray-700 text-left'>Lo culpa asperiores accusantium quae excepturi.</p>
                  
                </div>
              </button>
         </Link>
         <Link to="/AsistenciasEstudiantes" className=' col-span-2 '  >
          <button className=' col-span-full   p-4 duration-300 border hover:border-[#4A55A2] bg-[#6f99e1] bg-opacity-25  shadow-md hover:shadow-2xl   flex-col items-center   rounded-md h-[18rem] w-[19rem] '> 
                <div className=''>
                <h1 className='font-medium text-xl text-left  '>Matematicas </h1>
                  <p className='font-normal text-gray-700 text-left'>Lo culpa asperiores accusantium quae excepturi.</p>
                  
                </div>
              </button>
         </Link>
</div>

        
         </div>
      </div>
  

    </Layaout>
   
  );
};

export default AsistenciasD;