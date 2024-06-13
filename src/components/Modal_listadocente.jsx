import React, { useState, useContext } from "react";
import { Modal, ModalContent, ModalHeader, ModalFooter, Button, useDisclosure, ModalBody, Input } from "@nextui-org/react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { deleteFuncionario } from "../endpoints/useDelete";
import { updateFuncionario } from "../endpoints/useEditar";
import { counterContext } from "../../context/CRMcontext";
import { Toaster, toast } from "react-hot-toast";

export default function App({ objeto, id }) {
  const { auth } = useContext(counterContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isConfirming, setIsConfirming] = useState(false);
  const [all, setAll] = useState(false);
  const [warning, setWarning] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...objeto });

  const handleOpen = () => {
    onOpen();
  };

  const viewAll = () => {
    setAll(true);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEditSave = () => {
    updateFuncionario(auth, id, formData)
      .then((data) => {
        console.log(data);
        setIsEditing(false);
        toast.success("El funcionario ha sido actualizado correctamente", {
          duration: 2000,
          position: "top-right",
        });
      })
      .catch((error) => {
        toast.error(error.message || "Ocurrió un error al actualizar el funcionario", {
          duration: 2000,
          position: "top-right",
        });
      });
  };

  const handleDelete = () => {
    if (isConfirming) {
      deleteFuncionario(auth, id)
        .then((data) => {
          console.log(data);
          onClose();
          setAll(false);
          toast.success("El funcionario ha sido eliminado correctamente", {
            duration: 2000,
            position: "top-right",
          });
        })
        .catch((error) => {
          toast.error(error.message || "Ocurrió un error al eliminar el funcionario", {
            duration: 2000,
            position: "top-right",
          });
        });
    } else {
      setIsConfirming(true);
      setWarning("¿Estás seguro de que deseas eliminar este funcionario?");
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
    setAll(false);
    setIsEditing(false);
    onClose();
  };

  return (
    <>
      <Toaster />
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
            <ModalHeader className="flex flex-col gap-1 uppercase text-indigo-900 border-b-1">
              {isEditing ? "Editar Funcionario" : objeto.funcnombre}
            </ModalHeader>
            <ModalBody>
              {isEditing ? (
                <div>
                  <div className="mb-4">
                    <Input
                      name="funcnombre"
                      label="Nombre"
                      value={formData.funcnombre}
                      onChange={handleEditChange}
                    />
                  </div>
                  <Input
                    name="funcapellido"
                    label="Apellido"
                    value={formData.funcapellido}
                    onChange={handleEditChange}
                  />
                </div>
              ) : all ? (
                <div>
                  <ul>
                    <li>{objeto.funcnombre}</li>
                  </ul>
                </div>
              ) : (
                <ol className="p-2 flex flex-col gap-4 font-semibold uppercase">
                  <li onClick={viewAll}>
                    <button>INFORMACION</button>
                  </li>
                  <li className="">
                    <button onClick={handleEdit}>EDITAR</button>
                  </li>
                  <li onClick={handleDelete} className="">
                    <button>ELIMINAR FUNCIONARIO</button>
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
                    Confirmar eliminación
                  </Button>
                </>
              ) : isEditing ? (
                <>
                  <Button color="default" onPress={() => setIsEditing(false)}>
                    Cancelar
                  </Button>
                  <Button color="primary" onPress={handleEditSave}>
                    Guardar
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
