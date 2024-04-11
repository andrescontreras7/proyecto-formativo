import React, { useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';

function Formulario() {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/appi/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ correo, password }),
      });

      if (!response.ok) {
        throw new Error('Credenciales inválidas');
      }

      const data = await response.json();
     

      // Redirigir al usuario a la página de inicio
      window.location.href = '/Home';
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className='flex items-center justify-between h-screen bg-gradient-to-r from-indigo-400 to-indigo-800 '>
        <div className='h-screen w-[170px]'>
          <img className='ml-8 mt-8 w-32' src="https://iedsangabriel.com/assets/img/logo.png" alt="" draggable="false" />
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center">

          <div className='h-3/5 bg-indigo-300 shadow-xl rounded-3xl p-20 flex-col flex mx-auto items-center overflow-hidden justify-evenly'>
            <h1 className='text-start font-bold text-5xl mb-4 '>
              <div className="bg-indigo-700 text-white inline-block rounded-3xl w-auto px-4"><BiArrowBack /></div>   Iniciar  <span className='text-indigo-700 '>Sesion</span>
            </h1>
            <form onSubmit={handleSubmit} className='w-full flex flex-col justify-center items-center'>
              <input className='w-full mt-3 mb-3 border-2 p-2 rounded-3xl border-violet-600 shadow-md' type="email" placeholder='Digite su correo' value={correo} onChange={(e) => setCorreo(e.target.value)} />
              <input id='s' className='w-full mt-3 border-2 p-2 rounded-3xl border-violet-600 shadow-md' type="password" placeholder='Digite su contraseña' value={password} onChange={(e) => setPassword(e.target.value)} />
              <button type="submit" className='bg-indigo-700 w-2/3 mt-8 p-1 font-bold text-white text-2xl rounded-3xl'>Ingresar</button>
              {error && <p>{error}</p>}
              <a className='w-3/5 items-center text-center' href="" draggable="false">
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
