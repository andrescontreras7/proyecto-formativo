import React, { useContext, useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import Swal from 'sweetalert2'
import s_axios from '../../../../config/axios';
import { CRMcontext } from '../../../../context/CRMcontext';
function Formulario() {
  const [credenciales, setCredenciales ] = useState({});
  const [auth, guardarToken] = useContext(CRMcontext)


 //iniciar sesion 
 const InicioSesion = async (e) => {
  e.preventDefault();

  try {


    const respuesta = await s_axios.post('/login', credenciales);
    const {token} = respuesta.data.token;
    console.log(respuesta.data.token.rol)
   
   
    //guardar token en contexto
    guardarToken({
      token:token,
      autenticado: true
    })
    
     //almacenar en localstorage el token de sesion
     localStorage.setItem('Jsowebtoken ' , token);
     window.location.href = '/coordinador';
   


  } catch (error) {
    console.log(error);
    Swal.fire({
      type: 'error',
      title: 'Ups...',
      text: error.response.data.error
    })
  }
 }

  //almacenar lo que el usuario escribe
  const leerDatos = (e) => {
    setCredenciales({
      ...credenciales,
      [e.target.name]: e.target.value,
    })


  }

  return (
    <>
      <div className='flex items-center justify-between h-screen bg-[#657ca8]  '>
        <div className='h-screen w-[170px]'>
          <img className='ml-8 mt-8 w-32' src="https://iedsangabriel.com/assets/img/logo.png" alt="" draggable="false" />
        </div>

        <div className="flex flex-col bg-[#7c98cd] rounded-xl shadow-xl  md:flex-row justify-center items-center">

          <div className='h-3/5 b-[] shadow-xl rounded-3xl p-20 flex-col flex mx-auto items-center overflow-hidden justify-evenly'>
            <h1 className='text-start font-bold text-5xl mb-4 '>
              <div className="bg-indigo-700 text-white inline-block rounded-3xl w-auto px-4"></div>   Iniciar  <span className='text-indigo-700 '>Sesion</span>
            </h1>
            <form onSubmit={InicioSesion}  className='w-full flex flex-col justify-center items-center'>
              <input className='w-full mt-3 outline-none focus:border-4 focus:border-blue-950       mb-3  border-[#4A55A2] p-2 rounded-xl shadow-md' type="email" placeholder='Digite su correo' name='correo'  onChange={leerDatos} />
              <input id='s' className='w-full mt-3  border-[#4A55A2] p-2 rounded-xl outline-none focus:border-4 focus:border-blue-950   shadow-md' type="password" placeholder='Digite su contraseña' name='password'  onChange={leerDatos} />
              <button type="submit" className='bg-[#414a8e] w-2/3 mt-8 p-2 font-bold text-white text-2xl rounded-xl'>Ingresar</button>

              <a className='w-3/5 font-bold mt-2 text-[#1e223e] items-center text-center' href="" draggable="false">
                ¿Olvidó su contraseña?
              </a>
            </form>
          </div>

        </div>

        <div>
          <img className="mr-44 hidden sm:block" src="profesor.png" alt="" draggable="false" />
        </div>

      </div>
    </>
  );
}

export default Formulario;
