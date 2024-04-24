import React, { useState } from 'react';

import { BsList } from "react-icons/bs";
import NavMenu from "./menu";
const Navbar = () => {

  return (
    <div className='w-full  '>
      <nav className=' bg-[#4A55A2] h-[5%] flex  w-[100%] max-[1400px]:w-[100%]   max-[1335px]:bg-red-800 justify-between items-center'>
        <div className='p-1'>
         <button> <BsList  className='text-3xl font-normal text-gray-800'/> </button>
        
        </div>
        <li className=' list-none'>
          <ul className='flex'>
          <div className='h-10 w-10 overflow-hidden rounded-full'>
            <img src="https://iedsangabriel.com/assets/img/logo.png" alt="" draggable="false" className='w-full h-full object-cover' />
          </div>
          
          <div>
            
            <h4 className='text-white font-bold'>Andres Cavadia</h4>
            <p className='text-gray-800 font-bold'>Estudiante</p>
            
          </div>
          <div className='ml-10 text-2xl'>
            <div id='b' className='flex flex-col justify-center items-center mr-20' >
            <NavMenu />
            
            </div>
          </div>
          </ul>
        </li>
      </nav> 
     
    </div>
  );
}

export default Navbar;