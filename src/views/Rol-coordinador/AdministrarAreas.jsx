import React, { useContext, useEffect, useState } from "react";
import { counterContext } from "../../../context/CRMcontext";
import Layout from "../../components/layaout";
import { jwtDecode } from "jwt-decode";
import { getAreas } from "../../endpoints/useGet";
import { updateArea } from "../../endpoints/useEditar";
import { createAreas } from "../../endpoints/useCreate";
import EditarArea from "../../components/EditarArea";
import { deleteArea } from "../../endpoints/useDelete";
import { Modal, ModalContent, ModalHeader, ModalFooter, Button, useDisclosure, ModalBody } from "@nextui-org/react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import CrearArea from "../../components/CrearArea";

const MySwal = withReactContent(Swal);

// Componente Modal
const ModalComponent = ({ objeto, id, onEliminar, onEditar, onCrear }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDelete = () => {
    MySwal.fire({
      title: '¿Estás seguro?',
      text: "No podrás revertir esto",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await onEliminar(id);
        onClose();
        MySwal.fire(
          'Eliminado',
          'El registro ha sido eliminado',
          'success'
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        onClose();
      }
    });
  };

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <Button color="" onPress={onOpen} className="p-0 m-0">
          <div>
            <BiDotsVerticalRounded className="size-6" />
          </div>
        </Button>
      </div>
      <Modal backdrop="blur" className="" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1 uppercase text-indigo-900 border-b-1">
              {objeto.func}
            </ModalHeader>
            <ModalBody>
              <ol className="p-2 flex flex-col gap-4 font-semibold uppercase">
                <li>
                  <button onClick={onEditar}>EDITAR</button>
                </li>
                <li>
                  <button onClick={handleDelete}>ELIMINAR</button>
                </li>
              </ol>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Cerrar
              </Button>
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </>
  );
};

const Calificaciones = () => {
  const { auth } = useContext(counterContext);
  const [cursos, setCursos] = useState([]);
  const [areaToEdit, setAreaToEdit] = useState(null);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const decodedToken = jwtDecode(auth.token);

  useEffect(() => {
    const fetchAreas = async () => {
      try {
        const data = await getAreas(auth, decodedToken.id);
        if (Array.isArray(data.data)) {
          setCursos(data.data);
        } else {
          console.error("Los datos de los cursos no son un array:", data);
        }
      } catch (error) {
        console.error("Error obteniendo las áreas:", error);
      }
    };

    fetchAreas();
  }, [auth]);

  const eliminarArea = async (cod_Area) => {
    try {
      await deleteArea(auth, cod_Area);
      const data = await getAreas(auth, decodedToken.id);
      if (Array.isArray(data.data)) {
        setCursos(data.data);
      } else {
        console.error("Los datos de los cursos no son un array:", data);
      }
    } catch (error) {
      console.error("Error al eliminar el área:", error);
    }
  };

  const onEditar = (area) => {
    setAreaToEdit(area);
    setIsEditOpen(true);
  };

  const handleEditar = async (areaId, nuevoNombreArea) => {
    try {
      const nuevosDatos = {
        are_nombre: nuevoNombreArea,
        // Otros campos que desees actualizar...
      };
      await updateArea(auth, areaId, nuevosDatos);
      setAreaToEdit(null);
      const data = await getAreas(auth, decodedToken.id);
      if (Array.isArray(data.data)) {
        setCursos(data.data);
      }
      setIsEditOpen(false);
      MySwal.fire({
        icon: 'success',
        title: '¡Éxito!',
        text: 'El área se ha actualizado correctamente.'
      });
    } catch (error) {
      MySwal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Hubo un error al actualizar el área. Por favor, inténtalo de nuevo.'
      });
      console.error('Error al actualizar el área:', error);
    }
  };

  const onCrear = () => {
    setIsCreateOpen(true);
  };

  const handleCrear = async (codigoArea, nuevoNombreArea) => {
    try {
      const nuevosDatos = {
        cod_area: codigoArea,
        are_nombre: nuevoNombreArea,
        // Otros campos que desees actualizar...
      };
      await createAreas(auth, nuevosDatos);
      const data = await getAreas(auth, decodedToken.id);
      if (Array.isArray(data.data)) {
        setCursos(data.data);
      }
      setIsCreateOpen(false);
      MySwal.fire({
        icon: 'success',
        title: '¡Éxito!',
        text: 'El área se ha creado correctamente.'
      });
    } catch (error) {
      MySwal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Hubo un error al crear el área. Por favor, inténtalo de nuevo.'
      });
      console.error('Error al crear el área:', error);
    }
  };

  return (
    <Layout>
      <div className="w-full bg-[#A0BFE0] flex h-screen">
        <div className="bg-white justify-right shadow-[0_8px_20px_20px_rgba(0,0,0,0.08)] rounded-xl m-auto w-[80%] flex-col overflow-auto h-[80%]">
          <div className="">
            <div className="mb-2 text-right border-[1px] border-gray-200 rounded-xl p-4">
              <button
                onClick={onCrear}
                className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 items-right"
              >
                + Nuevo
              </button>
            </div>
            <div className="mb-6 border-[1px] border-gray-200 rounded-xl p-4 overflow-auto max-h-[60vh]">
              <h3 className="font-bold mb-2">Áreas</h3>
              <table className="w-full text-left table-auto border-collapse border border-gray-200">
                <thead>
                  <tr>
                    <th className="border border-gray-200 px-4 py-2">Nombre del área</th>
                    <th className="border border-gray-200 px-4 py-2">Código del área</th>
                    <th className="border border-gray-200 px-4 py-2">Estado</th>
                    <th className="border border-gray-200 px-4 py-2">Acción</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(cursos) ? (
                    cursos.map((curso, index) => (
                      <tr key={index}>
                        <td className="border border-gray-200 px-4 py-2">{curso.are_nombre}</td>
                        <td className="border border-gray-200 px-4 py-2">{curso.cod_area}</td>
                        <td className="border border-gray-200 px-4 py-2">{curso.activo}</td>
                        <td className="border border-gray-200 px-4 py-2 gap-2 flex">
                          <ModalComponent
                            objeto={{ func: "Editar Área" }}
                            id={curso.cod_area}
                            onEliminar={eliminarArea}
                            onEditar={() => onEditar(curso)}
                            onCrear={() => onCrear()}
                          />
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4">No hay cursos disponibles</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {areaToEdit && (
        <EditarArea
          isOpen={isEditOpen}
          onClose={() => setIsEditOpen(false)}
          areaId={areaToEdit.cod_area}
          nombreArea={areaToEdit.are_nombre}
          onEditar={handleEditar}
        />
      )}

      {isCreateOpen && (
        <CrearArea
          isOpen={isCreateOpen}
          onClose={() => setIsCreateOpen(false)}
          onCrear={handleCrear}
        />
      )}
    </Layout>
  );
};

export default Calificaciones;
