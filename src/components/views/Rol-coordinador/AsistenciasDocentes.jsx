
import React from 'react';
import { FiArrowLeft, FiEdit, FiMonitor, FiBarChart2 } from 'react-icons/fi';
import Aside from './AsideCO'
import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';


const AsistenciaDocente = () => {
  
  return (
    <div className="flex bg-indigo-100 min-h-screen">
     <aside className='w-[15%]'>
      <Aside />
     </aside>
      <div className=' h-screen m-auto w-screen  bg-[#A6DCF1] '>
      <div className="flex h-[] items-center  bg-purple-500 bg-opacity-30 mt-4    w-[80vw] rounded-xl  m-auto mb-4">

      <Link to="/Panel">
            <button>
                <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c30b563c1b498bb6ee6166c046b0c99187a1cfb9c2ddcb702766aa4a24c16412?apiKey=83a41f7c3fac45f48041df59c87c3d79&"
                className="aspect-[1.22] object-contain object-center w-7 stroke-[3px] stroke-black overflow-hidden shrink-0 max-w-full"
                />
            </button>
            </Link>

          <h1 className=" p-2 text-2xl font-bold">Captura de Asistencia Docentes</h1>
        </div>
      <div className="bg-[#AEE4F5]  overflow-y-auto lg:h-[80%] w-[80%] shadow-[0_8px_10px_8px_rgba(0,0,0,0.08)]  rounded-3xl container mx-auto mt-8 p-8 ">
       

        <div className="mb-4">
          <div className='flex'>
          <h2 className="  text-lg font-bold mb-6">Fecha: 27 de Diciembre de 2023</h2>
          <select name="" className= 'h-[30px] w-[15%] mr-5 ml-4 p-1 rounded-xl' id="">
                    <option value="">Grado</option>
                    <option value="">Grado 1° A</option>
                    <option value="">Grado 1° B</option>
                    <option value="">Grado 2° A</option>
                    <option value="">Grado 2° B</option>
                    <option value="">Grado 3° A</option>
                    <option value="">Grado 3° B</option>
                </select> 

                <select name="" className= 'h-[30px] w-[15%]  p-1 rounded-xl' id="">
                    <option value="">Jornada</option>
                    <option value="">Mañana</option>
                    <option value="">Tarde</option>
                    
                </select> 
          </div>
       
          <div className="flex items-center space-x-4 ">
            <p className="text-green-500 font-bold ">Presente: <span className="bg-green-500 text-white rounded-full px-2">27</span></p>
            <p className="text-yellow-500 font-bold px-10">Presente con Retardos: <span className="bg-yellow-500 text-white rounded-full px-2">1</span></p>
            <p className="text-orange-500 font-bold px-10">Ausente: <span className="bg-orange-500 text-white rounded-full px-2">1</span></p>
            <p className="text-blue-500 font-bold px-10">Asistencia: <span className="bg-blue-500 text-white rounded-full px-2">100%</span></p>
          </div>
        </div>

        <div className="mb-8">
          <h4 className="text-md font-bold mb-2">Se encuentran 14 Docentes</h4>
          <table className="min-w-full ">
            <thead>
              <tr className='mr-20 ' >
                <th className="mr-20 p-2">No.L</th>
                <th className=" p-2">NOMBRE</th>
                <th className=" p-2"> CEDULA</th>
                <th className=" p-2">ASISTENCIA</th>
                <th className=" p-2">ACCIONES</th>
              </tr>
            </thead>
            <tbody className='text-center'>
               
          
              <tr className=' border-t-2 border-gray-400' >
               <td className=" p-2">1 </td>
                <td className=" text-cente p-2">Camilo andres </td>
                <td className="p-2">123456</td>
                <td className="p-2">
                  <span className="bg-green-500 rounded-full h-4 w-4 inline-block mr-2"></span>
                  Presente
                </td>
                <td className="p-2">
                  <button className="bg-blue-500 text-white p-2 rounded">
                    <FiEdit className="text-xl" />
                  </button>
                </td>
              </tr>
              <tr className=' border-t-2 border-gray-400' > 
              <td className="p-2">2 </td>
                <td className="p-2">Scheril de jesus</td>
                <td className= " p-2">123456</td>
                <td className="p-2">
                  <span className="bg-orange-500 rounded-full h-4 w-4 inline-block mr-2"></span>
                  Ausente
                </td>
                <td className=" p-2">
                  <button className="bg-blue-500 text-white p-2 rounded">
                    <FiEdit className="text-xl" />
                  </button>
                </td>
              </tr>
              <tr className=' border-t-2 border-gray-400' >  <td className="">3 </td>
                <td className=" p-2">Alexer maestre</td>
                <td className=" p-2">123456</td>
                <td className=" p-2">
                  <span className="bg-yellow-500 rounded-full h-4 w-4 inline-block mr-2"></span>
                  Retardo
                </td>
                <td className=" p-2">
                  <button className="bg-blue-500 text-white p-2 rounded">
                    <FiEdit className="text-xl" />
                  </button>
                </td>
              </tr>
              <tr className=' border-t-2 border-gray-400' > 
              <td className=" p-2">4 </td>
                <td className="p-2">Juan Pablo travis</td>
                <td className="p-2">123456</td>
                <td className="p-2">
                  <span className="bg-green-500 rounded-full h-4 w-4 inline-block mr-2"></span>
                  Presente
                </td>
                <td className="p-2">
                  <button className="bg-blue-500 text-white p-2 rounded">
                    <FiEdit className="text-xl" />
                  </button>
                </td>
              </tr>
              <tr className=' border-t-2 border-gray-400' > 
              <td className=" p-2">5 </td>
                <td className=" p-2">Omar Andres</td>
                <td className="p-2">123456</td>
                <td className="p-2">
                  <span className="bg-green-500 rounded-full h-4 w-4 inline-block mr-2"></span>
                  Presente
                </td>
                <td className="p-2">
                  <button className="bg-blue-500 text-white p-2 rounded">
                    <FiEdit className="text-xl" />
                  </button>
                </td>
              </tr>
              <tr className=' border-t-2 border-gray-400' > 
              <td className="p-2">6 </td>
                <td className=" p-2">JJ Muñoz</td>
                <td className=" p-2">123456</td>
                <td className=" p-2">
                  <span className="bg-green-500 rounded-full h-4 w-4 inline-block mr-2"></span>
                  Presente
                </td>
                <td className="p-2">
                  <button className="bg-blue-500 text-white p-2 rounded">
                    <FiEdit className="text-xl" />
                  </button>
                </td>
              </tr>
              <tr className=' border-t-2 border-gray-400' > 
              <td className="p-2">7 </td>
                <td className=" p-2">Santiago alavarez</td>
                <td className=" p-2">123456</td>
                <td className=" p-2">
                  <span className="bg-green-500 rounded-full h-4 w-4 inline-block mr-2"></span>
                  Presente
                </td>
                <td className=" p-2">
                  <button className="bg-blue-500 text-white p-2 rounded">
                    <FiEdit className="text-xl" />
                  </button>
                </td>
              </tr>
              <tr className=' border-t-2 border-gray-400' >
              <td className=" p-2">8 </td>
                <td className="p-2">Faver Marin</td>
                <td className=" p-2">123456</td>
                <td className=" p-2">
                  <span className="bg-green-500 rounded-full h-4 w-4 inline-block mr-2"></span>
                  Presente
                </td>
                <td className="p-2">
                  <button className="bg-blue-500 text-white p-2 rounded">
                    <FiEdit className="text-xl" />
                  </button>
                </td>
              </tr>
              <tr className=' border-t-2 border-gray-400' >
              <td className="p-2">9 </td>
                <td className=" p-2">john de la rosa</td>
                <td className="p-2">123456</td>
                <td className=" p-2">
                  <span className="bg-green-500 rounded-full h-4 w-4 inline-block mr-2"></span>
                  Presente
                </td>
                <td className="p-2">
                  <button className="bg-blue-500 text-white p-2 rounded">
                    <FiEdit className="text-xl" />
                  </button>
                </td>
              </tr>
              <tr className=' border-t-2 border-gray-400' ></tr>
            </tbody>
          </table>
        </div>

        



      </div>
      </div>
      </div>
    

  );
};

export default AsistenciaDocente;

