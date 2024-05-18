import React from 'react';
import { BsSearch } from "react-icons/bs";
import Layout from '../../components/layaout';  
import Componente from '../../components/cursos_estudiantes';

const Cursos = () => {
  return (
    <Layout titulo=' Mis Cursos 📚' icono=''>
      <div className="p-4 w-full h-[84vh] 2xl:h-[84vh]  shadow-[0_8px_10px_15px_rgba(0,0,0,0.08)] rounded-md flex flex-col lg:flex-row gap-4">   
        <div className="flex-1 overflow-y-scroll">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex-1 ml-4">
              <div className="relative">
                <BsSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md" type="search" placeholder="Buscar cursos" />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 ">
            <Componente titulo='Matemáticas' descripcion='Lorem ipsum dol' imagen='https://th.bing.com/th/id/R.324437d5a5ab0ebffaa6eb7d2a8d1cf6?rik=IExfZ4%2b11%2bp4sQ&pid=ImgRaw&r=0' to='/cursos/matematicas' />
            <Componente titulo='Matemáticas' descripcion='Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde q' src='public\matematicas.png' to='/cursos/matematicas' />
            <Componente titulo='Matemáticas' descripcion='Lorem ipsum dolor sit amet consectetur adipisicing eli sssssssssssssssdddddddddddddddddddddddddddddddddddt. Unde q' src='public\matematicas.png' to='/cursos/matematicas' />
            <Componente titulo='Matemáticas' descripcion='breve descripcion ' src='public\matematicas.png' to='/cursos/matematicas' />
            <Componente titulo='Matemáticas' descripcion='Lorem ipsum dol' src='public\matematicas.png' to='/cursos/matematicas' />
          </div>
        </div>
        <div className="lg:w-80 border border-gray-300 rounded-md p-4">
          <h3 className="text-xl font-bold mb-2">Barra lateral</h3>
          <p>Contenido de la barra lateral</p>
        </div>
      </div>
    </Layout>
  );
};

export default Cursos;