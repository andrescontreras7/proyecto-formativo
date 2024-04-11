import React from 'react';
import { BsEmojiSmile } from "react-icons/bs";
import AnimatedPage from '../../animatedPage';



const Calificaciones = () => {
    return (
      <div className='h-auto'>
        <AnimatedPage>
          <h1 className='font-black text-3xl'>
            Matematicas
          </h1>
          <div className='w-full h-[500px] shadow-[0_8px_20px_20px_rgba(0,0,0,0.08)] rounded-2xl'>
            <h2 className='text-2xl flex items-center gap-2 font-semibold pl-10 pb-4 pt-4 text-indigo-500'><BsEmojiSmile className='text-black text-3xl' />  Andres cavadia</h2>
            <div className='  bg-indigo-300 rounded-xl w-[90%] m-auto h-[85%] p-4 overflow-y-auto'>
              <table className='w-full'>
              <h1 className='p-2 text-xl  uppercase font-bold text-gray-800'>Calculo diferencial uno</h1>
                <thead className=''>
             
                  <tr className='border-b-4 '>
                    <th className='text-left font-normal p-2 '></th>
                    <th className='text-right font-normal p-2'>Rango 1</th>
                    <th className='text-right font-normal p-2'>Rango 2</th>
                    <th className='text-right font-normal p-2'>Rango 3</th>
                  </tr>
                </thead>
                <tbody className="" >
          
                <tr className='bg-white border-b-4 '>
                    <td className=' gap-20 p-2 text-md font-semibold text-red-900'>TAREA<p className='text-gray-00 font-normal'>dasdsadsadsd</p> </td>
                    <td className='  text-right font-normal text-gray-800'>20a</td>
                    <td className=' text-right font-normal text-gray-800'>20a</td>
                    <td className='text-right font-normal text-gray-800'>20a</td>
                    
                    
                  </tr>

                  <tr className='bg-white border-b-4 '>
                    <td className=' gap-20 p-2 text-md font-semibold text-red-900 '>TAREA<p className='text-gray-00 font-normal'>dasdsadsadsd</p> </td>
                    <td className='  text-right font-normal text-gray-800'>20a</td>
                    <td className=' text-right font-normal text-gray-800'>20a</td>
                    <td className='text-right font-normal text-gray-800'>20a</td>
                    
                    
                  </tr>
                  <tr className='bg-white border-b-4 '>
                    <td className=' gap-20 p-2 text-md font-semibold text-red-900 '>TAREA<p className='text-gray-00 font-normal'>dasdsadsadsd</p> </td>
                    <td className='  text-right font-normal text-gray-800'>20a</td>
                    <td className=' text-right font-normal text-gray-800'>20a</td>
                    <td className='text-right font-normal text-gray-800'>20a</td>
                    
                    
                  </tr>
                  <tr className='bg-white border-b-4 '>
                    <td className=' gap-20 p-2 text-md font-semibold text-red-900 '>TAREA<p className='text-gray-00 font-normal'>dasdsadsadsd</p> </td>
                    <td className='  text-right font-normal text-gray-800'>20a</td>
                    <td className=' text-right font-normal text-gray-800'>20a</td>
                    <td className='text-right font-normal text-gray-800'>20a</td>
                    
                    
                  </tr>
                  <tr className='bg-white border-b-4 '>
                    <td className=' gap-20 p-2 text-md font-semibold text-red-900 '>TAREA<p className='text-gray-00 font-normal'>dasdsadsadsd</p> </td>
                    <td className='  text-right font-normal text-gray-800'>20a</td>
                    <td className=' text-right font-normal text-gray-800'>20a</td>
                    <td className='text-right font-normal text-gray-800'>20a</td>
                    
                    
                  </tr>
                  <tr className='bg-white border-b-4 '>
                    <td className=' gap-20 p-2 text-md font-semibold text-red-900 '>TAREA<p className='text-gray-00 font-normal'>dasdsadsadsd</p> </td>
                    <td className='  text-right font-normal text-gray-800'>20a</td>
                    <td className=' text-right font-normal text-gray-800'>20a</td>
                    <td className='text-right font-normal text-gray-800'>20a</td>
                    
                    
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </AnimatedPage>
      </div>
    );
  }

export default Calificaciones;
