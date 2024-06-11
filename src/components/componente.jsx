
import { Link } from 'react-router-dom';
import React from 'react';

export default function componente({titulo, descripcion,src, to }) {
  return (
    <Link to={to} className="w-full sm:w-80 lg:w-96  p-2">
    <div className="border hover:border-[#4A55A2] bg-[#6f99e1] bg-opacity-25  shadow-lg rounded-md overflow-hidden hover:shadow-xl transition-all duration-300  ">
     <div className=''>
      <img src={src} alt={titulo} className="w-full border   rounded-md h-64 object-cover" />
     </div>
      <div className="p-4">
        <h2 className="font-bold text-2xl text-gray-700 uppercase mb-2">{titulo}</h2>
        <div className='h-12 text-nowrap'>
          <p className="text-gray-700 font-semibold overflow-hidden text-ellipsis  ">{descripcion}</p>
        </div>
      </div>
    </div>
  </Link>
  );
}


