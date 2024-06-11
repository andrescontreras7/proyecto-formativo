import React, { useState, useContext } from "react";
import { counterContext } from "../../../context/CRMcontext";
import { crearAsistencia } from "../../endpoints/useCreate";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { BsCheck2Square } from "react-icons/bs";
import ExcusaForm from "../../views/Rol-docente/excusaForm";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Button,
  useDisclosure,
  ModalBody,
} from "@nextui-org/react";

export default function App({ objeto, id, asig, grupo }) {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [asistencia, setAsistencia] = useState(null);
  const [fecha, setFecha] = useState(new Date());

  const { auth } = useContext(counterContext);

  const handleOpen = () => {
    onOpen();
  };

  const handleAsistenciaChange = (event) => {
    setAsistencia(event.target.value);
  };

  const handleSave = async () => {
    try {
      const datas = {
        fec_asi: fecha.toISOString(),
        det_asi: asistencia === "Presente" ? 1 : 0,
        grupoFK: parseInt(grupo),
        asigFk: asig,
        estudidfk: parseInt(id),
        claseFK: 2,
      };
      const res = await crearAsistencia(auth, datas);
      toast.success("Asistencia registrada");
      const asistenciaID = res.data.cod_asi

     

      if (asistencia === "Ausente") {
        const confirmExcusa = window.confirm(
          "¿Desea agregar una excusa para esta ausencia?"
        );
        
        if (confirmExcusa) {
            navigate(`/excusaForm?asistenciaID=${asistenciaID}&id=${id}`);
        } else {
          onClose();
        }
      } else {
        onClose();
      }
    } catch (error) {
      console.error("Error al registrar la asistencia:", error);
      toast.error("Error al registrar la asistencia");
    }
  };

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <Button color="" onPress={() => handleOpen()} className=" p-0 m-0  ">
          <div><BsCheck2Square className="size-6" /></div>
        </Button>
      </div>
      <Modal backdrop="blur" className=" " isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1 uppercase text-indigo-900 border-b-1">
              Captura de asistencias
              <span className="text-purple-800 text-sm">
                {objeto.estudnombre}
              </span>
            </ModalHeader>
            <div className="text-sm text-indigo-800 m-2 font-bold text-center">
              Fecha:{" "}
              {fecha.toLocaleDateString("es-ES", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>

            <ModalBody>
              <ol className="p-2 flex flex-col gap-4 font-semibold uppercase">
                <li className="">
                  <label>
                    <input
                      type="checkbox"
                      value="Presente"
                      checked={asistencia === "Presente"}
                      onChange={handleAsistenciaChange}
                    />
                    Presente
                  </label>
                </li>
                <li className="">
                  <label>
                    <input
                      type="checkbox"
                      value="Ausente"
                      checked={asistencia === "Ausente"}
                      onChange={handleAsistenciaChange}
                    />
                    Ausente
                  </label>
                </li>
              </ol>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={handleSave}>
                Guardar
              </Button>
            </ModalFooter>
          </>
        </ModalContent>
      
      </Modal>
     
    </>
  );
}
