

import { HiArrowSmallRight } from "react-icons/hi2";
import React, { useState, useEffect, useContext } from "react";
import Cursos from "../../cursos";
import { HiArrowSmallLeft } from "react-icons/hi2";
import Layaout from "../../layaout";
import { BiSearch } from "react-icons/bi"
import s_axios from "../../../../config/axios";
import { CRMcontext } from '../../../../context/CRMcontext';
 



const Asignaturas = () => {

 
  const [asignatura, setAsignatura] = useState([]);

  const [epa, setEpa] = useState("")






  //solictud al enpoint de la appi para traer los datos 
useEffect(() => {
  const jwtT  =  localStorage.getItem('Jsowebtoken ')
  console.log(epa)
  
 
/*if (!jwtT) {
  console.log("inicia sesion para acceder")
  window.location.href = '/login'
}
  else{
    const consulta = async () => {
      try {
         const asignaturaConsulta  = await s_axios.get('/asignaturas' ,{
           headers : {
             authorization : `Bearer ${jwtT}`
           }
   
         });
          //guardar datos en la varibale de estado
         setAsignatura(asignaturaConsulta.data);
         console.log(asignaturaConsulta);
         
     
       
      } catch (error) {
       console.log(error)
   
       //error con autorizacion
       if(error.response.status === 500){
         console.log("no tienes autorizacion para ver esta pagina")
         
          }
        
   
   
      
     }
   
     useEffect(() => {
       consulta();
     },[])
   }

   

  }
*/


}, [asignatura]);




    
return(
<>

<Layaout titulo={ "Asignaturas "}  icono={<HiArrowSmallLeft className='text-xl'/>}>
<div className="bg-[#A0BFE0] w-full   h-[88vh] max-[1400px]:h-[85vh]  flex justify-center rounded-md    ">
 


<div className="   flex flex-col  gap-10 w-full h-[98%] p-2 rounded-md shadow-xl shadow-slate-700 mt-2  ">
    <nav className="w-full">

        

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

 <div className=" h-[90%]  overflow-y-scroll " >
    <div className="flex  flex-wrap gap-8 z-1 justify-center  ">
    <Cursos src={"https://previews.123rf.com/images/guarding123/guarding1231008/guarding123100800033/7628460-ilustraci%C3%B3n-de-asignaturas-escolares-que-representa-las-materias-escolares-y-suministros.jpg"} titulo="matematicas" to='' profesor="Cecilia"   />
     <Cursos src={"https://images.vexels.com/media/users/3/169938/preview2/f02b599d55c05825554ded12f0e84af0-ilustracion-de-asignatura-de-ingles.jpg"} titulo="Ingles" profesor="Anotonio"/>
     <Cursos src={"data:image/jpeg;base64,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"} titulo="Sociales" profesor="Humberto" />
     <Cursos src={"https://i.pinimg.com/originals/9d/37/91/9d37918cf16ac146debdc5a416a14a78.png"} titulo="Quimica" profesor="Angelica"/>
     <Cursos src={"https://www.educaciontrespuntocero.com/wp-content/uploads/2021/09/3659672-min-978x652.jpg"} titulo="Fisica" profesor="Emanuel"/>
     <Cursos src={"https://www.shutterstock.com/image-vector/school-education-subject-natural-sciences-600nw-2060039174.jpg"} titulo="Naturales" profesor="Sandra"/>
     <Cursos src={"https://www.magisnet.com/wp-content/uploads/2020/11/Religion-01.jpg"} titulo="Religion" profesor="Agatha"/>
     <Cursos src={"https://ocw.unican.es/pluginfile.php/2010/course/section/1742/estadistica.jpg"} titulo="Estadistica" profesor="Valeria"/>
    </div>
 </div>
 
 
 
 
 
 
</div>
 
</div>


</Layaout>
</>
)
}
export default Asignaturas