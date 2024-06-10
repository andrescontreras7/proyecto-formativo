import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalFooter, Button, useDisclosure, ModalBody } from "@nextui-org/react";
import { BiDotsVerticalRounded } from "react-icons/bi"; 
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const EditarArea = ({ areaId, nombreArea, onEditar }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [nuevoNombreArea, setNuevoNombreArea] = useState(nombreArea);

  const handleEditar = async () => {
    try {
      await onEditar(areaId, nuevoNombreArea);
      onClose();
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

  return (
    <>
      <Button color="" onPress={onOpen} className="p-0 m-0">
        <div>
          <BiDotsVerticalRounded className="size-6" />
        </div>
      </Button>
      <Modal backdrop="blur" className="" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1 uppercase text-indigo-900 border-b-1">
              Editar Área
            </ModalHeader>
            <ModalBody>
              <label htmlFor="nuevoNombreArea" className="block mb-2">Nuevo nombre del área:</label>
              <input type="text" id="nuevoNombreArea" value={nuevoNombreArea} onChange={(e) => setNuevoNombreArea(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2" />
            </ModalBody>
            <ModalFooter>
              <Button color="primary" variant="ghost" onPress={handleEditar}>Guardar cambios</Button>
              <Button color="secondary" variant="ghost" onPress={onClose}>Cancelar</Button>
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditarArea;
