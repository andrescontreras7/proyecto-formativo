import React from 'react';
import Aside from './AsideDO';

const Docente = () => {
    return (
        <div className='bg-[#A6DCF1] min-h-screen flex justify-start'>
            <Aside />
            <div className='flex flex-col justify-center items-center w-full'>
                <div className='flex-grow'>
                    <div className='w-20 max-w-20 lg:max-w-10'></div>
                    <div className='w-full mx-auto mt-20 flex flex-col lg:flex-row justify-start items-start lg:items-center gap-8 rounded-xl bg-gradient-to-t from-indigo-700 via-indigo-500 to-indigo-400 mr-0 lg:mr-80'>
                        <div className='flex flex-col gap-2 items-start mt-10 lg:mt-0 lg:mr-8 pl-8 lg:pl-20 pr-8 lg:pr-0'>
                            <p className='text-white font-light mb-2 lg:mb-10 text-lg lg:text-base'>Septiembre 3 de 2023</p>
                            <h1 className='text-white font-bold text-[2.5rem]'>Bienvenido Docente</h1>
                            <p className='text-white font-normal text-lg lg:text-base'>Nos complace volverte a ver</p>
                        </div>
                        <div className='w-full lg:w-auto'>
                            <img src="Scholarcap scroll.png" alt="" draggable="false" className='h-72 lg:h-auto' />
                        </div>
                    </div>
                    <div className='mt-16 mx-auto max-w-6xl'>
                        <h1 className='font-semibold text-2xl'>¿Qué quieres consultar?</h1>
                        <div className='flex flex-wrap gap-8 justify-start mt-8'>
                            <div className="max-w-[754px]">
                                <div className="flex gap-10 max-md:flex-col max-md:gap-0 max-md:">
                                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                        <div className="flex flex-col grow items-center px-7 py-2.5 w-full font-semibold bg-sky-200 rounded-3xl shadow-2xl max-md:px-5 max-md:mt-6">
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5416ce0a371152ac2c8ea56a8bb02bf188b515632bff3532b311293a9720ef50?apiKey=e6a49df5c7c7454db0095562764e4f8c&"
                                                className="aspect-[0.72] w-[60px]"
                                                alt="some alt text"
                                                draggable="false"
                                            />
                                            <div className="self-stretch mt-3 text-xl text-center text-black ">
                                                <br />
                                                Asginaturas  en  plataforma
                                            </div>
                                            <button className="justify-center px-7 py-1.5 mt-3.5 text-lg text-sky-200 whitespace-nowrap bg-indigo-700 rounded-xl max-md:px-5">
                                                Ver Mas
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                                        <div className="flex flex-col grow justify-start items-center px-16 pb-2.5 w-full font-semibold whitespace-nowrap bg-sky-200 rounded-3xl shadow-2xl max-md:px-5 max-md:mt-5">
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca976b570fddb6cc7acb08c3acb9bd577bc08d0ff40a628366446f05a6903aca?apiKey=e6a49df5c7c7454db0095562764e4f8c&"
                                                className="w-full aspect-square max-w-[70px] mt-5"
                                                draggable="false"
                                            />
                                            <div className="flex flex-col mt-20 w-32 max-w-full max-md:mt-10">
                                                <div className="text-xl text-center text-black">Calendario</div>
                                                <button className="justify-center px-7 py-1.5 mt-1 text-lg text-sky-200 bg-indigo-700 rounded-xl max-md:px-5">
                                                    Ver Más
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Docente;
