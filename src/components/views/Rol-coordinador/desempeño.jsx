import React from 'react';

const Desempeño = () => {
    return (
        <div className='bg-[#A6DCF1] h-screen flex'>

            <div className='flex-grow overflow-y-auto'>
                <div className='bg-violet-500 bg-opacity-40 px-5 py-3 rounded-xl absolute top-5 left-80 right-1 max-w-6xl flex justify-between' style={{ marginLeft: '65px' }}>
                    <div className="text-black text-xl font-semibold max-w-max mx-auto">Desempeño de estudiantes</div>
                </div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400 rounded-3xl shadow-3xl shadow-[0 8px 48px 8px rgba(0,0,0,0.08)] w-[1100px] p-[32px] h-[750px] justify-center items-center relative">
                    {/* Cuadro azul */}
                    <div className="relative w-[80%] h-[80%] bg-white rounded-xl text-center">
                        {/* Agregando el texto en negrita "Grupos" */}
                        <div className="font-bold text-3xl mb-4 absolute top-5 left-7">Grupos</div>
                        {/* Agregando el elemento select con options */}
                        <select className="text-xl absolute top-20 left-5 border border-black rounded-xl px-3 py-1">
                            <option value="grupo1">Grupo 1</option>
                            <option value="grupo2">Grupo 2</option>
                            <option value="grupo3">Grupo 3</option>
                        </select>

                        {/* Agregando el texto "Desempeño" */}
                        <div className="font-bold text-3xl mb-4 absolute top-5 right-7">
                            Desempeño
                            <div className="absolute top-10 right-[20%] transform translate-y-1/2 flex flex-col items-end">
                                <label htmlFor="superiorCheckbox" className="text-xl mb-2">
                                    <input type="checkbox" id="superiorCheckbox" className="mr-2" />
                                    Superior
                                </label>
                                <label htmlFor="altoCheckbox" className="text-xl mb-2 mr-6">
                                    <input type="checkbox" id="altoCheckbox" className="mr-6" />
                                    Alto
                                </label>
                                <label htmlFor="basicoCheckbox" className="text-xl mb-2  mr-3">
                                    <input type="checkbox" id="basicoCheckbox" className="mr-4" />
                                    Básico
                                </label>
                                <label htmlFor="bajoCheckbox" className="text-xl  mr-5">
                                    <input type="checkbox" id="bajoCheckbox" className="mr-6" />
                                    Bajo
                                </label>
                            </div>
                        </div>

                        {/* Manteniendo el texto "Periodos" */}
                        <div className="font-bold text-3xl mb-4 absolute top-40 left-7">Periodos</div>
                        {/* Duplicando el elemento select debajo */}
                        <select className="text-xl absolute top-60 left-5 border border-black rounded-xl px-3 py-1">
                            <option value="periodo1">Periodo 1</option>
                            <option value="periodo2">Periodo 2</option>
                            <option value="periodo3">Periodo 3</option>
                        </select>

                        {/* Agregando el botón "Generar" dentro del cuadro blanco */}
                        <div className="absolute bottom-5 right-5">
                            <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-5 rounded-lg mr-5" >Generar documento</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Desempeño;
