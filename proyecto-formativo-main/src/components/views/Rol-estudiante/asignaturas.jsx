
import { HiArrowSmallLeft } from "react-icons/hi2";
import { HiArrowSmallRight } from "react-icons/hi2";
import React, { useState, useEffect } from "react";
import Cursos from "../../cursos";
import Aside from '../../_aside';
import { Link, Outlet } from "react-router-dom";



const Asignaturas = () => {


    
return(
<>

<div className="flex   font-bold bg-[#A6DCF1] w-screen   xl: h-screen">
 
        <aside className=" w-[15%] ">
            <Aside/>
        </aside>
    
<div className=" max-[1455px]:ml-20 h-[100vh] mr-4 m-auto flex overflow-y-scroll   flex-wrap gap-8 w-4/5   justify-start items-center ">
  <nav className="w-full">
  
    <div className= " flex justify-between text-gray-900  uppercase font-   bg-[#11868e] bg-opacity-50  p-[0.9rem] font   rounded-xl mr-20 mt-8">
        <HiArrowSmallLeft className="text-3xl "  />   <h1 className=" text-center ">   Cursos actuales </h1> <button className="flex low gap-2"> <HiArrowSmallRight className="text-3xl"/></button>
    </div>
<div></div>
<div className="flex items-center mb-4 ">
  
  <input
    type="search"
    id="filtro"
    className="p-2 rounded-3xl font-normal pr-10 bg-[#F6F6F6]"
    placeholder="Buscar asignatura"
    name=""
  />
  <div className="flex items-center mb-4">
  <label htmlFor="filtro2" className="block text-gray-700 text-lg font-bold mr-4">Filtra:</label>
  <input
    type="search"
    id="filtro2"
    className="p-2 rounded-3xl font-normal pr-10 bg-[#F6F6F6]"
    placeholder="Buscar asignatura"
    name=""
  />
</div>

<div className="flex items-center mb-12">
  <label htmlFor="filtro3" className="block text-gray-700 text-lg font-bold mr-4">Filtra:</label>
  <input
    type="search"
    id="filtro3"
    className="p-2 rounded-3xl font-normal pr-10 bg-[#F6F6F6]"
    placeholder="Buscar asignatura"
    name=""
  />
</div>
</div>







        <div className="mt-10 ml-2">
            <input type="search " className="my-2 mt-10 border-2 p-3 rounded-md bg-[#F5F5F5] border-1 border-[#11868e] text-black outline outline-transparent focus:outline-[#39A900] focus:outline-[2px]"   placeholder="Buscar asignatura" name="" id="" />
        </div>
    
  </nav>
  
        <div className="flex mb-20  overflow-y-auto flex-wrap gap-8 z-0  ">
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