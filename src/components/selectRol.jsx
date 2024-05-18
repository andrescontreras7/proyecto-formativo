import React, { useState, useEffect } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import s_axios from '../../config/axios';

export default function App({ name,register, des }) {
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
    label={"roles"}
    placeholder={des}
   
    {...register(name)}
    >
      {roles.map((rol, index) => (
        <SelectItem key={index} value={rol.id_rol}>
          {rol.nombre}
        </SelectItem>
      ))}
    </Select>
  );
}