
import React, { useState } from 'react';
import Aside from './AsideCO';
import { Link } from 'react-router-dom';
import Layaout from "../../layaout";
import { HiArrowSmallLeft } from "react-icons/hi2";

const AsistenciasD = () => {
  const [matricula, setMatricula] = useState(28);
  const [asistencias, setAsistencias] = useState({
    presente: '27',   
    retardos: '1',
    ausencias: '1',
  });

  const obtenerFechaActual = () => {
    const fecha = new Date();
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;
    const año = fecha.getFullYear();
    return `${dia}/${mes}/${año}`;
  };

  return (
    <Layaout titulo={"Asignaturas "} icono={<HiArrowSmallLeft className='text-xl' />}>
    <div className="bg-[#A0BFE0] w-full h-[88vh] max-[1400px]:h-[85vh] flex justify-center rounded-md">
    

      <div id="contenedor" className='ml-4 p-4 w-10/12 overflow-y-auto text-white'>
        <div>
          <input type='text' placeholder='Buscar...' className='border p-2 rounded' />
        </div>

        <div  className='flex flex-col  mt-2'>
          <div className='text-right'>
            <p className='text-black mr-4 text-lg'>{obtenerFechaActual()}</p>
            <h5 className='text-2xl font-bold text-indigo-700 mb-2 '>¡Bienvenido!</h5>
          </div>

         <Link to="/AsistenciasEstudiantes" >
             <div className=' rounded-3xl   mt-4 p-8 bg-gradient-to-r from-indigo-400 to-indigo-500 text-center mb-4'>
            <h2 className='text-left  text-3xl font-semibold mb-4 tracking-wider text-white'>Lenguaje 3°A</h2>
            <div className='flex justify-between'>
              <p className=' font-bold'>
                Matrícula: <span className=' bg-gray-500 text-white rounded-full px-2'>{matricula}</span> 
              </p>

              <p className='font-bold'>
                Presente: <span className=' bg-green-500 text-white rounded-full px-2'>{asistencias.presente}</span>
              </p>

              <p className=' font-bold'>
                Presente con Retardos: <span className=' bg-yellow-500 text-white rounded-full px-2'>{asistencias.retardos}</span>
              </p>

              <p className=' font-bold'>
                Ausente: <span className=' bg-orange-500 text-white rounded-full px-2'>{asistencias.ausencias}</span>
              </p>
            </div>
          </div>
         </Link>

          <div className='  mt-4 p-8 bg-gradient-to-r rounded-3xl from-indigo-400 to-indigo-500 text-center mb-4'>
            <h2 className='text-left  text-3xl font-semibold mb-4 tracking-wider text-white'>Matematicas 3°A</h2>
            <div className='flex justify-between'>
              <p className=' font-bold'>
                Matrícula: <span className=' bg-gray-500 text-white rounded-full px-2'>{matricula}</span> 
              </p>

              <p className='font-bold'>
                Presente: <span className=' bg-green-500 text-white rounded-full px-2'>{asistencias.presente}</span>
              </p>

              <p className=' font-bold'>
                Presente con Retardos: <span className=' bg-yellow-500 text-white rounded-full px-2'>{asistencias.retardos}</span>
              </p>

              <p className=' font-bold'>
                Ausente: <span className=' bg-orange-500 text-white rounded-full px-2'>{asistencias.ausencias}</span>
              </p>
            </div>
          </div>
          <div className='  mt-4 p-8 bg-gradient-to-r from-indigo-400 to-indigo-500 rounded-3xl text-center mb-4'>
            <h2 className='text-left  text-3xl font-semibold mb-4 tracking-wider text-white'>Fisica 3°A</h2>
            <div className='flex justify-between'>
              <p className=' font-bold'>
                Matrícula: <span className=' bg-gray-500 text-white rounded-full px-2'>{matricula}</span> 
              </p>

              <p className='font-bold'>
                Presente: <span className=' bg-green-500 text-white rounded-full px-2'>{asistencias.presente}</span>
              </p>

              <p className=' font-bold'>
                Presente con Retardos: <span className=' bg-yellow-500 text-white rounded-full px-2'>{asistencias.retardos}</span>
              </p>

              <p className=' font-bold'>
                Ausente: <span className=' bg-orange-500 text-white rounded-full px-2'>{asistencias.ausencias}</span>
              </p>
            </div>
          </div>
          <div className='  mt-4 p-8 bg-gradient-to-r from-indigo-400 to-indigo-500 rounded-3xl text-center mb-4'>
            <h2 className='text-left  text-3xl font-semibold mb-4 tracking-wider text-white'>Biologia 3°A</h2>
            <div className='flex justify-between'>
              <p className=' font-bold'>
                Matrícula: <span className=' bg-gray-500 text-white rounded-full px-2'>{matricula}</span> 
              </p>

              <p className='font-bold'>
                Presente: <span className=' bg-green-500 text-white rounded-full px-2'>{asistencias.presente}</span>
              </p>

              <p className=' font-bold'>
                Presente con Retardos: <span className=' bg-yellow-500 text-white rounded-full px-2'>{asistencias.retardos}</span>
              </p>

              <p className=' font-bold'>
                Ausente: <span className=' bg-orange-500 text-white rounded-full px-2'>{asistencias.ausencias}</span>
              </p>
            </div>
          </div>
          <div className='  mt-4 p-8 bg-gradient-to-r from-indigo-400 to-indigo-500 rounded-3xl text-center mb-4'>
            <h2 className='text-left  text-3xl font-semibold mb-4 tracking-wider text-white'>lectura critica 3°A</h2>
            <div className='flex justify-between'>
              <p className=' font-bold'>
                Matrícula: <span className=' bg-gray-500 text-white rounded-full px-2'>{matricula}</span> 
              </p>

              <p className='font-bold'>
                Presente: <span className=' bg-green-500 text-white rounded-full px-2'>{asistencias.presente}</span>
              </p>

              <p className=' font-bold'>
                Presente con Retardos: <span className=' bg-yellow-500 text-white rounded-full px-2'>{asistencias.retardos}</span>
              </p>

              <p className=' font-bold'>
                Ausente: <span className=' bg-orange-500 text-white rounded-full px-2'>{asistencias.ausencias}</span>
              </p>
            </div>
          </div>
          <div className='  mt-4 p-8 bg-gradient-to-r from-indigo-400 to-indigo-500 rounded-3xl text-center mb-4'>
            <h2 className='text-left  text-3xl font-semibold mb-4 tracking-wider text-white'>Español 3°A</h2>
            <div className='flex justify-between'>
              <p className=' font-bold'>
                Matrícula: <span className=' bg-gray-500 text-white rounded-full px-2'>{matricula}</span> 
              </p>

              <p className='font-bold'>
                Presente: <span className=' bg-green-500 text-white rounded-full px-2'>{asistencias.presente}</span>
              </p>

              <p className=' font-bold'>
                Presente con Retardos: <span className=' bg-yellow-500 text-white rounded-full px-2'>{asistencias.retardos}</span>
              </p>

              <p className=' font-bold'>
                Ausente: <span className=' bg-orange-500 text-white rounded-full px-2'>{asistencias.ausencias}</span>
              </p>
            </div>
          </div>
          <div className='  mt-4 p-8 bg-gradient-to-r from-indigo-400 to-indigo-500 rounded-3xl text-center mb-4'>
            <h2 className='text-left  text-3xl font-semibold mb-4 tracking-wider text-white'>Sociales 3°A</h2>
            <div className='flex justify-between'>
              <p className=' font-bold'>
                Matrícula: <span className=' bg-gray-500 text-white rounded-full px-2'>{matricula}</span> 
              </p>

              <p className='font-bold'>
                Presente: <span className=' bg-green-500 text-white rounded-full px-2'>{asistencias.presente}</span>
              </p>

              <p className=' font-bold'>
                Presente con Retardos: <span className=' bg-yellow-500 text-white rounded-full px-2'>{asistencias.retardos}</span>
              </p>

              <p className=' font-bold'>
                Ausente: <span className=' bg-orange-500 text-white rounded-full px-2'>{asistencias.ausencias}</span>
              </p>
            </div>
          </div>
          <div className='  mt-4 p-8 bg-gradient-to-r from-indigo-400 to-indigo-500 rounded-3xl text-center mb-4'>
            <h2 className='text-left  text-3xl font-semibold mb-4 tracking-wider text-white'>Naturales 3°A</h2>
            <div className='flex justify-between'>
              <p className=' font-bold'>
                Matrícula: <span className=' bg-gray-500 text-white rounded-full px-2'>{matricula}</span> 
              </p>

              <p className='font-bold'>
                Presente: <span className=' bg-green-500 text-white rounded-full px-2'>{asistencias.presente}</span>
              </p>

              <p className=' font-bold'>
                Presente con Retardos: <span className=' bg-yellow-500 text-white rounded-full px-2'>{asistencias.retardos}</span>
              </p>

              <p className=' font-bold'>
                Ausente: <span className=' bg-orange-500 text-white rounded-full px-2'>{asistencias.ausencias}</span>
              </p>
            </div>
          </div>
          <div className='  mt-4 p-8 bg-gradient-to-r from-indigo-400 to-indigo-500 rounded-3xl text-center mb-4'>
            <h2 className='text-left  text-3xl font-semibold mb-4 tracking-wider text-white'>Arte 3°A</h2>
            <div className='flex justify-between'>
              <p className=' font-bold'>
                Matrícula: <span className=' bg-gray-500 text-white rounded-full px-2'>{matricula}</span> 
              </p>

              <p className='font-bold'>
                Presente: <span className=' bg-green-500 text-white rounded-full px-2'>{asistencias.presente}</span>
              </p>

              <p className=' font-bold'>
                Presente con Retardos: <span className=' bg-yellow-500 text-white rounded-full px-2'>{asistencias.retardos}</span>
              </p>

              <p className=' font-bold'>
                Ausente: <span className=' bg-orange-500 text-white rounded-full px-2'>{asistencias.ausencias}</span>
              </p>
            </div>
          </div>
          <div className='  mt-4 p-8 bg-gradient-to-r from-indigo-400 to-indigo-500 rounded-3xl text-center mb-4'>
            <h2 className='text-left  text-3xl font-semibold mb-4 tracking-wider text-white'>Catedra 3°A</h2>
            <div className='flex justify-between'>
              <p className=' font-bold'>
                Matrícula: <span className=' bg-gray-500 text-white rounded-full px-2'>{matricula}</span> 
              </p>

              <p className='font-bold'>
                Presente: <span className=' bg-green-500 text-white rounded-full px-2'>{asistencias.presente}</span>
              </p>

              <p className=' font-bold'>
                Presente con Retardos: <span className=' bg-yellow-500 text-white rounded-full px-2'>{asistencias.retardos}</span>
              </p>

              <p className=' font-bold'>
                Ausente: <span className=' bg-orange-500 text-white rounded-full px-2'>{asistencias.ausencias}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>


    </Layaout>
   
  );
};

export default AsistenciasD;