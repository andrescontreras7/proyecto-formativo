import React, { useContext, useEffect, useState } from 'react';
import { counterContext } from '../../../context/CRMcontext';
import Layout from '../../components/layaout';
import { jwtDecode } from "jwt-decode";
import { getAsignaturas } from '../../endpoints/useGet'

const AsignaturasList = () => {
  const { auth } = useContext(counterContext);
  const [asignaturas, setAsignaturas] = useState([]);
  const decodedToken = jwtDecode(auth.token);

  useEffect(() => {
    const fetchAsignaturas = async () => {
      try {
        const data = await getAsignaturas(auth, decodedToken);
        if (data,data) {
          console.log(data)
          setAsignaturas(data.data);
        } else {
          console.error('Error: Datos recibidos no válidos');
        }
      } catch (error) {
        console.error('Error obteniendo las asignaturas:', error.message);
      }
    };

    fetchAsignaturas();
  }, [auth]);

  return (
    <Layout>
      <div className="w-full bg-[#A0BFE0] flex h-screen">
        <div className="bg-white justify-center shadow-[0_8px_20px_20px_rgba(0,0,0,0.08)] rounded-xl m-auto w-[80%] flex-col">
          <div className="mb-6 border-[1px] border-gray-200 rounded-xl p-4">
            <h3 className="font-bold mb-2">Lista de Asignaturas</h3>
            <table className="w-full text-left table-auto border-collapse border border-gray-200">
              <thead>
                <tr>
                  <th className="border border-gray-200 px-4 py-2">Nombre</th>
                  
                </tr>
              </thead>
              <tbody>
                {Array.isArray(asignaturas) ? (
                  asignaturas.map((asignatura, index) => (
                    <tr key={index}>
                      <td className="border border-gray-200 px-4 py-2">{asignatura.asignombre}</td>
                      
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="2" className="border border-gray-200 px-4 py-2">No hay asignaturas disponibles</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AsignaturasList;