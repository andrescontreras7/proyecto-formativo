import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { BsFileEarmarkArrowDown } from "react-icons/bs";
import { IoFolderOpenOutline } from "react-icons/io5";
import ModalTemas from "../../components/modal_tematicas";
import { IoAdd } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from 'react';
import { counterContext } from "../../../context/CRMcontext";

import { getGruposAll } from '../../endpoints/useGet';
import { jwtDecode } from "jwt-decode";


export default function App() {
  const { id } = useParams();

  return (
    <div className="bg-[#ffffff]  w-full h-[83vh] 2xl:h-[82vh] ">
      <div className="bg-[#ffffff] p-4 h-[96%] shadow-[0_8px_20px_12px_rgba(0,0,0,0.08)]  border rounded-md overflow-auto  m-2 ">
        <div className="h-full  p-2 rounde ">
          <Link to={`/registrar-temas/${id}`} className="border p-2  rounded-md">
            Agregar Tematicas 
          
          </Link>
          
         
  
        
              <Accordion selectionMode="multiple">
            <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
            
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
