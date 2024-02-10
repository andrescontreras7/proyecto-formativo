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
import AnimatedCursos from './animatedCursos';







const Aside = () => {
   
  return (
<>
<div className='w-[100%] flex'>
   
    {/* <button
        id="menu-btn"
        className=" lg:hidden  bg-gray-600 text-center text-white p-3  rounded"
    >
          |||
    </button> */}
<div className="flex flex-col    w-[233px] lg:inline-block h-screen   bg-gradient-to-t from-indigo-700 via-indigo-500 to-indigo-400 ">

    <Link className="justify-center items-center mb-12 mt-4 hidden lg:flex " to={'/Home'}> 
        <img src="https://iedsangabriel.com/assets/img/logo.png" alt="" draggable="false" />   
    </Link>
   
    <ul className="flex-col   space-y-2  pl-3   gap-4 inline-flex items justify-center max-[1020px]:my-auto">
        <AnimatedCursos> 
            <li className=" hover:scale-[1.09] transition-[2s] items-center gap-2  inline-flex">
                <LuPanelLeft className='text-white  text-3xl lg:text-lg'/><Link to={'/Home'} className="text-center text-zinc-100 text-base font-semibold hidden lg:inline-block" >Inicio </Link>
            </li>

        </AnimatedCursos>
       
        <AnimatedCursos> 
             <li className=" hover:scale-[1.09] transition-[2s] items-center gap-2 inline-flex">
            <BiUser className='text-white text-3xl lg:text-lg' /> <Link  to={'/perfil'}  className="text-center text-zinc-100 text-base font-semibold hidden lg:inline-block" >Usuario </Link>
            </li>
        </AnimatedCursos>

        <AnimatedCursos> 
            <li className="hover:scale-[1.09] transition-[2s] items-center gap-2 inline-flex">
                <LuBookOpen className='text-white  text-3xl lg:text-lg'/> <Link to={'/Asignaturas'} className="text-center text-zinc-100 text-base font-semibold hidden lg:inline-block" >Mis asignaturas </Link>
            </li>
        </AnimatedCursos>

        <AnimatedCursos> 
            <li className="hover:scale-[1.09] transition-[2s] items-center gap-2 inline-flex">
                <BsCalendar3 className='text-white  text-3xl lg:text-lg'/><Link to={'/Calendario'} className="text-center text-zinc-100 text-base font-semibold hidden lg:inline-block" >Calendario </Link>
            </li>
        </AnimatedCursos> 
        
        <AnimatedCursos> 
            <li className=" hover:scale-[1.09] transition-[2s] items-center gap-2 inline-flex">
                <LiaBookSolid className='text-white  text-3xl lg:text-lg'/><Link to={'/Notas'} className="text-center text-zinc-100 text-base font-semibold hidden lg:inline-block" >Notas</Link>
            </li>
        </AnimatedCursos>
      
        <li className="hover:scale-[1.09] transition-[2s] items-center gap-2 inline-flex">
            <LiaPenSolid className='text-white  text-3xl lg:text-lg'/><Link to={'/Observaciones'} className="text-center text-zinc-100 text-base font-semibold hidden lg:inline-block" >Observaciones</Link>
        </li>
        <li className="hover:scale-[1.09] transition-[2s] items-center gap-2 inline-flex">
            <BsEnvelope className='text-white  text-3xl lg:text-lg'/> <Link to={'/correo'} className="text-center text-zinc-100 text-base font-semibold hidden lg:inline-block" >Correo</Link>
        </li>
        <li className="hover:scale-[1.09] transition-[2s] items-center gap-2 inline-flex">
            <LuCalendar className='text-white  text-3xl lg:text-lg'/><Link to={'/Horario'} className="text-center text-zinc-100 text-base font-semibold hidden lg:inline-block" >Horario de clases</Link>
        </li>
        <li className="hover:scale-[1.09] transition-[2s] items-center gap-2 inline-flex">
        <BsQuote className='text-white  text-3xl lg:text-lg'/><Link to={'/Himno'} className="text-center text-zinc-100 text-base font-semibold hidden lg:inline-block" >Himno intitucional</Link>
        </li>
        <li className="hover:scale-[1.09] transition-[2s] items-center gap-2 inline-flex">
        <BsGear className='text-white text-3xl lg:text-lg' /> <a href=""className="text-center text-zinc-100 text-base font-semibold font-semibold hidden lg:inline-block" >Configuracion </a>
        </li>
        
        <li className="hover:scale-[1.09] transition-[2s] items-center  inline-flex ">
            <BsPower className='text-white text-3xl lg:text-lg '/><a className="text-center  text-white text-opacity-75 text-base ml-2  font-semibold hidden lg:inline-block" href="">Cerrar Sesión</a>
        </li>

       
      
          
          
    </ul>
    </div>

</div>
</> 

  );
};

export default Aside;
