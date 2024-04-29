import { select } from "@nextui-org/react";
import Asistencia from "./views/Rol-estudiante/asistencia";
import Modal from "./views/modal";

export const colu = [
	{
		name: 'codigo',
		sortable: true,
		selector: (row) => row.cod_asi,
	},
	{
		name: 'fecha Asistencia',
		sortable: true,
		selector: (row) => row.fec_asi,
	},
	{
		name: 'detalle asistencia',
		sortable: true,
		selector: (row) => row.det_asi,
	},
	{
		name: 'Estudiante',
		sortable: true,
        selector: (row) => row.estudiante.estudnombre ,
	},
	{
		name: 'grupo',
		sortable: true,
        selector: (row) => row.grupo.grupgrado ,
	},
	{
		name: 'acciones',
		sortable: true,
		
     
	}
];


  
