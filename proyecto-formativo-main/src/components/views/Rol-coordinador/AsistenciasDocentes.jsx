import React, { useState, useEffect } from 'react';
import { FiArrowLeft, FiEdit } from 'react-icons/fi';
import Aside from './AsideCO';
import { Link } from 'react-router-dom';

const AsistenciaDocente = () => {
  const [estudiantes, setEstudiantes] = useState([]);
  const [filtroGrado, setFiltroGrado] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/appi/estudiante');
        const data = await response.json();
        setEstudiantes(data);
      } catch (error) {
        console.error('Error al obtener datos de los estudiantes:', error);
      }
    };

    fetchData();
  }, []);

  const fakeData = [
    { estudnombre: 'Estudiante 3', estudapellido: 'Apellido 3', estudid: '3456789012' },
    { estudnombre: 'Estudiante 4', estudapellido: 'Apellido 4', estudid: '5678901234' },
    { estudnombre: 'Estudiante 5', estudapellido: 'Apellido 5', estudid: '7890123456' },
    { estudnombre: 'Estudiante 6', estudapellido: 'Apellido 6', estudid: '9012345678' },
    { estudnombre: 'Estudiante 7', estudapellido: 'Apellido 7', estudid: '1234567890' },
    { estudnombre: 'Estudiante 8', estudapellido: 'Apellido 8', estudid: '2345678901' },
    { estudnombre: 'Estudiante 9', estudapellido: 'Apellido 9', estudid: '3456789012' },
    { estudnombre: 'Estudiante 10', estudapellido: 'Apellido 10', estudid: '4567890123' },
    // Agrega más datos falsos según sea necesario
  ];

  const grado2a = [
    { estudnombre: 'Juan', estudapellido: 'Martínez', estudid: '3456789012' },
    { estudnombre: 'María', estudapellido: 'González', estudid: '5678901234' },
    { estudnombre: 'Luis', estudapellido: 'Fernández', estudid: '7890123456' },
    { estudnombre: 'Ana', estudapellido: 'López', estudid: '9012345678' },
    { estudnombre: 'Carlos', estudapellido: 'Díaz', estudid: '1234567890' },
    { estudnombre: 'Laura', estudapellido: 'Pérez', estudid: '2345678901' },
    { estudnombre: 'Pedro', estudapellido: 'Ruiz', estudid: '3456789012' },
    { estudnombre: 'Sofía', estudapellido: 'Sánchez', estudid: '4567890123' },
  ];
  
  const grado2b = [
    { estudnombre: 'Elena', estudapellido: 'Hernández', estudid: '5678901234' },
    { estudnombre: 'Diego', estudapellido: 'Ramírez', estudid: '7890123456' },
    { estudnombre: 'Julia', estudapellido: 'Alvarez', estudid: '9012345678' },
  ];
  
  const grado3a = [
    { estudnombre: 'Pablo', estudapellido: 'Jiménez', estudid: '1234567890' },
    { estudnombre: 'Lucía', estudapellido: 'Torres', estudid: '2345678901' },
    { estudnombre: 'Marcos', estudapellido: 'Santiago', estudid: '3456789012' },
  ];
  
  const grado3b = [
    { estudnombre: 'Valeria', estudapellido: 'Gómez', estudid: '4567890123' },
    { estudnombre: 'Gabriel', estudapellido: 'Castro', estudid: '5678901234' },
    { estudnombre: 'Eva', estudapellido: 'Morales', estudid: '7890123456' },
  ];
    // Agrega más datos falsos según sea necesario
  

  const handleFiltrarGrado = (grado) => {
    setFiltroGrado(grado);
  };

  const obtenerDatosGrado = () => {
    switch (filtroGrado) {
      case '1A':
        return estudiantes.filter((estudiante) => estudiante.grado === filtroGrado);
      case '1B':
        return fakeData; // Datos falsos para Grado 1° B
      case '2A':
        return grado2a; // Datos falsos para Grado 2° A
      case '2B':
        return grado2b; // Datos falsos para Grado 2° B
      case '3A':
        return grado3a; // Datos falsos para Grado 3° A
      case '3B':
        return grado3b; // Datos falsos para Grado 3° B
      default:
        return estudiantes;
    }
  };

  return (
    <div className="flex bg-indigo-100 min-h-screen">
      <aside className="w-[15%]">
        <Aside />
      </aside>
      <div className="h-screen m-auto w-screen  bg-[#A6DCF1] ">
        <div className="flex h-[] items-center  bg-purple-500 bg-opacity-30 mt-4    w-[80vw] rounded-xl  m-auto mb-4">
          <Link to="/Panel">
            <button>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c30b563c1b498bb6ee6166c046b0c99187a1cfb9c2ddcb702766aa4a24c16412?apiKey=83a41f7c3fac45f48041df59c87c3d79&"
                className="aspect-[1.22] object-contain object-center w-7 stroke-[3px] stroke-black overflow-hidden shrink-0 max-w-full"
              />
            </button>
          </Link>

          <h1 className=" p-2 text-2xl font-bold">Captura de Asistencia Estudiantes</h1>
        </div>
        <div className="bg-[#AEE4F5] overflow-y-auto lg:h-[80%] w-[80%] shadow-[0_8px_10px_8px_rgba(0,0,0,0.08)] rounded-3xl container mx-auto mt-8 p-8 ">
          <div className="mb-4">
            <h2 className="float-right text-lg font-bold">Fecha: 27 de Diciembre de 2023</h2>
            <div className="flex items-center space-x-4">
              <p className="text-green-500 font-bold">Presente: <span className="bg-green-500 text-white rounded-full px-2">{obtenerDatosGrado().length}</span></p>
              <p className="text-yellow-500 font-bold">Presente con Retardos: <span className="bg-yellow-500 text-white rounded-full px-2">0</span></p>
              <p className="text-orange-500 font-bold">Ausente: <span className="bg-orange-500 text-white rounded-full px-2">0</span></p>
              <p className="text-blue-500 font-bold">Asistencia: <span className="bg-blue-500 text-white rounded-full px-2">100%</span></p>
            </div>
          </div>
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <select
                className="h-[30px] w-[15%] mr-5 ml-4 p-1 rounded-xl"
                onChange={(e) => handleFiltrarGrado(e.target.value)}
              >
                <option value="">Grado</option>
                <option value="1A">Grado 1° A</option>
                <option value="1B">Grado 1° B</option>
                <option value="2A">Grado 2° A</option>
                <option value="2B">Grado 2° B</option>
                <option value="3A">Grado 3° A</option>
                <option value="3B">Grado 3° B</option>
              </select>
            </div>
            <h4 className="text-md font-bold mb-2">Se encuentran {obtenerDatosGrado().length} Docentes</h4>
            <table className="min-w-full ">
              <thead>
                <tr className="mr-20 ">
                  <th className="mr-20 p-2">No.L</th>
                  <th className=" p-2">NOMBRE</th>
                  <th className=" p-2"> CEDULA</th>
                  <th className=" p-2">ASISTENCIA</th>
                  <th className=" p-2">ACCIONES</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {obtenerDatosGrado().map((estudiante, index) => (
                  <tr key={index} className=" border-t-2 border-gray-400">
                    <td className="p-2">{index + 1}</td>
                    <td className=" text-cente p-2">{estudiante.estudnombre} {estudiante.estudapellido}</td>
                    <td className="p-2">{estudiante.estudid}</td>
                    <td className="p-2">
                      <span className="bg-green-500 rounded-full h-4 w-4 inline-block mr-2"></span>
                      Presente
                    </td>
                    <td className="p-2">
                      <button className="bg-blue-500 text-white p-2 rounded">
                        <FiEdit className="text-xl" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsistenciaDocente;
