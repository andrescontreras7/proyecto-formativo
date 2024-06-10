import { useContext, useEffect, useState } from "react";
import { counterContext } from "../../../context/CRMcontext";
import Layout from "../../components/layaout";
import { jwtDecode } from "jwt-decode";
import { getAreas } from "../../endpoints/useGet";
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";
import { updateArea } from "../../endpoints/useEditar";
import EditarArea from "../../components/EditarArea";
import { deleteArea } from "../../endpoints/useDelete";
import { Modal, ModalContent, ModalHeader, ModalFooter, Button, useDisclosure, ModalBody } from "@nextui-org/react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";



const MySwal = withReactContent(Swal);

// Componente Modal
const ModalComponent = ({ objeto, id, onEliminar }) => {
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

  const { func } = objeto;

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
              {func}
            </ModalHeader>
            <ModalBody>
              <ol className="p-2 flex flex-col gap-4 font-semibold uppercase">
                <li  className="">
                  <button>EDITAR</button>
                </li>
                <li onClick={handleDelete} className="">
                  <button>ELIMINAR</button>
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

  return (
    <Layout>
      <div className="w-full bg-[#A0BFE0] flex h-screen">
        <div className="bg-white justify-center shadow-[0_8px_20px_20px_rgba(0,0,0,0.08)] rounded-xl m-auto w-[80%] flex-col">
          <div className="">
            <div className="mb-2 text-center border-[1px] border-gray-200 rounded-xl p-4">
              <img
                src={auth.fotoUrl || "/public/registarprofesor.png"}
                alt="Foto de Perfil"
                className="rounded-full w-24 h-24 mx-auto mb-4"
              />
              <h2 className="text-xl font-bold">{auth.nombre}</h2>
            </div>
            <div className="mb-6 border-[1px] border-gray-200 rounded-xl p-4">
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
                          <ModalComponent objeto={{ func: "Editar Área" }} id={curso.cod_area} onEliminar={eliminarArea} />
                          <button
                            className="text-red-500 hover:text-red-700 flex items-center"
                            onClick={() => eliminarArea(curso.cod_area)}
                          >
                            <HiArrowSmallRight className="mr-1" />
                          </button>
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
    </Layout>
  );
};

export default Calificaciones;
