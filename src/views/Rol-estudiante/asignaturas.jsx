import { useNavigate } from 'react-router-dom'; 
import React, { useState, useEffect, useContext } from "react";
import Componente from "../../components/componente"; // Import the new component
import { HiArrowSmallLeft } from "react-icons/hi2";
import Layout from '../../components/layaout';
import { BiSearch } from "react-icons/bi";
import { getEstudiantesAsignatura } from '../../endpoints/useGet'; // Ensure this is the correct path
import { counterContext } from "../../../context/CRMcontext";
import Swal from 'sweetalert2';
import { jwtDecode } from "jwt-decode";
import Input from '../../components/input';

const Asignaturas = () => {
  const [asignatura, setAsignatura] = useState([]);
  const { auth } = useContext(counterContext);
  const decodedToken = jwtDecode(auth.token);

  useEffect(() => {
    const consulta = async () => {
      try {
        const data = await getEstudiantesAsignatura(auth, decodedToken.id); 
        if (data && Array.isArray(data.data)) {
          setAsignatura(data.data);
        } else {
          console.error('Los datos de las asignaturas no son un array:', data);
        }
      } catch (error) {
        if (error && error.response && error.response.status === 403) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No tienes permisos para acceder a este contenido',
            footer: '<a href>Why do I have this issue?</a>'
          });
        } else {
          console.error('Error obteniendo las asignaturas:', error);
        }
      }
    };

    consulta();
  }, [auth]);

  return (
    <Layout titulo={"Asignaturas "} icono={<HiArrowSmallLeft className='text-xl' />} >
      <div className="bg-[#ffffff] shadow-[0_8px_20px_12px_rgba(0,0,0,0.08)] w-full h-[85vh] 2xl:h-[87vh] flex justify-center rounded-md">
        <div className="flex flex-col gap-2 w-full h-[96%] p-2 rounded-md mt-2">
          <nav className="w-full">
            <div className="flex items-center mt-2">
             
            </div>
          </nav>
          <div className="h-[90%] overflow-y-scroll">
            <div className="flex flex-wrap gap-8 z-1 justify-center">
              {asignatura.map((asignatura, index) => (
                <Componente
                  key={index}
                 
                  titulo={asignatura.asignatura.asignombre}
                  descripcion={asignatura.descripcion}

                  src={asignatura.url ? asignatura.url : 'https://image.shutterstock.com/shutterstock/photos/1976693516/display_1500/stock-vector-no-image-available-sign-isolated-on-white-background-vector-illustration-1976693516.jpg'}
                  to={`/detalle-asignatura/${asignatura.id}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Asignaturas;
