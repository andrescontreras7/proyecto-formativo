import React, { useState,useCallback } from "react";
import { Modal, ModalContent, ModalHeader, ModalFooter, Button, ModalBody } from "@nextui-org/react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from 'uuid';
import withReactContent from "sweetalert2-react-content";
import { BsFillFileEarmarkImageFill } from "react-icons/bs"
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

const MySwal = withReactContent(Swal);

const CrearEntregaTarea = ({ isOpen, onClose, onCrear }) => {
  const [descripcionTarea, setdescripcionTarea] = useState("");
  const [errors, setErrors] = useState({});
  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles);
    }, []);
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({ onDrop });

  const validateForm = () => {
    const errors = {};
    if (acceptedFiles.length === 0) {
      alert("Por favor, selecciona un archivo primero.");
      return;
    }
    if (!descripcionTarea) {
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
    const uuid = uuidv4();
    try {

      const formData = new FormData();
      formData.append('file', acceptedFiles[0]);
      formData.append('upload_preset', "react-imagenes");
      formData.append("api_key", "179755984322365");

      const response = await axios.post('https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Archivo subido exitosamente:', response.data);

      await onCrear(uuid, descripcionTarea, response.data.secure_url);
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
            Subir Tarea
          </ModalHeader>
          <ModalBody>

            <label htmlFor="descripcionTarea" className="block mb-2">Descripcion:</label>
            <input
              type="text"
              id="descripcionTarea"
              value={descripcionTarea}
              onChange={(e) => setdescripcionTarea(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
            {errors.nombre && <p className="text-red-500 text-sm">{errors.nombre}</p>}

            <div {...getRootProps()} style={{ border: '2px dashed #cccccc', padding: '10px', textAlign: 'center', width:"400px" }}>
            <input {...getInputProps()} />
            {
              isDragActive ?
                <p>Seleciona el archivo  </p> :
                <p className='text-center flex justify-center flex-col items-center p-2 gap-2'> Arrastre el archivo aca  <BsFillFileEarmarkImageFill className='text-center size-48 text-gray-600 opacity-50' />Subir Archivo </p>
            }
          </div>

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

export default CrearEntregaTarea;
