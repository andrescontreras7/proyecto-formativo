
import { HiArrowSmallLeft } from "react-icons/hi2";
import { HiArrowSmallRight } from "react-icons/hi2";
import React, { useState, useEffect, useContext } from "react";
import Cursos from "../../cursos";
import Aside from '../../_aside';
import { Link, Outlet } from "react-router-dom";
import Layaout from "../../layaout";
import { BiSearch } from "react-icons/bi"
import s_axios from "../../../../config/axios";
import { CRMcontext } from '../../../../context/CRMcontext';




const Asignaturas = () => {


  const [asignatura, setAsignatura] = useState([]);
  const [auth, guardarToken] = useContext(CRMcontext)



  //solictud al enpoint de la appi para traer los datos 
useEffect(() => {
  
 
if (auth.token !==""  ) {
  const consulta = async () => {
   try {
      const asignaturaConsulta  = await s_axios.get('/asignaturas' ,{
        headers : {
          authorization : `Bearer ${auth.token}`
        }

      });
       //guardar datos en la varibale de estado
      setAsignatura(asignaturaConsulta.data);
      console.log(asignaturaConsulta.data);
  
    
   } catch (error) {
    console.log(error)

    //error con autorizacion
    if(error.response.status === 500){
      
       }


   
  }

  useEffect(() => {
    consulta();
  },[])
}
}
else{
 console.log("inicia sesion pa ")
}

}, [asignatura]);



    
return(
<>

<Layaout>
<div className="flex bg-[#A0BFE0]  overflow-y-scroll   font-bold  w-full h-screen   ">
 


<div className="  m-auto flex flex-col gap-8 w-full  mt-4   justify-start items-center ">
<nav className="w-full">

          <div className="w-[90] mt-8 p-2   ">
                <div className= " flex items-center gap-2  text-gray-900  uppercase font-bold   p-[0.1rem] font   rounded-xl ">
                  <HiArrowSmallLeft className="text-3xl "  />   
                  <h1 className="  ">   Notas  </h1> 
                </div>
              
          </div>

<div className="flex items-center mt-2 ">




<div className="flex  mb-4 m-auto">
<select className="p-2 rounded-md mr-4 placeholder-gray-800 font-semibold focus:outline-none pr-10  border-solid bg-[#C5DFF8] shadow-md shadow-[#4A55A2]        ">


<option value="">Grado</option>
                    <option value="">5A</option>
                    <option value="">7A</option>
                    <option value="">9B</option>
                    <option value="">9B</option>
                    <option value="">9B</option>
<option value="">9B</option>
</select>
<input
type="search"
id="filtro3"
className="p-2 rounded-md mr-4  placeholder-gray-800 focus:outline-none focus:border-b-4 transition-all delay-0 ease-in  border-[#4A55A2] font-semibold  pr-10   border-solid bg-[#C5DFF8]  shadow-md shadow-[#4A55A2]    "
placeholder="Buscar asignatura "

/>

<input
type="search"
id="filtro3"
className="p-2 rounded-md  placeholder-gray-800 focus:outline-none focus:border-b-2 border-[#ae6fef] font-semibold  pr-10  border-solid bg-[#C5DFF8]   shadow-md shadow-[#4A55A2]  "
placeholder="Buscar asignatura "

/>

<span className="p-3 ] border-solid bg-[#C5DFF8] rounded-md    shadow-md shadow-[#4A55A2]  "><BiSearch /></span>

</div>
</div>









</nav>

 <div className="flex mb-20  flex-wrap gap-8 z-1 justify-center  ">
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