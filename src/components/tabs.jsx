import React from "react";
import {Tabs, Tab} from "@nextui-org/react";
import { Link } from "react-router-dom";
export default function tabs() {
  const sizes = [
    "sm",
    "md",
    "lg",
  ];

  return (
    
    <div className="p-2 ">
      <Tabs classNames={{ Tabs: "bg-red-100" }} aria-label="Tabs sizes">
        <Tab 
          key="Asistencias"
          title={<Link className="text-gray-800 font-mono " to={"Asistencias"}>Asistencias</Link>} 
          classNames={{ tab: "w-full lg:w-72  font-bold uppercase text-lg", cursor: "bg-[#626cb8] bg-opacity-60" }}
        />
        <Tab 
          key="informacion" 
          title={<Link className="text-gray-800 font-mono" to={"Informacion"}>Informacion</Link>} 
          classNames={{ tab: "w-full lg:w-72 font-bold uppercase text-lg", cursor: "bg-[#626cb8] bg-opacity-60" }}
        />
        <Tab 
          key="calificaciones" 
          title={<Link className="text-gray-800 font-mono" to={"Calificaciones"}>Calificaciones</Link>} 
          classNames={{ tab: "w-full lg:w-72 font-bold uppercase text-lg", cursor: "bg-[#626cb8] bg-opacity-60" }}
        />
         <Tab 
          key="tematicas" 
          title={<Link className="text-gray-800 font-mono" to={"Tematicas"}>Tematicas</Link>} 
          classNames={{ tab: "w-full lg:w-72 font-bold uppercase text-lg", cursor: "bg-[#626cb8] bg-opacity-60" }}
        />
      </Tabs>
      
    </div>
  );
}
