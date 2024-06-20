import React, { useState, useEffect, useContext } from 'react';
import Layout from '../../components/layaout';
import { HiArrowSmallLeft } from "react-icons/hi2";
import {jwtDecode} from "jwt-decode";
import { getNotaEstudiante } from '../../endpoints/useGet';
import { counterContext } from '../../../context/CRMcontext';

const NotasEstudiante = () => {


  
  const { auth } = useContext(counterContext);
  const [notas, setNotas] = useState([]);

  useEffect(() => {
    const decodedToken = jwtDecode(auth.token);

    getNotaEstudiante(auth, decodedToken.id).then(res => {
      setNotas(res);
      console.log(res)
    });
  }, [auth]);


    return (
      <Layout titulo={"Notas"} icono={<HiArrowSmallLeft className='text-xl'/>}>
       <div className="bg-[#ffffff] w-full shadow-[0_8px_10px_15px_rgba(0,0,0,0.08)] h-[85vh] 2xl:h-[86vh] justify-center rounded-md">
          <h1 className="text-3xl font-bold mb-4">Resultados de Notas</h1>
          <section className='w-[100%] p-2 flex flex-wrap justify-center gap-4   m-auto  '>


          {Array.isArray(notas) ? (
                notas.map((nota, index) => ( 
                  
                  <div  key={index} className='w-2/5 rounded-xl  shadow-[8px_8px_3px_5px_rgba(0,0,0,0.08)] bg-[#C5DFF8] m-auto mt-4 h-[25vh]'>
                    <h1 className='font-normal p-2 text-gray-800 text-center text-2xl'>Promedio Acumulado {nota.asignombre}</h1>
                    <p className='text-4xl text-center font-semibold text-gray-800 mt-8'>{ nota.promedio_nota }</p>
                  </div>
                  // <div key={index} className="w-1/5 rounded-xl shadow-[8px_8px_3px_5px_rgba(0,0,0,0.08)] bg-[#C5DFF8] m-4 h-[20vh]">
                  //   <h1 className="font-normal p-2 text-gray-800 text-center text-2xl">Promedio Acumulado {nota.asignombre}</h1>
                  //   <p className="text-4xl text-center font-semibold text-gray-800 mt-8">{nota.promedio_nota}</p>
                  // </div>
                  
                  
                ))
              ) : (
                <h1 className='font-normal p-2 text-gray-800 text-center text-2xl'>No tiene asignaturas asignadas</h1>
              )}
             

          </section>
        </div>
      </Layout>
    );
  }
export default NotasEstudiante;