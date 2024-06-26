import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalFooter, Button, ModalBody } from "@nextui-org/react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const CrearArea = ({ isOpen, onClose, onCrear }) => {
  const [nuevoNombreArea, setNuevoNombreArea] = useState("");
  const [nuevocodigoArea, setNuevocodigoArea] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!nuevocodigoArea) {
      errors.codigo = "El código del área es obligatorio.";
    } else if (!/^\d+$/.test(nuevocodigoArea)) {
      errors.codigo = "El código del área solo puede contener números.";
    }
    if (!nuevoNombreArea) {
      errors.nombre = "El nombre del área es obligatorio.";
    }
    return errors;
  };

  const handleCrear = async () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await onCrear(nuevocodigoArea, nuevoNombreArea);
      onClose();
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
    <Modal backdrop="blur" className="" isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <>
          <ModalHeader className="flex flex-col gap-1 uppercase text-indigo-900 border-b-1">
            Crear Área
          </ModalHeader>
          <ModalBody>
            <label htmlFor="nuevocodigoArea" className="block mb-2">Nuevo código del área:</label>
            <input
              type="text"
              id="nuevocodigoArea"
              value={nuevocodigoArea}
              onChange={(e) => setNuevocodigoArea(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
            {errors.codigo && <p className="text-red-500 text-sm">{errors.codigo}</p>}

            <label htmlFor="nuevoNombreArea" className="block mb-2">Nuevo nombre del área:</label>
            <input
              type="text"
              id="nuevoNombreArea"
              value={nuevoNombreArea}
              onChange={(e) => setNuevoNombreArea(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
            {errors.nombre && <p className="text-red-500 text-sm">{errors.nombre}</p>}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" variant="ghost" onPress={handleCrear}>Guardar cambios</Button>
            <Button color="secondary" variant="ghost" onPress={onClose}>Cancelar</Button>
          </ModalFooter>
        </>
      </ModalContent>
    </Modal>
  );
};

export default CrearArea;
