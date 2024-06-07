import React from 'react';
import { Link } from 'react-router-dom';

export default function Curso({ titulo, descripcion, imagen, enlace }) {
  return (
    <Link to={enlace} className="w-full sm:w-80 lg:w-96  p-2">
      <div className="border    p-1 border-gray-300 shadow-lg rounded-md overflow-hidden hover:shadow-xl transition-all bg-[#6f99e1] bg-opacity-25 duration-300 hover:border-[#626cb8] ">
       <div className=''>
        <img src={imagen} alt={titulo} className="w-full border   rounded-md h-64 object-cover" />
       </div>
        <div className="p-4">
          <h2 className="font-bold text-2xl text-gray-700 uppercase mb-2">{titulo}s</h2>
          <div className='h-12 text-nowrap'>
            <p className="text-gray-700 font-semibold overflow-hidden text-ellipsis  ">{descripcion}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}