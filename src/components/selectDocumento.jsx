import React, { useState, useEffect } from "react";
import { Select, SelectItem } from "@nextui-org/react";

export default function App({  }) {
 
 
  return (
    <Select
    label={"tipo de documento"}
    placeholder={"tipo"}
   
    
    >
     
        <SelectItem >
          <option value="">Cedula de ciudadania</option>
        </SelectItem>
        <SelectItem >
          <option value="1">Cedula de ciudadania</option>
        </SelectItem>
        <SelectItem  >
          <option value="1">Tarjeta de identidad</option>
        </SelectItem>

    </Select>
  );
}