import React from 'react';
import Layout from '../../components/layaout';
import Select from '../../components/seletct';
export default function RegistrarAlumno() {
  return (
    <Layout>
      <div className="bg-white w-full h-[85vh] 2xl:h-[86vh] flex justify-center items-start  rounded-md">
        <form className="w-3/4 space-y-8 mt-10">
          <h2 className="text-2xl font-semibold text-center">Registro de Estudiantes</h2>
          <div className="grid grid-cols-2 gap-4">
            <input className="w-full p-2 border border-gray-300 rounded-md" type="text" placeholder="Nombre del estudiante" />
            <input className="w-full p-2 border border-gray-300 rounded-md" type="text" placeholder="Apellido del estudiante" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input className="w-full p-2 border border-gray-300 rounded-md" type="text" placeholder="Correo electrónico" />
            <input className="w-full p-2 border border-gray-300 rounded-md" type="text" placeholder="Número de teléfono" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Select/>
            <Select/>
           
            
          </div>
          <button className="w-full p-2 bg-blue-500 text-white rounded-md" type="submit">Registrar</button>
        </form>
      </div>
    </Layout>
  );
}