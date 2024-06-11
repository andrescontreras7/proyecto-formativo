import React, { useRef, useEffect } from 'react';
import Layout from '../../components/layaout'; 
const ObserAspectos = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.size = inputRef.current.value.length || 1;
        }
    }, [inputRef]);

    return (
        <Layout>
            <div className="min-h-screen bg-gray-100 p-4 md:p-8">
                <div className="flex justify-center space-x-4 mb-6">
                    <button className="bg-indigo-500 text-white px-4 py-2 rounded">Observación</button>
                    <button className="bg-indigo-500 text-white px-4 py-2 rounded">Registro de Criterios</button>
                </div>
                <div className="container mx-auto p-4 bg-white rounded shadow">
                    <div className="mb-4">
                        <h2 className="text-lg font-semibold mb-2">Registros de Aspectos</h2>
                        <div className="rounded p-4 mb-4">
                            <div className="flex flex-col md:flex-row md:space-x-2">
                                <select className="w-full md:w-1/2 p-1 border rounded mb-4">
                                    <option value="">Seleccione un aspecto</option>
                                    <option value="aspecto1">Aspecto 1</option>
                                    <option value="aspecto2">Aspecto 2</option>
                                    <option value="aspecto3">Aspecto 3</option>
                                </select>
                                <input type="text" ref={inputRef} className="w-full md:w-1/2 p-1 mb-4 border border-gray-300 rounded" placeholder="" />
                                <button className="bg-indigo-400 text-white px-2 py-2 mb-4 rounded">Agregar+</button>
                            </div>
                            <ul className="list-inside">
                                <li>01 Atención</li>
                            </ul>
                        </div>
                        <button className="bg-red-400 text-white px-4 py-2 rounded">Eliminar aspecto</button>
                    </div>
                </div>
                <div className="container mx-auto mt-8 p-4 bg-white rounded shadow">
                    <h2 className="text-lg font-semibold mb-2">Registro de Criterios por Aspecto</h2>
                    <div className="mb-4 flex flex-col md:flex-row md:space-x-4">
                        <div className="w-full md:w-1/4 mb-4 md:mb-0">
                            <label className="block text-sm font-medium mb-1">Código:</label>
                            <input type="text" className="w-full p-2 border border-gray-300 rounded" value="0808" readOnly />
                        </div>
                        <div className="w-full md:w-3/4 flex flex-col md:flex-row md:space-x-2">
                            <div className="flex-grow">
                                <label className="block text-sm mb-1">Descripción:</label>
                                <input
                                    type="text"
                                    ref={inputRef}
                                    className="w-full p-2 border border-gray-300 rounded"
                                    defaultValue="Se comporta bien en clases y es ordenado"
                                />
                            </div>
                            <div className="flex items-end">
                                <button className="bg-indigo-400 text-white px-2 py-2 mt-2 md:mt-0 rounded w-full md:w-auto">Agregar+</button>
                            </div>
                        </div>
                    </div>
                    <button className="bg-indigo-400 text-white px-4 py-2 rounded w-full md:w-auto">Guardar</button>
                </div>
            </div>
        </Layout>
    );
};

export default ObserAspectos;
