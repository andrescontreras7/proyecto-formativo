import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

export default function ModalTemas() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} color="secondary">Agregar</Button>
      <Modal 
        backdrop="opaque" 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        radius="lg"
        classNames={{
          body: "py-6",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          base: "border-[#292f46] bg-[#F5F5DC] dark:bg-[#F5F5DC] text-[#a8b0d3]", // Cambiado el color de fondo a beige
          header: "border-b-[1px] border-[#292f46]",
          footer: "border-t-[1px] border-[#292f46]",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-gray-800 font-bold text-2xl">Crear elementos </ModalHeader>
              <ModalBody>
               <ul className="flex flex-col gap-6">
                <li className="text-gray-600 transition-all duration-200 cursor-pointer hover:border-l-2 border-indigo-300 p-2 font-semibold text-xl">
                    Carpetas
                </li>
                <li className="text-gray-600 transition-all duration-200 cursor-pointer hover:border-l-2 border-indigo-300 p-2 font-semibold text-xl">
                    documentos
                </li>
                <li className="text-gray-600 transition-all duration-200 cursor-pointer hover:border-l-2 border-indigo-300 p-2 font-semibold text-xl">
                    Enlace
                </li>
               </ul>
              </ModalBody>
              <ModalFooter>
                <Button color="foreground" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button className="bg-[#6f4ef2] shadow-lg shadow-indigo-500/20" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}