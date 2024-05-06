import React from 'react';
import { Link } from 'react-router-dom';
import { GoArrowLeft } from "react-icons/go";
import { GoChevronDown } from "react-icons/go";

const Horaslabor = () => {
  return (
    <div className='bg-[#A6DCF1] min-h-screen flex flex-col justify-center items-center relative'>
      <div className='bg-violet-500 bg-opacity-40 px-5 py-5 rounded-xl absolute top-5 left-80 right-1 max-w-6xl flex justify-between'>
        <Link to="/Coordinador" draggable="false">
          <button className="max-w-max flex items-center focus:outline-none rounded-full p-1">
            <div className="w-8 h-8 flex items-center justify-center text-white text-2xl">
              <GoArrowLeft size={40} color='black' />
            </div>
          </button>
        </Link>
        <div className="text-black text-xl font-semibold max-w-max mx-auto">Registro de horas laboradas</div>
      </div>

      {/* Contenedor de la tabla */}
      <div className='max-w-max p-5 rounded-2xl border bg-white z-10 mt-1 mr-20'>
        {/* Contenido de la tabla */}
        <table className="border-collapse border-gray-300 mx-auto my-4 w-auto">
          <thead>
            <tr>
              <th className="px-16 py-4 border-b-2">Nombre del docente</th>
              <th className="px-16 py-4 border-b-2">N° de mes</th>
              <th className="px-16 py-4 border-b-2">Horas trabajadas</th>
              <th className="px-16 py-4 border-b-2">Promedio</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-16 py-4 text-center">Juan</td>
              <td className="border border-gray-300 px-16 py-4 text-center flex items-center">Enero <button className="focus:outline-none"><GoChevronDown /></button></td>
              <td className="border border-gray-300 px-16 py-4 text-center">160</td>
              <td className="border border-gray-300 px-16 py-4 text-center">40</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-16 py-4 text-center">María</td>
              <td className="border border-gray-300 px-16 py-4 text-center flex items-center">Marzo <button className="focus:outline-none"><GoChevronDown /></button></td>
              <td className="border border-gray-300 px-16 py-4 text-center">176</td>
              <td className="border border-gray-300 px-16 py-4 text-center">44</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-16 py-4 text-center">Carlos</td>
              <td className="border border-gray-300 px-16 py-4 text-center flex items-center">Abril <button className="focus:outline-none"><GoChevronDown /></button></td>
              <td className="border border-gray-300 px-16 py-4 text-center">150</td>
              <td className="border border-gray-300 px-16 py-4 text-center">37.5</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-16 py-4 text-center">Carlos</td>
              <td className="border border-gray-300 px-16 py-4 text-center flex items-center">Mayo <button className="focus:outline-none"><GoChevronDown /></button></td>
              <td className="border border-gray-300 px-16 py-4 text-center">150</td>
              <td className="border border-gray-300 px-16 py-4 text-center">37.5</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-16 py-4 text-center">Carlos</td>
              <td className="border border-gray-300 px-16 py-4 text-center flex items-center">Junio <button className="focus:outline-none"><GoChevronDown /></button></td>
              <td className="border border-gray-300 px-16 py-4 text-center">150</td>
              <td className="border border-gray-300 px-16 py-4 text-center">37.5</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Horaslabor;
