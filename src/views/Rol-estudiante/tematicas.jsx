import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { BsFileEarmarkArrowDown } from "react-icons/bs";
import { IoFolderOpenOutline } from "react-icons/io5";

import { IoAdd } from "react-icons/io5";

export default function App() {
  return (
    <div className="bg-[#ffffff]  w-full h-[83vh] 2xl:h-[82vh] ">
      <div className="bg-[#ffffff] p-4 h-[96%] shadow-[0_8px_20px_12px_rgba(0,0,0,0.08)]  border rounded-md overflow-auto  m-2 ">
        <div className="h-full  p-2 rounde ">
          <button className="absolute top-[-70px] right-0 rounded-xl bg-blue-500 text-white p-2 flex items-center">
         
          </button>

          
      
  
        
              <Accordion selectionMode="multiple">
            <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
                 <div className="">
                <div className="text-left w-full text-gray-900 mb-2  border-[1px] p-4 rounded-md font-normal">
                  <div className="inline-flex  gap-2 items-center">
                    <div className="bg-blue-500 p-2 m-2 rounded-md">
                      <IoFolderOpenOutline className="text-4xl text-white" />
                    </div>
                    <h1 className=" uppercase">
                      Carpeta
                      <span className="block mt-1 text-indigo-900 font-semibold ">
                        Lista de ejercicios
                      </span>
                    </h1>{" "}
                  </div>
                  <div className="border-[1px] text-gray-900  mt-2 m-2 bg-indigo-100 p-2 rounded-md">
                    <div className="p-2">
                      <p>
                        {" "}
                        Investigar en grupo de 5 estudiantes los siguientes
                        temas:
                      </p>
                      <ul className="m-4">
                        <li> limites trigonometricos</li>
                        <li>propiedades y teorema de limites</li>
                        <li>definicion formal e informal de limites</li>
                      </ul>
                    </div>
                  </div>
                  <div className="w-full text-right mt-8">
                    <button className="m-auto border-[1px] border-blue-800 rounded-md  text-left p-1 ">
                      {" "}
                      Marcar como hecha{" "}
                    </button>
                  </div>
                </div>
                <div className="text-left w-full text-gray-900  border-[1px] mb-2 p-4 rounded-md font-normal">
                  <div className="inline-flex   gap-2 items-center">
                    <div className="bg-pink-500 p-2 m-2 rounded-md">
                      <BsFileEarmarkArrowDown className="text-4xl text-white" />
                    </div>
                    <h1 className=" uppercase">
                      Tarea
                      <span className="block mt-1 text-indigo-900 font-semibold ">
                        Investigacion de limites
                      </span>
                    </h1>{" "}
                  </div>
                  <div className="border-[1px] mt-2 m-2 bg-indigo-100 p-2 rounded-md">
                    <p>
                      {" "}
                      En esta docuemnto encontraran los ejerccios dispuestos de
                      calculo, para ele xamen del primer corte de la asignatura{" "}
                    </p>
                  </div>
                  <div className="w-full text-right mt-8">
                    <button className="m-auto border-[1px] border-blue-800 rounded-md  text-left p-1 ">
                      {" "}
                      Marcar como hecha{" "}
                    </button>
                  </div>
                </div>
                </div>
              </AccordionItem>
            <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
              
          
            </AccordionItem>
            <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
          
            </AccordionItem>
   
          </Accordion>
        </div>
      </div>
    </div>
  );
}
