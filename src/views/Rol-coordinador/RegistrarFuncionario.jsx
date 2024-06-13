import React from "react";
import Layout from "../../components/layaout";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { counterContext } from "../../../context/CRMcontext";
import { createFuncionario } from "../../endpoints/useCreate";
import { Toaster, toast } from "react-hot-toast";

export default function RegistrarFuncionario() {
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
  const { auth } = useContext(counterContext);

  const onSubmit = async (data) => {
    data.funcrol = "docente"; // Asignamos el valor "docente" al campo funcrol
    data.rolFK = 2; // Asignamos el valor numérico 2 al campo rolFK

    console.log("Formulario enviado con los siguientes datos:", data);
    const result = await createFuncionario(auth, data);
    if (result && result.data && result.data.success) {
      toast.success(result.message);
      reset(); // Reseteamos el formulario después de enviarlo con éxito
    } else {
      toast.error(result.message);
    }
  };
  
  return (
    <Layout titulo={"Registrar docente"}>
      <div className="bg-white shadow-md w-full h-[85vh] 2xl:h-[87vh] flex justify-center rounded-md">
        <form onSubmit={handleSubmit(onSubmit)} className="w-3/4 space-y-8 mt-10">
          <h2 className="text-2xl font-semibold text-center">Registrar docente</h2>
          <Toaster
            position="top-right"
            reverseOrder={true}
            autoClose={5000}
            toastOptions={{
              style: {
                margin: "10px 20px",
                transition: "all 0.2s ease-in-out",
              },
            }}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700" htmlFor="funcnombre">Nombre del funcionario</label>
              <input
                id="funcnombre"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Nombre del funcionario"
                {...register("funcnombre", {
                  required: "El campo nombre es requerido",
                  minLength: { value: 2, message: "El nombre debe ser mayor a dos caracteres" },
                  maxLength: { value: 20, message: "El nombre debe ser menor a 20 caracteres" },
                })}
              />
              {errors.funcnombre && <p className="text-red-500 mt-1">{errors.funcnombre.message}</p>}
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700" htmlFor="funcapellido">Apellido del funcionario</label>
              <input
                id="funcapellido"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Apellido del funcionario"
                {...register("funcapellido", {
                  required: "El campo apellido es requerido",
                  minLength: { value: 2, message: "El apellido debe ser mayor a dos caracteres" },
                  maxLength: { value: 20, message: "El apellido debe ser menor a 20 caracteres" },
                })}
              />
              {errors.funcapellido && <p className="text-red-500 mt-1">{errors.funcapellido.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700" htmlFor="funcid">Cédula</label>
              <input
                id="funcid"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="number"
                placeholder="Cédula"
                {...register("funcid", {
                  required: "El campo cédula es requerido",
                  pattern: { value: /^[0-9]*$/, message: "La cédula no es válida" },
                })}
              />
              {errors.funcid && <p className="text-red-500 mt-1">{errors.funcid.message}</p>}
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700" htmlFor="funccorreo">Correo</label>
              <input
                id="funccorreo"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                placeholder="Correo"
                {...register("funccorreo", {
                  required: "El campo correo es requerido",
                  pattern: { value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, message: "El correo no es válido" },
                })}
              />
              {errors.funccorreo && <p className="text-red-500 mt-1">{errors.funccorreo.message}</p>}
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700" htmlFor="telefono">Teléfono</label>
              <input
                id="telefono"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="number"
                placeholder="Teléfono"
                {...register("telefono", {
                  valueAsNumber: true,
                  min: { value: 666666, message: "El número debe ser mayor a 6 dígitos" },
                })}
              />
              {errors.telefono && <p className="text-red-500 mt-1">{errors.telefono.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700" htmlFor="passwordFuncionario">Contraseña</label>
              <input
                id="passwordFuncionario"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="password"
                placeholder="Contraseña"
                {...register("passwordFuncionario", {
                  required: "El campo contraseña es requerido",
                  minLength: { value: 5, message: "La contraseña debe tener al menos 5 caracteres" },
                })}
              />
              {errors.passwordFuncionario && <p className="text-red-500 mt-1">{errors.passwordFuncionario.message}</p>}
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700" htmlFor="confirmar">Confirmar contraseña</label>
              <input
                id="confirmar"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="password"
                placeholder="Confirmar contraseña"
                {...register("confirmar", {
                  required: "El campo confirmar contraseña es requerido",
                  validate: (value) => value === watch("passwordFuncionario") || "Las contraseñas no coinciden",
                })}
              />
              {errors.confirmar && <p className="text-red-500 mt-1">{errors.confirmar.message}</p>}
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700" htmlFor="rolFK">Rol</label>
              <select
                id="rolFK"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("rolFK", {
                  required: "El campo rol es requerido",
                })}
                defaultValue="2" // Fija el valor por defecto a "2"
              >
                <option value="2">Docente</option>
              </select>
              {errors.rolFK && <p className="text-red-500 mt-1">{errors.rolFK.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700" htmlFor="jefe_areaFK">Jefe de área</label>
              <input
                id="jefe_areaFK"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="number"
                placeholder="Jefe de área"
                {...register("jefe_areaFK", {
                  required: "El campo jefe de área es requerido",
                  pattern: { value: /^[0-9]*$/, message: "El campo jefe de área no es válido" },
                })}
              />
              {errors.jefe_areaFK && <p className="text-red-500 mt-1">{errors.jefe_areaFK.message}</p>}
            </div>
          </div>

          <input
            className="w-full p-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
            type="submit"
            value="Agregar docente"
          />
        </form>
      </div>
    </Layout>
  );
}
