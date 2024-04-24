import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { FiArrowLeft, FiEdit, FiMonitor, FiBarChart2 } from 'react-icons/fi';
import Aside from './AsideCO'
import Modal from '../modal';
import { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Layout from '../../layaout';
import { HiArrowSmallLeft } from "react-icons/hi2";
import s_axios from "../../../../config/axios";
import { LuAtSign } from 'react-icons/lu';
import {counterContext} from '../../../../context/CRMcontext'
import Swal from 'sweetalert2'





const Asistenciafor = () => {


    const [asistencia, setAsistencia] = useState([]);
    const [modal, setModal] = useState(false);
    
    const { auth } = useContext(counterContext)
    const navigate = useNavigate(); 
    console.log(auth)
 



    const ModalOpen = () => {
      setModal(!modal);
    };



//solictud al enpoint de la appi para traer los datos 

useEffect(() => {
  const consulta = async () => {
    try {
      const asistenciaConsulta  = await s_axios.get('/asistenciaEstudiantes' ,{
        headers : {
          Authorization : `Bearer ${auth.token}`
        }
      });
      setAsistencia(asistenciaConsulta.data.data);
     
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
    <Layout>
       <div className="flex bg-indigo-100 ">
        
    
      <div  className=' h-screen m-auto w-full bg-[#A0BFE0] '>
        
      <div className="w-[100%]  m-auto    ">
                <div className= " flex items-center gap-2  text-gray-900  uppercase font-bold   p-[0.9rem] font   rounded-xl mr-20 mt-12">
                  <HiArrowSmallLeft className="text-3xl "  />   
                  <h1 className="  ">  Asistencias estudiantes  </h1> 
                </div>
              
            </div>
    
      <div className="bg-[#C5DFF8]  overflow-y-auto lg:h-[80%] w-[80%] shadow-[0_8px_10px_8px_rgba(0,0,0,0.08)]  rounded-3xl container mx-auto mt-8 p-8 ">
       

        <div className="mb-4">
          <h2 className="  float-right  text-lg font-bold">Fecha: 27 de Diciembre de 2023</h2>
       
          <div className="flex items-center space-x-4">
            <p className="text-green-500 font-bold">Presente: <span className="bg-green-500 text-white rounded-full px-2">27</span></p>
            <p className="text-yellow-500 font-bold">Presente con Retardos: <span className="bg-yellow-500 text-white rounded-full px-2">1</span></p>
            <p className="text-orange-500 font-bold">Ausente: <span className="bg-orange-500 text-white rounded-full px-2">1</span></p>
            <p className="text-blue-500 font-bold">Asistencia: <span className="bg-[#7895CB] text-white rounded-full px-2">100%</span></p>
          </div>
        </div>

        <div className="mb-8">
          <h4 className="text-md font-bold mb-2">Se encuentran 28 estudiantes</h4>
          <table className="min-w-full ">
            <thead>
              <tr className='mr-20 ' >
                <th className="mr-20 p-2">No.L</th>
                <th className=" p-2">NOMBRE</th>
                <th className=" p-2"> MATRICULA</th>
                <th className=" p-2">ASISTENCIA</th>
                <th className=" p-2">ACCIONES</th>
              </tr>
            </thead>
            <tbody className='text-center'>
                {modal && <Modal titulo={"Andres cavadia"}>
                 
                        <li className='p-2'>
                        <Link> Editar Estudiante</Link>
                        </li>
                        <li className='p-2'>
                        <Link> Observaciones</Link>
                        </li>
                        <li className='p-2'>
                        <Link>Eliminar</Link>
                        </li>
                        <li className='p-2'>
                        <Link> Informacion del estudiante</Link>
                        </li>

                  </Modal>}
          
              <tr className=' border-t-2 border-gray-400' >
               <td className=" p-2">1 </td>
                <td className=" text-cente p-2">Camilo andres </td>
                <td className="p-2">123456</td>
                <td className="p-2">
                  <span className="bg-green-500 rounded-full h-4 w-4 inline-block mr-2"></span>
                  Presente
                </td>
                <td className="p-2">
                  <button onClick={ModalOpen} className="bg-[#7895CB] text-white p-2 rounded">
                    <FiEdit className="text-xl" />
                  </button>
                </td>
              </tr>
              <tr className=' border-t-2 border-gray-400' > 
              <td className="p-2">2 </td>
                <td className="p-2">Scheril de jesus</td>
                <td className= " p-2">123456</td>
                <td className="p-2">
                  <span className="bg-orange-500 rounded-full h-4 w-4 inline-block mr-2"></span>
                  Presente
                </td>
                <td className=" p-2">
                  <button className="bg-[#7895CB] text-white p-2 rounded">
                    <FiEdit className="text-xl" />
                  </button>
                </td>
              </tr>
              <tr className=' border-t-2 border-gray-400' >  <td className="">3 </td>
                <td className=" p-2">Alexer maestre</td>
                <td className=" p-2">123456</td>
                <td className=" p-2">
                  <span className="bg-yellow-500 rounded-full h-4 w-4 inline-block mr-2"></span>
                  Presente
                </td>
                <td className=" p-2">
                  <button className="bg-[#7895CB] text-white p-2 rounded">
                    <FiEdit className="text-xl" />
                  </button>
                </td>
              </tr>
              <tr className=' border-t-2 border-gray-400' > 
              <td className=" p-2">4 </td>
                <td className="p-2">Juan Pablo travis</td>
                <td className="p-2">123456</td>
                <td className="p-2">
                  <span className="bg-green-500 rounded-full h-4 w-4 inline-block mr-2"></span>
                  Presente
                </td>
                <td className="p-2">
                  <button className="bg-[#7895CB] text-white p-2 rounded">
                    <FiEdit className="text-xl" />
                  </button>
                </td>
              </tr>
              <tr className=' border-t-2 border-gray-400' > 
              <td className=" p-2">5 </td>
                <td className=" p-2">Omar Andres</td>
                <td className="p-2">123456</td>
                <td className="p-2">
                  <span className="bg-green-500 rounded-full h-4 w-4 inline-block mr-2"></span>
                  Presente
                </td>
                <td className="p-2">
                  <button className="bg-[#7895CB] text-white p-2 rounded">
                    <FiEdit className="text-xl" />
                  </button>
                </td>
              </tr>
              <tr className=' border-t-2 border-gray-400' > 
              <td className="p-2">6 </td>
                <td className=" p-2">JJ Muñoz</td>
                <td className=" p-2">123456</td>
                <td className=" p-2">
                  <span className="bg-green-500 rounded-full h-4 w-4 inline-block mr-2"></span>
                  Presente
                </td>
                <td className="p-2">
                  <button className="bg-[#7895CB] text-white p-2 rounded">
                    <FiEdit className="text-xl" />
                  </button>
                </td>
              </tr>
              <tr className=' border-t-2 border-gray-400' > 
              <td className="p-2">7 </td>
                <td className=" p-2">Santiago alavarez</td>
                <td className=" p-2">123456</td>
                <td className=" p-2">
                  <span className="bg-green-500 rounded-full h-4 w-4 inline-block mr-2"></span>
                  Presente
                </td>
                <td className=" p-2">
                  <button className="bg-[#7895CB] text-white p-2 rounded">
                    <FiEdit className="text-xl" />
                  </button>
                </td>
              </tr>
              <tr className=' border-t-2 border-gray-400' >
              <td className=" p-2">8 </td>
                <td className="p-2">Faver Marin</td>
                <td className=" p-2">123456</td>
                <td className=" p-2">
                  <span className="bg-green-500 rounded-full h-4 w-4 inline-block mr-2"></span>
                  Presente
                </td>
                <td className="p-2">
                  <button className="bg-[#7895CB] text-white p-2 rounded">
                    <FiEdit className="text-xl" />
                  </button>
                </td>
              </tr>
              <tr className=' border-t-2 border-gray-400' >
              <td className="p-2">9 </td>
                <td className=" p-2">john de la rosa</td>
                <td className="p-2">123456</td>
                <td className=" p-2">
                  <span className="bg-green-500 rounded-full h-4 w-4 inline-block mr-2"></span>
                  Presente
                </td>
                <td className="p-2">
                  <button className="bg-[#7895CB] text-white p-2 rounded">
                    <FiEdit className="text-xl" />
                  </button>
                </td>
              </tr>
              <tr className=' border-t-2 border-gray-400' ></tr>
            </tbody>
          </table>
        </div>

        



      </div>
      </div>
      </div>

    </Layout>
   
    

  );
};

export default Asistenciafor;