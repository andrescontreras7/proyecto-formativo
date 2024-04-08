// VistaEstudiante.js

import React, { useState } from 'react';
import { FiArrowLeft, FiEdit, FiMonitor, FiBarChart2, FiMoreVertical } from 'react-icons/fi';
import Modal from '../modal';
import { Link } from 'react-router-dom';

const Listado = () => {
  const [modal, setModal] = useState(false);

  const ModalOpen = () => {
    setModal(!modal);
  };

  return (
    <div className="flex bg-indigo-100 min-h-screen">
      <div className="h-screen m-auto w-screen bg-[#A6DCF1]">
        <div className="flex h-[] items-center bg-purple-500 bg-opacity-30 mt-4 w-[80vw] rounded-xl m-auto mb-4">
          <FiArrowLeft className="text-blue-500 text-2xl mr-2 cursor-pointer" />
          <h1 className="p-2 text-2xl font-bold">Listado </h1>
        </div>
        <div className="flex">
          <div className="mt-4 flex items-center w-[10%]">
          
           
          </div>
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
        <div className="bg-[#AEE4F5] overflow-y-auto bg-white lg:h-[80%] w-screen md:w-[80%] shadow-[0_8px_10px_8px_rgba(0,0,0,0.08)] rounded-3xl container mx-auto mt-8 p-8 ">
          <div className="mb-8">
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
                {modal && (
                  <Modal titulo={"Andres cavadia"}>
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

                <tr className="border-t-2 border-gray-400">
                  <td className="p-2">1 </td>
                  <td className="text-center p-2">Camilo andres </td>
                  <td className="p-2">3°</td>
                  <td className="p-2">14-02-2001</td>
                  <td className="p-2">Juan Isaza</td>
                  <td className="p-2">Esposo</td>
                  <td className="p-2">30433733784</td>
                  <td className="p-2">calle 5b # 14-f15</td>
                  <td className="p-2">
                    <button onClick={ModalOpen} className="bg-blue-500 text-white p-2 rounded">
                      <FiMoreVertical className="text-xl ml-[11%]" />
                    </button>
                  </td>
                </tr>
                <tr className="border-t-2 border-gray-400">
                  <td className="p-2">1 </td>
                  <td className="text-center p-2">Camilo andres </td>
                  <td className="p-2">3°</td>
                  <td className="p-2">14-02-2001</td>
                  <td className="p-2">Juan Isaza</td>
                  <td className="p-2">Esposo</td>
                  <td className="p-2">30433733784</td>
                  <td className="p-2">calle 5b # 14-f15</td>
                  <td className="p-2">
                    <button onClick={ModalOpen} className="bg-blue-500 text-white p-2 rounded">
                      <FiMoreVertical className="text-xl ml-[11%]" />
                    </button>
                  </td>
                </tr>
                <tr className="border-t-2 border-gray-400">
                  <td className="p-2">1 </td>
                  <td className="text-center p-2">Camilo andres </td>
                  <td className="p-2">3°</td>
                  <td className="p-2">14-02-2001</td>
                  <td className="p-2">Juan Isaza</td>
                  <td className="p-2">Esposo</td>
                  <td className="p-2">30433733784</td>
                  <td className="p-2">calle 5b # 14-f15</td>
                  <td className="p-2">
                    <button onClick={ModalOpen} className="bg-blue-500 text-white p-2 rounded">
                      <FiMoreVertical className="text-xl ml-[11%]" />
                    </button>
                  </td>
                </tr>
                <tr className="border-t-2 border-gray-400">
                  <td className="p-2">1 </td>
                  <td className="text-center p-2">Camilo andres </td>
                  <td className="p-2">3°</td>
                  <td className="p-2">14-02-2001</td>
                  <td className="p-2">Juan Isaza</td>
                  <td className="p-2">Esposo</td>
                  <td className="p-2">30433733784</td>
                  <td className="p-2">calle 5b # 14-f15</td>
                  <td className="p-2">
                    <button onClick={ModalOpen} className="bg-blue-500 text-white p-2 rounded">
                      <FiMoreVertical className="text-xl ml-[11%]" />
                    </button>
                  </td>
                </tr>
                <tr className="border-t-2 border-gray-400">
                  <td className="p-2">1 </td>
                  <td className="text-center p-2">Camilo andres </td>
                  <td className="p-2">3°</td>
                  <td className="p-2">14-02-2001</td>
                  <td className="p-2">Juan Isaza</td>
                  <td className="p-2">Esposo</td>
                  <td className="p-2">30433733784</td>
                  <td className="p-2">calle 5b # 14-f15</td>
                  <td className="p-2">
                    <button onClick={ModalOpen} className="bg-blue-500 text-white p-2 rounded">
                      <FiMoreVertical className="text-xl ml-[11%]" />
                    </button>
                  </td>
                </tr>
                <tr className="border-t-2 border-gray-400">
                  <td className="p-2">1 </td>
                  <td className="text-center p-2">Camilo andres </td>
                  <td className="p-2">3°</td>
                  <td className="p-2">14-02-2001</td>
                  <td className="p-2">Juan Isaza</td>
                  <td className="p-2">Esposo</td>
                  <td className="p-2">30433733784</td>
                  <td className="p-2">calle 5b # 14-f15</td>
                  <td className="p-2">
                    <button onClick={ModalOpen} className="bg-blue-500 text-white p-2 rounded">
                      <FiMoreVertical className="text-xl ml-[11%]" />
                    </button>
                  </td>
                </tr>
                <tr className="border-t-2 border-gray-400">
                  <td className="p-2">1 </td>
                  <td className="text-center p-2">Camilo andres </td>
                  <td className="p-2">3°</td>
                  <td className="p-2">14-02-2001</td>
                  <td className="p-2">Juan Isaza</td>
                  <td className="p-2">Esposo</td>
                  <td className="p-2">30433733784</td>
                  <td className="p-2">calle 5b # 14-f15</td>
                  <td className="p-2">
                    <button onClick={ModalOpen} className="bg-blue-500 text-white p-2 rounded">
                      <FiMoreVertical className="text-xl ml-[11%]" />
                    </button>
                  </td>
                </tr>
                <tr className="border-t-2 border-gray-400">
                  <td className="p-2">1 </td>
                  <td className="text-center p-2">Camilo andres </td>
                  <td className="p-2">3°</td>
                  <td className="p-2">14-02-2001</td>
                  <td className="p-2">Juan Isaza</td>
                  <td className="p-2">Esposo</td>
                  <td className="p-2">30433733784</td>
                  <td className="p-2">calle 5b # 14-f15</td>
                  <td className="p-2">
                    <button onClick={ModalOpen} className="bg-blue-500 text-white p-2 rounded">
                      <FiMoreVertical className="text-xl ml-[11%]" />
                    </button>
                  </td>
                </tr>
                <tr className="border-t-2 border-gray-400">
                  <td className="p-2">1 </td>
                  <td className="text-center p-2">Camilo andres </td>
                  <td className="p-2">3°</td>
                  <td className="p-2">14-02-2001</td>
                  <td className="p-2">Juan Isaza</td>
                  <td className="p-2">Esposo</td>
                  <td className="p-2">30433733784</td>
                  <td className="p-2">calle 5b # 14-f15</td>
                  <td className="p-2">
                    <button onClick={ModalOpen} className="bg-blue-500 text-white p-2 rounded">
                      <FiMoreVertical className="text-xl ml-[11%]" />
                    </button>
                  </td>
                </tr>
                <tr className="border-t-2 border-gray-400">
                  <td className="p-2">1 </td>
                  <td className="text-center p-2">Camilo andres </td>
                  <td className="p-2">3°</td>
                  <td className="p-2">14-02-2001</td>
                  <td className="p-2">Juan Isaza</td>
                  <td className="p-2">Esposo</td>
                  <td className="p-2">30433733784</td>
                  <td className="p-2">calle 5b # 14-f15</td>
                  <td className="p-2">
                    <button onClick={ModalOpen} className="bg-blue-500 text-white p-2 rounded">
                      <FiMoreVertical className="text-xl ml-[11%]" />
                    </button>
                  </td>
                </tr>
                <tr className="border-t-2 border-gray-400">
                  <td className="p-2">1 </td>
                  <td className="text-center p-2">Camilo andres </td>
                  <td className="p-2">3°</td>
                  <td className="p-2">14-02-2001</td>
                  <td className="p-2">Juan Isaza</td>
                  <td className="p-2">Esposo</td>
                  <td className="p-2">30433733784</td>
                  <td className="p-2">calle 5b # 14-f15</td>
                  <td className="p-2">
                    <button onClick={ModalOpen} className="bg-blue-500 text-white p-2 rounded">
                      <FiMoreVertical className="text-xl ml-[11%]" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listado;
