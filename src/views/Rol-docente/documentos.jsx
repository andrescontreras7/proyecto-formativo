import React, { useState, useCallback, useContext } from 'react';
import Layout from '../../components/layaout';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
import { BsFillFileEarmarkImageFill } from "react-icons/bs"
import SelectRol from '../../components/selectRol';
import { createAsignatura } from '../../endpoints/useCreate';
import { counterContext } from "../../../context/CRMcontext";


function Documentos() {
  const [files, setFiles] = useState([]);
  const { auth } = useContext(counterContext);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({ onDrop });

  const onsubmit = async (data, e) => {
    e.preventDefault();
  
    if (acceptedFiles.length === 0) {
      alert("Por favor, selecciona un archivo primero.");
      return;
    }
  
    const formData = new FormData();
    formData.append('file', acceptedFiles[0]);
    formData.append('upload_preset', "react-imagenes");
    formData.append("api_key", "179755984322365");
  
    try {
      const response = await axios.post('https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Archivo subido exitosamente:', response.data);
  
      // Agregar la URL de la imagen al objeto data
      data.url = response.data.secure_url;
  
      // Luego enviar este objeto a la función createAsignatura
      createAsignatura(auth, data).then((res) => {
     
        if (res.data.sucess) {
          toast.success(res.message);
          reset();
        } else {
          toast.error(res.message);
        }
      })
    } catch (error) {
      console.error('Error al subir el archivo:', error);
    }
  };
  return (
    <Layout >
     <div className="bg-[#ffffff] shadow-[0_8px_20px_12px_rgba(0,0,0,0.08)] w-full h-[85vh] 2xl:h-[87vh]   rounded-md">
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
        <form onSubmit={handleSubmit(onsubmit)} className='text-center flex flex-col  w-[90%] rounded-md  m-auto  p-2 justify-center items-center gap-2'>
        <div className='font-bold text-indigo-900 text-2xl text-center mb-2 p-2  '>
            <h1>Registro de asignatura</h1>
       </div>
        <input
                className="w-[50%] p-2 border border-gray-300 rounded-md"
                type="text"
                placeholder="Nombre de la asignatura"
                {...register("asignombre", {
                  required: {
                    value: true,
                    message: "El campo nombre es requerido",
                  },
                  minLength: {
                    value: 2,
                    message: "El nombre debe ser mayor a dos caracteres",
                  },
                  maxLength: {
                    value: 20,
                    message: "El nombre debe ser menor a 20 caracteres",
                  },
                })}
              />
               {errors.asignombre && (
                <p className="text-red-500">{errors.asignombre.message}</p>
              )}
    
              <input
                className="w-[50%] p-2 border border-gray-300 rounded-md"
                type="text"
                placeholder="Descripcion de la asignatura"
                {...register("asigdescripcion", {
                  required: {
                    value: true,
                    message: "El campo descripcion es requerido",
                  },
                  minLength: {
                    value: 2,
                    message: "la descripcion debe ser mayor a dos caracteres",
                  },
                  maxLength: {
                    value: 20,
                    message: "la descripcion debe ser menor a 20 caracteres",
                  },
                })}
              />
              {errors.asigdescripcion && (
                <p className="text-red-500">{errors.asigdescripcion.message}</p>
              )}
              <div className='w-[30%] '>
                <SelectRol register={register} name={"areaFK"} des={"areas pa"}/>
              </div>
          





  


         
          <div {...getRootProps()} style={{ border: '2px dashed #cccccc', padding: '10px', textAlign: 'center', width:"600px" }}>
            <input {...getInputProps()} />
            {
              isDragActive ?
                <p>Seleciona la imagen  </p> :
                <p className='text-center flex justify-center flex-col items-center p-2 gap-2'> Arrastre la imagen aca  <BsFillFileEarmarkImageFill className='text-center size-48 text-gray-600 opacity-50' />Subir imagen </p>
            }
          </div>

         
          <button className='bg-indigo-500 p-2 text-white font-bold  rounded-md ' type="submit">Enviar</button>
        </form>
      </div>
    </Layout>
  );
}

export default Documentos;
 