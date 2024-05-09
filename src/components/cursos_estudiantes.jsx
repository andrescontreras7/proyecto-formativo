import React from 'react';
import { Link } from 'react-router-dom';

export default function Curso({ titulo, descripcion, imagen, enlace }) {
  return (
    <Link to={enlace} className="w-full sm:w-80 lg:w-96  p-2">
      <div className="border    p-1 border-gray-300 shadow-lg rounded-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-[#626cb8] ">
        <img src={imagen} alt={titulo} className="w-full h-64 object-cover" />
        <div className="p-4">
          <h2 className="font-bold text-2xl mb-2">{titulo}s</h2>
          <p className="text-gray-700">{descripcion}</p>
        </div>
      </div>
    </Link>
  );
}