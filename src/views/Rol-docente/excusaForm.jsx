import React, { useState, useCallback, useContext } from 'react';
import Layout from '../../components/layaout';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
import { BsFillFileEarmarkImageFill } from "react-icons/bs";
import { createExcusas } from '../../endpoints/useCreate';
import { counterContext } from "../../../context/CRMcontext";
import { useLocation } from 'react-router-dom';

export default function ExcusaForm() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const asistenciaID = params.get('asistenciaID');
  const id = params.get('id');

  const [files, setFiles] = useState([]);
  const { auth } = useContext(counterContext);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onDrop = useCallback((acceptedFiles) => {
    const validTypes = [
      'image/*', 
      'application/pdf', 
      'text/*', 
      'application/msword', 
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];

    if (acceptedFiles[0].size > 20000000) { // 20MB
      alert("El archivo es demasiado grande. Por favor, selecciona un archivo de menos de 20MB.");
      return;
    }

    const isValidType = validTypes.some(type => acceptedFiles[0].type.match(type));
    if (!isValidType) {
      alert("Tipo de archivo no permitido. Sólo se permiten imágenes, PDFs y archivos de texto.");
      return;
    }

    setFiles(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxSize: 20000000,
    accept: 'image/*,application/pdf,text/*,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  });

  const onsubmit = async (data, e) => {
    e.preventDefault();

    if (files.length === 0) {
      alert("Por favor, selecciona un archivo primero.");
      return;
    }

    const formData = new FormData();
    formData.append('file', files[0]);
    formData.append('upload_preset', "react-imagenes");
    formData.append("api_key", "179755984322365");

    try {
      const response = await axios.post('https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      console.log('Archivo subido exitosamente:', response.data);

      data.url_archivo = response.data.secure_url;
      data.asistenciaFK = asistenciaID;
      data.id_persona = id;

      const res = await createExcusas(auth, data);
      if (res.success) {
        toast.success(res.message);
        reset();
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      console.error('Error al subir el archivo:', error);
      toast.error('Error al subir el archivo. Inténtalo de nuevo.');
    }
  };

  return (
    <Layout>
      <div className="p-4 w-full h-[84vh] 2xl:h-[84vh] max-lg:overflow-y-scroll shadow-[0_8px_10px_15px_rgba(0,0,0,0.08)] rounded-md lg:flex-row gap-4">
        <Toaster
          position="top-right"
          reverseOrder={true}
          autoClose={10000}
          toastOptions={{
            style: {
              margin: "10px 20px",
              transition: "all 0.2s ease-in-out",
            },
          }}
        />
        <form onSubmit={handleSubmit(onsubmit)} className='text-center flex flex-col  w-[70%] h-[80%]  m-auto p-2 justify-center items-center gap-2'>
          <h1 className='font-bold text-indigo-900 text-2xl mb-2'>Registro de excusas</h1>
          
          <textarea
  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  placeholder="Motivo de la excusa"
  {...register("mot_reg_exc", {
    required: "El campo motivo es requerido",
    minLength: {
      value: 2,
      message: "El motivo debe ser mayor a dos caracteres",
    },
    maxLength: {
      value: 40,
      message: "El motivo debe ser menor a 40 caracteres",
    },
  })}
/>
          {errors.mot_reg_exc && <p className="text-red-500">{errors.mot_reg_exc.message}</p>}
          
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="date"
            {...register("fec_reg_exc", {
              required: "El campo fecha es requerido",
            })}
          />
          {errors.fec_reg_exc && <p className="text-red-500">{errors.fec_reg_exc.message}</p>}
          
          <div {...getRootProps()} className='border-2 border-dashed border-gray-400 py-6 px-4 text-center w-full cursor-pointer'>
            <input {...getInputProps()} />
            {isDragActive ? 
              <p>Selecciona el archivo</p> : 
              <div className='flex flex-col items-center'>
                <BsFillFileEarmarkImageFill className='text-4xl text-gray-600 opacity-50 mb-2' />
                <p>Arrastra el archivo acá o haz clic para seleccionar</p>
              </div>
            }
          </div>
          
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type="submit">
            Enviar
          </button>
        </form>
      </div>
    </Layout>
  );
}
