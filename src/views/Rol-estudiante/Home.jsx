import React, { useContext } from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import { counterContext } from "../../../context/CRMcontext";
import Layout from '../../components/layaout';

const Home = () => {
  const { auth } = useContext(counterContext);
  console.log(auth)
  const datos = [30, 50, 20];

  const data = {
    labels: ['faltas', 'asitencias', 'tardanzas'],
    datasets: [
      {
        data: datos,
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
        borderWidth: 1,
      },
    ],
  };

  return (
<>
<Layout titulo={""} >
<div className="bg-[#ffffff]  shadow-[0_8px_20px_12px_rgba(0,0,0,0.08)] w-full h-[89vh] flex justify-center rounded-md">
       <div className='   w-full  overflow-y-auto   '>
          <div className='    '>
          <div className='p-2 mt-4'>
            <h1 className=' text-3xl text-gray-700 mt-2  m-2 font-bold'>Bienvenido, <span className=' text-[#4A55A2] '>{auth.nombre}</span> 👋 </h1>
            <hr />
          </div>
            <div className='  grid grid-cols-4 max-sm:grid-cols-2 max-2xl:grid-cols-3 max-2xl:grid-rows-3     justify-center grid-rows-3 gap-4 p-4  '>
              <div className=' flex shadow-md row-span-3  duration-300 hover:translate-y-[-10px] hover:border-[#4A55A2]  bg-[#E2EDEA]  border border-gray-300    rounded-md  '> 
                <div className='flex flex-col m-auto p-4   gap-4 '>
                  <h1 className=' font-bold text-4xl text-gray-600 text-left  '>300</h1>
                  <p className='font-semibold text-gray-700 text-left '>Total de <span className='text-[#4A55A2] font-bold'>Estudiantes</span> en plataforma</p>
                </div>
                <div className=' flex   m-auto  '>
                  <div>
                  <img className='w-20' src="../../../../public/estudiante 1.png" alt="" />
                  </div>
                </div>
              </div>
              <div className=' flex shadow-md  duration-300 hover:translate-y-[-10px] hover:border-[#4A55A2]  bg-[#E2EDEA]  border border-gray-300    rounded-md  '> 
                <div className='flex flex-col m-auto p-4   gap-4 '>
                  <h1 className=' font-bold text-4xl text-gray-600 text-left  '>20</h1>
                  <p className='font-semibold text-gray-700 text-left '>Total de <span className='text-[#4A55A2] font-bold'>Docentes </span> en plataforma</p>
                </div>
                <div className=' flex   m-auto  '>
                  <div>
                  <img className='w-20' src="../../../../public/estudiante 1.png" alt="" />
                  </div>
                </div>
              </div>
              <button  className='flex max-2xl:col-start-2  p-4 duration-300 hover:translate-y-[-10px] hover:border-[#4A55A2] shadow-md  bg-[#E2EDEA] border border-gray-300   flex-col items-center  rounded-md   '> 
                <div>
                <h1 className='font-medium text-xl text-left    '>Estadisticas</h1>
                  <p className='font-normal text-gray-700 text-left'>Lo culpa asperioresss accusantium quae excepturi.</p> 
                </div>
              </button>
              <div  className=' p-4 row-span-3 shadow-md  max-sm:col-span-1 max-2xl:row-span-3 max-2xl:col-start-3 max-2xl:row-start-1  duration-300  hover:border-[#4A55A2]    bg-[#74b7fa] bg-opacity-20    border border-gray-300    rounded-md   '> 
              <h1 className='font-medium text-xl text-center mb-4    '>Tus asistencias </h1>
              <div className='m-2  '>
              <Doughnut data={data}  />;
                 
                </div>
              </div>
              <button className='row-start-2 row-span-2 col-start-2 col-span-2 max-2xl:col-span-1  p-4   duration-300 hover:translate-y-[-10px] hover:border-[#4A55A2] shadow-md  bg-[#74b7fa] bg-opacity-20  border border-gray-300   flex-col items-center  rounded-md  '> 
                <div>
                <h1 className='font-medium text-xl text-left  '>Registrar huellas</h1>
                  <p className='font-normal text-gray-700 text-left'>Lo culpa asperiores accusantium quae excepturzzzzi.</p>
                </div>
              </button>
            </div>
          </div>
        </div>
   </div> 
  </Layout>
 
</>
)
}

export default Home
