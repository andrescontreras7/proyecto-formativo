import { useNavigate } from 'react-router-dom'; 
import React, { useState, useEffect, useContext } from "react";
import Cursos from "../../cursos";
import { HiArrowSmallLeft } from "react-icons/hi2";
import Layaout from "../../layaout";
import { BiSearch } from "react-icons/bi"
import s_axios from "../../../../config/axios";
import { counterContext } from "../../../../context/CRMcontext";
import Swal from 'sweetalert2'
import Input from '../../input';

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
  <div className="bg-[#ffffff]  shadow-[0_8px_20px_12px_rgba(0,0,0,0.08)] w-full h-[85vh] 2xl:h-[87vh] flex justify-center rounded-md">
        <div className="flex flex-col gap-2 w-full h-[96%] p-2 rounded-md  mt-2">
          <nav className="w-full">
            <div className="flex items-center mt-2 ">
              <div className="flex gap-4  m-auto">
                <Input/>
                <Input/>
                
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