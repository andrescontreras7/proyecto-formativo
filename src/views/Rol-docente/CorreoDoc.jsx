import React, { useRef, useState, useEffect, useContext } from 'react';
import Layout from '../../components/layaout';
import JoditEditor from 'jodit-react';
import { HiArrowSmallLeft } from "react-icons/hi2";
import { fetchEstudiantes } from '../../endpoints/useGet';
import { counterContext } from '../../../context/CRMcontext';

const CorreoDoc = () => {
    const editor = useRef(null);
    const { auth } = useContext(counterContext);

    const [asignaturaData, setAsignaturaData] = useState({
        nombre: "",
        descripcion: "",
        imagen: "",
    });

    const [estudiantes, setEstudiantes] = useState([]);
    const [selectedEstudiante, setSelectedEstudiante] = useState("");
    const [estudiantesFetched, setEstudiantesFetched] = useState(false);
    const [error, setError] = useState({
        nombre: '',
        selectedEstudiante: '',
        descripcion: '',
    });

    const config = {
        readonly: false,
        height: '250px',
    };

    useEffect(() => {
        if (!estudiantesFetched) {
            fetchEstudiantes(auth)
                .then((data) => {
                    setEstudiantes(data.data);
                    setEstudiantesFetched(true);
                })
                .catch((error) => {
                    console.error('Error al cargar estudiantes:', error);
                });
        }
    }, [auth, estudiantesFetched]);

    const actualizarState = (e) => {
        const { name, value } = e.target;
        setAsignaturaData(prevState => ({
            ...prevState,
            [name]: value,
        }));
        setError(prevError => ({
            ...prevError,
            [name]: value.trim() === '' ? 'Este campo es requerido' : '',
        }));
    };

    const handleEstudianteChange = (e) => {
        const value = e.target.value;
        setSelectedEstudiante(value);
        setError(prevError => ({
            ...prevError,
            selectedEstudiante: value === '' ? 'Este campo es requerido' : '',
        }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const newErrors = {
            nombre: asignaturaData.nombre.trim() === '' ? 'Este campo es requerido' : '',
            selectedEstudiante: selectedEstudiante === '' ? 'Este campo es requerido' : '',
            descripcion: asignaturaData.descripcion.trim() === '' ? 'Este campo es requerido' : '',
        };
        setError(newErrors);

        if (!Object.values(newErrors).some(err => err !== '')) {
            // Lógica para enviar el formulario
        }
    };

    return (
        <Layout titulo={"Correo docente"} icono={<HiArrowSmallLeft className='text-2xl font-bold' />} >
            <div className="bg-[#ffffff] shadow-[0_8px_20px_12px_rgba(0,0,0,0.08)] w-full h-[85vh] 2xl:h-[87vh] flex justify-center rounded-md">
                <div className="flex flex-col p-8 text-gray-800 lg:w-4/5">
                    <div className="flex-1 relative rounded">
                        <form className="w-[80%] m-auto" onSubmit={handleFormSubmit}>
                            <div className="bg-white rounded shadow-sm">
                                <div className="mb-4">
                                    <label className="text-sm block mb-2">Asunto</label>
                                    <input
                                        type="text"
                                        name='nombre'
                                        value={asignaturaData.nombre}
                                        className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none focus:bg-white"
                                        onChange={actualizarState}
                                    />
                                    {error.nombre && <p className="text-red-500">{error.nombre}</p>}
                                </div>
                                <div className="mb-4">
                                    <label className="text-sm block mb-2">Estudiante</label>
                                    <select
                                        className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none focus:bg-white"
                                        value={selectedEstudiante}
                                        onChange={handleEstudianteChange}
                                    >
                                        <option value="">Seleccionar estudiante</option>
                                        {estudiantes.map((estudiante) => (
                                            <option key={estudiante.estudid} value={`${estudiante.estudnombre} ${estudiante.estudapellido}`}>
                                                {`${estudiante.estudnombre} ${estudiante.estudapellido}`}
                                            </option>
                                        ))}
                                    </select>
                                    {error.selectedEstudiante && <p className="text-red-500">{error.selectedEstudiante}</p>}
                                </div>
                                <div className="mb-2">
                                    <label className="text-sm block mb-2">Descripción del correo</label>
                                    <JoditEditor
                                        ref={editor}
                                        name="descripcion"
                                        value={asignaturaData.descripcion}
                                        config={config}
                                        tabIndex={1}
                                        style={{ height: '500px' }}
                                        onChange={(content) => {
                                            setAsignaturaData(prevState => ({
                                                ...prevState,
                                                descripcion: content
                                            }));
                                            setError(prevError => ({
                                                ...prevError,
                                                descripcion: content.trim() === '' ? 'Este campo es requerido' : '',
                                            }));
                                        }}
                                    />
                                    {error.descripcion && <p className="text-red-500">{error.descripcion}</p>}
                                </div>
                                <div>
                                    <label className="text-sm block mb-2">Subir imagen</label>
                                    <input type="file" className="block border-none bg-gray-200" />
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

export default CorreoDoc;
