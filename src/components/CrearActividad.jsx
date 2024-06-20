import React, { useState, useCallback, useContext, useEffect } from "react";
import { Modal, ModalContent, ModalHeader, ModalFooter, Button, ModalBody, Progress } from "@nextui-org/react";
import { BsFillFileEarmarkImageFill } from "react-icons/bs";
import { useDropzone } from 'react-dropzone';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import axios from 'axios';
import { counterContext } from "../../context/CRMcontext";
import { getEvaluacionesTipos } from '../endpoints/useGet'; // Asegúrate de que esta sea la ruta correcta

const MySwal = withReactContent(Swal);

const CrearActividad = ({ isOpen, onClose, onCrear }) => {
  const [CodigoActividad, setCodigoActividad] = useState("");
  const [TituloActividad, setTituloActividad] = useState("");
  const [DescripcionActividad, setDescripcionActividad] = useState("");
  const [FechaEntrega, setFechaEntrega] = useState("");
  const [GrupoActividad, setGrupoActividad] = useState("");
  const [AsignaturaActividad, setAsignaturaActividad] = useState("");
  const [TipoActividad, setTipoActividad] = useState("");
  const [listTipoActividad, setListTipoActividad] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const { auth } = useContext(counterContext);

  useEffect(() => {
    getEvaluacionesTipos(auth).then(res => {
      setListTipoActividad(res);
      console.log(res);
    });
  }, [auth]);

  const [errors, setErrors] = useState({});

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

    if (!CodigoActividad) {
      errors.codigo = "El código del área es obligatorio.";
    } else if (!/^\d+$/.test(CodigoActividad)) {
      errors.codigo = "El código del área solo puede contener números.";
    }
    if (!TituloActividad) {
      errors.titulo = "El título de la actividad es obligatorio.";
    }
    if (!DescripcionActividad) {
      errors.descripcion = "La descripción de la actividad es obligatoria.";
    }
    if (!FechaEntrega) {
      errors.fecha = "La fecha de entrega es obligatoria.";
    }
    if (!TipoActividad) {
      errors.tipo = "El tipo de actividad es obligatorio.";
    }

    return errors;
  };

  const handleCrear = async () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsUploading(true); // Comienza la carga

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
      console.log('HEREE 2')
      console.log(TipoActividad)
      await onCrear(CodigoActividad, TituloActividad, DescripcionActividad, FechaEntrega, GrupoActividad, AsignaturaActividad, TipoActividad, response.data.secure_url);
      onClose();
      MySwal.fire({
        icon: 'success',
        title: '¡Éxito!',
        text: 'La Actividad se ha creado correctamente.'
      });
    } catch (error) {
      MySwal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Hubo un error al crear la Actividad. Por favor, inténtalo de nuevo.'
      });
      console.error('Error al crear la Actividad:', error);
    } finally {
      setIsUploading(false); // Finaliza la carga
    }
  };

  const handleChangeTipoActividad = (e) => {
    setTipoActividad(e.target.value);
  };

  return (
    <Modal backdrop="blur" className="" isOpen={isOpen} onClose={onClose}>
      <ModalContent className="overflow-y-scroll">
        <>
          <ModalHeader className="flex flex-col gap-1 uppercase text-indigo-900 border-b-1">
            Crear Actividad
          </ModalHeader>
          <ModalBody>
            <label htmlFor="CodigoActividad" className="block mb-2">Código de la actividad:</label>
            <input
              type="number"
              id="CodigoActividad"
              value={CodigoActividad}
              onChange={(e) => setCodigoActividad(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
            {errors.codigo && <p className="text-red-500 text-sm">{errors.codigo}</p>}

            <label htmlFor="TituloActividad" className="block mb-2">Título de la Actividad:</label>
            <input
              type="text"
              id="TituloActividad"
              value={TituloActividad}
              onChange={(e) => setTituloActividad(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
            {errors.titulo && <p className="text-red-500 text-sm">{errors.titulo}</p>}

            <label htmlFor="DescripcionActividad" className="block mb-2">Descripción de la Actividad:</label>
            <input
              type="text"
              id="DescripcionActividad"
              value={DescripcionActividad}
              onChange={(e) => setDescripcionActividad(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
            {errors.descripcion && <p className="text-red-500 text-sm">{errors.descripcion}</p>}

            <label htmlFor="FechaEntrega" className="block mb-2">Fecha de Entrega:</label>
            <input
              type="date"
              id="FechaEntrega"
              value={FechaEntrega}
              onChange={(e) => setFechaEntrega(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
            {errors.fecha && <p className="text-red-500 text-sm">{errors.fecha}</p>}

            <label htmlFor="TipoActividad" className="block mb-2">Tipo de Actividad:</label>
            <select
              id="TipoActividad"
              value={TipoActividad}
              onChange={handleChangeTipoActividad}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            >
              <option value="">Selecciona una opción</option>
              {listTipoActividad.map((opcion) => (
                <option key={opcion.codigo} value={opcion.codigo}>{opcion.nombre_tipo_evaluacion}</option>
              ))}
            </select>
            {errors.tipo && <p className="text-red-500 text-sm">{errors.tipo}</p>}

            <div {...getRootProps()} style={{ border: '2px dashed #cccccc', padding: '10px', textAlign: 'center', width: "400px" }}>
              <input {...getInputProps()} />
              {
                isDragActive ?
                  <p>Selecciona la imagen</p> :
                  <p className='text-center flex justify-center flex-col items-center p-2 gap-2'>Arrastra la imagen aquí <BsFillFileEarmarkImageFill className='text-center size-6 text-gray-600 opacity-50' /> Subir imagen</p>
              }
            </div>
            
            {isUploading && (
              <div className="mt-4">
                <Progress value={uploadProgress} />
                <p className="text-center mt-2">{uploadProgress}% completado</p>
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

export default CrearActividad;
