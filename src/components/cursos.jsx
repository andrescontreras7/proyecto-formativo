import { Link } from "react-router-dom"


const Cursos = ({titulo, profesor, src}) =>{

    return(
<>
<div className=" flex  bg-white rounded-xl shadow-md shadow-slate-400  flex-col hover:scale-105 transition-[2s]  w-[30%] h-2/5  ">
       <div className="rounded-xl">
       <div className=" shadow-md  m-4 rounded-xl h-[30vh]">
         <Link  to={"/DetallesAsignatura/Informacion"}>
                <img src="s.jpg" alt=""    className=" rounded-xl w-[100%]  p-2 h-[100%]" />
        </Link>
         </div>
           <div className="bg-white   h-[35%]">
                <p className= "mt-4 ml-2  text-gray-400 font-semibold text-[0.7rem]">
                    1-28 july 2023
                </p>
                <h3 className=" ml-2 font-semibold text-[#0B7077]">
                   {titulo}
                </h3>
           
                <p className="ml-2 mb-4  flex justify-between  font-semibold text-gray-700">{profesor} <img src="Vector.svg" className="w-[1.70rem] mr-4" alt="" /></p>

           </div>
           
        </div>

       </div>


</>
)




}
export default Cursos