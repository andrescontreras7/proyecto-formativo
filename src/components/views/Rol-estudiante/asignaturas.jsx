
import { HiArrowSmallLeft } from "react-icons/hi2";
import { HiArrowSmallRight } from "react-icons/hi2";
import React, { useState, useEffect } from "react";
import Cursos from "../../cursos";
import Aside from '../../_aside';
import { Link, Outlet } from "react-router-dom";
import Layaout from "../../layaout";
import { BiSearch } from "react-icons/bi"


const Asignaturas = () => {


    
return(
<>

<Layaout>
<div className="flex bg-[#A0BFE0]  overflow-y-scroll   font-bold  w-full h-screen   ">
 


<div className="  m-auto flex flex-col gap-8 w-4/5 mt-4   justify-start items-center ">
<nav className="w-full">

<div className= " flex items-center gap-2 text-gray-900  uppercase font-bold   p-[0.9rem] font   rounded-xl mr-20 mt-8">
 <HiArrowSmallLeft className="text-3xl "  />   <h1 className="  ">   Cursos actualess </h1> <button className="flex low gap-2"> </button>
</div>

<div className="flex items-center mb-4 ">




<div className="flex  mb-4">
<input
type="search"
id="filtro3"
className="p-2 rounded-sm mr-4 placeholder-gray-800 font-semibold  pr-10 bg-transparent border-solid border-gray-700 border-[1px] "
placeholder="Buscar asignatura "

/>
<input
type="search"
id="filtro3"
className="p-2 rounded-sm mr-4  placeholder-gray-800 font-semibold  pr-10 bg-transparent border-solid  border-gray-700  border-[1px] "
placeholder="Buscar asignatura "

/>

<input
type="search"
id="filtro3"
className="p-2 rounded-sm  placeholder-gray-800 font-semibold  pr-10 bg-transparent border-solid  border-gray-700  border-[1px] "
placeholder="Buscar asignatura "

/>

<span className="p-3 bg-transparent  border-solid border-[1px]  border-gray-700 "><BiSearch /></span>

</div>
</div>









</nav>

 <div className="flex mb-20  flex-wrap gap-8 z-1  ">
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
</Layaout>
</>
)
}
export default Asignaturas