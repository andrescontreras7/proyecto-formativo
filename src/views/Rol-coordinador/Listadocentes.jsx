import React, { useState, useEffect, useContext } from 'react';
import { HiArrowSmallLeft } from 'react-icons/hi2';
import Layout from '../../components/layaout';
import DataTable from 'react-data-table-component';
import { getDocente } from '../../endpoints/useGet';
import { counterContext } from '../../../context/CRMcontext';

const Listadocentes = () => {
  const [filterText, setFilterText] = useState('');
  const [docentes, setDocentes] = useState([]);
  const { auth } = useContext(counterContext);

  useEffect(() => {
    fetchFuncionarios(auth).then(data => { 
      setDocentes(data.data);
    });
  }, [auth]);

  const fetchFuncionarios = async (auth) => {
    try {
      const data = await getDocente(auth);
      return data;
    } catch (error) {
      console.error('Error obteniendo los funcionarios:', error);
    }
  };

  const handleEdit = (row) => {
    console.log('Editar:', row);
  };

  const handleDelete = (row) => {
    console.log('Eliminar:', row);
  };

  const filteredDocentes = docentes.filter(docente => {
    const initials = docente.funcnombre
      .split(' ')
      .map(word => word.charAt(0).toLowerCase()) // Obtener la primera letra de cada palabra del nombre
      .join(''); // Unir las iniciales
    return initials.includes(filterText.toLowerCase());
  });
  

  const columns = [
    {
      name: 'Nombre',
      selector: (row) => `${row.funcnombre} ${row.funcapellido}`,
      sortable: true,
    },
    {
      name: 'Correo Electrónico',
      selector: (row) => row.funccorreo,
      sortable: true,
    },
    {
      name: 'Rol',
      selector: (row) => row.funcrol,
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

  return (
    <Layout titulo={'Listado de docentes '} icono={<HiArrowSmallLeft className="text-xl" />}>
      <div className="pb-2 w-full bg-[#ffffff] h-[86vh] shadow-[0_8px_20px_12px_rgba(0,0,0,0.08)] rounded-md">
        <DataTable
          columns={columns}
          data={filteredDocentes}
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
