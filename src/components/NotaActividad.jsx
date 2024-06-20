import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalFooter, Button, ModalBody } from "@nextui-org/react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const NotaActividad = ({ isOpen, onClose, idActividad, notaActividad, onCrear }) => {
  const [NuevaNotaActividad, setNotaActividad] = useState(notaActividad);
  const [historial, setHistorial] = useState([]);

  const handleEditar = async () => {
    if (NuevaNotaActividad > 10) {
      MySwal.fire({
        icon: 'warning',
        title: 'Nota inválida',
        text: 'La nota no puede ser mayor a 10.'
      });
      return;
    }

    try {
      await onCrear(idActividad, NuevaNotaActividad);
      setHistorial([...historial, { idActividad, nota: NuevaNotaActividad, fecha: new Date().toLocaleString() }]);
      onClose();
      MySwal.fire({
        icon: 'success',
        title: '¡Éxito!',
        text: 'La Nota se ha actualizado correctamente.'
      });
    } catch (error) {
      MySwal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Hubo un error al actualizar La Nota. Por favor, inténtalo de nuevo.'
      });
      console.error('Error al actualizar La Nota:', error);
    }
  };

  return (
    <Modal backdrop="blur" className="" isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <>
          <ModalHeader className="flex flex-col gap-1 uppercase text-indigo-900 border-b-1">
            Calificar
          </ModalHeader>
          <ModalBody>
            <label htmlFor="NuevaNotaActividad" className="block mb-2">Nota:</label>
            <input 
              type="number" 
              id="NuevaNotaActividad" 
              value={NuevaNotaActividad} 
              onChange={(e) => {
                const value = e.target.value;
                if (value <= 10) {
                  setNotaActividad(value);
                } else {
                  MySwal.fire({
                    icon: 'warning',
                    title: 'Nota inválida',
                    text: 'La nota no puede ser mayor a 10.'
                  });
                }
              }} 
              className="w-full border border-gray-300 rounded-md px-3 py-2" 
            />
            <div className="mt-4">
              <h3 className="font-bold">Historial de ediciones:</h3>
              <ul className="list-disc list-inside">
                {historial.map((entry, index) => (
                  <li key={index}>
                    {entry.fecha}: Nota {entry.nota}
                  </li>
                ))}
              </ul>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" variant="ghost" onPress={handleEditar}>Guardar cambios</Button>
            <Button color="secondary" variant="ghost" onPress={onClose}>Cancelar</Button>
          </ModalFooter>
        </>
      </ModalContent>
    </Modal>
  );
};

export default NotaActividad;
