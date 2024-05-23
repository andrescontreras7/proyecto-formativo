import React, { useState } from 'react';
import { HiArrowSmallLeft } from "react-icons/hi2";
import Layout from '../../components/layaout';

const Listadocentes = () => {
  const [filtros, setFiltros] = useState({
    grado: '',
    jornada: '',
    fecha: ''
  });

  const handleFiltroChange = (filtro, valor) => {
    setFiltros({ ...filtros, [filtro]: valor });
  };

  // Datos de ejemplo para la tabla
  const datos = [
    { nombre: 'Juan Pérez', correo: 'juan@example.com', rol: 'Profesor', estado: 'Activo' },
    { nombre: 'María García', correo: 'maria@example.com', rol: 'Profesora', estado: 'Inactivo' },
    { nombre: 'Carlos López', correo: 'carlos@example.com', rol: 'Asistente', estado: 'Activo' },
    { nombre: 'Juan Pérez', correo: 'juan@example.com', rol: 'Profesor', estado: 'Activo' },
    // Agrega más datos si es necesario
  ];

  return (
    <Layout titulo={"Listado de docentes"} icono={<HiArrowSmallLeft className='text-xl' />}>
      <div className='pb-2 w-full bg-[#ffffff] h-auto sm:h-[86vh] shadow-[0_8px_20px_12px_rgba(0,0,0,0.08)] rounded-md px-4 py-2'>
        <Filtros filtros={filtros} onFiltroChange={handleFiltroChange} />
        <hr className="border-gray-200" />
        <TablaDocentes datos={datos} filtros={filtros} />
      </div>
    </Layout>
  );
}

export default Listadocentes;

const Filtros = ({ filtros, onFiltroChange }) => {
  return (
    <div className="mb-4 px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between">
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        {/* Filtro de Grado */}
        <div>
          <label htmlFor="grado" className="block text-sm font-medium text-gray-700">Grado:</label>
          <select
            id="grado"
            name="grado"
            value={filtros.grado}
            onChange={(e) => onFiltroChange('grado', e.target.value)}
            className="mt-1 block w-full sm:w-32 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Todos</option>
            <option value="Primero">Primero</option>
            <option value="Segundo">Segundo</option>
            <option value="Tercero">Tercero</option>
            {/* Agrega más opciones de grado si es necesario */}
          </select>
        </div>
        {/* Filtro de Jornada */}
        <div>
          <label htmlFor="jornada" className="block text-sm font-medium text-gray-700">Jornada:</label>
          <select
            id="jornada"
            name="jornada"
            value={filtros.jornada}
            onChange={(e) => onFiltroChange('jornada', e.target.value)}
            className="mt-1 block w-full sm:w-32 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Todas</option>
            <option value="Mañana">Mañana</option>
            <option value="Tarde">Tarde</option>
            {/* Agrega más opciones de jornada si es necesario */}
          </select>
        </div>
        {/* Filtro de Fecha */}
        <div>
          <label htmlFor="fecha" className="block text-sm font-medium text-gray-700">Fecha:</label>
          <input
            type="date"
            id="fecha"
            name="fecha"
            value={filtros.fecha}
            onChange={(e) => onFiltroChange('fecha', e.target.value)}
            className="mt-1 block w-full sm:w-40 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>
    </div>
  );
};

const TablaDocentes = ({ datos, filtros }) => {
  const filtradosPorGrado = filtros.grado ? datos.filter(docente => docente.grado === filtros.grado) : datos;
  const filtradosPorJornada = filtros.jornada ? filtradosPorGrado.filter(docente => docente.jornada === filtros.jornada) : filtradosPorGrado;
  const filtradosPorFecha = filtros.fecha ? filtradosPorJornada.filter(docente => docente.fecha === filtros.fecha) : filtradosPorJornada;

  return (
    <div className="overflow-x-auto shadow-md mt-4">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Nombre
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Correo
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Rol
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Estado
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {filtradosPorFecha.map((docente, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{docente.nombre}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{docente.correo}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{docente.rol}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${docente.estado === 'Activo' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {docente.estado}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};