import React from 'react';
import Aside from './AsideCO';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';


const RegistroObservador = ({children }) => {
    let [isOpen, setIsOpen] = useState(true);
  
    function closeModal() {
      setIsOpen(false);
    }
  
    function openModal() {
      setIsOpen(true);
    }
  
    return (
      <>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            {/* ... (other transitions) */}
            <div className="inset-0 fixed m-auto  bg-black/40 overflow-y-auto">
              <div className="flex w-[90%] h-screen t m-auto  p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full m-auto transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                                            
                <div className='h-[90vh]  '>
                <div className=' bg-[#925FE2]  bg-opacity-40 h-[5vh]  rounded-2xl'>
                <h1 className='text-center font-Roboto font-semibold text-gray-800 uppercase mt-2'>Registro Observador academico</h1>
            </div>
                    <div className="bg-white   mt-2 m-auto h-[90%] p-2  w-[100%]  shadow-[0_8px_20px_20px_rgba(0,0,0,0.08)] rounded-xl    "> 
                            <div className='p-10 flex flex-col h-full justify-center items-center gap-8'>
                                <input placeholder='Estudiante' className='rounded-md w-full bg-[#e1e9ec]  shadow-md  border-none p-2' type="search" name="" id="" />
                                <input placeholder='Fecha del evento' className='rounded-xl w-full bg-[#e1e9ec]  shadow-md  border-none p-2' type="search" name="" id="" />
                                <input placeholder='Criterios' className='rounded-md w-full bg-[#e1e9ec]  shadow-md  border-none p-2' type="search" name="" id="" />
                                <input placeholder='Clasificacion' className='rounded-md w-full bg-[#e1e9ec]  shadow-md  border-none p-2' type="search" name="" id="" />
                               <div  className='flex justify-center gap-4 items-start'>
                               <input placeholder='Descripcion del caso' className=' h-[10rem] w-[47vw] rounded-md  bg-[#e1e9ec]  shadow-md  border-none ' type="search" name="" id="" />
                                <input placeholder='Compromiso del estudiante' className=' h-[10rem] w-[30vw] rounded-md  bg-[#e1e9ec]  shadow-md  border-none ' type="search" name="" id="" />
                               </div>
                      
              
                <div className=" text-center mb-6">
                    <button
                      type="button"
                      className=" m-auto w-44 justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-900 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Guardar
                    </button>
                  </div>
                  </div>
                  </div>
                </div>
               
                </Dialog.Panel>
           
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
    );
  };
  
  export default RegistroObservador;













