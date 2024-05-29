import React, { useState } from 'react';
import Layout from '../../components/layaout';
import { HiArrowSmallLeft } from 'react-icons/hi2';

const GestionarPermisos = () => {
  const [grado, setGrado] = useState('');
  const [jornada, setJornada] = useState('');
  
  const handleGradoChange = (e) => setGrado(e.target.value);
  const handleJornadaChange = (e) => setJornada(e.target.value);

  const docentes = [
    { id: 1, nombre: 'Docente 1', grado: 'Primero', jornada: 'Mañana', submenu: 'Opción 1' },
    { id: 2, nombre: 'Docente 2', grado: 'Segundo', jornada: 'Tarde', submenu: 'Opción 2' },
    { id: 3, nombre: 'Docente 3', grado: 'Primero', jornada: 'Mañana', submenu: 'Opción 1' },
    { id: 4, nombre: 'Docente 4', grado: 'Segundo', jornada: 'Tarde', submenu: 'Opción 2' },
    { id: 5, nombre: 'Docente 5', grado: 'Primero', jornada: 'Mañana', submenu: 'Opción 1' },
    { id: 6, nombre: 'Docente 6', grado: 'Segundo', jornada: 'Tarde', submenu: 'Opción 2' },
    { id: 7, nombre: 'Docente 7', grado: 'Primero', jornada: 'Mañana', submenu: 'Opción 1' },
    { id: 8, nombre: 'Docente 8', grado: 'Segundo', jornada: 'Tarde', submenu: 'Opción 2' },
    { id: 9, nombre: 'Docente 9', grado: 'Primero', jornada: 'Mañana', submenu: 'Opción 1' },
    { id: 10, nombre: 'Docente 10', grado: 'Segundo', jornada: 'Tarde', submenu: 'Opción 2' },
    { id: 7, nombre: 'Docente 7', grado: 'Primero', jornada: 'Mañana', submenu: 'Opción 1' },
    { id: 8, nombre: 'Docente 8', grado: 'Segundo', jornada: 'Tarde', submenu: 'Opción 2' },
    { id: 9, nombre: 'Docente 9', grado: 'Primero', jornada: 'Mañana', submenu: 'Opción 1' },
    { id: 10, nombre: 'Docente 10', grado: 'Segundo', jornada: 'Tarde', submenu: 'Opción 2' },
    
    // Agrega más docentes según sea necesario
  ];

  const filteredDocentes = docentes.filter(docente => 
    (grado === '' || docente.grado === grado) && 
    (jornada === '' || docente.jornada === jornada)
  );

  return (
    <Layout titulo="Gestionar permisos" icono={<HiArrowSmallLeft className='text-xl' />}>
      <div className='pb-2 w-full bg-[#ffffff] h-[86vh] shadow-[0_8px_20px_12px_rgba(0,0,0,0.08)] rounded-md p-4'>
        <div className='mb-4 flex justify-center'>
          <div className='flex space-x-4 bg-blue-100 p-4 rounded-md'>
            <div className='flex items-center'>
              <label className='mr-2'>Grado:</label>
              <select value={grado} onChange={handleGradoChange} className='p-2 border rounded'>
                <option value=''>Todos</option>
                <option value='Primero'>Primero</option>
                <option value='Segundo'>Segundo</option>
                {/* Agrega más opciones según sea necesario */}
              </select>
            </div>
            <div className='flex items-center'>
              <label className='mr-2'>Jornada:</label>
              <select value={jornada} onChange={handleJornadaChange} className='p-2 border rounded'>
                <option value=''>Todas</option>
                <option value='Mañana'>Mañana</option>
                <option value='Tarde'>Tarde</option>
                {/* Agrega más opciones según sea necesario */}
              </select>
            </div>
          </div>
        </div>
        <div className='overflow-x-auto overflow-y-auto bg-white p-4 rounded-lg shadow-xl' style={{ maxHeight: '400px', boxShadow: '0px 6px 6px -3px rgba(0, 0, 0, 0.1), 0px 10px 14px 1px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.07) inset' }}>
  <table className='min-w-full'>
    <thead>
      <tr>
        <th className='py-2 px-4 border-b border-gray-300 text-center'>N°</th>
        <th className='py-2 px-4 border-b border-gray-300 text-center'>Nombre del Docente</th>
        <th className='py-2 px-4 border-b border-gray-300 text-center'>Activar</th>
        <th className='py-2 px-4 border-b border-gray-300 text-center'>Menú</th>
        <th className='py-2 px-4 border-b border-gray-300 text-center'>Submenú</th>
      </tr>
    </thead>
    <tbody>
      {filteredDocentes.map(docente => (
        <tr key={docente.id} className='hover:bg-gray-100'>
          <td className='py-2 px-4 border-b border-gray-300 text-center'>{docente.id}</td>
          <td className='py-2 px-4 border-b border-gray-300 text-center'>{docente.nombre}</td>
          <td className='py-2 px-4 border-b border-gray-300 text-center'>
            <input type="checkbox" />
          </td>
          <td className='py-2 px-4 border-b border-gray-300 text-center'>
            <div className='relative'>
              <button className='p-2 bg-gray-200 rounded'>Menú</button>
              {/* Aquí puedes agregar un submenú desplegable */}
            </div>
          </td>
          <td className='py-2 px-4 border-b border-gray-300 text-center'>{docente.submenu}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

        <div className='flex justify-end mt-4'>
          <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-10'>
            Guardar
          </button>
          
        </div>
      </div>
    </Layout>
  );
};

export default GestionarPermisos;