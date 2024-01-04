import { BiUser } from 'react-icons/bi';


import { LuBookOpen } from "react-icons/lu";

import { LuPanelLeft } from "react-icons/lu";

import { Link } from 'react-router-dom';
import AnimatedCursos from '../../animatedCursos';







const Asidecon = () => {
   
  return (
<>
<div className='flex'>
   
    {/* <button
        id="menu-btn"
        className=" lg:hidden  bg-gray-600 text-center text-white p-3  rounded"
    >
          |||
    </button> */}
<div className="flex flex-col    w-[233px] lg:inline-block h-screen  overflow-y-scroll   bg-gradient-to-t from-indigo-700 via-indigo-500 to-indigo-400 ">

    <Link className="justify-center items-center mb-12 mt-4 hidden lg:flex " to={'/Home'}> 
        <img src="https://iedsangabriel.com/assets/img/logo.png" alt="" />   
    </Link>
   
    <ul className="flex-col   space-y-2  pl-3   gap-4 inline-flex items justify-center max-[1020px]:my-auto">
        <AnimatedCursos> 
            <li className=" hover:scale-[1.09] transition-[2s] items-center gap-2  inline-flex">
                <LuPanelLeft className='text-white  text-3xl lg:text-lg'/><Link to={'/Home'} className="text-center text-zinc-100 text-base font-semibold hidden lg:inline-block" >Inicio </Link>
            </li>

        </AnimatedCursos>
       
        <AnimatedCursos> 
             <li className=" hover:scale-[1.09] transition-[2s] items-center gap-2 inline-flex">
            <BiUser className='text-white text-3xl lg:text-lg' /> <Link  to={'/'}  className="text-center text-zinc-100 text-base font-semibold hidden lg:inline-block" > Editar perfil</Link>
            </li>
        </AnimatedCursos>

        <AnimatedCursos> 
            <li className="hover:scale-[1.09] transition-[2s] items-center gap-2 inline-flex">
                <LuBookOpen className='text-white  text-3xl lg:text-lg'/> <Link to={'/Recuperar'} className="text-center text-zinc-100 text-base font-semibold hidden lg:inline-block" >Seguridad </Link>
            </li>
        </AnimatedCursos>
          
    </ul>
    </div>

</div>
</> 

  );
};

export default Asidecon;
