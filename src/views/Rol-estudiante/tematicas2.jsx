import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { BsFileEarmarkArrowDown } from "react-icons/bs";
import { IoFolderOpenOutline, IoTrashOutline, IoCreateOutline } from "react-icons/io5";
import ModalTemas from "../../components/modal_tematicas";
import { IoAdd } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from 'react';
import { counterContext } from "../../../context/CRMcontext";

import { getTematicasGrupo } from '../../endpoints/useGet';
import { jwtDecode } from "jwt-decode";

export default function App() {
  const { id, grupcod } = useParams();
  const {auth } = useContext(counterContext);
  const decodedTokens = jwtDecode(auth.token)
  const [tematicas, setTematicas] = useState([]);

  useEffect(() => {
    getTematicasGrupo(auth,id, decodedTokens.id,grupcod, ).then((data) => {
      setTematicas(data);
    
      })
  },[auth])

  const handleEdit = (tematica) => {
 
  }

  const handleDelete = (tematica) => {

  }

  return (
    <div className="bg-white w-full h-full 2xl:h-[82vh] p-4">
      <div className="bg-white p-4 h-[96%] shadow-md border rounded-md overflow-auto m-2">
        <div className="h-full p-2 rounded">
          <Link to={`/registrar-temas/${id}`} className="border p-2 rounded-md mb-4 inline-flex items-center">
            <IoAdd className="mr-2" /> Agregar Tematicas 
          </Link>
          <Accordion selectionMode="multiple">
            {
              tematicas.map((temati) => (
                <AccordionItem key={temati.temacod} aria-label={temati.temacod} className="" title={temati.tematica.titulo}>
                  <p>{temati.tematica.descripcion}</p>
                  <div className="mt-4">
                    <button onClick={() => handleEdit(temati)} className="border p-2 rounded-md mr-2 inline-flex items-center">
                      <IoCreateOutline className="mr-2" /> Editar
                    </button>
                    <button onClick={() => handleDelete(temati)} className="border p-2 rounded-md inline-flex items-center">
                      <IoTrashOutline className="mr-2" /> Eliminar
                    </button>
                  </div>
                </AccordionItem>
              ))
            }
          </Accordion>
        </div>
      </div>
    </div>
  );
}