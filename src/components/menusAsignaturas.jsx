import React, { useState, useContext } from "react";
import { Modal, ModalContent, ModalHeader, ModalFooter, Button, useDisclosure, ModalBody } from "@nextui-org/react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { deleteAsignatura } from "../endpoints/useDelete";
import { counterContext } from "../../context/CRMcontext";
import { Toaster, toast } from "react-hot-toast";

export default function AsignaturaComponent({ objeto, id }) {
  const { auth } = useContext(counterContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isConfirming, setIsConfirming] = useState(false);
  const [all, setAll] = useState(false);
  const [warning, setWarning] = useState("");

  const handleOpen = () => {
    onOpen();
  };

  const viewAll = () => {
    setAll(true);
  };

  const hanledEdits = () => {};

  const handleDelete = () => {
    if (isConfirming) {
      deleteAsignatura(auth, id)
        .then((data) => {
          console.log(data);
          onClose();
          setAll(false);

          toast.success("Se cambio el estado correctamente", {
            duration: 2000,
            position: "top-right",
          });
        })
        .catch((error) => {
          // Muestra el mensaje de error en un toast
          toast.error(error.message || "Ocurrió un error al cambiar el estado", {
            duration: 2000,
            position: "top-right",
          });
        });
    } else {
      setIsConfirming(true);
      setWarning("¿Estás seguro de que deseas cambiar el estado de la asignatura?");
    }
  };

  const handleCancel = () => {
    setIsConfirming(false);
    setWarning("");
  };

  const handleConfirm = () => {
    setIsConfirming(true);
    handleDelete();
  };

  const handleModalClose = () => {
    setAll(false); // Restablece el estado de all a false cuando se cierra el modal
    onClose(); // Cierra el modal
  };

  return (
    <>
      <div className="flex flex-wrap ">
        <Button color="" onPress={() => handleOpen()} className=" ">
          <div>
            <BiDotsVerticalRounded className=" size-6" />
          </div>
        </Button>
      </div>
      <Modal backdrop="blur" className=" " isOpen={isOpen} onClose={handleModalClose}>
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1 uppercase text-indigo-900 border-b-1"> </ModalHeader>
            <ModalBody>
              {all ? (
                <div>
                  <ul>
                    <li>{objeto.asignombre}</li>
                    {/* Mostrar más detalles aquí */}
                  </ul>
                </div>
              ) : (
                <ol className="p-2 flex flex-col gap-4 font-semibold uppercase">
                  <li onClick={viewAll}>
                    <button>INFORMACION</button>
                  </li>
                  <li className="">
                    <button>EDITAR</button>
                  </li>
                  <li onClick={handleDelete} className="">
                    <button>CAMBIAR ESTADO</button>
                  </li>
                </ol>
              )}
            </ModalBody>
            <ModalFooter>
              {isConfirming ? (
                <>
                  <Button color="default" onPress={handleCancel}>
                    Cancelar
                  </Button>
                  <Button color="danger" onPress={handleConfirm}>
                    Confirmar cambio de estado
                  </Button>
                </>
              ) : (
                <>
                  <Button color="danger" variant="light" onPress={handleModalClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={handleModalClose}>
                    Action
                  </Button>
                </>
              )}
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </>
  );
}
