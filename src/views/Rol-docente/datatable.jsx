import React,{useState,useEffect,useContext} from 'react';
import DataTable from 'react-data-table-component';
import {deleteAsignatura } from '../../endpoints/useDelete';

import MenuModal from '../../components/menusAsignaturas';

 const EstudiantesDataTable = ({ estudiantes }) => {
  const columns = [
    { name: 'CEDULA', sortable: true, selector: (row) => row.estudid },
    { name: 'NOMBRE', sortable: true, selector: (row) => row.estudnombre },
    { name: 'APELLIDO ESTUDIANTE ', sortable: true, selector: (row) => row.estudapellido },
    { name: 'CORREO', sortable: true,selector: (row) => row.estudcorreo },
    { name: 'TELEFONO ESTUDIANTE', sortable: true,selector: (row) => row.estudtelefono },
    {name: 'ESTADO', sortable: true, selector: (row) =>  <div className= {row.activo ? 'bg-green-400 p-2 rounded-xl text-white font-semibold' : 'bg-red-400' + ' bg-opacity-100 p-2 rounded-xl text-white font-semibold'}>    { row.activo !== null && row.activo !== undefined ? row.activo ? "Activo" : "Inactivo" : ""}  </div> },
    { name: 'ACCIONES', sortable: true, selector: (row) =>  <button type="button" className="  font-bold  rounded">  <Modal objeto={row} id={row.estudid} />   </button>},
  ];

  return (
    <DataTable
      title="Listado  Estudiantes"
      columns={columns}
      data={estudiantes.estudiantes}
    />
  );
};


export const AsignaturasData = ({ asignaturas }) => {

useEffect(() => {})
 

    
  

  const asig = [
    { name: 'Nombre', sortable: true, selector: (row) => row.asigcod },
    { name: 'Área', sortable: true, selector: (row) => row.asignombre },
    { name: 'Descripción', sortable: true, selector: (row) => row.asigdescripcion },
    { name: 'Imagen', sortable: true, selector: (row) => <div className='size-20 flex p-4 m-auto'><img src={`${row.url}`} alt="" /></div> },
    { name: 'Estado', sortable: true, selector: (row) => 
      <div className={row.activo ? 'bg-green-400 p-2 rounded-xl text-white font-semibold' : 'bg-red-400 bg-opacity-100 p-2 rounded-xl text-white font-semibold'}>
        {row.activo !== null && row.activo !== undefined ? row.activo ? "Activo" : "Inactivo" : ""}
      </div> 
    },
    { name: 'Acciones', sortable: true, selector: (row) => 
      <div className="flex gap-2">
   
        <button type="button" className="font-bold rounded  text-gray  "> <MenuModal objeto={row} id={row.asigcod} /></button>
       
      </div> 
    },
  ];

  return (
    <DataTable
      title="Asignaturas Registradas"
      columns={asig}
      data={asignaturas}
      selectableRows
      pagination
      noHeader
      striped
      highlightOnHover
      fixedHeader
      
    />
    
  );
};




export default EstudiantesDataTable;