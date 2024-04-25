import { useNavigate } from 'react-router-dom'; 
import React, { useState, useEffect, useContext } from "react";
import Cursos from "../../cursos";
import { HiArrowSmallLeft } from "react-icons/hi2";
import Layaout from "../../layaout";
import { BiSearch } from "react-icons/bi"
import s_axios from "../../../../config/axios";
import { counterContext } from "../../../../context/CRMcontext";
import Swal from 'sweetalert2'

const Asignaturas = () => {
  const [asignatura, setAsignatura] = useState([]);
  const {auth} = useContext(counterContext);

  useEffect(() => {
    const consulta = async () => {
      try {
        const asignaturaConsulta  = await s_axios.get('/asignaturas' ,{
          headers : {
            Authorization : `Bearer ${auth.token}`
          }
        });
        setAsignatura(asignaturaConsulta.data.data);
      } catch (error) {
        if(error.response.status === 403){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No tienes permisos para acceder a este contenido',
            footer: '<a href>Why do I have this issue?</a>'
          })
        }
      }
    }
    consulta();
  }, []);

  return (
    <Layaout titulo={"Asignaturas "} icono={<HiArrowSmallLeft className='text-xl' />}  >
      <div className="bg-[#A0BFE0] w-full h-[88vh] max-[1400px]:h-[85vh] flex justify-center rounded-md">
        <div className="flex flex-col gap-10 w-full h-[98%] p-2 rounded-md shadow-xl shadow-slate-700 mt-2">
          <nav className="w-full">
            <div className="flex items-center mt-2 ">
              <div className="flex mb-4 m-auto">
                <select className="p-2 rounded-md mr-4 placeholder-gray-800 font-semibold focus:outline-none pr-10 border-solid bg-[#C5DFF8] shadow-md shadow-[#4A55A2]">
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
                  className="p-2 rounded-md mr-4 placeholder-gray-800 focus:outline-none focus:border-b-4 transition-all delay-0 ease-in border-[#4A55A2] font-semibold pr-10 border-solid bg-[#C5DFF8] shadow-md shadow-[#4A55A2]"
                  placeholder="Buscar asignatura "
                />
                <span className="p-3 border-solid bg-[#C5DFF8] rounded-md shadow-md shadow-[#4A55A2]"><BiSearch /></span>
              </div>
            </div>
          </nav>
          <div className="h-[90%] overflow-y-scroll">
            <div className="flex flex-wrap gap-8 z-1 justify-center">
              {asignatura.map((asignatura, index) => (
                <Cursos
                  key={index}
                  src={asignatura.imagen}
                  titulo={asignatura.asignombre}
                  profesor={asignatura.asi}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layaout>
  )
}

export default Asignaturas