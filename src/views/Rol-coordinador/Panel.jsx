import React from 'react';
import Layout from '../../components/layaout';
import { HiArrowSmallLeft } from "react-icons/hi2";
import { Link } from 'react-router-dom';


const Panels = () => {
    return (
<Layout titulo={"Panel de control"}  >
    <div className="grid grid-cols-4 grid-rows-3 max-lg:grid-rows-6  gap-4 p-2 w-full h-[86vh] max-2xl:h-[84vh]  shadow-[0_8px_10px_15px_rgba(0,0,0,0.08)] justify-center rounded-md">
    <div className="col-span-2 row-span-4 overflow-auto ">
        <div className="p-2 rounded-md ">
            <h2 className="text-xl font-bold text-gray-600 bg-[#74b7fa] bg-opacity-20 p-2 uppercase  rounded-sm mb-4">Opciones</h2>
            <ul className="space-y-7 rounded- shadow-md   bg-[#74b7fa] bg-opacity-20  p-2  ">
                        <li className="flex items-center duration-300 cursor-pointer border   border-gray-700 hover:bg-[#8EA7E9] hover:border-none  ">
                            <div className='flex gap-2   items-center'>
                                <div className=' border cursor-pointer    border-indigo-200 p-[5px] rounded-sm  '>
                                    <img className=' w-11' src="/public/registarprofesor.png" alt="Docente" draggable="false" />
                                </div>
                                <div>
                                <h1 className='font-bold text-gray-700'> Registrar docente </h1>
                                    <p className='font-normal text-xs text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde q</p>
                                </div>
                            </div>
                        </li>
                        <li className="flex items-center duration-300 cursor-pointer border   border-gray-700 hover:bg-[#8EA7E9] hover:border-none   ">
                            <div className='flex gap-2   items-center'>
                                <div className=' border cursor-pointer p-[5px] rounded-sm  '>
                                    <img className='w-11 ' src="/public/registrarasignatura.png" alt="Docente" draggable="false" />
                                </div>
                                <div>
                                <h1 className='font-medium text-[1.0rem] text-gray-900'> Administrar asignaturas </h1>
                                    <p className='font-normal text-xs text-gray-900'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde q</p>
                                </div>
                            </div>
                        </li>
                        <li className="flex items-center duration-300 cursor-pointer border   border-gray-700 hover:bg-[#8EA7E9] hover:border-none ">
                            <div className='flex gap-2   items-center'>
                                <div className=' border cursor-pointer    border-indigo-200 p-[5px] rounded-sm  '>
                                    <img className='w-11'  src="/public/administardocente.png" alt="Docente" draggable="false" />
                                </div>
                                <div>
                                <h1 className='font-medium text-[1.0rem] text-gray-900'> Administrar docente </h1>
                                    <p className='font-normal text-xs text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde q</p>
                                </div>
                            </div>
                        </li>
                        <Link to="/Listado" className="flex     items-center duration-300  border  border-gray-700  border-gray-700 hover:bg-[#8EA7E9] hover:border-none hover:border-none ">
                            <div className='flex gap-2  items-center'>
                                <div className=' border cursor-pointer    border-indigo-200 p-[5px] rounded-sm  '>
                                <img className='w-11' src="public\lista.png" alt="Docente" />
                                </div>
                                <div>
                                <h1 className='font-medium text-[1.0rem] text-gray-900'> Listado de estudiante </h1>
                                    <p className='font-normal text-xs text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde q</p>
                                </div>
                            </div>
                        </Link>
                        <Link to="/registrarAlumno" className="flex items-center duration-300 cursor-pointer border   border-gray-700 hover:bg-[#8EA7E9] hover:border-none ">
                            <div className='flex gap-2   items-center'>
                                <div className=' border cursor-pointer    border-indigo-200 p-[5px] rounded-sm  '>
                                    <img className='w-11' src="/public/areas y asignaturas.png" alt="Docente" draggable="false" />
                                </div>
                                <div>
                                <h1 className='font-medium text-[1.0rem] text-gray-900'> Administrar Areas </h1>
                                    <p className='font-normal text-xs text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde q</p>
                                </div>
                            </div>
                        </Link>
                        <li className="flex items-center duration-300 cursor-pointer border   border-gray-700 hover:bg-[#8EA7E9] hover:border-none ">
                            <div className='flex gap-2   items-center'>
                                <div className=' border cursor-pointer    border-indigo-200 p-[5px] rounded-sm  '>
                                <img className='w-11' src="public\r-estudiante.png" alt="Docente" />
                                </div>
                                <div>
                                <h1 className='font-medium text-[1.0rem] text-gray-900'> Registrar Alumno </h1>
                                    <p className='font-normal text-xs text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde q</p>
                                </div>
                            </div>
                        </li>
                        <li className="flex items-center duration-300 cursor-pointer border   border-gray-700 hover:bg-[#8EA7E9] hover:border-none ">
                            <div className='flex gap-2   items-center'>
                                <div className=' border cursor-pointer    border-indigo-200 p-[5px] rounded-sm  '>
                                    <img className='w-11' src="/public/registro de asignaturas.png" alt="Docente" draggable="false" />
                                </div>
                                <div>
                                <h1 className='font-medium text-[1.0rem] text-gray-900'>Asignaturas Registradas </h1>
                                    <p className='font-normal text-xs text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde q</p>
                                </div>
                            </div>
                        </li>
                        <li className="flex items-center duration-300 cursor-pointer border   border-gray-700 hover:bg-[#8EA7E9] hover:border-none ">
                            <div className='flex gap-2   items-center'>
                                <div className=' border cursor-pointer    border-indigo-200 p-[5px] rounded-sm  '>
                                     <img className='w-11' src="/public/desempeño.png" alt="Docente" draggable="false" />
                                </div>
                                <div>
                                <h1 className='font-medium text-[1.0rem] text-gray-900'>Estudiantes por desempeño</h1>
                                    <p className='font-normal text-xs text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde q</p>
                                </div>
                            </div>
                        </li>
                       
            </ul>
        </div>
    </div>
    <div className="col-span-1 max-lg:col-start-3 max-lg:col-end-5 rounded-md    bg-[#e4e2ed]  shadow-md row-span-2">
        <div className="p-4">
            <div>
                <h1>caja 21</h1>
            </div>
        </div>
    </div>
    <div className="col-span-1 bg-[#74b7fa] bg-opacity-15     max-lg:row-start-4 max-lg:col-start-3 max-lg:col-end-5 rounded-md shadow-md row-span-3">
        <div className="p-4">Caja 2</div>
        <div>
            <h1>
                Desarrolor integral de habilidades
            </h1>
        </div>
    </div>
    <div className="col-start-3 shadow-md bg-[#e4e2ed]  row-auto max-lg:col-start-3 max-lg:col-end-5 rounded-md overflow-auto">
        <div className="p-4 rounded-lg">Caja 2</div>
    </div>
</div>

        </Layout>
       
    );
};

export default Panels;