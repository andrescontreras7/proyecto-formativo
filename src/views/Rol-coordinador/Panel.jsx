import React from "react";
import Layout from "../../components/layaout";
import { HiArrowSmallLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Panels = () => {
  return (
    <Layout titulo={"Panel de control"}>
        
        <div className="w-full h-screen grid grid-cols-4 grid-rows-3 max-lg:grid-rows-6 gap-4 p-2 max-2xl:h-[84vh] shadow-[0_8px_10px_15px_rgba(0,0,0,0.08)] justify-center rounded-md">

        <div className="col-span-2 row-span-4 overflow-auto ">
          <div className="p-2 rounded-md ">
            <h2 className="text-xl font-bold text-gray-600 bg-[#626CB8] bg-opacity-40 p-2 uppercase  rounded-lg mb-4">
              Opciones
            </h2>
            <ul className="space-y-3 rounded-lg shadow-md   bg-[#626CB8] bg-opacity-40  p-2  ">
            
            <Link
                to="/RegistrarFuncionario"
                className="flex items-center bg-white duration-300 cursor-pointer border  
                         border-white rounded-lg  hover:bg-[#626cb88e]  hover:border-none "
              >
                <div className="flex gap-2  items-center">
                  <div className=" border cursor-pointer    border-[#626CB8]   p-[5px] rounded-lg  ml-[0.5%] py-[0.5%]  ">
                    <img
                      className="w-11"
                      src="public\RegistarProfesor.png"
                      alt="Docente"
                    />
                  </div>
                  <div>
                    <h1 className="font-medium text-[1.0rem] text-gray-900">
                      {" "}
                      Registrar docente{" "}
                    </h1>
                    <p className="font-normal text-xs text-gray-800">
                      Lorem ipsum dolor sit amet consectetur adipisicing{" "}
                    </p>
                  </div>
                </div>
              </li>

              <li
                className="flex items-center bg-white duration-300 cursor-pointer border  
                         border-white rounded-lg  hover:bg-[#626cb88e]  hover:border-none"
              >
                <div className="flex gap-2   items-center">
                  <div className=" border cursor-pointer    border-[#626CB8]   p-[5px] rounded-lg  ml-[0.5%] py-[0.5%]">
                    <img
                      className="w-11"
                      src="/public/estudiante 1.png"
                      alt="Docente"
                      draggable="false"
                    />
                  </div>
                  <div>
                    <h1 className="font-medium text-[1.0rem] text-gray-900">
                      {" "}
                      Registar alumno{" "}
                    </h1>
                    <p className="font-normal text-xs text-gray-800">
                      Registo del alumnoo
                    </p>
                  </div>
                </div>
              </Link>

              

              <Link
                to="/Listado"
                className="flex items-center bg-white duration-300 cursor-pointer border  
                         border-white rounded-lg  hover:bg-[#626cb88e]  hover:border-none "
              >
                <div className="flex gap-2   items-center">
                  <div className="border cursor-pointer    border-[#626CB8]   p-[5px] rounded-lg  ml-[0.5%] py-[0.7%]  ">
                    <img
                      className="w-11"
                      src="/public/administardocente.png"
                      alt="Docente"
                      draggable="false"
                    />
                  </div>
                  <div>
                    <h1 className="font-medium text-[1.0rem] text-gray-900">
                      {" "}
                      Administrar estudiante{" "}
                    </h1>
                    <p className="font-normal text-xs text-gray-800">
                      Ver Administrar  estudiante
                    </p>
                  </div>
                </div>
              </Link>

              <Link
                to="/Listado"
                className="flex items-center bg-white duration-300 cursor-pointer border  
                         border-white rounded-lg  hover:bg-[#626cb88e]  hover:border-none "
              >
                <div className="flex gap-2  items-center">
                  <div className=" border cursor-pointer    border-[#626CB8]   p-[5px] rounded-lg  ml-[0.5%] py-[0.5%]  ">
                    <img
                      className="w-11"
                      src="public\lista.png"
                      alt="Docente"
                    />
                  </div>
                  <div>
                    <h1 className="font-medium text-[1.0rem] text-gray-900">
                      {" "}
                      Listado de estudiante{" "}
                    </h1>
                    <p className="font-normal text-xs text-gray-800">
                      Listado de todos los estudiante
                    </p>
                  </div>
                </div>
              </Link>

              <Link
                to="/Listadocentes"
                className="flex items-center bg-white duration-300 cursor-pointer border  
                         border-white rounded-lg  hover:bg-[#626cb88e]  hover:border-none "
              >
                <div className="flex gap-2  items-center">
                  <div className=" border cursor-pointer    border-[#626CB8]   p-[5px] rounded-lg  ml-[0.5%] py-[0.5%]  ">
                    <img
                      className="w-11"
                      src="public\instructor.png"
                      alt="Docente"
                    />
                  </div>
                  <div>
                    <h1 className="font-medium text-[1.0rem] text-gray-900">
                      {" "}
                      Listado de docente{" "}
                    </h1>
                    <p className="font-normal text-xs text-gray-800">
                    Listado de los docente
                    </p>
                  </div>
                </div>
              </Link>

              <Link
                to="/Areas"
                className="flex items-center bg-white duration-300 cursor-pointer border  
                         border-white rounded-lg  hover:bg-[#626cb88e]  hover:border-none"
              >
                <div className="flex gap-2   items-center">
                  <div className=" border cursor-pointer    border-[#626CB8]   p-[5px] rounded-lg  ml-[0.5%] py-[0.5%]  ">
                    <img
                      className="w-11"
                      src="/public/areas y asignaturas.png"
                      alt="Docente"
                      draggable="false"
                    />
                  </div>
                  <div>
                    <h1 className="font-medium text-[1.0rem] text-gray-900">
                      {" "}
                      Administrar Areas{""}
                    </h1>
                    <p className="font-normal text-xs text-gray-800">
                      Administrar las areas
                    </p>
                  </div>
                </div>
              </Link>

             

              <Link
                to="/Listado-asignaturas"
                className="flex items-center bg-white duration-300 cursor-pointer border  
                         border-white rounded-lg  hover:bg-[#626cb88e]  hover:border-none"
              >
                <div className="flex gap-2   items-center">
                  <div className="border cursor-pointer    border-[#626CB8]   p-[5px] rounded-lg  ml-[0.5%] py-[0.5%]   ">
                    <img
                      className="w-11"
                      src="/public/registro de asignaturas.png"
                      alt="Docente"
                      draggable="false"
                    />
                  </div>
                  <div>
                    <h1 className="font-medium text-[1.0rem] text-gray-900">
                      Asignaturas Registradas{" "}
                    </h1>
                    <p className="font-normal text-xs text-gray-800">
                     Ver listado de asignaturas en el sistema
                    </p>
                  </div>
                </div>
              </Link>

             
              <Link
                to="/registrar-asignatura"
                className="flex items-center bg-white duration-300 cursor-pointer border  
                         border-white rounded-lg  hover:bg-[#626cb88e]  hover:border-none"
              >
                <div className="flex gap-2   items-center">
                  <div className=" border cursor-pointer    border-[#626CB8]   p-[5px] rounded-lg  ml-[0.5%] py-[0.5%] ">
                    <img
                      className="w-11"
                      src="/public/agregar_asigantura.svg"
                      alt="Docente"
                      draggable="false"
                    />
                  </div>
                  <div>
                    <h1 className="font-medium text-[1.0rem] text-gray-900">
                      {" "}
                      Registrar asignatura{" "}
                    </h1>
                    <p className="font-normal text-xs text-gray-800">
                     Registrar un asignatura
                    </p>
                  </div>
                </div>
              </Link>
              {/* <Link
                to="/"
                className="flex items-center bg-white duration-300 cursor-pointer border  
                         border-white rounded-lg  hover:bg-[#626cb88e]  hover:border-none"
              >
                <div className="flex gap-2   items-center">
                  <div className="border cursor-pointer    border-[#626CB8]   p-[5px] rounded-lg  ml-[0.5%] py-[0.5%] ">
                    <img
                      className="w-11"
                      src="/public/observadores.png"
                      alt="Docente"
                      draggable="false"
                    />
                  </div>
                  <div>
                    <h1 className="font-medium text-[1.0rem] text-gray-900">
                      {" "}
                      Observadores{" "}
                    </h1>
                    <p className="font-normal text-xs text-gray-800">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde q
                    </p>
                  </div>
                </div>
              </Link> */}

              {/* <Link
                to="/informe"
                className="flex items-center bg-white duration-300 cursor-pointer border  
                         border-white rounded-lg  hover:bg-[#626cb88e]  hover:border-none"
              >
                <div className="flex gap-2   items-center">
                  <div className="border cursor-pointer    border-[#626CB8]   p-[5px] rounded-lg  ml-[0.5%] py-[0.5%] ">
                    <img
                      className="w-11"
                      src="/public/file.png"
                      alt="Docente"
                      draggable="false"
                    />
                  </div>
                  <div>
                    <h1 className="font-medium text-[1.0rem] text-gray-900">
                      Informe de observadores{" "}
                    </h1>
                    <p className="font-normal text-xs text-gray-800">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde q
                    </p>
                  </div>
                </div>
              </Link>  */}
            </ul>
          </div>
        </div>
         <div className="col-span-1 max-lg:col-start-3 max-lg:col-end-5 rounded-md    bg-[#e4e2ed]  shadow-md row-span-2">
          <div className="p-4">
            <div>
              <h1>caja 21</h1>
            </div>
          </div>
        </div>
        <div className="col-span-1 bg-[#74b7fa] bg-opacity-15     max-lg:row-start-4 max-lg:col-start-3 max-lg:col-end-5 rounded-md shadow-md row-span-3">
          <div className="p-4">Caja 2</div>
          <div>
            <h1>Desarrolor integral de habilidades</h1>
          </div>
        </div>
        <div className="col-start-3 shadow-md bg-[#e4e2ed]  row-auto max-lg:col-start-3 max-lg:col-end-5 rounded-md overflow-auto">
          <div className="p-4 rounded-lg">Caja 2</div>
        </div> 
      </div>
      

    </Layout>
  );
};

export default Panels;
