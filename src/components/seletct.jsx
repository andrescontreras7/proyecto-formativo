import React, { useState, useContext, useEffect } from 'react';
import { Select, SelectItem } from "@nextui-org/react";
import { counterContext } from '../../context/CRMcontext';
import s_axios from '../../config/axios';

export default function App({ register, name,des }) {
  const [grado, setGrado] = useState([]);
  const { auth } = useContext(counterContext);

  useEffect(() => {
    const consulta = async () => {
      try {
        const gradoConsulta = await s_axios.get('/grados', {
          headers: {
            Authorization: `Bearer ${auth.token}`
          }
        });
        const lol = gradoConsulta.data.data;
        setGrado(lol);
      } catch (error) {
        console.log(error);
      }
    };
    consulta();
  }, [auth.token]);

  return (
    <Select
    label={"Grados"}
    placeholder={des}
  
    {...register(name)} >
      {grado.map(grados => (
        <SelectItem key={grados.grado_id} value={grados.grado_id}>
          {grados.nombre_grado}
        </SelectItem>
      ))}
    </Select>
  );
}
