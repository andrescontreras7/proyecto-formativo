import { useNavigate } from 'react-router-dom'; 
import React, { useState, useEffect, useContext } from "react";
import ComponenteActividad from "../../components/componenteActividad"; // Import the new component
import { HiArrowSmallLeft } from "react-icons/hi2";
import Layout from '../../components/layaout';
import { BiSearch } from "react-icons/bi";
import { getActividadesPorFuncionario } from '../../endpoints/useGet'; // Ensure this is the correct path
import { createActividad } from '../../endpoints/useCreate'; // Ensure this is the correct path
import { counterContext } from "../../../context/CRMcontext";
import Swal from 'sweetalert2';
import { jwtDecode } from "jwt-decode";
import Input from '../../components/input';
import withReactContent from "sweetalert2-react-content";
import CrearActividad from "../../components/CrearActividad";

const MySwal = withReactContent(Swal);

const Actividades = () => {
  const [actividades, setActividades] = useState([]);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const { auth } = useContext(counterContext);
  const decodedToken = jwtDecode(auth.token);

  useEffect(() => {
    const consulta = async () => {
      try {
        const data = await getActividadesPorFuncionario(auth, decodedToken.id); 
        if (data && Array.isArray(data)) {
            setActividades(data);
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

  const onCrear = () => {
    setIsCreateOpen(true);
  };

  const handleCrear = async (CodigoActividad,TituloActividad,DescripcionActividad,FechaEntrega,GrupoActividad,AsignaturaActividad,TipoActividad,URLActividad) => {
    try {
      const nuevosDatos = {
        codigo: CodigoActividad,
        nombre_tipo_evaluacion: TituloActividad ,
        descripcion: DescripcionActividad,
        url: URLActividad,
        fec_entre: FechaEntrega,
        id_grupoFK: GrupoActividad,
        id_asignatura: AsignaturaActividad,
        id_funcionario: decodedToken.id ,
        tipo_eva: TipoActividad
        // Otros campos que desees actualizar...
      };
      
      await createActividad(auth, nuevosDatos);
      const data = await getActividadesPorFuncionario(auth, decodedToken.id);
      if (Array.isArray(data)) {
        setActividades(data);
      }
      setIsCreateOpen(false);
      MySwal.fire({
        icon: 'success',
        title: '¡Éxito!',
        text: 'La Actividad se ha creado correctamente.'
      });
    } catch (error) {
      MySwal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Hubo un error al crear La Actividad. Por favor, inténtalo de nuevo.'
      });
      console.error('Error al crear La Actividad:', error);
    }
  };

  return (
    <Layout titulo={"Asignaturas "} icono={<HiArrowSmallLeft className='text-xl' />} >
      <div className="bg-[#ffffff] shadow-[0_8px_20px_12px_rgba(0,0,0,0.08)] w-full h-[85vh] 2xl:h-[87vh] flex justify-center rounded-md">
        <div className="flex flex-col gap-2 w-full h-[96%] p-2 rounded-md mt-2">
          <nav className="w-full">
            <div className="items-center mt-2">
                <button  onClick={onCrear} className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 items-right">
                + Nuevo
                </button>
            </div>
          </nav>
          <div className="h-[90%] overflow-y-scroll">
            <div className="flex flex-wrap gap-8 z-1 justify-center">
              {actividades.map((actividad, index) => (
                <ComponenteActividad
                  key={index}
                  actividad = {actividad}
                  titulo={actividad.nombre_tipo_evaluacion}
                  descripcion={actividad.descripcion}

                  src="test"
                  to={`/ActividadesDetalle/${actividad.codigo}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {isCreateOpen && (
        <CrearActividad
          isOpen={isCreateOpen}
          onClose={() => setIsCreateOpen(false)}
          onCrear={handleCrear}
        />
      )}
    </Layout>
  );
}

export default Actividades;
