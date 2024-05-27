import React, { useState } from 'react';
import { HiArrowSmallLeft } from 'react-icons/hi2';
import Layout from '../../components/layaout';
import DataTable from 'react-data-table-component';

const Listadocentes = () => {
  const [filterText, setFilterText] = useState('');

  const handleEdit = (row) => {
    console.log('Editar:', row);
  };

  const handleDelete = (row) => {
    console.log('Eliminar:', row);
  };

  const columns = [
    {
      name: 'Nombre',
      selector: (row) => row.nombre,
      sortable: true,
    },
    {
      name: 'Correo Electrónico',
      selector: (row) => row.correo,
      sortable: true,
    },
    {
      name: 'Rol',
      selector: (row) => row.rol,
      sortable: true,
    },
    {
      name: 'Estado',
      selector: (row) => row.estado,
      sortable: true,
    },
    {
      name: 'Acciones',
      cell: (row) => (
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
          <button
            onClick={() => handleEdit(row)}
            className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-700 transition duration-300 w-full sm:w-auto"
          >
            Editar
          </button>
          <button
            onClick={() => handleDelete(row)}
            className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-700 transition duration-300 w-full sm:w-auto"
          >
            Eliminar
          </button>
        </div>
      ),
    },
  ];

  const data = [
    {
      id: 1,
      nombre: 'Juan Pérez',
      correo: 'juan@example.com',
      rol: 'Profesor',
      estado: 'Activo',
    },
    {
      id: 2,
      nombre: 'María López',
      correo: 'maria@example.com',
      rol: 'Asistente',
      estado: 'Inactivo',
    },
    {
      id: 3,
      nombre: 'Carlos García',
      correo: 'carlos@example.com',
      rol: 'Profesor',
      estado: 'Activo',
    },
    {
      id: 4,
      nombre: 'Laura Martínez',
      correo: 'laura@example.com',
      rol: 'Asistente',
      estado: 'Inactivo',
    },
    {
      id: 5,
      nombre: 'Ana Rodríguez',
      correo: 'ana@example.com',
      rol: 'Profesor',
      estado: 'Activo',
    },
    {
      id: 6,
      nombre: 'Pedro González',
      correo: 'pedro@example.com',
      rol: 'Asistente',
      estado: 'Inactivo',
    },
    {
      id: 7,
      nombre: 'Sofía Sánchez',
      correo: 'sofia@example.com',
      rol: 'Profesor',
      estado: 'Activo',
    },
    {
      id: 8,
      nombre: 'Diego Pérez',
      correo: 'diego@example.com',
      rol: 'Asistente',
      estado: 'Inactivo',
    },
  ];

  const filteredItems = data.filter(
    (item) =>
      item.nombre.toLowerCase().includes(filterText.toLowerCase()) ||
      item.correo.toLowerCase().includes(filterText.toLowerCase()) ||
      item.rol.toLowerCase().includes(filterText.toLowerCase()) ||
      item.estado.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <Layout titulo={'Listado de docentes '} icono={<HiArrowSmallLeft className="text-xl" />}>
      <div className="pb-2 w-full bg-[#ffffff] h-[86vh] shadow-[0_8px_20px_12px_rgba(0,0,0,0.08)] rounded-md">
        <DataTable
          columns={columns}
          data={filteredItems}
          pagination
          paginationPerPage={6}
          paginationRowsPerPageOptions={[6]}
          selectableRows
          selectableRowsHighlight
          responsive
          subHeader
          subHeaderComponent={
            <div className="mb-3">
              <input
                type="text"
                placeholder="Buscar..."
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
                className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out text-gray-700 bg-white hover:bg-gray-50 mt-4 mr-2"
              />
            </div>
          }
        />
      </div>
    </Layout>
  );
};

export default Listadocentes;
