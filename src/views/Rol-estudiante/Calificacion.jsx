import React, { useContext, useEffect, useState } from 'react';
import { counterContext } from '../../../context/CRMcontext';
import Layout from '../../components/layaout';
import { jwtDecode } from "jwt-decode";
import { getEstudiantesAsignatura } from '../../endpoints/useGet'; // Asegúrate de que esta sea la ruta correcta

const Calificacions = () => {
  const { auth } = useContext(counterContext);
  const [cursos, setCursos] = useState([]);

  
  const decodedToken = jwtDecode(auth.token);

  useEffect(() => {
    const fetchCursos = async () => {
      try {
        const data = await getEstudiantesAsignatura(auth, decodedToken.id);
        console.log(data);
        if (Array.isArray(data.data)) {
            console.log("jhfgfhjkl")
        console.log(data.data)
          setCursos(data.data);
        } else {
          console.error('Los datos de los cursos no son un array:', data);
        }
      } catch (error) {
        console.error('Error obteniendo las asignaturas:', error);
      }
    };
  
    fetchCursos();
  }, [auth]);

  return (
    <Layout>
      <div className="w-full bg-[#A0BFE0] flex h-screen">
        <div className="bg-white justify-center shadow-[0_8px_20px_20px_rgba(0,0,0,0.08)] rounded-xl m-auto w-[80%] flex-col">
          <div className=''>
            <div className="mb-2 text-center border-[1px] border-gray-200 rounded-xl p-4">
              <img
                src={auth.fotoUrl || "/public/registarprofesor.png"} 
                alt="Foto de Perfil"
                className="rounded-full w-24 h-24 mx-auto mb-4"
              />
              <h2 className="text-xl font-bold">{auth.nombre}</h2>
            </div>

            <div className="mb-6 border-[1px] border-gray-200 rounded-xl p-4">
              <h3 className="font-bold mb-2">Cursos que estoy tomando</h3>
             
              <table className="w-full text-left table-auto border-collapse border border-gray-200">
                <thead>
                  <tr>
                    <th className="border border-gray-200 px-4 py-2">Asignatura</th>
                    
                  </tr>
                </thead>
                <tbody>
  {Array.isArray(cursos) ? (
    cursos.map((curso, index) => (
      <tr key={index}>
        <td className="border border-gray-200 px-4 py-2">{curso.asignatura.asignombre}</td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="1">No hay cursos disponibles</td>
    </tr>
  )}
</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Calificacions;
