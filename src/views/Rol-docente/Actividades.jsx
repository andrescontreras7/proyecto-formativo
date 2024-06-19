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
import { useParams } from 'react-router-dom';
import { IoFolderOpenOutline, IoTrashOutline, IoCreateOutline } from "react-icons/io5";
const MySwal = withReactContent(Swal);

const Actividades = () => {
  const [actividades, setActividades] = useState([]);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const { auth } = useContext(counterContext);
  const decodedToken = jwtDecode(auth.token);
  const { id, grupcod } = useParams();
  useEffect(() => {
    console.log(id)
    console.log(grupcod)
    const consulta = async () => {
      try {
        const data = await getActividadesPorFuncionario(auth, decodedToken.id); 
        if (data && Array.isArray(data)) {
            setActividades(data);
        } else {
          console.error('Los datos de las asignaturas no son un array:', data);
        }
      } catch (error) {
        
      }
    };

    consulta();
  }, [auth,id,grupcod]);

  const onCrear = () => {
    setIsCreateOpen(true);
  };
  const handleEdit = (actividad) => {
    // Aquí va tu lógica para manejar la edición de una actividad
    console.log("Editar actividad: ", actividad);
  };
  
  const handleDelete = (actividad) => {
    // Aquí va tu lógica para manejar la eliminación de una actividad
    console.log("Eliminar actividad: ", actividad);
  };

  const handleCrear = async (CodigoActividad,TituloActividad,DescripcionActividad,FechaEntrega,GrupoActividad,AsignaturaActividad,TipoActividad,URLActividad) => {
    try {
      const nuevosDatos = {
        codigo : CodigoActividad,
        nombre_tipo_evaluacion: TituloActividad ,
        descripcion: DescripcionActividad,
        url: URLActividad,
        fec_entre: FechaEntrega,
        id_grupoFK: Number(grupcod),
        id_asignatura: Number(id),
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
    <div className="bg-[#ffffff] shadow-[0_8px_20px_12px_rgba(0,0,0,0.08)] w-full h-[85vh] 2xl:h-[81vh] flex justify-center rounded-md">
      <div className="flex flex-col gap-2 w-full h-[96%] p-2 rounded-md mt-2">
        <nav className="w-full">
          <div className="flex items-center justify-between">
            <button onClick={onCrear} className="focus:outline-none text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
              + Nuevo
            </button>
            <div className="flex items-center space-x-2">
              <BiSearch className="text-gray-400" />
              <input type="text" placeholder="Buscar actividad" className="border border-gray-300 rounded-md p-2" />
            </div>
          </div>
        </nav>
        <div className="h-[90%] overflow-y-scroll">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
          {actividades.map((actividad, index) => (
  <ComponenteActividad
    key={index}
    actividad={actividad}
    titulo={actividad.nombre_tipo_evaluacion}
    descripcion={actividad.descripcion}
    src="test"
    to={`/Cursos/${id}/${grupcod}/ActividadesDetalle/${actividad.codigo}`}
  >
    <div className="flex items-center justify-end space-x-2">
      <button onClick={() => handleEdit(actividad)} className="border p-2 rounded-md mr-2 inline-flex items-center">
        <IoCreateOutline className="mr-2" /> Editar
      </button>
      <button onClick={() => handleDelete(actividad)} className="border p-2 rounded-md inline-flex items-center">
        <IoTrashOutline className="mr-2" /> Eliminar
      </button>
    </div>
  </ComponenteActividad>
))}
          
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
    </div>
  );
};

export default Actividades;