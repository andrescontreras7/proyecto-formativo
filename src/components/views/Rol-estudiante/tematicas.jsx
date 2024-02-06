import React, { useState, useRef, useEffect } from 'react';
import { BsChevronRight } from "react-icons/bs";
import AnimatedPage from '../../animatedPage';
import { BsFileEarmarkArrowDown } from "react-icons/bs";
import { IoFolderOpenOutline } from "react-icons/io5";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

 
  return (
    <div className='w-full   p-2 items-start h-auto'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`font-bold  text-gray-800 ml-2 flex transition-[2s] ${isOpen ? 'bg-purple-2200' : ''}  `}
      > 
      
      
      <BsChevronRight className='mt-[5.5px]  hover:bg-[#88b4c5]  h-6  p-1  mr-3 rounded-full' />{title }
        
       
      </button>
      {isOpen && (
        <div ref={contentRef} className="px-4 pb-2  pt-4 text-sm  text-gray-500 overflow-auto">
          {children}
          
        </div>
      )}
    </div>
  );
};

const Tematicas = () => {
  return (
    <AnimatedPage>
      <div className=''>
      <div>
        <section className='w-[100%]  overflow-y-scroll bg-white   shadow-[0_8px_20px_20px_rgba(0,0,0,0.08)] p-2 rounded h-2/3'>
          <div className='flex flex-col text-center    gap-2  text-2xl items-center justify-center p-4 '>
            <Accordion  className=""  title= " General">
            
            <div>
              <h1 className=' font-extrabold mb-4 text-gray-900 font-2xl uppercase'>Justificacion</h1>
              <p className='text-left font-normal '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, libero aspernatur blanditiis labore ex molestias exercitationem undorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, libero aspernatur blanditiis labore ex molestias exercitationem unorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, libero aspernatur blanditiis labore ex molestias exercitationem une nihil! Nulla quod neque corporis a. Quaerat nisi quam repellendus libero? Qui, quos.lore</p>

          </div>
          <div className='mt-10'>
              <h1 className=' font-extrabold mb-4 text-gray-900 font-2xl uppercase'>Logros de la asignatura</h1>
              <p className='text-left font-normal '>Lorem ipsum, dolor sit amet consectetur adipisicinlorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quisquam quibusdam consequatur! Itaque inventore consectetur quisquam dolorem? Accusamus tenetur suscipit eos deserunt harum animi dicta quam nam, aliquam nesciunt sequi!Lorem  g elit. Quibusdam, libero aspernatur blanditiis labore ex molestias exercitationem undorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, libero aspernatur blanditiis labore ex molestias exercitationem unorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, libero aspernatur blanditiis labore ex molestias exercitationem une nihil! Nulla quod neque corporis a. Quaerat nisi quam repellendus libero? Qui, quos.lore</p>
          </div>   
           
           </Accordion>
            <div className='bg-gray-500 h-[1px] w-full'>  </div>
            <Accordion title="Primer Periodo">
             <div className='text-left w-full text-gray-900 mb-2  border-[1px] p-4 rounded-md font-normal'>
                  <div className='inline-flex  gap-2 items-center'>
                     <div className='bg-blue-500 p-2 m-2 rounded-md'>
                     <IoFolderOpenOutline  className='text-4xl text-white' />
                     </div>
                      <h1 className=' uppercase'>Carpeta  
                        <span className='block mt-1 text-indigo-900 font-semibold '>Lista de ejercicios</span>
                      </h1>
                      {" "}
                  </div> 
                <div className='border-[1px] text-gray-900  mt-2 m-2 bg-indigo-100 p-2 rounded-md'>
                    <div className='p-2'> 
                        <p>  Investigar en grupo de 5 estudiantes los siguientes temas: 
                        </p>
                        <ul className='m-4'>
                          <li> limites trigonometricos</li>
                          <li>propiedades y teorema de limites</li>
                          <li>definicion formal e informal de limites</li>
                        </ul>
                    </div>
                </div>
               <div className='w-full text-right mt-8'>
                <button  className='m-auto border-[1px] border-blue-800 rounded-md  text-left p-1 '> Marcar como hecha </button>
               </div>
             </div>
             <div className='text-left w-full text-gray-900  border-[1px] mb-2 p-4 rounded-md font-normal'>
                  <div className='inline-flex   gap-2 items-center'>
                     <div className='bg-pink-500 p-2 m-2 rounded-md'>
                      <BsFileEarmarkArrowDown className='text-4xl text-white' />
                     </div>
                      <h1 className=' uppercase'>Tarea  
                        <span className='block mt-1 text-indigo-900 font-semibold '>Investigacion de limites</span>
                      </h1>
                      {" "}
                  </div> 
                <div className='border-[1px] mt-2 m-2 bg-indigo-100 p-2 rounded-md'>
                 <p>   En esta docuemnto encontraran los ejerccios dispuestos de calculo, para ele xamen del primer corte de la asignatura  </p>
                </div>
               <div className='w-full text-right mt-8'>
                <button  className='m-auto border-[1px] border-blue-800 rounded-md  text-left p-1 '> Marcar como hecha </button>
               </div>
             </div>
             
            </Accordion>
            
            <div className='bg-gray-500  h-[1px] w-full'>  </div>
            <Accordion title="Segundo Periodo">
              Contenido del Segundo Periodo
            </Accordion>
            <div className='bg-gray-500  h-[1px] w-full'>  </div>
            <Accordion title="Tercer Periodo">
              Contenido del Tercer Periodo
            </Accordion>
        
           
          </div>
        </section>
      </div>
    </div>

    </AnimatedPage>
    
  );
};

export default Tematicas;