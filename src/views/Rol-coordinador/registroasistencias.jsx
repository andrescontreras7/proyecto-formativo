import React from 'react';
import { Link } from 'react-router-dom';

const Registroasistencias = () => {
    return (
        <div className='bg-[#A6DCF1] h-screen flex'>
            <div className='flex-grow overflow-y-auto'>
                <div className="flex flex-col px-3 py-4 bg-indigo-500">
                    <div className="flex z-10 gap-5 justify-between items-start max-w-full font-semibold w-[742px] max-md:flex-wrap">
                        <div className="flex gap-1.5 px-3 py-2.5 text-lg text-black whitespace-nowrap bg-white rounded-lg ml-5 ">
                            <div class="rounded-full overflow-hidden p-1 inline-block">

                                <Link to="/Coordinador" className="flex items-center">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9bffc4b394c94210e61abd0a7e6b767c98506a54918b99ca18ec1008b79a92d?apiKey=e6a49df5c7c7454db0095562764e4f8c&"
                                        className="aspect-w-14 aspect-h-10 fill-white stroke-3 stroke-black w-8 h-auto"
                                        alt="Volver"
                                    />
                                    <span className="ml-3">Volver</span>
                                </Link>
                            </div>
                        </div>
                        
                        <div className="flex-auto mt-2.5 text-2xl text-white ml-3 ">
                            Registro de Asistencias
                        </div>

                    </div>
                    <div className="flex gap-4 self-end whitespace-nowrap">
                        <div className="grow my-auto text-xl font-semibold tracking-normal leading-5 text-white">
                            2023
                        </div>
                        <button>
                            <div className="flex gap-3 justify-between px-3 py-2.5 text-base font-medium leading-5 bg-white rounded-lg border border-solid border-neutral-200 text-zinc-800">
                                <div className="grow">Septiembre</div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/92b14af99db2751396c9589f014bc5a76d5500b6d8d5c6ba8ca393b1130a056e?apiKey=e6a49df5c7c7454db0095562764e4f8c&"
                                    className="self-start w-5 aspect-square"
                                />
                            </div>
                        </button>

                    </div>

                    <div className="flex gap-5 justify-between mt-5 bg-indigo-500 rounded-xl max-md:flex-wrap max-md:max-w-full">
                        <div className="flex flex-col flex-1 justify-center py-5 pr-14 pl-4 whitespace-nowrap bg-white rounded-xl border border-solid border-zinc-300 max-md:pr-5">
                            <div className="flex gap-4 justify-between">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/958b37f5ef930269601d825afa9a1633d0f54eccd40cf512d20d94dac54e9cc4?apiKey=e6a49df5c7c7454db0095562764e4f8c&"
                                    className="w-11 aspect-square"
                                />
                                <div className="flex flex-col flex-1">
                                    <div className="text-lg font-medium leading-5 text-zinc-500">
                                        Nombre
                                    </div>
                                    <div className="mt-2 text-2xl text-black">YEPES CAMARGO</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col flex-1 justify-center items-start py-5 pr-16 pl-4 whitespace-nowrap bg-white rounded-xl border border-solid border-zinc-300 max-md:pr-5">
                            <div className="flex gap-4">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f875a9a23f1dd9812138a2fb8fd9194f2bd6d72c0f5b8bf55ae6e8a9b43cd7a?apiKey=e6a49df5c7c7454db0095562764e4f8c&"
                                    className="w-11 aspect-square"
                                />
                                <div className="flex flex-col flex-1 my-auto">
                                    <div className="text-lg font-medium tracking-normal leading-5 text-zinc-500">
                                        Cedula
                                    </div>
                                    <div className="mt-2 text-lg font-light text-black">72532658</div>
                                </div>
                            </div>
                        </div>
                        <div className="grow justify-center px-4 py-2.5 text-base font-semibold text-black bg-white rounded-xl border border-solid border-zinc-300 max-md:pr-5">
                            P: PRESENTE L: LICENSIA A: AUSENTE <br />
                            <br />
                        </div>
                    </div>
                    <div className="flex flex-col mt-8 text-sm font-medium bg-sky-200 rounded-lg border border-solid border-zinc-100 text-zinc-800 max-md:max-w-full">
                        <div className="flex gap-3 justify-between px-3 py-2 text-lg font-bold leading-6 bg-sky-200 text-zinc-500 max-md:flex-wrap max-md:max-w-full">
                            <div className="flex gap-1.5 justify-between pr-4 text-lg leading-6">
                                <div className="flex-auto">SEMANA 1</div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/82862e0d157530c42be3a2d0e0aa83edc8e7bf11e5aaa5d50d66642e24efbf90?apiKey=e6a49df5c7c7454db0095562764e4f8c&"
                                    className="my-auto w-2 aspect-[1.59] fill-slate-400"
                                />
                            </div>
                            <div className="flex-auto">Hora entrada</div>
                            <div>Hora salida</div>
                            <div className="flex-auto max-md:max-w-full">asistencia</div>
                        </div>
                        <div className="shrink-0 h-px bg-zinc-100 max-md:max-w-full" />
                        <div className="flex gap-3 p-3 max-md:flex-wrap max-md:max-w-full">
                            <div className="grow">Lunes</div>
                            <div className="flex-auto text-zinc-500" >12:00 am</div>
                            <div className="flex-auto">3.00 pm</div>
                            <div className="flex-auto font-semibold text-black max-md:max-w-full">
                                p
                            </div>
                        </div>
                        <div className="shrink-0 h-px bg-zinc-100 max-md:max-w-full" />
                        <div className="flex gap-3 p-3 max-md:flex-wrap max-md:max-w-full">
                            <div className="grow">Martes</div>
                            <div className="flex-auto text-zinc-500 -ml-1">7:00 Am</div>
                            <div className="flex-auto">12:00Am</div>
                            <div className="flex-auto font-semibold text-black max-md:max-w-full">
                                P
                            </div>
                        </div>
                        <div className="shrink-0 h-px bg-zinc-100 max-md:max-w-full" />
                        <div className="flex gap-3 p-3 max-md:flex-wrap max-md:max-w-full">
                            <div className="grow">Miercoles</div>
                            <div className="flex-auto text-zinc-500 -ml-6">12:12 am</div>
                            <div className="flex-auto">6:12 pm</div>
                            <div className="flex-auto font-semibold text-black max-md:max-w-full">
                                P
                            </div>
                        </div>
                        <div className="shrink-0 h-px bg-zinc-100 max-md:max-w-full" />
                        <div className="flex gap-3 p-3 max-md:flex-wrap max-md:max-w-full">
                            <div className="grow">Jueves</div>
                            <div className="flex-auto text-zinc-500 -ml-1">12:20 am</div>
                            <div className="flex-auto">5:30 pm</div>
                            <div className="flex-auto font-semibold text-black max-md:max-w-full">
                                A
                            </div>
                        </div>
                        <div className="shrink-0 h-px bg-zinc-100 max-md:max-w-full" />
                        <div className="flex gap-3 p-3 max-md:flex-wrap max-md:max-w-full">
                            <div className="grow">Viernes</div>
                            <div className="flex-auto text-zinc-500 -ml-3">7:30 am</div>
                            <div className="flex-auto ml-3">2:00pm</div>
                            <div className="flex-auto font-semibold text-black max-md:max-w-full ">
                                A
                            </div>
                        </div>
                        <div className="shrink-0 h-px bg-zinc-100 max-md:max-w-full" />
                        <div className="flex gap-3 p-3 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                            <div className="grow">Sabado</div>
                            <div className="flex-auto text-zinc-500 -ml-7">No hay clases</div>
                            <div className="flex-auto"></div>
                            <div className="flex-auto font-semibold text-black max-md:max-w-full">

                            </div>
                        </div>
                        <div className="shrink-0 h-px bg-zinc-100 max-md:max-w-full" />
                        <div className="flex gap-3 p-3 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                            <div className="grow">Domingo</div>
                            <div className="flex-auto text-zinc-500 -ml-10">No hay clases</div>
                            <div className="flex-auto"></div>
                            <div className="flex-auto font-semibold text-black max-md:max-w-full">

                            </div>
                        </div>
                        <div className="shrink-0 h-px bg-zinc-100 max-md:max-w-full" />
                        <div className="shrink-0 h-px bg-zinc-100 max-md:max-w-full" />
                        <div className="shrink-0 h-px bg-zinc-100 max-md:max-w-full" />
                        <div className="shrink-0 h-px bg-zinc-100 max-md:max-w-full" />
                    </div>
                    <div className="flex gap-4 justify-between items-start self-center mt-8 w-full text-sm font-semibold text-white max-w-[1180px] max-md:flex-wrap max-md:max-w-full">
                        <div className="grow self-stretch my-auto whitespace-nowrap">
                            TOTAL DE DIAS DE TRABAJO EN LA SEMANA
                        </div>
                        <div className="justify-center px-4 py-2.5 text-black whitespace-nowrap bg-white rounded-xl border border-solid aspect-[1.1] border-zinc-300">
                            5
                        </div>
                        <div className="flex-auto self-stretch my-auto">TOTAL DE FALTAS</div>
                        <div className="justify-center px-4 py-2.5 text-black whitespace-nowrap bg-white rounded-xl border border-solid aspect-[1.05] border-zinc-300">
                            0
                        </div>
                        <div className="flex-auto self-stretch my-auto">
                            TOTAL DIAS PRESENTE
                        </div>
                        <div className="justify-center items-center px-4 h-10 text-black whitespace-nowrap bg-white rounded-xl border border-solid aspect-[1.03] border-zinc-300">
                            5
                        </div>
                        <button className="grow justify-center px-9 py-1.5 text-lg whitespace-nowrap bg-violet-500 rounded-xl max-md:px-5">
                            EXPORTAR PDF
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Registroasistencias;
