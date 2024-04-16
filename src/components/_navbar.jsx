import React, { useState } from 'react';
import { BsBell } from "react-icons/bs";

const Navbar = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className='w-full'>
      <nav className=' bg-[#4A55A2] h-[5%] flex fixed top-0 w-[80%] xl:w-[83%]    max-[1335px]:bg-red-800 justify-between items-center'>
        <div></div>
        <div className='flex items-center gap-2 mr-10'>
          <div className='h-10 w-10 overflow-hidden rounded-full'>
            <img src="https://iedsangabriel.com/assets/img/logo.png" alt="" draggable="false" className='w-full h-full object-cover' />
          </div>
          <div>
            <h4 className='text-white font-bold'>Andres Cavadia</h4>
            <p className='text-gray-800 font-bold'>Estudiante</p>
          </div>
          <div className='ml-10 text-2xl'>
            <button id='b' className='flex flex-col justify-center items-center mr-20' onClick={toggleModal}>
              <BsBell />
              {modal && (
                <div id='con' className='bg-white w-60 h-80 z-0 top-12 absolute'>
                  <ul className='flex flex-col text-lg'>
                    <li>
                      Notificaciones
                    </li>
                    <li>
                      Notificaciones
                    </li>
                    <li>
                      Notificaciones
                    </li>
                  </ul>
                </div>
              )}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;