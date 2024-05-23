import React from "react";
import Layout from "../../components/layaout";
import { HiArrowSmallLeft } from "react-icons/hi2";

const RegistroAsistencias = () => {
    return (
        <Layout
            titulo={"Registro de asistencias"}
            icono={<HiArrowSmallLeft className="text-2xl font-bold" />}
        >
            <div className="pb-2 w-full bg-[#ffffff] h-[86vh] shadow-[0_8px_20px_12px_rgba(0,0,0,0.08)] rounded-md">
                <div className="flex flex-col px-4">
                    <div className="flex gap-3 self-start text-lg font-semibold text-center text-black"></div>
                    <div className="flex flex-col mt-2 w-full">
                        <div className="px-4 py-6 rounded-xl bg-[#626cb8] bg-opacity-40 mt-2">
                            <div className="flex gap-3">
                                <div className="flex flex-col w-1/3">
                                    <div className="flex flex-col grow text-base text-center text-black">
                                        <div><span className="font-bold">Curso</span></div>
                                        <select className="px-2.5 py-2 mt-2 bg-white rounded-xl shadow-2xl">
                                            <option value="todos">Todos</option>
                                            <option value="todos">Todos</option>
                                            <option value="todos">Todos</option>
                                        </select>
                                        <div className="mt-2"><span className="font-bold">Docente</span></div>
                                        <select className="px-2.5 py-2 mt-1 bg-white rounded-xl shadow-2xl">
                                            <option value="yepes_camargo_jose">YEPES CAMARGO JOSE</option>
                                            <option value="yepes_camargo_jose">YEPES CAMARGO JOSE</option>
                                            <option value="yepes_camargo_jose">YEPES CAMARGO JOSE</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex flex-col w-1/3">
                                    <div className="flex flex-col grow text-center text-black">
                                        <div className="text-base"><span className="font-bold">Cédula</span></div>
                                        <select className="px-2.5 py-2 mt-1 bg-white rounded-xl shadow-2xl">
                                            <option value="febrero">10546455</option>
                                            <option value="febrero">10546455</option>
                                            <option value="febrero">10546455</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex flex-col w-1/3">
                                    <div className="flex flex-col grow text-center text-black">
                                        <div className="text-base"><span className="font-bold">Fecha Mes</span></div>
                                        <select className="px-2.5 py-2 mt-1 bg-white rounded-xl shadow-2xl">
                                            <option value="febrero">Febrero</option>
                                            <option value="febrero">Febrero</option>
                                            <option value="febrero">Febrero</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex flex-col w-1/3">
                                    <div className="flex flex-col grow items-start py-2 px-3 text-base text-center text-black bg-white rounded-xl">
                                        <div>
                                            <span className="font-semibold">P: </span><strong>Presente</strong>
                                        </div>
                                        <div className="mt-2">
                                            <span className="font-semibold">PR:</span> <strong>Presente con retardo</strong>
                                        </div>
                                        <div className="mt-2">
                                            <span className="font-semibold">A:</span> <strong>Ausente</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="flex gap-3">
                                <div className="flex flex-col w-3/4">
                                    <div className="grow px-4 py-4 rounded-xl bg-[#626cb8] bg-opacity-40">
                                        <div className="flex gap-3">
                                            <div className="flex flex-col w-1/3">
                                                <div className="flex flex-col grow px-4 py-3 text-center text-black bg-white rounded-xl">
                                                    <div className="text-lg font-bold">
                                                        Total días trabajados en la semana
                                                    </div>
                                                    <div className="self-center mt-3 text-3xl">5</div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col w-1/3">
                                                <div className="flex flex-col grow px-4 py-3 text-center bg-white rounded-xl">
                                                    <div className="text-lg text-black font-bold">
                                                        Total de días presente
                                                    </div>
                                                    <div className="self-center mt-3 text-3xl text-green-600">
                                                        5/5
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col w-1/3">
                                                <div className="flex flex-col grow px-4 py-3 text-center bg-white rounded-xl">
                                                    <div className="text-lg text-black font-bold">
                                                        Total de faltas
                                                    </div>
                                                    <div className="self-center mt-3 text-3xl text-amber-500">
                                                        0/0
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col w-1/4">
                                    <div className="flex flex-col grow">
                                        <div className="flex flex-col p-2 rounded-xl bg-[#626cb8] bg-opacity-40">
                                            <div className="text-sm leading-4 text-center text-black font-bold">
                                                Ver un reporte de las horas laboradas aquí:
                                            </div>
                                            <button className="justify-center px-6 py-1.5 mt-1 text-sm font-semibold text-white rounded-xl bg-indigo-800">
                                                Ver aquí
                                            </button>
                                        </div>
                                        <button className="justify-center px-4 py-1.5 mt-2 text-base font-semibold text-white rounded-xl bg-indigo-800">
                                            EXPORTAR PDF
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-20 overflow-auto border-8 border-[#c1c5da] border-azul shadow-md sm:rounded-lg max-h-80">
    <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
            <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Día
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Hora de entrada
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Hora de salida
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Asistencias
                </th>
            </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
            {/* Filas de ejemplo */}
            {Array.from(Array(10).keys()).map((index) => (
                <tr key={index} className="bg-white hover:bg-gray-200 transition duration-200 ease-in-out">
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{index % 7 === 0 ? "Lunes" : index % 7 === 1 ? "Martes" : index % 7 === 2 ? "Miércoles" : index % 7 === 3 ? "Jueves" : index % 7 === 4 ? "Viernes" : index % 7 === 5 ? "Sábado" : "Domingo"}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{`${(8 + index % 7).toString().padStart(2, '0')}:00 AM`}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{`${(16 + index % 7).toString().padStart(2, '0')}:00 PM`}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        {index % 7 === 0 ? (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm2.5-12a.5.5 0 00-.354.146l-3.5 3.5a.5.5 0 00.708.708L11 9.707l2.646-2.647a.5.5 0 00-.354-.853z" clip-rule="evenodd" />
                                </svg>
                                Presente
                            </span>
                        ) : index % 7 === 1 || index % 7 === 3 ? (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm2.5-12a.5.5 0 00-.354.146l-3.5 3.5a.5.5 0 00.708.708L11 9.707l2.646-2.647a.5.5 0 00-.354-.853z" clip-rule="evenodd" />
                                </svg>
                                Tardanza
                            </span>
                        ) : (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm2.5-12a.5.5 0 00-.354.146l-3.5 3.5a.5.5 0 00.708.708L11 9.707l2.646-2.647a.5.5 0 00-.354-.853z" clip-rule="evenodd" />
                                </svg>
                                Ausente
                            </span>
                        )}
                    </td>
                </tr>
            ))}
            {/* Fin de filas de ejemplo */}
        </tbody>
    </table>
</div>


                        {/* Fin del espacio para la tabla */}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default RegistroAsistencias;

