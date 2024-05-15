import React, { useState, useEffect } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import s_axios from '../../config/axios';

export default function App({ nom, ac }) {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    s_axios.get('/roles')
      .then(response => {
        setRoles(response.data);
      })
      .catch(error => {
        console.error('Error cargando los roles:', error);
      });
  }, []);

  return (
    <Select
      onChange={ac}
      name={nom}
      label="Roles"
      placeholder="Seleccion el rol del usuario"
      description=""
      className="max-w-xs"
    >
      {roles.map((rol, index) => (
        <SelectItem key={index} value={rol.id_rol}>
          {rol.nombre}
        </SelectItem>
      ))}
    </Select>
  );
}