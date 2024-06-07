import React, { useState, useEffect } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import s_axios from '../../config/axios';

export default function AcudientesSelect({ register }) {
  const [acudientes, setAcudientes] = useState([]);

  useEffect(() => {
    s_axios.get('/acudientes')
      .then(response => {
        setAcudientes(response.data);
      })
      .catch(error => {
        console.error('Error cargando los acudientes:', error);
      });
  }, []);

  return (
    <Select
      label="Acudientes"
      placeholder="Seleccione un acudiente"
      {...register("acudienteFK")}
    >
      {acudientes.map((acudiente, index) => (
        <SelectItem key={acudiente.id_acu} value={acudiente.id_acu}>
          {acudiente.nom_acu}
        </SelectItem>
      ))}
    </Select>
  );
}