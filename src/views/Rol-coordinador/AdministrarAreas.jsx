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
import DataTable from 'react-data-table-component';

const MySwal = withReactContent(Swal);

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
  const [filtroNombre, setFiltroNombre] = useState("");
  const [filtroCodigo, setFiltroCodigo] = useState("");
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

  const filteredCursos = cursos.filter(curso =>
    curso.are_nombre.toLowerCase().includes(filtroNombre.toLowerCase()) &&
    String(curso.cod_area).toLowerCase().includes(filtroCodigo.toLowerCase())
  );

  const columns = [
    {
      name: 'Nombre del área',
      selector: row => row.are_nombre,
      sortable: true,
    },
    {
      name: 'Código del área',
      selector: row => row.cod_area,
      sortable: true,
    },
    {
      name: 'Acción',
      cell: row => (
        <ModalComponent
          objeto={{ func: "Editar Área" }}
          id={row.cod_area}
          onEliminar={eliminarArea}
          onEditar={() => onEditar(row)}
          onCrear={() => onCrear()}
        />
      ),
    },
  ];

  const customStyles = {
    headCells: {
      style: {
        fontWeight: 'bold',
      },
    },
  };

  return (
    <Layout>
      <div className="w-full flex flex-col items-center h-screen p-6">
        <div className="w-full  bg-[#ffffff] flex justify-between mb-4">
          <div className="flex gap-2  bg-opacity-25">
            <input
              type="text"
              placeholder="Filtrar por nombre"
              value={filtroNombre}
              onChange={(e) => setFiltroNombre(e.target.value)}
              className="border border-gray-300 rounded-lg text-sm px-5 py-2"
            />
            <input
              type="text"
              placeholder="Filtrar por código"
              value={filtroCodigo}
              onChange={(e) => setFiltroCodigo(e.target.value)}
              className="border border-gray-300 rounded-lg text-sm px-3 py-2"
            />
          </div>
          <button
            onClick={onCrear}
            className="focus:outline-none text-white  bg-purple-500 bg-opacity-70 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
          >
            + AGREGAR UNA NUEVA AREA
          </button>
        </div>
        <div className="w-full h-full">
          <DataTable
            columns={columns}
            data={filteredCursos}
            pagination
            highlightOnHover
            customStyles={customStyles}
            noDataComponent="No hay áreas disponibles"
            paginationComponentOptions={{
              rowsPerPageText: 'Filas por página',
              rangeSeparatorText: 'de',
              noRowsPerPage: false,
              selectAllRowsItem: true,
              selectAllRowsItemText: 'Todos',
            }}
          />
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
