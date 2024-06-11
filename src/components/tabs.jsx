import React from "react";
import { Tabs, Tab } from "@nextui-org/react";
import { Link } from "react-router-dom";

export default function CustomTabs() {
  return (
    <div className="p-2">
      <Tabs aria-label="Tabs" className="bg-blue-100">
        <Tab
          key="Asistencias"
          title={<Link to="Asistencias">Asistencias</Link>} 
          className="tab-item"
        />
        <Tab
          key="Informacion"
          title={<Link to="Informacion">Informacion</Link>} 
          className="tab-item"
        />
        <Tab
          key="listado"
          title={<Link to="Listado-estudiantes">Listado estudiantes </Link>} 
          className="tab-item"
        />
        <Tab
          key="calificaciones"
          title={<Link to="Calificaciones">Calificaciones </Link>} 
          className="tab-item"
        />
        <Tab
          key="Tematicas"
          title={<Link to="Tematicas">Tematicas </Link>} 
          className="tab-item"
        />
      </Tabs>
    </div>
  );
}