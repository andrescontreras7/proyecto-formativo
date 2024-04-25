import { BiUser } from 'react-icons/bi';
import { BsGear } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { BsCalendar3 } from "react-icons/bs";
import { LiaBookSolid } from "react-icons/lia";
import { LiaPenSolid } from "react-icons/lia";
import { LuBookOpen } from "react-icons/lu";
import { LuCalendar } from "react-icons/lu";
import { LuPanelLeft } from "react-icons/lu";
import { BsPower } from "react-icons/bs";
import { BsQuote } from "react-icons/bs";
import { Link } from 'react-router-dom';
import AnimatedCursos from './animatedCursos';
import  { useState, useEffect, useContext } from "react"; 
import { counterContext } from "../../context/CRMcontext";
import { useNavigate } from 'react-router-dom';




const Aside = ({rol}) => {
   const {cerrarSesion} = useContext(counterContext);
   const navigate = useNavigate();

   const manejarCierreSesion = () => {
    cerrarSesion();
    navigate('/');
   }





  return (
<>

<div className='  h-full  w-full  '>


 
<div className="xl:h-screen  max-[1280px]:h-screen    w-[100%]      bg-[#4A55A2]  ">
     <Link className="justify-center items-center mb-4 mt- hidden lg:flex  " to={'/Home'} draggable="false"> 
        <img src="https://iedsangabriel.com/assets/img/logo.png" alt="" draggable="false" />   
    </Link>
{rol === 'docente' && (
     <ul className="flex-col  justify-start space-y-2  pl-3   gap-4 inline-flex items">
     <AnimatedCursos> 
         <li className=" hover:scale-[1.09] transition-[2s] items-center gap-2  inline-flex">
             <LuPanelLeft className='text-white  '/><Link to={'/coordinador'} draggable="false" className="text-center text-zinc-100 text-base font-semibold" >Inicio </Link>
         </li>

     </AnimatedCursos>
    
     <AnimatedCursos> 
          <li className=" hover:scale-[1.09] transition-[2s] items-center gap-2 inline-flex">
         <BiUser className='text-white' /> <Link  to={'/Panel'} draggable="false" className="text-center text-zinc-100 text-base font-semibold" >Panel de control </Link>
         </li>
     </AnimatedCursos>

     <AnimatedCursos> 
         <li className="hover:scale-[1.09] transition-[2s] items-center gap-2 inline-flex">
             <LuBookOpen className='text-white  '/> <Link to={'/ObservadorGeneral'} draggable="false" className="text-center text-zinc-100 text-base font-semibold" >Observador </Link>
         </li>
     </AnimatedCursos>

     <AnimatedCursos> 
         <li className="hover:scale-[1.09] transition-[2s] items-center gap-2 inline-flex">
             <BsCalendar3 className='text-white  '/><Link to={'/AsitenciasD'} draggable="false" className="text-center text-zinc-100 text-base font-semibold" >Asistencia estudiante </Link>
         </li>
     </AnimatedCursos> 
     
     <AnimatedCursos> 
         <li className=" hover:scale-[1.09] transition-[2s] items-center gap-2 inline-flex">
             <LiaBookSolid className='text-white  '/><Link to={'/AsistenciasDocentes'} draggable="false" className="text-center text-zinc-100 text-base font-semibold" >Asistencia docentes</Link>
         </li>
     </AnimatedCursos>
     
   
    
     <li className="hover:scale-[1.09] transition-[2s] items-center gap-2 inline-flex">
     <BsGear className='text-white ' /> <a href="/Recuperar"className="text-center text-zinc-100 text-base font-semibold font-semibold" >Configuracion </a>
     </li>
   
     
     <li className="hover:scale-[1.09] transition-[2s] items-center gap-2 inline-flex">
         <BsEnvelope className='text-white  '/> <Link to={'/Permisos'} draggable="false" className="text-center text-zinc-100 text-base font-semibold" >Permisos</Link>
     </li>
   
    
     <li className="hover:scale-[1.09] transition-[2s] items-center  inline-flex ">
         <BsPower className='text-white  '/><a className="text-center  text-white text-opacity-75 text-base ml-2  font-semibold" href="" onClick={manejarCierreSesion} draggable="false">Cerrar Sesión</a>
     </li>

    
   
       
       
 </ul>

  
)}
 {rol === 'estudiante' && (

              <ul className="flex-col md:space-y-1 space-y-2  max-[1280px]:items-center  pl-3   gap-4 inline-flex items justify-center max-[1020px]:my-auto">
      <AnimatedCursos> 
          <li className=" hover:scale-[1.09] transition-[2s] items-center gap-2   inline-flex">
              <LuPanelLeft className='text-white  text-3xl lg:text-lg'/><Link to={'/Home'} draggable="false" className="text-center text-zinc-100 text-base font-semibold hidden min-[1140px]:inline-block" >Inicio Estudiante  </Link> <span  className='absolute hidden  left-12 p-[2px] right-0  font-semibold bg-indigo-200 ease-out  hover:uppercase'>Inicio</span>
          </li>

      </AnimatedCursos>
     
      <AnimatedCursos> 
           <li className=" hover:scale-[1.09] transition-[2s] items-center gap-2 inline-flex">
          <BiUser className='text-white text-3xl lg:text-lg' /> <Link  to={'/perfil'} draggable="false" className="text-center text-zinc-100 text-base font-semibold hidden min-[1140px]:inline-block" >Usuario </Link>
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
            <LuBookOpen className='text-white  text-3xl lg:text-lg'/> <Link to={'/Asignaturas'} draggable="false" className="text-center text-zinc-100 text-base font-semibold hidden min-[1140px]:inline-block" >Mis asignaturas </Link>
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
          <BsPower className='text-white text-3xl lg:text-lg '/><Link to={'/login'}  className="text-center  text-white text-opacity-75 text-base ml-2  font-semibold hidden min-[1140px]:inline-block" onClick={manejarCierreSesion} >Cerrar Sesión</Link>
      </li>

      
      </ul>

            )}

   
   
  
    </div>

</div>
</> 

  );
};

export default Aside;
