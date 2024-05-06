
import React, { useState } from 'react';
import { FiArrowLeft, FiEdit, FiMonitor, FiBarChart2, FiMoreVertical } from 'react-icons/fi';
import Layout from '../../components/layaout';
import { Link } from 'react-router-dom';
import DataTable, { createTheme }from 'react-data-table-component';




const Listado = () => {
 const colu = [
    {
      name: 'codigo',
      sortable: true,
  
    },
    {
      name: 'fecha Asistencia',
      sortable: true,

    },
    {
      name: 'detalle asistencia',
      sortable: true,
    
    },
    {
      name: 'Estudiante',
      sortable: true,
       
    },
    {
      name: 'grupo',
      sortable: true,
      
    },
    {
      name: 'acciones',
      sortable: true,
      
       
    }
  ];
  const [modal, setModal] = useState(false);
  const [data, setData] = useState([]);

  return (

    <Layout titulo={"Listado de estudiantes"} icono={<FiArrowLeft className='text-2xl font-bold' />}>
    <div className="overflow-y-scroll shadow-[0_8px_10px_15px_rgba(0,0,0,0.08)] w-full h-[87vh] max-2xl:h-[85vh] rounded-md">
     <div>
     <div className='w-[98%] border-2 mt-2 flex border-red-700 p-2 m-auto h-40 '>
      <div className=' flex shadow-md  duration-300 hover:translate-y-[-10px] hover:border-[#4A55A2]  bg-[#b3b1c5]  border border-gray-300    rounded-md  '> 
                <div className='flex flex-col m-auto p-4   gap-4 '>
                  <h1 className=' font-bold text-7xl text-gray-600 text-center  '>20</h1>
                  <p className='font-semibold text-gray-700 text-left '>Total de <span className='text-[#4A55A2] font-bold'>Estudiantes registrados </span></p>
                </div>
              
              </div>
              

      </div>
      <div className='p-2'>
                <DataTable
                    theme='solarized'
                    title={"Asistencias estudiantes"}
                    columns={colu}
                    data=""
                    selectableRows
                    pagination
                    noHeader
                    striped
                    highlightOnHover
                    fixedHeader
                    className='h-[21rem] 2xl:h-[25rem] '
              />
      </div>
     </div>
    </div>
    </Layout>
  );
};

export default Listado;
