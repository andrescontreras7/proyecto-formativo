import React from 'react';
import DataTable from 'react-data-table-component';
import Modal from "../../components/modal"
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

export default EstudiantesDataTable;