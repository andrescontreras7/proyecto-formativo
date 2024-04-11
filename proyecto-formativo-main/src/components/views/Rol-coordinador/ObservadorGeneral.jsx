import React from 'react';
import Aside from './AsideCO';
import RegistroObservador from './registroObservador';
import { Fragment, useState } from 'react'

const ObservadorG = () => {
  const [modal, setModal] = useState(false);
      
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <div>
      <div className='flex h-screen bg-[#A6DCF1]'>
        <aside className='w-[15%]'>
            <Aside/>
        </aside>
        <div  className='w-[80%] mx-auto'>
            <div className=' bg-[#925FE2] p-1 bg-opacity-40 h-[7vh] mt-2 rounded-2xl'>
                <h1 className='text-center font-Roboto font-semibold text-gray-800 uppercase mt-2'>Observador Estudiantil</h1>
            </div>
            <div className='p-4'>
                
                <select name="" className= 'mt-4 bg-white w-28 m-4  p-2 border-[1px] rounded-md border-gray-500'  id="">
                    <option value="">Grado</option>
                    <option value="">5A</option>
                    <option value="">7A</option>
                    <option value="">9B</option>
                    <option value="">9B</option>
                    <option value="">9B</option>
                    <option value="">9B</option>
                </select> 
             
                <select name="" className= 'mt-4 bg-white w-28 m-4 p-2 border-[1px] rounded-md border-gray-500'  id="">
                    <option value="">Periodo</option>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                </select>
                <select name="" className= 'mt-4 bg-white w-28 m-4 p-2 border-[1px] rounded-md border-gray-500'   id="">
                    <option value="">Grupo</option>
                    <option value="">noveno</option>
                    <option value="">decimo</option>
                    <option value="">primero</option>
                </select> 
                
                <input placeholder='BUSCAR POR ID ESTUDIANTE' className='rounded-xl w-[30%] bg-[#e1e9ec] border-[1px] border-gray-500 border-none p-2' type="search" name="" id="" />
                <input className= 'mt-4 bg-white w-[15%] m-4 p-2 border-[1px] rounded-md border-gray-500' type="date" name="" id=""  />
        
                <select name="s" className= ' bg-white w-34 p-2 center rounded-md border-[1px] border-gray-500' id="">
                    <option value="">Tipo Observacion</option>
                    <option value="">Academico</option>
                    <option value="">Convivencia</option>
               
                </select> 
               
            </div>
            {modal && <RegistroObservador/> }
            <div className='w-full overflow-y-auto p-10  shadow-[0_8px_20px_20px_rgba(0,0,0,0.08)]  rounded-3xl h-1/2'>
                <table className='p-2 bg-white m-auto my-auto '>
                    <thead >
                       <tr className='text-center  bg-[#6f5f6f] text-white text-sm bg-opacity-50'>
                            <th className='p-2'>id</th>
                            <th className='p-2'>Nombre estudiante</th>
                            <th className='p-2'>Grado</th>
                            <th className='p-2'>Fecha observacion </th>
                            <th className='p-2'>Observacion Detalles</th>
                            <th className='p-2'>Nombre acudiente</th>
                            <th className='p-2'>Parentesco</th>
                            <th className='p-2'>Telefono</th>
                            <th className='p-2'>Docente</th>
                       </tr>
                    </thead>
                    <tbody className=''>
                        <tr className='text-center border-[1px]'>
                            <td className='p-2 border-[1px] '>1</td>
                            <td className='p-2 border-[1px]'>Alonso yamith</td>
                            <td className='p-2 border-[1px]'>3</td>
                            <td className='p-2 border-[1px]'>22/3/2023</td>
                            <td className='p-2 border-[1px]'>Academica</td>
                            <td className='p-2 border-[1px]'>Arnold david alonso</td>
                            <td className='p-2 border-[1px]'>Papa</td>
                            <td className='p-2 border-[1px]'>3222566732</td>
                            <td className='p-2 border-[1px]'>Amalfi ustate</td>
                        </tr>
                        <tr className='text-center'>
                            <td className='p-2 border-[1px]'>1</td>
                            <td className='p-2 border-[1px]'>Valeria bohada</td>
                            <td className='p-2 border-[1px]'>11</td>
                            <td className='p-2 border-[1px]'>2/1/2023</td>
                            <td className='p-2 border-[1px]'>Academica <span className='block text-indigo-600 font-semibold' ><button>Ver mas</button></span> </td>
                            <td className='p-2 border-[1px]'>Johana bohada</td>
                            <td className='p-2 border-[1px]'>Mama</td>
                            <td className='p-2 border-[1px]'>322223732</td>
                            <td className='p-2 border-[1px]'>Jorge luis cañate</td>
                            <td></td>
                        </tr>
                        <tr className='text-center'>
                            <td className='p-2 border-[1px]'>1</td>
                            <td className='p-2 border-[1px]'>Valeria bohada</td>
                            <td className='p-2 border-[1px]'>11</td>
                            <td className='p-2 border-[1px]'>2/1/2023</td>
                            <td className='p-2 border-[1px]'>Academica <span className='block text-indigo-600 font-semibold' ><button>Ver mas</button></span> </td>
                            <td className='p-2 border-[1px]'>Johana bohada</td>
                            <td className='p-2 border-[1px]'>Mama</td>
                            <td className='p-2 border-[1px]'>322223732</td>
                            <td className='p-2 border-[1px]'>Jorge luis cañate</td>
                            <td></td>
                        </tr>
                        <tr className='text-center'>
                            <td className='p-2 border-[1px]'>1</td>
                            <td className='p-2 border-[1px]'>Valeria bohada</td>
                            <td className='p-2 border-[1px]'>11</td>
                            <td className='p-2 border-[1px]'>2/1/2023</td>
                            <td className='p-2 border-[1px]'>Academica <span className='block text-indigo-600 font-semibold' ><button>Ver mas</button></span> </td>
                            <td className='p-2 border-[1px]'>Johana bohada</td>
                            <td className='p-2 border-[1px]'>Mama</td>
                            <td className='p-2 border-[1px]'>322223732</td>
                            <td className='p-2 border-[1px]'>Jorge luis cañate</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                

            </div>
            <button onClick={toggleModal} className='mt-2 bg-indigo-400 inline-block p-2 rounded-xl font-bold text-white'>Registrar criterios</button>
        </div>
      </div>
      
    </div>
  );
}

export default ObservadorG;
