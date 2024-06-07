import React, {useContext} from 'react';
import Layout from '../../components/layaout';
import { counterContext } from "../../../context/CRMcontext";


const Coordinador = () => {
  const { auth } = useContext(counterContext);
 

  return (
    
    
  <Layout titulo={""} >
    
    

     <div className=' pb-2 w-full bg-[#ffffff]   h-[89vh]    shadow-[0_8px_20px_12px_rgba(0,0,0,0.08)]   rounded-md       '>
     
        <div className='  h-[100%] w-full  overflow-y-auto   '>

       
          <div className='    '>
        
          <div className='p-2 mt-4'>
            <h1 className=' text-3xl text-gray-700 mt-2  m-2 font-bold'>Bienvenido, <span className=' text-[#4A55A2] '>{auth.nombre}</span> 👋 </h1>
            <hr />
           
          </div>
            <div className='  grid grid-cols-4 max-sm:grid-cols-2 max-2xl:grid-cols-3 max-2xl:grid-rows-3     justify-center grid-rows-3 gap-4 p-4  '>
              

              <div className=' flex shadow-md  duration-300 hover:translate-y-[-10px] hover:border-[#4A55A2]  bg-[#E2EDEA]  border border-gray-300    rounded-md  '> 
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
              <h1 className='font-medium text-xl text-center mb-4    '>Solicitudes de permisos recientes </h1>
               
              <div className='m-2  '>
               
                  <ul className=' h-[30rem] overflow-y-scroll  flex  flex-wrap gap-4'>
                  
                    <div className='text-gray-700 p-2 flex gap flex-col  w-full justify-around font-normal bg-white  rounded-md shadow-md border-l-4 border-[#4A55A2] text-lg '>
                    <li className='font-bold text-gray-600 font-mono uppercase'>
                      Carlos jose  
                      </li> 
                      <span className='text-[0.9rem] t '>Asignatura: <span className='text-[#4A55A2] font-bold'> Castellano</span> </span> 
                     
                      <button className='bg-[#B9CCED] text-sm p-1 font-semibold duration-300  rounded-md '>Ver mas detalles</button>
                    </div>   
                    <div className='text-gray-700 p-2 flex gap flex-col  w-full justify-around font-normal bg-white  rounded-md shadow-md border-l-4 border-[#4A55A2] text-lg '>
                    <li className='font-bold text-gray-600 font-mono uppercase'>
                      Carlos jose  
                      </li> 
                      <span className='text-[0.9rem] t '>Asignatura: <span className='text-[#4A55A2] font-bold'> Castellano</span> </span> 
                     
                      <button className='bg-[#B9CCED] text-sm p-1 font-semibold duration-300  rounded-md '>Ver mas detalles</button>
                    </div>  
                    
                    
                    <div className='text-gray-700 p-2 flex gap flex-col  w-full justify-around font-normal bg-white  rounded-md shadow-md border-l-4 border-[#4A55A2] text-lg '>
                      <li className='font-bold text-gray-600 font-mono uppercase'>
                      Carlos jose  
                      </li> 
                      <span className='text-[0.9rem] t '>Asignatura: <span className='text-[#4A55A2] font-bold'> Castellano</span> </span> 
                     
                      <button className='bg-[#B9CCED] text-sm p-1 font-semibold duration-300  rounded-md '>Ver mas detalles</button>
                    </div>   
                    
                    <div className='text-gray-700 p-2 flex gap flex-col  w-full justify-around font-normal bg-white  rounded-md shadow-md border-l-4 border-[#4A55A2] text-lg '>
                    <li className='font-bold text-gray-600 font-mono uppercase'>
                      Carlos jose  
                      </li> 
                      <span className='text-[0.9rem] t '>Asignatura: <span className='text-[#4A55A2] font-bold'> Castellano</span> </span> 
                     
                      <button className='bg-[#B9CCED] text-sm p-1 font-semibold duration-300  rounded-md '>Ver mas detalles</button>
                    </div>   
                    
                    <div className='text-gray-700 p-2 flex gap flex-col  w-full justify-around font-normal bg-white  rounded-md shadow-md border-l-4 border-[#4A55A2] text-lg '>
                    <li className='font-bold text-gray-600 font-mono uppercase'>
                      Carlos jose  
                      </li> 
                      <span className='text-[0.9rem] t '>Asignatura: <span className='text-[#4A55A2] font-bold'> Castellano</span> </span> 
                     
                      <button className='bg-[#B9CCED] text-sm p-1 font-semibold duration-300  rounded-md '>Ver mas detalles</button>
                    </div>   
                    <li></li>
                    <li></li>

                  </ul>
                  
                </div>
              </div>
             
              <button className='row-start-2 row-span-2 col-span-2 max-2xl:col-span-1  p-4   duration-300 hover:translate-y-[-10px] hover:border-[#4A55A2] shadow-md  bg-[#74b7fa] bg-opacity-20  border border-gray-300   flex-col items-center  rounded-md  '> 
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
  );
}

export default Coordinador;
