import React from "react";
import Layout from "../../components/layaout";
import Select from "../../components/seletct";
import { useState, useContext } from "react";
import SelectGrupo from "../../components/selectGrupo";
import SelectRol from "../../components/selectRol";
import { useForm } from "react-hook-form";
import SelectDocumento from "../../components/selectDocumento";
import { counterContext } from "../../../context/CRMcontext";
import Selecs from "../../components/select_acudiente";
import { createEstudiante } from "../../endpoints/useCreate";
import { Toaster, toast } from "react-hot-toast";
export default function RegistrarAlumno() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const [mensaje, setMessage] = useState("");

  const { auth } = useContext(counterContext);

  const onSubmit = async (data) => {
    const result = await createEstudiante(data, auth);
    if (result.data.sucess) {
      toast.success(result.message);
      reset();
    } else {
      toast.error(result.message);
    }
  };

  return (
    <Layout titulo={"Registro de alumno"}>
      <div className="bg-[#ffffff] shadow-[0_8px_20px_12px_rgba(0,0,0,0.08)] w-full h-[85vh] 2xl:h-[87vh] flex justify-center rounded-md">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-3/4 space-y-8 mt-10"
        >
          <h2 className="text-2xl font-semibold text-center">
            Registrar alumno
          </h2>
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
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <input
                className="w-full p-2 border border-gray-300 rounded-md"
                type="text"
                placeholder="Nombre del estudiante"
                {...register("estudnombre", {
                  required: {
                    value: true,
                    message: "El campo nombre es requerido",
                  },
                  minLength: {
                    value: 2,
                    message: "El nombre debe ser mayor a dos caracteres",
                  },
                  maxLength: {
                    value: 20,
                    message: "El nombre debe ser menor a 20 caracteres",
                  },
                })}
              />

              {errors.estudnombre && (
                <p className="text-red-500">{errors.estudnombre.message}</p>
              )}
            </div>
            <div className="flex flex-col">
              <input
                className="w-full p-2 border border-gray-300 rounded-md"
                type="text"
                placeholder="Apellido del estudiante"
                {...register("estudapellido", {
                  required: {
                    value: true,
                    message: "El campo apellido es requerido",
                  },
                  minLength: {
                    value: 2,
                    message: "El apellido debe ser mayor a dos caracteres",
                  },
                  maxLength: {
                    value: 20,
                    message: "El apellido debe ser menor a 20 caracteres",
                  },
                })}
              />
              {errors.estudapellido && (
                <p className="text-red-500">{errors.estudapellido.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col">
              <input
                className="w-full p-2 border border-gray-300 rounded-md"
                type="number"
                placeholder="cedula"
                {...register("estudid", {
                  required: {
                    value: true,
                    message: "El campo cedula es requerido",
                  },
                  pattern: {
                    value: /^[0-9]*$/,
                    message: "La cedula no es valida",
                  },
                })}
              />
              {errors.estudid && (
                <p className="text-red-500">{errors.estudid.message}</p>
              )}
            </div>

            <div className="flex flex-col">
              <input
                className="w-full p-2 border border-gray-300 rounded-md"
                type="text"
                placeholder="Correo"
                {...register("estudcorreo", {
                  required: {
                    value: true,
                    message: "El campo Correo es requerido",
                  },
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "El correo no es valido",
                  },
                })}
              />
              {errors.estudcorreo && (
                <p className="text-red-500">{errors.estudcorreo.message}</p>
              )}
            </div>
            <div className="flex flex-col">
              <input
                className="w-full p-2 border border-gray-300 rounded-md"
                type="number"
                placeholder="Número"
                {...register("estudtelefono", {
                  valueAsNumber: true,
                  min: {
                    value: 666666,
                    message: "El número debe ser mayor a 6 dígitos",
                  },
                })}
              />
              {errors.estudtelefono && (
                <p className="text-red-500 font-bold ">
                  {errors.estudtelefono.message}
                </p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col">
              <input
                className="w-full p-2 border border-gray-300 rounded-md"
                type="password"
                placeholder="Contraseña"
                {...register("password", {
                  required: {
                    value: true,
                    message: "El campo contraseña es requerido",
                  },
                  minLength: {
                    value: 5,
                    message: "La contraseña debe tener al menos 5 caracteres",
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>
            <div className="flex flex-col">
              <input
                className="w-full p-2 border border-gray-300 rounded-md"
                type="text"
                placeholder="direccion"
                {...register("estuddireccion", {
                  required: {
                    value: true,
                    message: "El campo direccion es requerido",
                  },
                  minLength: {
                    value: 5,
                    message: "La direccion debe tener al menos 5 caracteres",
                  },
                })}
              />
              {errors.estuddireccion && (
                <p className="text-red-500">{errors.estuddireccion.message}</p>
              )}
            </div>
            <div className="flex flex-col">
              <input
                className="w-full p-2 border border-gray-300 rounded-md"
                type="password"
                placeholder="Confirmar contraseña"
                {...register("Confirmar", {
                  required: {
                    value: true,
                    message: "El campo confirmar contraseña es requerido",
                  },
                  validate: (value) =>
                    value === watch("password") ||
                    "Las contraseñas no coinciden",
                })}
              />
              {errors.Confirmar && (
                <p className="text-red-500">{errors.Confirmar.message}</p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Selecs register={register} des={"Selecione el acudiente"} />
            <Select
              register={register}
              des={"Selecione el grado"}
              name="grado"
            />
            <SelectGrupo
              register={register}
              des={"Seleccione el grupo"}
              name="grupoFK"
            />
          </div>
          <input
            className="w-full p-2 bg-indigo-500 text-white rounded-md"
            type="submit"
            value="Agregar estudiante"
          />
        </form>
      </div>
    </Layout>
  );
}
