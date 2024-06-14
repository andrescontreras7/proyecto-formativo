import React, { useState, useCallback } from "react";
import { Modal, ModalContent, ModalHeader, ModalFooter, Button, ModalBody, Progress } from "@nextui-org/react";
import { BsFillFileEarmarkImageFill } from "react-icons/bs";
import { useDropzone } from 'react-dropzone';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const MySwal = withReactContent(Swal);

const CrearEntregaTarea = ({ isOpen, onClose, onCrear }) => {
  const [descripcionTarea, setDescripcionTarea] = useState("");
  const [errors, setErrors] = useState({});
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({
    onDrop,
    accept: ".pdf, text/plain"
  });

  const validateForm = () => {
    const errors = {};
    if (acceptedFiles.length === 0) {
      alert("Por favor, selecciona un archivo primero.");
      return;
    }
    if (!descripcionTarea) {
      errors.nombre = "La descripción es obligatoria.";
    }
    return errors;
  };

  const handleCrear = async () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsUploading(true);

    const uuid = uuidv4();

    try {
      const formData = new FormData();
      formData.append('file', acceptedFiles[0]);
      formData.append('upload_preset', "react-imagenes");
      formData.append("api_key", "179755984322365");

      const response = await axios.post('https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: progressEvent => {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setUploadProgress(percentCompleted);
        }
      });

      console.log('Archivo subido exitosamente:', response.data);

      await onCrear(uuid, descripcionTarea, response.data.secure_url);
      onClose();
      MySwal.fire({
        icon: 'success',
        title: '¡Éxito!',
        text: 'La tarea se ha creado correctamente.'
      });
    } catch (error) {
      MySwal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Hubo un error al crear la tarea. Por favor, inténtalo de nuevo.'
      });
      console.error('Error al crear la tarea:', error);
    } finally {
      setIsUploading(false);
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
            <label htmlFor="descripcionTarea" className="block mb-2">Descripción de la Tarea:</label>
            <input
              type="text"
              id="descripcionTarea"
              value={descripcionTarea}
              onChange={(e) => setDescripcionTarea(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
            {errors.nombre && <p className="text-red-500 text-sm">{errors.nombre}</p>}

            <div {...getRootProps()} style={{ border: '2px dashed #cccccc', padding: '10px', textAlign: 'center', width: "400px", margin: '20px auto' }}>
              <input {...getInputProps()} />
              {
                isDragActive ?
                  <p>Suelta el archivo aquí...</p> :
                  <p className='text-center flex justify-center flex-col items-center p-2 gap-2'>
                    Arrastra un archivo PDF o de texto aquí <BsFillFileEarmarkImageFill className='text-center size-48 text-gray-600 opacity-50' />
                    Subir Archivo
                  </p>
              }
            </div>

            {isUploading && (
              <div className="text-center">
                <Progress value={uploadProgress} />
                <p>{uploadProgress}% completado</p>
              </div>
            )}

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
