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
<div className='  h-full  w-full  '>
   
    {/* <button
        id="menu-btn"
        className=" lg:hidden  bg-gray-600 text-center text-white p-3  rounded"
    >
          |||
    </button> */}
<div className="xl:h-screen  max-[1280px]:h-screen    w-[90%]      bg-[#4A55A2]  ">

    <Link className="justify-center items-center mb-4 mt- hidden lg:flex  " to={'/Home'} draggable="false"> 
        <img src="https://iedsangabriel.com/assets/img/logo.png" alt="" draggable="false" />   
    </Link>
   
    <ul className="flex-col md:space-y-1 space-y-2  max-[1280px]:items-center  pl-3   gap-4 inline-flex items justify-center max-[1020px]:my-auto">
        <AnimatedCursos> 
            <li className=" hover:scale-[1.09] transition-[2s] items-center gap-2   inline-flex">
                <LuPanelLeft className='text-white  text-3xl lg:text-lg'/><Link to={'/Home'} draggable="false" className="text-center text-zinc-100 text-base font-semibold hidden min-[1140px]:inline-block" >Inicio  </Link> <span  className='absolute hidden  left-12 p-[2px] right-0  font-semibold bg-indigo-200 ease-out  hover:uppercase'>Inicio</span>
            </li>

        </AnimatedCursos>
       
        <AnimatedCursos> 
             <li className=" hover:scale-[1.09] transition-[2s] items-center gap-2 inline-flex">
            <BiUser className='text-white text-3xl lg:text-lg' /> <Link  to={'/perfil'} draggable="false" className="text-center text-zinc-100 text-base font-semibold hidden min-[1140px]:inline-block" >Usuario </Link>
            </li>
        </AnimatedCursos>

        <AnimatedCursos> 
            <li className="hover:scale-[1.09] transition-[2s] items-center gap-2 inline-flex">
                <LuBookOpen className='text-white  text-3xl lg:text-lg'/> <Link to={'/Asignaturas'} draggable="false" className="text-center text-zinc-100 text-base font-semibold hidden min-[1140px]:inline-block" >Mis asignaturas </Link>
            </li>
        </AnimatedCursos>

        <AnimatedCursos> 
            <li className="hover:scale-[1.09] transition-[2s] items-center gap-2 inline-flex">
                <BsCalendar3 className='text-white  text-3xl lg:text-lg'/><Link to={'/Calendario'} draggable="false" className="text-center text-zinc-100 text-base font-semibold hidden min-[1140px]:inline-block" >Calendario </Link>
            </li>
        </AnimatedCursos> 
        
        <AnimatedCursos> 
            <li className=" hover:scale-[1.09] transition-[2s] items-center gap-2 inline-flex">
                <LiaBookSolid className='text-white  text-3xl lg:text-lg'/><Link to={'/Notas'} draggable="false" className="text-center text-zinc-100 text-base font-semibold hidden min-[1140px]:inline-block" >Notas</Link>
            </li>
        </AnimatedCursos>
      
        <li className="hover:scale-[1.09] transition-[2s] items-center gap-2 inline-flex">
            <LiaPenSolid className='text-white  text-3xl lg:text-lg'/><Link to={'/Observaciones'} draggable="false" className="text-center text-zinc-100 text-base font-semibold hidden min-[1140px]:inline-block" >Observaciones</Link>
        </li>
        <li className="hover:scale-[1.09] transition-[2s] items-center gap-2 inline-flex">
            <BsEnvelope className='text-white  text-3xl lg:text-lg'/> <Link to={'/correo'} draggable="false" className="text-center text-zinc-100 text-base font-semibold hidden min-[1140px]:inline-block" >Correo</Link>
        </li>
        <li className="hover:scale-[1.09] transition-[2s] items-center gap-2 inline-flex">
            <LuCalendar className='text-white  text-3xl lg:text-lg'/><Link to={'/Horario'} draggable="false" className="text-center text-zinc-100 text-base font-semibold hidden min-[1140px]:inline-block" >Horario de clases</Link>
        </li>
        <li className="hover:scale-[1.09] transition-[2s] items-center gap-2 inline-flex">
        <BsQuote className='text-white  text-3xl lg:text-lg'/><Link to={'/Himno'} draggable="false" className="text-center text-zinc-100 text-base font-semibold hidden min-[1140px]:inline-block" >Himno intitucional</Link>
        </li>
        
        <li className="hover:scale-[1.09] transition-[2s] items-center gap-2 inline-flex">
        <BsGear className='text-white text-3xl lg:text-lg' /> <a href="/Recuperar " className="text-center text-zinc-100 text-base font-semibold  hidden min-[1140px]:inline-block" >Configuracion </a>
        </li>
        
        <li className="hover:scale-[1.09] transition-[2s] items-center  inline-flex ">
            <BsPower className='text-white text-3xl lg:text-lg '/><Link to={'/login'}  className="text-center  text-white text-opacity-75 text-base ml-2  font-semibold hidden min-[1140px]:inline-block" href="" draggable="false">Cerrar Sesión</Link>
        </li>

       
      
          
          
    </ul>
    </div>

</div>
</> 

  );
};

export default Aside;
