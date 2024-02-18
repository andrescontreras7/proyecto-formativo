import { BiUser } from 'react-icons/bi';
import { BsGear } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { BsCalendar3 } from "react-icons/bs";
import React, { useState } from 'react';
import { LiaBookSolid } from "react-icons/lia";
import { LiaPenSolid } from "react-icons/lia";
import { LuBookOpen } from "react-icons/lu";
import { LuCalendar } from "react-icons/lu";
import { LuPanelLeft } from "react-icons/lu";
import { BsPower } from "react-icons/bs";
import { BsQuote } from "react-icons/bs";
import { Link } from 'react-router-dom';
import AnimatedCursos from '../../animatedCursos';





const AsideDO = () => {
   
  return (
<>
<div className='flex'>
   
<button
          id="menu-btn"
          className=" lg:hidden  bg-gray-600 text-center text-white p-3  rounded"
         
        >
          |||
    </button>
<div className=" hidden lg:flex flex-col   w-[233px] h-screen     bg-gradient-to-t from-indigo-700 via-indigo-500 to-indigo-400 ">

    <Link className="flex justify-center items-center mb-12 mt-4  " to={'/Docente'} draggable="false"> 
        <img src="https://iedsangabriel.com/assets/img/logo.png" alt="" draggable="false" />   
    </Link>
   
    <ul className="flex-col  justify-start space-y-2  pl-3   gap-4 inline-flex items">
        <AnimatedCursos> 
            <li className=" hover:scale-[1.09] transition-[2s] items-center gap-2  inline-flex">
                <LuPanelLeft className='text-white  '/><Link to={'/Docente'} draggable="false" className="text-center text-zinc-100 text-base font-semibold" >Inicio </Link>
            </li>

        </AnimatedCursos>
       
        <AnimatedCursos> 
             <li className=" hover:scale-[1.09] transition-[2s] items-center gap-2 inline-flex">
            <LuBookOpen className='text-white' /> <Link  to={'/  '} draggable="false" className="text-center text-zinc-100 text-base font-semibold" >Mis cursos </Link>
            </li>
        </AnimatedCursos>

        <AnimatedCursos> 
            <li className="hover:scale-[1.09] transition-[2s] items-center gap-2 inline-flex">
                <BsCalendar3 className='text-white  '/> <Link to={'/  '} draggable="false" className="text-center text-zinc-100 text-base font-semibold" >Calendario </Link>
            </li>
        </AnimatedCursos>

        <AnimatedCursos> 
            <li className=" hover:scale-[1.09] transition-[2s] items-center gap-2 inline-flex">
                <LiaBookSolid className='text-white  text-3xl lg:text-lg'/><Link to={'/  '} draggable="false" className="text-center text-zinc-100 text-base font-semibold hidden lg:inline-block" >Notas</Link>
            </li>
        </AnimatedCursos>
        
        <AnimatedCursos> 
            <li className=" hover:scale-[1.09] transition-[2s] items-center gap-2 inline-flex">
                <BsEnvelope className='text-white  '/><Link to={'/  '} draggable="false" className="text-center text-zinc-100 text-base font-semibold" >Correo</Link>
            </li>
        </AnimatedCursos>
      
        <li className="hover:scale-[1.09] transition-[2s] items-center gap-2 inline-flex">
        <LiaPenSolid className='text-white ' /> <Link to={'/  '}  draggable="false"className="text-center text-zinc-100 text-base font-semibold font-semibold" >Observador</Link>
        </li>
        
        <li className="hover:scale-[1.09] transition-[2s] items-center gap-2 inline-flex">
            <BsQuote className='text-white  '/> <Link to={'/  '} draggable="false" className="text-center text-zinc-100 text-base font-semibold" >Himno institucional</Link>
        </li>

        <li className="hover:scale-[1.09] transition-[2s] items-center gap-2 inline-flex">
            <BsGear className='text-white  '/> <Link to={'/  '} draggable="false" className="text-center text-zinc-100 text-base font-semibold" >Configuraciones</Link>
        </li>
      
       
        <li className="hover:scale-[1.09] transition-[2s] items-center  inline-flex ">
            <BsPower className='text-white  '/><Link to={'/  '} className="text-center  text-white text-opacity-75 text-base ml-2  font-semibold" href="" draggable="false">Cerrar Sesión</Link>
        </li>

       
      
          
          
    </ul>
    </div>

</div>
</> 

  );
};

export default AsideDO;
