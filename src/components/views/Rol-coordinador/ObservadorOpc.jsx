import React from 'react';
import RegistroObservador from './registroObservador';
import { Fragment, useState } from 'react'

const ObservadorOpc = () => {

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
                <h1 className='text-center font-Roboto font-semibold text-gray-800 uppercase mt-2'>Registro Observador academico</h1>
            </div>
            <div className='p-4'>
                <select name="" className= 'mt-4 bg-white w-28 m-4 p-2 rounded-2xl' id="">
                    <option value="">Grado</option>
                    <option value="">sads</option>
                    <option value="">sads</option>
                    <option value="">sads</option>
                </select> 
                <select name="" className= 'mt-4 bg-white w-28 m-4 p-2 rounded-2xl' id="">
                    <option value="">Grupo</option>
                    <option value="">decimo</option>
                    <option value="">noveno</option>
                    <option value="">octavo</option>
                </select> 
                
                <input placeholder='BUSCAR POR ID ESTUDIANTE' className='rounded-xl w-[40%] bg-[#e1e9ec]  shadow-md  border-none p-2' type="search" name="" id="" />
                <input className= 'mt-4 bg-white w-[15%] mr-10 ml-4 p-2 rounded-2xl' type="date" name="" id="" />
                <button onClick={toggleModal} className='bg-indigo-400 p-2 rounded-xl text-white'>Nuevo registro </button>
            </div>
            {modal && <RegistroObservador titulo={"DSd"}/> }
            <div className='w-full overflow-y-auto p-10  shadow-[0_8px_20px_20px_rgba(0,0,0,0.08)]  rounded-3xl h-1/2'>
                <table className='p-2 bg-white m-auto my-auto '>
                    <thead >
                       <tr className='text-center  bg-[#800080] text-white text-sm bg-opacity-50'>
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

        </div>
      </div>
    </div>
  );
}

export default ObservadorOpc;
