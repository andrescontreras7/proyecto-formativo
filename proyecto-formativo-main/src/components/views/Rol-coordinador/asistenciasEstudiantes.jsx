import React, { useState, useEffect } from 'react';
import { FiArrowLeft, FiEdit } from 'react-icons/fi';
import Aside from './AsideCO';
import Modal from '../modal';
import { Link } from 'react-router-dom';

const Asistenciafor = () => {
  const [students, setStudents] = useState([]);
  const [modal, setModal] = useState(false);

  const ModalOpen = () => {
    setModal(!modal);
  };

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch('http://localhost:3001/appi/estudiante');
        if (!response.ok) {
          throw new Error('Error al obtener los datos de los estudiantes');
        }
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchStudents();
  }, []);

  return (
    <>
      <div className="flex bg-indigo-100 min-h-screen">
        <aside className="w-[15%]">
          <Aside />
        </aside>
        <div className="h-screen m-auto w-screen bg-[#A6DCF1] ">
          <div className="flex h-[] items-center bg-purple-500 bg-opacity-30 mt-4 w-[80vw] rounded-xl m-auto mb-4">
            <FiArrowLeft className="text-blue-500 text-2xl mr-2 cursor-pointer" />
            <h1 className="p-2 text-2xl font-bold">Captura de Asistencia</h1>
          </div>
          <div className="bg-[#AEE4F5] overflow-y-auto lg:h-[80%] w-[80%] shadow-[0_8px_10px_8px_rgba(0,0,0,0.08)] rounded-3xl container mx-auto mt-8 p-8 ">
            <div className="mb-4">
              <h2 className="float-right text-lg font-bold">Fecha: 27 de Diciembre de 2023</h2>
              <div className="flex items-center space-x-4">
                <p className="text-green-500 font-bold">Presente: <span className="bg-green-500 text-white rounded-full px-2">27</span></p>
                <p className="text-yellow-500 font-bold">Presente con Retardos: <span className="bg-yellow-500 text-white rounded-full px-2">1</span></p>
                <p className="text-orange-500 font-bold">Ausente: <span className="bg-orange-500 text-white rounded-full px-2">1</span></p>
                <p className="text-blue-500 font-bold">Asistencia: <span className="bg-blue-500 text-white rounded-full px-2">100%</span></p>
              </div>
            </div>
            <div className="mb-8">
              <h4 className="text-md font-bold mb-2">Se encuentran 28 estudiantes</h4>
              <table className="min-w-full">
                <thead>
                  <tr className='mr-20'>
                    <th className="mr-20 p-2">No.L</th>
                    <th className="p-2">NOMBRE</th>
                    <th className="p-2"> MATRICULA</th>
                    <th className="p-2">ASISTENCIA</th>
                    <th className="p-2">ACCIONES</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {students.map((student, index) => (
                    <tr key={index} className="border-t-2 border-gray-400">
                      <td className="p-2">{index + 1}</td>
                      <td className="text-cente p-2">{student.estudnombre}</td>
                      <td className="p-2">{student.estudid}</td>
                      <td className="p-2">
                        <span className="bg-green-500 rounded-full h-4 w-4 inline-block mr-2"></span>
                        Presente
                      </td>
                      <td className="p-2">
                        <button onClick={ModalOpen} className="bg-blue-500 text-white p-2 rounded">
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
      {modal && <Modal />}
    </>
  );
};

export default Asistenciafor;
