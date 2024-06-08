import React from "react";
import { Tabs, Tab } from "@nextui-org/react";
import { Link } from "react-router-dom";

export default function CustomTabs() {
  return (
    <div className="p-2">
      <Tabs aria-label="Tabs" className="bg-red-100">
        <Tab 
          key="Asistencias"
          title={<Link className="text-gray-800  font-mono" to="Asistencias">Asistencias</Link>}
          className="w-[70%] lg:w-[100%] font-bold uppercase text-lg bg-[#626cb8] bg-opacity-60"
        />
        <Tab 
          key="Informacion"
          title={<Link className="text-gray-800 font-mono" to="Informacion">Informacion</Link>}
          className="w-[70%]lg:w-[30%] font-bold uppercase text-lg bg-[#626cb8] bg-opacity-60"
        />
        <Tab 
          key="Calificaciones"
          title={<Link className="text-gray-800 font-mono" to="Calificaciones">Calificaciones</Link>}
          className="w-[70%] lg:w-[30%] font-bold uppercase text-lg bg-[#626cb8] bg-opacity-60"
        />
        <Tab 
          key="Listado estudiantes"
          title={<Link className="text-gray-800 font-mono" to="listado-Estudiantes">Listado estudiantes</Link>}
          className="w-[70%] lg:w-[30%] font-bold uppercase text-lg bg-[#626cb8] bg-opacity-60"
        />
        <Tab 
          key="Tematicas"
          title={<Link className="text-gray-800 font-mono" to="Tematicas">Tematicas</Link>}
          className="w-[80%] lg:w-[40%] font-bold uppercase text-lg bg-[#626cb8] bg-opacity-60"
        />
      </Tabs>
    </div>
  );
}
