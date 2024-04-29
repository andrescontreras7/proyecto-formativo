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
    
    <div className="p-2">
      <Tabs classNames={{ Tabs: "bg-red-800" }} aria-label="Tabs sizes">
        <Tab 
          key="photos"
          title={<Link className="text-gray-800 font-mono" to={"Asistencias"}>Asistencias</Link>} 
          classNames={{ tab: "w-full lg:w-72 font-bold uppercase text-lg", cursor: "bg-[#74b7fa] bg-opacity-40" }}
        />
        <Tab 
          key="music" 
          title={<Link className="text-gray-800 font-mono" to={"Informacion"}>Informacion</Link>} 
          classNames={{ tab: "w-full lg:w-72 font-bold uppercase text-lg", cursor: "bg-[#74b7fa] bg-opacity-40" }}
        />
        <Tab 
          key="videos" 
          title={<Link className="text-gray-800 font-mono" to={"Calificaciones"}>Calificaciones</Link>} 
          classNames={{ tab: "w-full lg:w-72 font-bold uppercase text-lg", cursor: "bg-[#74b7fa] bg-opacity-40" }}
        />
      </Tabs>
    </div>
  );
}
