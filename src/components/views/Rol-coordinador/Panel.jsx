import React from 'react';
import { Link } from 'react-router-dom';
import Aside from './AsideCO';
import Layout from "../../layaout";
import { HiArrowSmallLeft } from "react-icons/hi2";

const Panel = () => {
  return (
    <Layout titulo={"Panel  "} icono={<HiArrowSmallLeft className='text-xl' />}  >
    <div className="bg-[#A0BFE0] w-full h-[88vh] max-[1400px]:h-[85vh] m-auto flex justify-center rounded-md">
    <section className='w-[90%] flex m-auto h-full'>
      <article className='bg-[#7895CB] overflow-y-scroll shadow-[0_8px_20px_20px_rgba(0,0,0,0.08)] h-[95%] flex flex-col m-auto rounded-xl'>
        <div className=' flex flex-wrap justify-center'>
          <Link to="/Registrardocente" className='w-[15vw] h-[25vh] m-4 flex flex-col items-center justify-center rounded-md transition-all duration-30  bg-[#7895CB] border-[#A0BFE0] border-[1px] hover:bg-[#A0BFE0]'>
            <div className='bg-white flex justify-center items-center w-[50%] h-[60%] rounded-full'>
              <img className='w-20' src="/public/registarprofesor.png" alt="Docente" draggable="false" />
            </div>
            <p className='font-semibold font-Roboto mt-2'>Registrar Docente</p>
          </Link>

          <button className='w-[15vw] h-[25vh] m-4 flex flex-col  items-center justify-center rounded-2xl transition-all duration-300 bg-[#7895CB] border-[#A0BFE0] border-[1px] hover:bg-[#A0BFE0]'>
            <div className='bg-white flex justify-center items-center w-[50%] h-[60%] rounded-full'>
              <img className='w-16' src="/public/administardocente.png" alt="Docente" draggable="false" />
            </div>
            <p className='font-semibold font-Roboto mt-2'>Administrar docente</p>
          </button>

          <Link to="/" className='w-[15vw] h-[25vh] m-4 flex flex-col items-center justify-center rounded-2xl transition-all duration-300 bg-[#7895CB] border-[#A0BFE0] border-[1px] hover:bg-[#A0BFE0]'>
            <div className='bg-white mt-1 flex justify-center items-center w-[50%] h-[60%] rounded-full'>
              <img className='w-16' src="/public/registrarasignatura.png" alt="Docente" draggable="false" />
            </div>
            <p className='font-semibold font-Roboto p-2 mt-2'>Registrar asignatura</p>
          </Link>

          <Link to="/Informes" className='w-[15vw] h-[25vh] m-4 flex flex-col  items-center justify-center rounded-2xl transition-all duration-300 bg-[#7895CB] border-[#A0BFE0] border-[1px] hover:bg-[#A0BFE0]'>
            <div className='bg-white flex justify-center items-center w-[50%] h-[60%] rounded-full'>
              <img className='w-16' src="/public/informe-observador.png" alt="Docente" draggable="false" />
            </div>
            <p className='font-semibold font-Roboto mt-2'>Informe observadores</p>
          </Link>

          <Link to="/Gestion" className='w-[15vw] h-[25vh] m-4 flex flex-col  items-center justify-center rounded-2xl transition-all duration-300 bg-[#7895CB] border-[#A0BFE0] border-[1px] hover:bg-[#A0BFE0]'>
            <div className='bg-white flex justify-center items-center w-[50%] h-[60%] rounded-full'>
              <img className='w-16' src="public\r-estudiante.png" alt="Docente" />
            </div>
            <p className='font-semibold font-Roboto mt-2'>Registrar Alumno</p>
          </Link>

          <Link to="/Listado" className='w-[15vw] h-[25vh] m-4 flex flex-col  items-center justify-center rounded-2xl transition-all duration-300 bg-[#7895CB] border-[#A0BFE0] border-[1px] hover:bg-[#A0BFE0]'>
            <div className='bg-white flex justify-center items-center w-[50%] h-[60%] rounded-full'>
              <img className='w-16' src="public\lista.png" alt="Docente" />
            </div>
            <p className='font-semibold font-Roboto mt-2'>Listado de estudiantes</p>
          </Link>

          <Link to="/Areas" className='w-[15vw] h-[25vh] m-4 flex flex-col  items-center justify-center rounded-2xl transition-all duration-300 bg-[#7895CB] border-[#A0BFE0] border-[1px] hover:bg-[#A0BFE0]'>
            <div className='bg-white flex justify-center items-center w-[50%] h-[60%] rounded-full'>
              <img className='w-16' src="/public/areas y asignaturas.png" alt="Docente" draggable="false" />
            </div>
            <p className='font-semibold font-Roboto mt-2'>Administar areas y asignaturas</p>
          </Link>

          <Link to="/" className='w-[15vw] h-[25vh] m-4 flex flex-col items-center justify-center rounded-2xl transition-all duration-300 bg-[#7895CB] border-[#A0BFE0] border-[1px] hover:bg-[#A0BFE0]'>
            <div className='bg-white flex justify-center items-center w-[50%] h-[60%] rounded-full'>
              <img className='w-16' src="/public/registro de asignaturas.png" alt="Docente" draggable="false" />
            </div>
            <p className='font-semibold font-Roboto mt-2'>Asignaturas registradas</p>
          </Link>

          <Link to="/desempeño" className='w-[15vw] h-[25vh] m-4 flex flex-col  items-center justify-center rounded-2xl transition-all duration-300 bg-[#7895CB] border-[#A0BFE0] border-[1px] hover:bg-[#A0BFE0]'>
            <div className='bg-white flex justify-center items-center w-[50%] h-[60%] rounded-full'>
              <img className='w-16' src="/public/desempeño.png" alt="Docente" draggable="false" />
            </div>
            <p className='font-semibold font-Roboto mt-2'>Estudiantes por desempeño</p>
          </Link>

        </div>
      </article>
    </section>
  </div>

      
    </Layout>
    
  );
};

export default Panel;
