import { HiArrowSmallLeft } from "react-icons/hi2";
import React from "react";
import Aside from "./_aside";

const SeccionEst = () => {
    return (
        <>
            <div className="flex font-bold bg-[#A6DCF1] w-screen h-screen">
                <aside className="w-1/5 xl:w-[18%] flex">
                    <Aside />
                </aside>
                <div className="max-w-full ml-20 mr-4 flex overflow-y-scroll flex-wrap gap-8 w-4/5 justify-start items-center">
                    <nav className="w-full">
                        <div className="flex uppercase bg-[#925FE2] bg-opacity-30 p-[0.9rem] font rounded-3xl mr-20 mt-8">
                            <HiArrowSmallLeft className="text-3xl" />{" "}
                            <h1 className="text-gray-700 text-center">
                                Captura lenguaje 3°A
                            </h1>
                        </div>
                    </nav>
                    <div className="flex mb-20 flex-wrap gap-11">
                        <div className="flex uppercase bg-[#925FE2] bg-opacity-30 p-[0.9rem] font rounded-3xl mr-20 mt-8 ">
                            <table className="max w-full border-gray-300 shadow-md rounded">
                                <thead className="bg-[#925FE2] text-white">
                                    <tr>
                                        <th className="py-2 px-4">No L</th>
                                        <th className="py-2 px-4">Nombre</th>
                                        <th className="py-2 px-4">Matricula</th>
                                        <th className="py-2 px-4">Asistencia</th>
                                        <th className="py-2 px-4">Accion</th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr className="hover:bg-gray-100">
                                        <td className="py-2 px-4">1</td>
                                        <td className="py-2 px-4">Estudiante A</td>
                                        <td className="py-2 px-4">1234</td>
                                        <td className="py-2 px-4">ok</td>
                                    </tr>
                                    <tr className="hover:bg-gray-100">
                                        <td className="py-2 px-4">2</td>
                                        <td className="py-2 px-4">Estudiante B</td>
                                        <td className="py-2 px-4">5678</td>
                                        <td className="py-2 px-4">ok</td>
                                    </tr>
                                    <tr className="hover:bg-gray-100">
                                        <td className="py-2 px-4">3</td>
                                        <td className="py-2 px-4">Estudiante C</td>
                                        <td className="py-2 px-4">9012</td>
                                        <td className="py-2 px-4">ok</td>
                                    </tr>
                                    <tr className="hover:bg-gray-100">
                                        <td className="py-2 px-4">4</td>
                                        <td className="py-2 px-4">Estudiante D</td>
                                        <td className="py-2 px-4">3456</td>
                                        <td className="py-2 px-4">ok</td>
                                    </tr>
                                    <tr className="hover:bg-gray-100">
                                        <td className="py-2 px-4">5</td>
                                        <td className="py-2 px-4">Estudiante E</td>
                                        <td className="py-2 px-4">7890</td>
                                        <td className="py-2 px-4">ok</td>
                                    </tr>
                                    <tr className="hover:bg-gray-100">
                                        <td className="py-2 px-4">6</td>
                                        <td className="py-2 px-4">Estudiante F</td>
                                        <td className="py-2 px-4">1235</td>
                                        <td className="py-2 px-4">ok</td>
                                    </tr>
                                    <tr className="hover:bg-gray-100">
                                        <td className="py-2 px-4">7</td>
                                        <td className="py-2 px-4">Estudiante G</td>
                                        <td className="py-2 px-4">6789</td>
                                        <td className="py-2 px-4">ok</td>
                                    </tr>
                                    <tr className="hover:bg-gray-100">
                                        <td className="py-2 px-4">8</td>
                                        <td className="py-2 px-4">Estudiante H</td>
                                        <td className="py-2 px-4">2345</td>
                                        <td className="py-2 px-4">ok</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SeccionEst;
