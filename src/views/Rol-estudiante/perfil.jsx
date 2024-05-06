import React from 'react';
import { BiUser, BiLock, BiShow, BiHide } from 'react-icons/bi';
import { FiEdit, FiSettings } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Layout from '../../components/layaout';
const Perfil = () => {
  return (
    <Layout>
        <div className=" w-full  bg-[#A0BFE0] flex  h-screen ">
    
      <div className="bg-white  justify-center shadow-[0_8px_20px_20px_rgba(0,0,0,0.08)] rounded-xl m-auto   w-[80%]  flex-col ">
       <div className=''>
       <div className="mb-2 text-center border-[1px]  border-gray-200 rounded-xl ">
          <BiUser className="text-6xl mx-auto" />
          <h2 className="text-xl font-bold">Juan Alberto Hoyos</h2>
          <button className="text-black-500 flex m-auto  gap-2 justify-center  bg-blue-950 rounded-md text-white w-[40%]  text-center">
           
            <Link className='flex gap-2' to={"/Informacion"}>Editar Perfil  <FiEdit className="mt-1 " /> </Link>
          </button>
        </div>
        <div className="mb-6 grid grid-cols-3 p-2 border-[1px]  border-gray-200 rounded-xl text-left gap-4">
          <div>
            <h3 className="font-bold mb-2">Información Personal </h3>
            <p>Dirección de Correo: Juanito@gamil.com.com</p>
            <p>País: Colombia</p>
            <p>Ciudad: barranquilla </p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Detalle del Curso</h3>
            <h3 className="font-bold mb-2">Perfil del curso</h3>
            <p> Cálculo Renal</p>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">Privacidad y Políticas</h3>
            <p>Resumen de Detección de Datos</p>
          </div>
        </div>
        <div className="mb-6 border-[1px]  border-gray-200 rounded-xl p-2 grid grid-cols-2 text-left">
          <div>
            <h3 className="font-bold mb-2">Actividad de Acceso</h3>
            <p>Primer Acceso: Día, Fecha y Hora</p>
            <p>Último Acceso: Día, Fecha y Hora</p>
          </div>
          <div>
           
          </div>
        </div>
        <div className="mb-6 border-[1px] p-2 border-gray-200 rounded-xl grid grid-cols-2 text-left">
          <div className=''>
            <h3 className="font-bold mb-2">Informes</h3>
            <p>Sesiones del navegar </p>
            <p>Resumen de las calificaciones</p>
          </div>
          <div>
          </div>
        </div>
       </div>
      </div>
    </div>
    </Layout>
  
  );
};
export default Perfil

