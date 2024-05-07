import React, { useContext,useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Layout from '../../components/layaout';
import { FiArrowLeft, FiEdit, FiMonitor, FiBarChart2 } from 'react-icons/fi';
import { HiArrowSmallLeft } from "react-icons/hi2";
import s_axios from "../../../config/axios";
import {counterContext} from '../../../context/CRMcontext'
import Swal from 'sweetalert2'
import DataTable, { createTheme }from 'react-data-table-component';
import Input from '../../components/input';





const Asistenciafor = () => {
  const [modal, setModal] = useState(false);

  const ModalOpen = () => {
    setModal(!modal);
  };


const colu = [
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
		name: 'grado',
		sortable: true,



      
	},
	{
		name: 'acciones',
		sortable: true,
    cell: (row) => (
      <div>
        <button> <FiEdit className="text-2xl" />  </button>   
      </div>
    )
     
	}
];



    const [asistencia, setAsistencia] = useState([]);

    
    const { auth } = useContext(counterContext)
    const navigate = useNavigate(); 

 



  


//solictud al enpoints de la appi para traer los datos 

useEffect(() => {
  const consulta = async () => {
    try {
      const asistenciaConsulta  = await s_axios.get('/asistenciaEstudiantes' ,{
        headers : {
          Authorization : `Bearer ${auth.token}`
        }
      });
      const lol = asistenciaConsulta.data.data
      console.log(lol)
      setAsistencia(lol);
     
    } catch (error) {
      console.log(error);
      if(error.response.status === 403){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No tienes permisos para acceder a este contenido',
          footer: '<a href>Why do I have this issue?</a>'
        })
        navigate('/')
      }
    }
  }
  consulta();
  
}, []);



  
  return (
    <Layout titulo={"Asistencias estudiantes  "} icono={<HiArrowSmallLeft className='text-xl' />}>
    <div className="bg-[#ffffff] w-full h-[85vh] 2xl:h-[86vh] flex justify-center rounded-md">
    
    
      <div  className='   w-full  rounded-md shadow-[0_8px_10px_8px_rgba(0,0,0,0.08)] '>
      <div  className=' w-full  p-2 '>
        <h1 className='font-semibold text-xl  text-gray-700 p-2'>Filtros</h1>
        <hr />
      <div className='flex gap-6 overflow-auto  mt-2 bg-[#6f99e1] bg-opacity-25 max-sm:w-full max-sm:m-1  rounded-md p-4 m-2'>
     
          <Input/>
          <Input/>
          <Input/>
          <Input/>


      </div>
    </div>
      <div className="  w-[98%]  mt-2  rounded-md m-auto  p-2 ">
   
          
      <DataTable
      theme='solarized'
        title={"Asistencias estudiantes"}
        columns={colu}
        data={asistencia}
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

export default Asistenciafor;