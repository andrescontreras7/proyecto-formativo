import React, { useRef, useState } from 'react';
import Layout from '../../components/layaout';
import JoditEditor from 'jodit-react';

const RegistroA = () => {
    const editor = useRef(null)
    const [asignaturaData, setAsignaturaData] = useState({
        nombre: "",
        descripcion: "",
        imagen : "",
    })
    
    const config = {
        readonly: false, // all options from https://xdsoft.net/jodit/doc/
        height: '250px' // set a custom height
    }

    const actualizarState = (e) => {

        setAsignaturaData({

        ...asignaturaData,
        [e.target.name]: e.target.value

        })
        console.log(asignaturaData)

    }

    return (
        <Layout titulo={"Registro de Asignaturas"} >
        <div className="bg-[#ffffff]  shadow-[0_8px_20px_12px_rgba(0,0,0,0.08)] w-full h-[85vh] 2xl:h-[87vh] flex justify-center rounded-md">
                <div className="flex flex-col  p-8 text-gray-800   lg:w-4/5">
                    <div className="flex-1 relative  rounded ">
                        <form className="w-[80%]  m-auto ">
                            <div className=" bg-white rounded shadow-sm">
                                <div className="mb-4">
                                    <label className="text-sm block mb-2">Nombre de la Asignatura</label>
                                    <input type="text" name='nombre' className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none focus:bg-white" 
                                     
                                        onChange={actualizarState}
                                    />
                                </div>
                                <div className="mb-2 ">
                                    <label className="text-sm block mb-2">Descripción de la Asignatura</label>
                                    <JoditEditor
                                        ref={editor}
                                        name="descripcion"
                                        config={config}
                                        tabIndex={1} 
                                    
                                    
                                        style={{height: '500px'}} 
                                    />
                                </div>
                                <div>
                                <label className="text-sm block mb-2">Subir imagen </label>
                                    <input type="file" className="block border-none  bg-gray-200 " 
                                    
                                    />
                                </div>
                                <button className="w-full p-3 mt-4 bg-indigo-600 text-white rounded shadow hover:bg-indigo-500 transition-colors duration-200">Registrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default RegistroA;