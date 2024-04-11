import React, { useState, useEffect } from 'react';
import { FiArrowLeft, FiMoreVertical } from 'react-icons/fi';
import Modal from '../modal';
import { Link } from 'react-router-dom';

const Listado = () => {
  const [students, setStudents] = useState([]);
  const [modal, setModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const ModalOpen = (student) => {
    setSelectedStudent(student);
    setModal(true);
  };

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch('http://localhost:3001/appi/estudiante');
        if (!response.ok) {
          throw new Error('Error al obtener los datos de los estudiantes');
        }
        const data = await response.json();
        const updatedStudents = data.map(student => ({
          id: student.estudid, 
          nombre: student.estudnombre, 
          telefono: student.estudtelefono, 
          grado: '3°',
          fechaNacimiento: '14-02-2001',
          nombreAcudiente: 'Juan Isaza',
          parentezco: 'Esposo',
          direccion: 'calle 5b # 14-f15'
        }));
        setStudents(updatedStudents);
      } catch (error) {
        console.error('Error al obtener los datos de los estudiantes:', error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className="flex bg-indigo-100 min-h-screen overflow-hidden">
      <div className="h-screen w-screen bg-[#A6DCF1]">
        <div className="flex items-center bg-purple-500 bg-opacity-30 mt-4 w-[80vw] rounded-xl m-auto mb-4">
          <FiArrowLeft className="text-blue-500 text-2xl mr-2 cursor-pointer" />
          <h1 className="p-2 text-2xl font-bold">Listado </h1>
        </div>
        <div className="flex justify-center">
          <div className="mt-4 flex items-center w-[50%] justify-center">
            <select
              name=""
              className="h-[45px] w-[11%] mr-2 p-1 rounded-lg"
              id="filtro"
            >
              <option value="">Grado</option>
              <option value="">Grado 1° A</option>
              <option value="">Grado 1° B</option>
              <option value="">Grado 2° A</option>
              <option value="">Grado 2° B</option>
              <option value="">Grado 3° A</option>
              <option value="">Grado 3° B</option>
            </select>
            <select
              name=""
              className="h-[45px] w-[11%] p-1 rounded-lg"
              id="filtro1"
            >
              <option value="">Jornada</option>
              <option value="">Mañana</option>
              <option value="">Tarde</option>
            </select>
          </div>
        </div>
        <div className="bg-[#AEE4F5] overflow-y-auto lg:h-[calc(100% - 190px)] w-screen md:w-[80%] shadow-[0_8px_10px_8px_rgba(0,0,0,0.08)] rounded-3xl container mx-auto mt-8 p-8 ">
          <div className="mb-8" style={{ maxHeight: 'calc(100vh - 300px)', overflowY: 'auto' }}>
            <table className="min-w-full rounded-full">
              <thead>
                <tr className="mr-4 bg-black rounded-xl text-white">
                  <th className="mr-4 p-2 ">N°</th>
                  <th className="p-2">Nombre del estudiante</th>
                  <th className="p-2"> Grado</th>
                  <th className="p-2">fecha de nacimiento</th>
                  <th className="p-2">Nombre del acudiente</th>
                  <th className="p-2">Parentezco</th>
                  <th className="p-2">Telefono del acudiente</th>
                  <th className="p-2">Direccion</th>
                  <th className="p-4 ml-[11%]">Acciones</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {students.map((student, index) => (
                  <tr key={index} className="border-t-2 border-gray-400">
                    <td className="p-2">{student.id}</td>
                    <td className="text-center p-2">{student.nombre}</td>
                    <td className="p-2">{student.grado}</td>
                    <td className="p-2">{student.fechaNacimiento}</td>
                    <td className="p-2">{student.nombreAcudiente}</td>
                    <td className="p-2">{student.parentezco}</td>
                    <td className="p-2">{student.telefono}</td>
                    <td className="p-2">{student.direccion}</td>
                    <td className="p-2">
                      <button onClick={() => ModalOpen(student)} className="bg-blue-500 text-white p-2 rounded">
                        <FiMoreVertical className="text-xl ml-[11%]" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {modal && selectedStudent && (
        <Modal titulo={selectedStudent.nombre}>
          <li className="p-2">
            <Link> Editar Estudiante</Link>
          </li>
          <li className="p-2">
            <Link> Observaciones</Link>
          </li>
          <li className="p-2">
            <Link>Eliminar</Link>
          </li>
          <li className="p-2">
            <Link> Informacion del estudiante</Link>
          </li>
        </Modal>
      )}
    </div>
  );
};

export default Listado;
