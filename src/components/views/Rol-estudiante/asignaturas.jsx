
import { HiArrowSmallLeft } from "react-icons/hi2";
import { HiArrowSmallRight } from "react-icons/hi2";
import React, { useState, useEffect } from "react";
import Cursos from "./cursos";
import Aside from "./_aside"
import { Link, Outlet } from "react-router-dom";



const Asignaturas = () => {


    
return(
<>

<div className="flex   font-bold bg-[#A6DCF1] w-screen   xl: h-screen">
 
        <aside className="  xl:w-[18%] flex">
            <Aside/>
        </aside>
    
<div className=" max-[1455px]:ml-20  mr-4 flex overflow-y-scroll   flex-wrap gap-8 w-4/5   justify-start items-center ">
  <nav className="w-full">
  
    <div className= " flex justify-between  uppercase   bg-[#925FE2] bg-opacity-30 p-[0.9rem] font   rounded-3xl mr-20 mt-8">
        <HiArrowSmallLeft className="text-3xl" />   <h1 className="text-gray-700 text-center ">   Cursos actuales </h1> <button className="flex low gap-2">Proximos cursos <HiArrowSmallRight className="text-3xl"/></button>
    </div>
<div></div>
    <input type="search " className="p-2 rounded-3xl font-normal pr-10 mt-16 ml-20 mb-12 bg-[#F6F6F6] "  placeholder="Buscar asignatura" name="" id="" />
  </nav>
  
        <div className="flex mb-20  flex-wrap gap-8 z-0  ">
            <Cursos titulo="matematicas" to='' profesor="Cecilia"   />
            <Cursos titulo="Ingles" profesor="Anotonio"/>
            <Cursos titulo="Sociales" profesor="Humberto" />
            <Cursos titulo="Naturales" profesor="Angelica"/>
            <Cursos titulo="Fisica" profesor="Emanuel"/>
            <Cursos titulo="Quimica" profesor="Sandra"/>
            <Cursos titulo="Religion" profesor="Agatha"/>
            <Cursos titulo="Estadistica" profesor="Valeria"/>
        </div>
        
        
        
        
        
        
    </div>
        
</div>
</>
)
}
export default Asignaturas