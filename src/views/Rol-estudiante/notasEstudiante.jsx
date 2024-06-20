
import React, { useState, useEffect, useContext } from 'react';
import Layout from '../../components/layaout';
import { HiArrowSmallLeft } from "react-icons/hi2";
import {jwtDecode} from "jwt-decode";
import { getNotaEstudiante } from '../../endpoints/useGet';
import { counterContext } from '../../../context/CRMcontext';

const NotasEstudiante = () => {
  const { auth } = useContext(counterContext);
  const [notas, setNotas] = useState([]);

  useEffect(() => {
    const decodedToken = jwtDecode(auth.token);

    getNotaEstudiante(auth, decodedToken.id).then(res => {
      setNotas(res);
      console.log(res);
    });
  }, [auth]);

  return (
    <Layout titulo={"Resultados de Notas"} icono={<HiArrowSmallLeft className='text-xl' />}>
      <div className="bg-white w-full shadow-lg h-[85vh] 2xl:h-[86vh] flex justify-center rounded-md p-8 overflow-hidden">
        <div className="w-full max-w-7xl h-full flex flex-col">
          <section className='w-full flex-1 overflow-y-auto p-4'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
              {Array.isArray(notas) ? (
                notas.map((nota, index) => (
                  <div key={index} className='p-4'>
                    <div className='rounded-xl shadow-xl bg-gradient-to-r from-blue-200 to-blue-400 p-6 flex flex-col justify-between transition-transform transform hover:scale-105 h-full'>
                      <div>
                        <h1 className='font-medium text-gray-800 text-center text-xl mb-4'>{nota.asignombre}</h1>
                        <p className='text-6xl text-center font-bold text-gray-900'>{nota.promedio_nota}</p>
                      </div>
                      <div className="mt-4 text-center">
                        <span className="inline-block bg-indigo-600 text-white px-3 py-1 rounded-full text-sm">Promedio Acumulado</span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <h1 className='font-medium text-gray-800 text-center text-2xl w-full'>No tiene asignaturas asignadas</h1>
              )}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}

export default NotasEstudiante;
