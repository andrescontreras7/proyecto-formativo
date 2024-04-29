import React from "react";
import {Autocomplete, AutocompleteItem, AutocompleteSection} from "@nextui-org/react";

export default function Input() {
    const customStyles = {
        // Personaliza los colores aquí
        backgroundColor: "red",
        borderRadius: "120px",
        color: "white",
        // ...
    };
  return (

    
    <Autocomplete 
    
   
      label="Grado"
      placeholder="Selecione un grado"
      className=" "
      
    >
      <AutocompleteSection   showDivider title="Mammals">
        <AutocompleteItem key="Lion">9A</AutocompleteItem>
        <AutocompleteItem key="Tiger">Tiger</AutocompleteItem>
        <AutocompleteItem key="Elephant">Elephant</AutocompleteItem>
        <AutocompleteItem key="Kangaroo">Kangaroo</AutocompleteItem>
        <AutocompleteItem key="Panda">Panda</AutocompleteItem>
        <AutocompleteItem key="Giraffe">Giraffe</AutocompleteItem>
        <AutocompleteItem key="Zebra">Zebra</AutocompleteItem>
        <AutocompleteItem key="Cheetah">Cheetah</AutocompleteItem>
      </AutocompleteSection>
      <AutocompleteSection title="Birds">
        <AutocompleteItem key="Eagle">Eagle</AutocompleteItem>
        <AutocompleteItem key="Parrot">Parrot</AutocompleteItem>
        <AutocompleteItem key="Penguin">Penguin</AutocompleteItem>
        <AutocompleteItem key="Ostrich">Ostrich</AutocompleteItem>
        <AutocompleteItem key="Peacock">Peacock</AutocompleteItem>
        <AutocompleteItem key="Swan">Swan</AutocompleteItem>
        <AutocompleteItem key="Falcon">Falcon</AutocompleteItem>
        <AutocompleteItem key="Flamingo">Flamingo</AutocompleteItem>
      </AutocompleteSection>
    </Autocomplete>
  );
}

