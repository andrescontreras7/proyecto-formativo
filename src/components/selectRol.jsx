import React, { useState, useEffect,useContext } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { getAreas } from "../endpoints/useGet";
import { counterContext } from "../../context/CRMcontext";

export default function App({ name,register, des }) {

  const { auth } = useContext(counterContext);
  const [area, setAreas] = useState([]);
  useEffect(() => {
    getAreas(auth).then((data) => {
      setAreas(data.data);
     
    });
  }, [auth]);
  return (
    <Select
    label={"areas"}
    placeholder={des}
   
    {...register(name)}
    >
      {area.map((areas, index) => (
       
        <SelectItem key={areas.cod_area} value={areas.cod_area}>
          {areas.are_nombre}
        </SelectItem>
      ))}
    </Select>
  );
}