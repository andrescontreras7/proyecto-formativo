// Importamos las dependencias necesarias
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/layaout';
import { HiArrowSmallLeft } from "react-icons/hi2";
import Input from '../../components/input';
import Select from '../../components/seletct';
import Componente from '../../components/componente';
import { useForm } from 'react-hook-form';
import { useState, useEffect, useContext } from 'react';
import { counterContext } from "../../../context/CRMcontext";
import s_axios from "../../../config/axios";


const AsistenciasD = () => {
  const [asignatura, setAsignatura] = useState([]);
  const {auth} = useContext(counterContext);
  const { register, handleSubmit,watch,reset, formState: { errors } } = useForm()


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
        console.log(error);
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
    

    <Layout titulo={"Asistencias estudiantes  "} icono={<HiArrowSmallLeft className='text-2xl font-bold' />}>
      <div className="overflow-y-scroll shadow-[0_8px_10px_15px_rgba(0,0,0,0.08)] w-full h-[87vh] max-2xl:h-[85vh] rounded-md">
        <div className='p-2'>
          <h1 className='font-semibold text-xl text-gray-700 p-2'>Filtros</h1>
          <hr />
          <div className='flex gap-6 mt-2 bg-[#6f99e1] bg-opacity-25 rounded-md p-4 w-auto m-10'>
          
            <Select register={register} des={"Selecione el grado"} name="grado"/>
            <Input/>
            <Input/>
            <Input/>
          </div>
          <div className='flex flex-wrap max-2xl:gap-2 justify-center m-auto p-2 gap-4'>

            {asignatura.map((asig) => (
              <Link key={asig.cod} to={`/AsistenciasEstudiantes/${asig.asigcod}`}>
                <Componente titulo={asig.asignombre} descripcion={asig.asigdescripcion} src={asig.imagen} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

// se exporta el componente para que pueda ser usado en otros archivos pa
export default AsistenciasD;