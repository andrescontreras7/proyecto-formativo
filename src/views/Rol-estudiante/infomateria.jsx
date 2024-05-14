import React from "react";
import { CiEdit } from "react-icons/ci";

const Infomateria = () => {
  return (
    <div className="h-[80vh] overflow-y-scroll ">
      <div className="grid grid-cols-1  grid-rows-6 ">
        <div className="  p-2 ">
          <h1 className=" font-semibold text-gray-700 mb-2">
            Nombre de la materia
          </h1>
          <div className="inline-flex gap-4 max-lg:w-full w-[50%]  items-center">
            <input
              type="text"
              className="border p-3 w-full rounded-md border-black "
              name="name"
              placeholder="matematicas avanzada"
            />
            <button className="inline-flex border p-2 rounded-md bg-slate-200">
              <CiEdit className="w-6 h-6" /> Editar
            </button>
          </div>
        </div>
        <div className="  p-2 ">
          <h1 className=" font-semibold text-gray-700 mb-2">Horario</h1>
          <div className="inline-flex gap-4 max-lg:w-full w-[50%]  items-center">
            <input
              type="text"
              className="border p-3 w-full rounded-md border-black"
              name="name"
              placeholder="Profesora maria rodriguez"
            />
            <button className="inline-flex border p-2 rounded-md bg-slate-200">
              <CiEdit className="w-6 h-6" /> Editar
            </button>
          </div>
        </div>

        <div className="  p-2 ">
          <h1 className=" font-semibold text-gray-700 mb-2">Profesor</h1>
          <div className="inline-flex gap-4 max-lg:w-full w-[50%]  items-center">
            <input
              type="text"
              className="border p-3 w-full rounded-md border-black"
              name="name"
              placeholder="matematicas avanzada"
            />
            <button className="inline-flex border p-2 rounded-md bg-slate-200">
              <CiEdit className="w-6 h-6" /> Editar
            </button>
          </div>
        </div>

        <div className=" row-span-2  p-2 ">
          <h1 className=" font-semibold text-gray-700 mb-2 ">
            Contenido del curso
          </h1>
          <div className="inline-flex h-full gap-4 max-lg:w-full w-[50%]  items-start">
            <input
              type="text"
              className="border p-2 h-[70%]  w-full rounded-md border-black"
              name="name"
              placeholder="Temas actuales"
            />
            <button className="inline-flex border m-a p-2 rounded-md bg-slate-200">
              <CiEdit className="w-6 h-6" /> Editar
            </button>
          </div>
        </div>
        <div className="   p-2 ">
          <h1 className=" font-semibold text-gray-700 mb-2">Horario</h1>
          <div className="inline-flex gap-4 max-lg:w-full w-[60%]  items-center">
            <input
              type="text"
              className="border p-4 w-full rounded-md border-black "
              name="name"
              placeholder="Profesora maria rodriguez"
            />

            <button className="inline-flex border p-2 rounded-md bg-slate-200">
              <CiEdit className="w-6 h-6" /> Editar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infomateria;
