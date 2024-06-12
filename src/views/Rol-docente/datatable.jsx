import React,{useState,useEffect,useContext} from 'react';
import DataTable from 'react-data-table-component';
import {deleteAsignatura } from '../../endpoints/useDelete';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import {  FiClock } from 'react-icons/fi';
import ModalEstudiante from '../../components/modal_estudiantes';
import Modal from '../../components/modal';
import Opc from "../../components/utils/modalAsistencias";
import MenuModal from '../../components/menusAsignaturas';

 const EstudiantesDataTable = ({ estudiantes, asig, grupoId }) => {
  

  const columns = [
    { name: 'CEDULA', sortable: true, selector: (row) => row.estudid },
    { name: 'NOMBRE', sortable: true, selector: (row) => row.estudnombre },
    { name: 'APELLIDO ESTUDIANTE ', sortable: true, selector: (row) => row.estudapellido },
    { name: 'CORREO', sortable: true,selector: (row) => row.estudcorreo },
    { name: 'TELEFONO ESTUDIANTE', sortable: true,selector: (row) => row.estudtelefono },
    { name: 'ASISTENCIAS', sortable: true, selector: (row) =>  <button type="button" className="  font-bold  rounded">  <Opc objeto={row} id={row.estudid} asig={asig} grupo={grupoId} />   </button>},
    {name: 'ESTADO', sortable: true, selector: (row) =>  <div className= {row.activo ? 'bg-green-400 p-2 rounded-xl text-white font-semibold' : 'bg-red-400' + ' bg-opacity-100 p-2 rounded-xl text-white font-semibold'}>    { row.activo !== null && row.activo !== undefined ? row.activo ? "Activo" : "Inactivo" : ""}  </div> },
    { name: 'ACCIONES', sortable: true, selector: (row) =>  <button type="button" className="  font-bold  rounded">  <Modal objeto={row} id={row.estudid} />   </button>},
  ];

  return (
    <DataTable
      title="Listado  Estudiantes"
      columns={columns}
      data={estudiantes[0]?.grupo.estudiantes}
    />
  );
};


export const AsignaturasData = ({ asignaturas }) => {

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

export const AsistenciasData = ({ asistencias }) => {


  const presenteCount = asistencias.filter(item => item.asistencia === 'Presente').length;
  const retardoCount = asistencias.filter(item => item.asistencia === 'Retardo').length;
  const ausenteCount = asistencias.filter(item => item.asistencia === 'Ausente').length;
  const totalAsistencia = presenteCount + retardoCount + ausenteCount;
  const porcentajeAsistencia = (presenteCount / totalAsistencia) * 100;

  const Asis = [
    {
      name: 'id estudiante ',
      selector: row => row.estudiante.estudid,
    
    },
    {
      name: 'Nombre',
      selector: row => row.estudiante.estudnombre,
    
    },
   
    {
      name: 'apellido',
      selector: row => row.estudiante.estudapellido,
    },
    {
      name: 'fecha asistencia',
      selector: row => row.fec_asi,
    },
    {
      name: 'Asistencia',
      selector: row => row.det_asi  === true ? 'Presente' : row.det_asi === false ? 'Retardo' : 'Ausente',
    },
    
  
    {
      name: 'Acciones',
      cell: row => (
        <>
          <ModalEstudiante id={row.estudiante.estudid} objeto={row} />
        </>
      ),
    },
  ];
return(
<DataTable
      title="Asignaturas Registradas"
      columns={Asis}
      data={asistencias}
      selectableRows
      pagination
      noHeader
      striped
      highlightOnHover
      fixedHeader
      
    />
)
}


export default EstudiantesDataTable;