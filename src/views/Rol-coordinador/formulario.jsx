import React from 'react';
import { HiCalendar } from 'react-icons/hi';
import Layout from "../../components/layaout";

const FormularioConvivencia = () => {
    return (
        <Layout titulo={"Registro observador de convivencias"}>
            <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
                <div className="container mx-auto p-6 bg-white rounded shadow-lg w-full max-w-6xl">
                    <form>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Nombre del Estudiante:</label>
                                <input type="text" className="w-full p-2 border border-gray-300 rounded" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Fecha del Evento:</label>
                                <div className="flex items-center">
                                    <input type="date" className="w-full p-2 border border-gray-300 rounded" />
                                    <HiCalendar className="w-6 h-6 ml-2 text-gray-500" />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Responsable:</label>
                                <input type="text" className="w-full p-2 border border-gray-300 rounded" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Asunto:</label>
                                <input type="text" className="w-full p-2 border border-gray-300 rounded" />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Detalle del Asunto:</label>
                            <textarea className="w-full p-2 border border-gray-300 rounded" rows="3"></textarea>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div className="flex flex-col md:flex-row gap-4 w-full">
                                <div className="w-full md:w-1/2">
                                    <label className="block text-sm font-medium mb-1">Criterios:</label>
                                    <select className="w-full p-2 border border-gray-300 rounded">
                                        <option value="">Seleccione un criterio</option>
                                        <option value="criterio1">Criterio 1</option>
                                        <option value="criterio2">Criterio 2</option>
                                    </select>
                                </div>
                                <div className="w-full md:w-1/2">
                                    <label className="block text-sm font-medium mb-1">Estrategia a Seguir:</label>
                                    <input type="text" className="w-full p-2 border border-gray-300 rounded" />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div className="flex flex-col md:flex-row gap-4 w-full">
                                <div className="w-full md:w-1/2">
                                    <label className="block text-sm font-medium mb-1">Clasificación:</label>
                                    <select className="w-full p-2 border border-gray-300 rounded">
                                        <option value="">Seleccione una clasificación</option>
                                        <option value="clasificacion1">Clasificación 1</option>
                                        <option value="clasificacion2">Clasificación 2</option>
                                    </select>
                                </div>
                                <div className="w-full md:w-1/2">
                                    <label className="block text-sm font-medium mb-1">Compromiso del Estudiante:</label>
                                    <input type="text" className="w-full p-2 border border-gray-300 rounded" />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div className="flex flex-col md:flex-row gap-4 w-full">
                                <div className="w-full md:w-1/2">
                                    <label className="block text-sm font-medium mb-1">Periodo:</label>
                                    <select className="w-full p-2 border border-gray-300 rounded">
                                        <option value="">Seleccione un periodo</option>
                                        <option value="periodo1">Periodo 1</option>
                                        <option value="periodo2">Periodo 2</option>
                                    </select>
                                </div>
                                <div className="w-full md:w-1/2">
                                    <label className="block text-sm font-medium mb-1">Protocolo Utilizado:</label>
                                    <input type="text" className="w-full p-2 border border-gray-300 rounded" />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded">Guardar</button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default FormularioConvivencia;
