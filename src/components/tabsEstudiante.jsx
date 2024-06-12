import React from "react";
import { Tabs, Tab } from "@nextui-org/react";
import { Link } from "react-router-dom";

export default function CustomTabsEstudiante() {
  return (
    <div className="p-2">
      <Tabs aria-label="Tabs" className="bg-red-100">
        <Tab
          key="Actividades"
          title={<Link className="text-gray-800 font-mono" to="calificacionesEstudiante">Actividades</Link>}
          className="w-[50%] lg:w-[50%] font-bold uppercase text-lg bg-[#626cb8] bg-opacity-60"
        />
        <Tab
          key="Tareas Entregadas"
          title={<Link className="text-gray-800 font-mono" to="tareasSubidas">Tareas Entregadas</Link>}
          className="w-[50%] lg:w-[50%] font-bold uppercase text-lg bg-[#626cb8] bg-opacity-60"
        />

      </Tabs>
    </div>
  );
}
