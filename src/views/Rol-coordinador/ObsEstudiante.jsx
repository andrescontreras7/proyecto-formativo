import React, { useRef, useEffect } from 'react';
import Layout from '../../components/layaout'; // Corregido el nombre del componente importado

const ObserAspectos = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.size = inputRef.current.value.length || 1;
        }
    }, [inputRef]);

    return (
        <Layout>
        <div className="flex space-x-4 mb-6 p-4">
        <button className="bg-indigo-500 text-white px-4 py-2 rounded">Observación</button>
         <button className="bg-indigo-500 text-white px-4 py-2 rounded">Registro de Criterios</button>
             </div>
            <div className="min-h-screen bg-gray-100 p-8">
                <div className="container mx-auto p-4 bg-white rounded shadow">
                    
                    <div className="mb-4">
                        <h2 className="text-lg font-semibold mb-2">Registros de Aspectos</h2>
                        <div className=" rounded p-4 mb-4">
                            <div className="flex space-x-2">
                                <select className="w-1/2 p-1 border rounded mb-4">
                                    <option value="">Seleccione un aspecto</option>
                                    <option value="aspecto1">Aspecto 1</option>
                                    <option value="aspecto2">Aspecto 2</option>
                                    <option value="aspecto3">Aspecto 3</option>
                                </select>
                                <input type="text" ref={inputRef} className="w-1/2 p-1 mb-4 border border-gray-300 rounded  " placeholder="" />
                                <button className="bg-indigo-400 text-white px-2 py-2 mb-4 rounded">Agregar+</button>
                            </div>
                            <ul className="list-inside">
                                <li>01 Atención</li>
                             
                            </ul>
                        </div>
                        <button className="bg-red-400 text-white px-4 py-2 rounded">eliminar aspecto</button>
                    </div>
                </div>
                <div className="container mx-auto mt-8 p-4 bg-white rounded shadow">
                    <h2 className="text-lg font-semibold mb-2">Registro de Criterios por Aspecto</h2>
                    
                    
                    <div className="mb-4 flex space-x-4">
                        <div className="w-1/4">
                            <label className="block text-sm font-medium mb-1">Código:</label>
                
                            <input type="text" className="w-full p-2 border border-gray-300 rounded" value="0808" readOnly />
                            <button className="bg-indigo-400 text-white px-2 py-2 mb-4 rounded">Agregar+</button>
                        </div>

                        <div className="w-3/4">
                            <label className="block text-sm  mb-1">Descripción:</label>
                            <input
                                type="text"
                                ref={inputRef}
                                className="w-full p-2 border border-gray-300 rounded "
                                defaultValue="Se comporta bien en clases y es ordenado"
                            />
                        </div>
                    </div>
                    <button className="bg-indigo-400 text-white px-4 py-2 rounded">Guardar</button>
                </div>
            </div>
        </Layout>
    );
};

export default ObserAspectos;