// Importamos las dependencias necesarias
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/layaout';
import { HiArrowSmallLeft } from "react-icons/hi2";
import Input from '../../components/input';
import Select from '../../components/seletct';
import Componente from '../../components/componente';


const AsistenciasD = () => {
  return (
    // Usamos el componente Layaout para definir la estructura básica de la página
    <Layout titulo={"Asistencias estudiantes  "} icono={<HiArrowSmallLeft className='text-2xl font-bold' />}>
      <div className="overflow-y-scroll shadow-[0_8px_10px_15px_rgba(0,0,0,0.08)] w-full h-[87vh] max-2xl:h-[85vh] rounded-md">
        <div className='p-2'>
          <h1 className='font-semibold text-xl text-gray-700 p-2'>Filtros</h1>
          <hr />
          <div className='flex gap-6 mt-2 bg-[#6f99e1] bg-opacity-25 rounded-md p-4 w-auto m-10'>
            {/* Aquí se colocan los componentes de entrada para los filtros */}
            <Select/>
            <Input/>
            <Input/>
            <Input/>
          </div>
          <div className='flex flex-wrap max-2xl:gap-2 justify-center m-auto p-2 gap-4'>
            {/* Aquí se colocan los componentes que representan las diferentes asistencias */}
            <Componente titulo='Matematicas' to="/AsistenciasEstudiantes" descripcion='Lo culpa asperiores accusantium quae exceptussri.' src='../../../../public/m.jpg' />
            <Componente titulo='Lenguaje' to="/AsistenciasEstudiantes" descripcion='Lo culpa asperiores accusantium quae exceptussri.' src='../../../../public/l.jpg' />
          </div>
        </div>
      </div>
    </Layout>
  );
};

// se exporta el componente para que pueda ser usado en otros archivos pa
export default AsistenciasD;