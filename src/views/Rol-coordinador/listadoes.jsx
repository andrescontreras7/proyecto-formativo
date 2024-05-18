import React, { useState, useEffect, useContext } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import Layout from '../../components/layaout';
import DataTable from 'react-data-table-component';
import { fetchEstudiantes } from '../../endpoints/estudiantes';
import {counterContext} from '../../../context/CRMcontext'

const Listado = () => {
  const [estudiantes, setEstudiantes] = useState([]);
  const {auth} = useContext(counterContext); 

  useEffect(() => {
    fetchEstudiantes(auth).then(data => { 
      setEstudiantes(data.data);
    });
  }, [auth]); 
  

  const colu = [
    { name: 'Cedula', sortable: true, selector: (row) => row.estudid },  //
    { name: 'Nombre', sortable: true, selector: (row) => row.estudnombre },
    { name: 'Apellido del estudiante ', sortable: true, selector: (row) => row.estudapellido },
    { name: 'Correo', sortable: true,selector: (row) => row.estudcorreo },
    { name: 'telefono', sortable: true,selector: (row) => row.estudtelefono },
    { name: 'acudiente', sortable: true,selector: (row) => row.acudiente ? row.acudiente.nom_acu : ''},
    { name: 'grupo', sortable: true, selector: (row) => row.grupo ? row.grupo.grupsalon : '' },
    { name: 'acciones', sortable: true, selector: (row) =>  <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">acciones</button>},
  ];
  console.log()

  return (
    <Layout titulo={"Listado de estudiantes"} icono={<FiArrowLeft className='text-2xl font-bold' />}>
      <div className="overflow-y-scroll shadow-[0_8px_10px_15px_rgba(0,0,0,0.08)] w-full h-[87vh] max-2xl:h-[85vh] rounded-md">
        <div>
          <div className='w-[98%] border-2 mt-2 flex  p-2 m-auto h-40 '>
            <div className=' flex shadow-md  duration-300 hover:translate-y-[-10px] hover:border-[#4A55A2]  bg-[#b3b1c5]  border border-gray-300    rounded-md  '> 
              <div className='flex flex-col m-auto p-4   gap-4 '>
                <h1 className=' font-bold text-7xl text-gray-600 text-center  '> {estudiantes.length} </h1>
                <p className='font-semibold text-gray-700 text-left '>Total de <span className='text-[#4A55A2] font-bold'>Estudiantes registrados </span></p>
              </div>
            </div>
          </div>
          <div className='p-2'>
            <DataTable
              theme='solarized'
              title={"Asistencias estudiantes"}
              columns={colu}
              data={estudiantes}
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