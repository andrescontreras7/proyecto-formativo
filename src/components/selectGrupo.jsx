import React, { useState, useContext, useEffect } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { counterContext } from '../../context/CRMcontext';
import s_axios from '../../config/axios';

export default function App({ register, des, name }) {
  const [grupo, setGrupo] = useState([]);
  const { auth } = useContext(counterContext);

  useEffect(() => {
    const obtenerGrupos = async () => {
      try {
        const response = await s_axios.get('/grupo', {
          headers: {
            Authorization: `Bearer ${auth.token}`
          }
        });
        setGrupo(response.data);
      } catch (error) {
        console.error('Error cargando los grupos:', error);
      }
    };
    obtenerGrupos();
  }, [auth]);

  return (
    <Select

      key={grupo.grupcod}
      label="Grupos"
      placeholder={des}
      {...register(name)}
      className="max-w-xs"
    >
      {grupo.map(grupos => (
        <SelectItem key={grupos.grupcod} value={grupos.grupcod}>
          {grupos.grupsalon}
        </SelectItem>
      ))}
    </Select>
  );
}