import React, { useContext, useEffect, useState } from 'react';
import Layout from '../../components/layaout';
import { counterContext } from "../../../context/CRMcontext";
import {jwtDecode} from "jwt-decode"; 
import { getPorcentaje, getAsiganturaDocente } from "../../endpoints/useGet";

const MainContent = () => {
  const { auth } = useContext(counterContext);
  const decodedToken = jwtDecode(auth.token);
  const [dat, setDat] = useState([]);
  const [porcentaje, setPorcentaje] = useState([]);

  useEffect(() => {
    getAsiganturaDocente(auth, decodedToken.id).then((data) => {
      setDat(data.data);
      const asigcod = data.data.map((item) => item.asignatura);
      getPorcentaje(auth, asigcod).then((data) => {
        setPorcentaje(data);
      });
    });
  }, [auth]);

  return (
    <Layout>
     
      <main className="p-4 w-full h-[84vh] 2xl:h-[84vh] max-lg:overflow-y-scroll shadow-[0_8px_10px_15px_rgba(0,0,0,0.08)] rounded-md lg:flex-row gap-4">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Bienvenido,<span className='text-indigo-900'> {auth.nombre} 👋</span> </h1>
        <section className="grid grid-cols-3 h-[90%] grid-rows-3 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-4 text-blue-600">Progreso de Tareas</h2>
            <div className="text-3xl font-bold text-blue-800">75%</div>
            <p className="text-gray-600">Tareas completadas</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-4 text-green-600">Calificaciones </h2>
            <div className="text-3xl font-bold text-green-800">85%</div>
            <p className="text-gray-600">Calificación promedio</p>
          </div>
          <div className="bg-yellow-50 col-span-3 over p-6 row-span-3 row-start-3 lg:col-start-3 lg:row-span-3 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
            <h1 className="text-2xl font-bold text-yellow-800">Mis asignaturas</h1>
            {
              porcentaje.map((item, index) => (
                <div key={index} className="bg-yellow-50 p-4 hover:shadow-lg transition-shadow duration-300">
                  <h2 className="text-xl font-semibold mb-4 text-yellow-600">{item.asig.asignombre}</h2>
                  <p className='text-start text-sm'>Porcentaje de asistencia</p>
                  <div className="text-3xl font-bold text-yellow-800">{item.data.data.porcentaje}</div>
                </div>
              ))
            }
          </div>
          <button className="bg-teal-500 w-[80%] text-white font-semibold p-6 rounded hover:bg-teal-600 transition-colors duration-300">Mi perfil</button>
          <button className="bg-purple-500 w-[80%] text-white font-semibold p-6 rounded hover:bg-purple-600 transition-colors duration-300">Asignar Tareas</button>
          <button className="bg-indigo-500 w-[80%] text-white font-semibold p-6 rounded hover:bg-indigo-600 transition-colors duration-300">Subir documentos</button>
          <button className="bg-pink-500 w-[80%] text-white p-6 font-semibold rounded hover:bg-pink-600 transition-colors duration-300">Programar Evaluaciones</button>
        </section>
        <section className="grid grid-cols-3 gap-6 mb-8"></section>
        <section className="mt-8 flex p-2 justify-center"></section>
      </main>
    </Layout>
  );
};

export default MainContent;
