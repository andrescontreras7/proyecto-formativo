import React from 'react';
import { Link } from 'react-router-dom';

const ComponenteActividad = ({ titulo, descripcion, actividad, to }) => {
  return (
    <Link to={to} className="w-full sm:w-80 lg:w-80">
      <div className="border border-gray-200 hover:border-blue-500 bg-indigo-100 shadow-lg rounded-md overflow-hidden hover:shadow-xl transition-all duration-300">
        <div className="p-4">
         <div className="mt-2">
            <p className="text-sm text-gray-500">{`Tarea`}</p>
          </div> 
          <div className='mb-2'>
            <p className="text-gray-600 font-semibold">Descripcion: {descripcion}</p>
          </div>
          
          <div className='flex items-center justify-between text-gray-600 font-semibold'>
            <p>{`Grupo: ${actividad.id_grupoFK}`}</p>
        
          </div>
          <span className='flex items-center justify-between text-gray-600 font-semibold' >
            <p>{`Fecha de Entrega: ${actividad.fec_entre}`}</p>
          </span>
         
        </div>
      </div>
    </Link>
  );
};

export default ComponenteActividad;
