import React, {useState, useEffect, useContext} from "react";
import { CiEdit } from "react-icons/ci";
import {counterContext} from "../../../context/CRMcontext"
import { getEstudiantesAsignatura} from "../../endpoints/useGet";
import { useParams } from 'react-router-dom';

const Infomateria = () => {
  const {auth} = useContext(counterContext)
  const [estudiantes, setEstudiantes] = useState([""])

  const {id} = useParams()


  
  
  useEffect(() => {
    getEstudiantesAsignatura(auth, id).then((data) => {
      setEstudiantes(data.data);
     
      console.log(data.data);
     
    });
  }, [auth]);





  return (
    <div className="h-[80vh] overflow-y-scroll">
      <div className="grid grid-cols-1 grid-rows-6">
        <div className="p-2 ml-4">
          <h1 className="font-semibold text-gray-700 mb-2">
            Nombre de la materia
          </h1>
          <div className="inline-flex gap-4 max-lg:w-full w-[50%] items-center">
            <input
              type="text"
              className="border p-3 w-full rounded-md border-black"
              name="name"
              placeholder="Matemáticas avanzadas"
              value={estudiantes.asignombre}
            />
            <button className="inline-flex border p-2 rounded-md bg-slate-200 hover:bg-slate-300 transition duration-200">
              <CiEdit className="w-6 h-6" /> Editar
            </button>
          </div>
        </div>
        <div className="p-2 ml-4">
          <h1 className="font-semibold text-gray-700 mb-2">Horario    </h1>
          <div className="inline-flex gap-4 max-lg:w-full w-[50%] items-center">
            <input
              type="text"
              className="border p-3 w-full rounded-md border-black"
              name="name"
              placeholder="Profesora María Rodríguez"
            />
            <button className="inline-flex border p-2 rounded-md bg-slate-200 hover:bg-slate-300 transition duration-200">
              <CiEdit className="w-6 h-6" /> Editar
            </button>
          </div>
        </div>

        <div className="p-2 ml-4">
          <h1 className="font-semibold text-gray-700 mb-2">Profesor</h1>
          <div className="inline-flex gap-4 max-lg:w-full w-[50%] items-center">
            <input
              type="text"
              className="border p-3 w-full rounded-md border-black"
              name="name"
              placeholder="Matemáticas avanzadas"
            />
            <button className="inline-flex border p-2 rounded-md bg-slate-200 hover:bg-slate-300 transition duration-200">
              <CiEdit className="w-6 h-6" /> Editar
            </button>
          </div>
        </div>

        <div className="row-span-2 p-2 ml-4">
          <h1 className="font-semibold text-gray-700 mb-2">
            Contenido del curso
          </h1>
          <div className="inline-flex h-full gap-4 max-lg:w-full w-[50%] items-start">
            <textarea
              className="border p-2 h-[70%] w-full rounded-md border-black"
              name="content"
              placeholder="Temas actuales de matemáticas avanzadas"
            ></textarea>
            <button className="inline-flex border m-a p-2 rounded-md bg-slate-200 hover:bg-slate-300 transition duration-200">
              <CiEdit className="w-6 h-6" /> Editar
            </button>
          </div>
        </div>
        <div className="p-2 ml-4">
          <h1 className="font-semibold text-gray-700 mb-2">Horario</h1>
          <div className="inline-flex gap-4 max-lg:w-full w-[60%] items-center">
            <input
              type="text"
              className="border p-4 w-full rounded-md border-black"
              name="schedule"
              placeholder="Profesora María Rodríguez"
            />

            <button className="inline-flex border p-2 rounded-md bg-slate-200 hover:bg-slate-300 transition duration-200">
              <CiEdit className="w-6 h-6" /> Editar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infomateria;