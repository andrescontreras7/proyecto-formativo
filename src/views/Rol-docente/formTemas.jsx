import React from 'react';
import Layout from '../../components/layaout';
import { useForm } from "react-hook-form";
import { useState, useContext, useEffect } from 'react';
import { counterContext } from "../../../context/CRMcontext";
import { createTemas } from '../../endpoints/useCreate';
import { getGruposAll } from '../../endpoints/useGet';
import { jwtDecode } from "jwt-decode";



export default function formTemas() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [grupos, setGrupos] = useState([]);
    const { asigcod } = useParams();
    const { auth } = useContext(counterContext);
    const decodedToken = jwtDecode(auth.token);

    useEffect(() => {
        getGruposAll(auth, decodedToken.id, asigcod).then(res => { 
        setGrupos(res.data);
  
    
        });
      }, [auth, asigcod]); 

 
      
    const onsubmit = (data, e) => {
        
       
        console.log(data)
     
        
        console.log(data);


     
            createTemas(auth, data).then((res) => {
                console.log(res)
            
      





        })


    }
   
  return (
    <Layout titulo={"Tematicas "}  >
        <div className="bg-[#ffffff] shadow-[0_8px_20px_12px_rgba(0,0,0,0.08)] w-full h-[85vh] 2xl:h-[87vh]   rounded-md">
   
        <form onSubmit={handleSubmit(onsubmit)} className='text-center flex flex-col  w-[90%] rounded-md  m-auto  p-2 justify-center items-center gap-2'>
        <div className='font-bold text-indigo-900 text-2xl text-center mb-2 p-2  '>
            <h1>Registro de tematicas</h1>
       </div>
        <input
                className="w-[50%] p-2 border border-gray-300 rounded-md"
                type="text"
                placeholder="Titulo de la tematica"
                {...register("titulo", {
                  required: {
                    value: true,
                    message: "El campo titulo es requerido",
                  },
                  minLength: {
                    value: 2,
                    message: "El titulo debe ser mayor a dos caracteres",
                  },
                  maxLength: {
                    value: 20,
                    message: "El titulo debe ser menor a 20 caracteres",
                  },
                })}
              />
               {errors.titulo && (
                <p className="text-red-500">{errors.titulo.message}</p>
              )}
    
              <input
                className="w-[50%] p-2 border border-gray-300 rounded-md"
                type="text"
                placeholder="Descripcion de la tematica"
                {...register("descripcion", {
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
              {errors.descripcion && (
                <p className="text-red-500">{errors.descripcion.message}</p>
              )}
              <div className='w-[30%] '>
              
              </div>
          





  


        

         
          <button className='bg-indigo-500 p-2 text-white font-bold  rounded-md ' type="submit">Enviar</button>
        </form>
      </div>
      
    </Layout>
  );
}
