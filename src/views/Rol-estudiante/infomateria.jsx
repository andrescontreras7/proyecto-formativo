import React from 'react';
import { HiArrowSmallLeft } from "react-icons/hi2";
import { CiEdit } from "react-icons/ci";
import Layout from '../../components/layaout';

const Infomateria = () => {

    return (
        <Layout titulo={"Informacion asignaturas"} icono={<HiArrowSmallLeft className='text-xl' />}  >
            <div className="flex justify-start items-start pt-10 pb-20">
                <div className="flex flex-col px-5 max-w-[50%]">
                    <div className="w-full text-2xl text-black">
                        Nombre de la Materia:
                    </div>
                    <div className="flex gap-5 mt-2.5 text-xl font-light text-center text-black flex-wrap relative">
                        <div className="grow justify-center items-start px-3 py-5 rounded-xl border border-black border-solid w-fit relative">
                            Matemáticas avanzadas 1
                            <button className="absolute top-0 right-0 mr-3 mt-3">
                                <CiEdit size={30} /> 
                            </button>
                        </div>
                    </div>
                    <div className="mt-4 w-full text-2xl text-black">
                        Horario:
                    </div>
                    <div className="flex gap-5 mt-3 text-xl font-light text-center text-black flex-wrap relative">
                        <div className="grow justify-center items-start px-3 py-5 rounded-xl border border-black border-solid w-fit relative">
                            Lunes y Miércoles de 10:00 AM a 11:30 AM
                            <button className="absolute top-0 right-0 mr-3 mt-3" >
                                <CiEdit size={30} /> 
                            </button>
                        </div>
                    </div>
                    <div className="mt-5 w-full text-2xl text-black">
                        Profesor:
                    </div>
                    <div className="flex gap-5 mt-4 text-xl font-light text-center text-black flex-wrap relative">
                        <div className="grow justify-center items-start px-3.5 py-5 rounded-xl border border-black border-solid w-fit relative">
                            Dr. María Rodríguez
                            <button className="absolute top-0 right-0 mr-3 mt-3" >
                                <CiEdit size={30} /> 
                            </button>
                        </div>
                    </div>
                    <div className="mt-5 w-full text-2xl text-black">
                        Contenido del Curso:
                    </div>
                    <div className="mt-3">
                        <div className="flex gap-5 flex-col md:flex-row">
                            <div className="flex flex-col w-[84%]">
                                <div className="grow items-start px-3 pt-3 pb-5 text-xl italic font-light text-black rounded-xl border border-black border-solid">
                                    Temas Actuales:
                                    <ul>
                                        <li>
                                            <span className="italic">Álgebra Lineal</span>
                                        </li>
                                        <li>
                                            <span className="italic">Cálculo Diferencial</span>
                                        </li>
                                        <li>
                                            <span className="italic">Ecuaciones Diferenciales</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex flex-col w-[16%]"></div>
                        </div>
                    </div>
                    <div className="mt-6 w-full text-2xl text-black">
                        Recursos de Estudio:
                    </div>
                    <div className="flex gap-5 mt-2 text-xl font-light text-slate-500 flex-wrap relative">
                        <div className="grow justify-center px-1.5 py-4 underline rounded-xl border border-black border-solid w-fit relative">
                            Libro de texto recomendado: &quot;Matemáticas Avanzadas: Conceptos y
                            Aplicaciones&quot;
                            <br />
                            Sitio web recomendado:{" "}
                            <button className="absolute top-0 right-0 mr-3 mt-3" >
                                <CiEdit size={30} /> 
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Infomateria;
