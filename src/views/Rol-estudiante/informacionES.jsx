import React from 'react';
import Layout from '../../components/layaout';
import { BsFillPersonFill } from 'react-icons/bs';


const Informacion = () => {
  
  const usuario = "Julian Londoñopppppppppppppp";

  return (
    <Layout titulo={"Informacion del perfil"}>
      <div className="flex flex-col sm:flex-row bg-[#ffffff] overflow-y-scroll shadow-[0_8px_20px_12px_rgba(0,0,0,0.08)] rounded-md h-[85vh] 2xl:h-[87vh] justify-center items-center">
       

        <div className='flex flex-col p-4 sm:w-1/2'>
          <div className="flex flex-col gap-4">
           
            <div>
              <label htmlFor="nombre" className="text-lg mb-">Nombre</label>
              <input
                id="nombre"
                type="text"
                className="w-full p-2 border rounded bg-white"
                
              />
            </div>

       
            <div>
              <label htmlFor="apellido" className="text-lg mb-2">Apellido</label>
              <input
                id="apellido"
                type="text"
                className="w-full p-2 border rounded bg-white"
                
              />
            </div>

            
            <div>
              <label htmlFor="email" className="text-lg mb-2">Correo Electrónico</label>
              <input
                id="email"
                type="email"
                className="w-full p-2 border rounded bg-white"
                
              />
            </div>

           
            <div>
              <label htmlFor="direccion" className="text-lg mb-2">Dirección</label>
              <input
                id="direccion"
                type="text"
                className="w-full p-2 border rounded bg-white"
               
              />
            </div>

            <div>
              <label htmlFor="barrio" className="text-lg mb-2">Barrio</label>
              <input
                id="barrio"
                type="text"
                className="w-full p-2 border rounded bg-white"
                
              />
            </div>

          
            <div>
              <label htmlFor="celular" className="text-lg mb-2">Celular</label>
              <input
                id="celular"
                type="text"
                className="w-full p-2 border rounded bg-white"
                
              />
            </div>
          </div>
        </div>

        
        <div className="flex flex-col items-center sm:w-1/2 p-4">
          <div className="rounded-full h-48 w-48 flex justify-center items-center bg-gray-300 mb-5">
            <BsFillPersonFill size={300} color="black" />
          </div>
          <div className="flex flex-col items-center">
            <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4">Guardar Cambios</button>
            <button className="bg-red-500 text-white px-4 py-2 rounded">Eliminar Foto</button>
          </div>
        </div>
        
      </div>
    </Layout>
  );
};

export default Informacion;
