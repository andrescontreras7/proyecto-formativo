import React from 'react';
import { GoArrowLeft } from "react-icons/go";
import { Link } from 'react-router-dom';


const Registrardocente = () => {
  return (
    <div className="bg-sky-200 flex flex-col justify-center items-center px-16 py-12 max-md:px-5">
      <div className="flex w-full max-w-[1182px] flex-col items-stretch mt-2 mb-6 max-md:max-w-full">
        <div className="flex items-stretch justify-between gap-2.5 max-md:max-w-full max-md:flex-wrap">
        <Link to="/Panel">

          <button class="bg-violet-500 bg-opacity-30 flex basis-[0%] flex-col justify-center items-center px-7 py-2 rounded-3xl transition-transform transform motion-reduce:transition-none motion-reduce:transform-none hover:translate-y-1">
            <GoArrowLeft class="text-black" fontSize={35} />
          </button>
          </Link>


          <div className="justify-center text-black text-center text-xl font-semibold whitespace-nowrap bg-violet-500 bg-opacity-30 grow pl-5 pr-16 py-5 rounded-3xl items-start max-md:max-w-full max-md:pr-5">
            Registrar usuarios
          </div>
        </div>
        <div className="shadow-2xl bg-sky-200 flex flex-col justify-center items-center mt-6 px-16 py-12 rounded-3xl max-md:max-w-full max-md:px-5">
          <div className="flex items-center justify-between gap-5 mb-6 max-md:max-w-full max-md:flex-wrap">
            <div className="self-stretch flex grow basis-[0%] flex-col items-stretch max-md:max-w-full">
              <div className="flex justify-between gap-2.5 items-start max-md:max-w-full max-md:flex-wrap">
                <div className="flex grow basis-[0%] flex-col items-stretch">
                  <div className="text-zinc-900 text-2xl font-semibold">
                    Nombres
                  </div>
                  <div class="relative mt-3.5 max-md:pr-5">
                    <input
                      type="text"
                      placeholder="Nombres"
                      class="w-full px-4 py-5 rounded-md border border-zinc-500 focus:outline-none focus:border-blue-500 transition-all duration-300"
                    />
                  </div>

                </div>
                <div className="self-stretch flex grow basis-[0%] flex-col items-stretch">
                  <div className="text-zinc-900 text-2xl font-semibold">
                    apellidos
                  </div>
                  <div class="relative mt-3.5 max-md:pr-5">
                    <input
                      type="text"
                      placeholder="Apellidos"
                      class="w-full px-5 py-5 rounded-md border border-zinc-500 focus:outline-none focus:border-blue-500 transition-all duration-300"
                    />
                  </div>

                </div>
              </div>
              <div className="text-zinc-900 text-2xl font-semibold mt-3 max-md:max-w-full">
                Correo
              </div>
              <div class="relative mt-3.5 max-md:pr-5">
                <input
                  type="text"
                  placeholder="Correo electrónico"
                  class="w-full px-4 py-5 rounded-md border border-zinc-500 focus:outline-none focus:border-blue-500 transition-all duration-300"
                />
              </div>

              <div className="text-zinc-900 text-2xl font-semibold mt-3.5 max-md:max-w-full">
                Direccion
                <div class="relative mt-3.5 max-md:pr-5">
                  <input
                    type="text"
                    placeholder="Direccion"
                    class="w-full px-4 py-5 text-base font-normal rounded-md border border-zinc-500 focus:outline-none focus:border-blue-500 transition-all duration-300 placeholder-opacity-50"
                  />
                </div>
              </div>

              <div className="text-zinc-900 text-2xl font-semibold mt-4 max-md:max-w-full">
                Numero de celular
                <div class="relative mt-3.5 max-md:pr-5">
                  <input
                    type="text"
                    placeholder="Numero celular"
                    class="w-full px-4 py-5 text-base font-normal rounded-md border border-zinc-500 focus:outline-none focus:border-blue-500 transition-all duration-300 placeholder-opacity-50"
                  />
                </div>
              </div>

              <div className="mt-2.5 max-md:max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[48%] max-md:w-full max-md:ml-0">
                    <div className="flex grow flex-col items-stretch max-md:mt-7">
                      <div className="text-zinc-900 text-2xl font-semibold">
                        Tipo documento
                      </div>
                      <div className="bg-white flex items-center justify-between gap-5 mt-1.5 pl-4 pr-9 py-3 rounded-md border-2 border-solid border-zinc-500 max-md:pr-5">
                        <div className="text-zinc-500 text-2xl font-medium">
                          <label htmlFor="eleccion" className="sr-only">
                            Tipo de documento
                          </label>
                          <select
                            id="eleccion"
                            name="eleccion"
                            className="w-full h-full px-2 text-zinc-900 text-base font-normal bg-transparent border-none outline-none focus:border-blue-500"
                          >
                            <option value="opcion1">Cedula</option>
                            <option value="opcion2">Tarjeta identidad</option>
                          </select>
                        </div>
                      </div>


                      <div className="text-black text-2xl font-semibold mt-5">
                        Usuario
                      </div>
                      <div className="bg-white flex shrink-0 h-14 flex-col mt-3 rounded-lg border-2 border-solid border-zinc-500">
                        <input
                          type="text"
                          placeholder="Usuario"
                          className="w-full h-full px-4 py-2 rounded-lg border-none outline-none focus:border-blue-500"
                        />
                      </div>
                      <div className="text-black text-2xl font-semibold mt-2.5">
                        Contraseña
                      </div>
                      <div className="bg-white flex shrink-0 h-14 flex-col mt-4 rounded-lg border-2 border-solid border-zinc-500">
                        <input
                          type="text"
                          placeholder="Contraseña"
                          className="w-full h-full px-4 py-2 rounded-lg border-none outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch w-[52%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="flex grow flex-col max-md:mt-7">
                      <div className="text-black text-2xl font-semibold ml-7 self-start max-md:ml-2.5">
                        Rol
                      </div>
                      <div className="bg-white self-stretch flex justify-between gap-5 mt-1 pl-3.5 pr-16 py-2 rounded-lg border-2 border-solid border-zinc-500 items-start max-md:pr-5">
                        <div className="text-zinc-500 mt-2.5 text-2xl font-medium">
                          <label htmlFor="tipoUsuario" className="sr-only">
                            Tipo de usuario
                          </label>
                          <select
                            id="tipoUsuario"
                            name="tipoUsuario"
                            className="w-full h-full px-2 text-zinc-900 text-base font-normal bg-transparent border-none outline-none focus:border-blue-500"
                          >
                            <option value="opcion1">Docente</option>
                            <option value="opcion2">Estudiante</option>
                          </select>
                        </div>
                      </div>

                      <div className="self-stretch flex items-stretch justify-between gap-5 mt-16 max-md:mt-10">
                        <div className="bg-white flex grow basis-[0%] flex-col items-stretch px-4 py-1.5 rounded-xl border-2 border-solid border-zinc-500">
                          <div className="flex items-stretch justify-between gap-3.5 pr-1.5">
                            <div className="flex grow basis-[0%] flex-col items-stretch">
                              <div className="justify-center text-black text-center text-xs font-semibold">
                                Grado
                              </div>
                              <div className="justify-center text-black text-center text-base whitespace-nowrap mt-2">
                                <select id="eleccion" name="eleccion">
                                  <option value="opcion1">6</option>
                                  <option value="opcion2">7</option>
                                  <option value="opcion3">8</option>
                                </select>
                              </div>

                            </div>
                            <div className="flex-col fill-black overflow-hidden self-center relative flex aspect-[1.125] w-[9px] justify-center items-center my-auto">
                            </div>
                          </div>
                          <div className="bg-black shrink-0 h-px" />
                          <div className="bg-black z-[1] shrink-0 h-px" />
                        </div>
                        <div className="bg-zinc-50 flex grow basis-[0%] flex-col items-stretch px-4 py-1.5 rounded-xl border-2 border-solid border-zinc-500">
                          <div className="flex items-stretch justify-between gap-5 pr-11 max-md:pr-5">
                            <div className="flex flex-col items-stretch">
                              <div className="justify-center text-black text-center text-xs font-semibold whitespace-nowrap">
                                Jornada
                              </div>
                              <div className="justify-center text-black text-center text-base whitespace-nowrap mt-2">
                                <select id="eleccion" name="eleccion">
                                  <option value="opcion1">Mañana</option>
                                  <option value="opcion2">Tarde</option>
                                </select>
                              </div>

                            </div>
                          </div>
                          <div className="bg-black shrink-0 h-px" />
                        </div>
                      </div>
                      <div className="self-stretch flex items-stretch justify-between gap-5 mt-11 max-md:mt-10">
                        <button className="justify-center text-white text-center text-xl font-semibold bg-violet-500 bg-opacity-70 transform transition-transform duration-300 hover:scale-105 items-stretch px-10 py-5 rounded-xl max-md:px-5">
                          Generar
                        </button>
                        <button className="text-white text-xs font-semibold whitespace-nowrap bg-violet-500 bg-opacity-70 grow justify-center items-stretch pl-4 pr-6 py-6 rounded-xl max-md:pr-5 transition-transform transform motion-reduce:transition-none motion-reduce:transform-none duration-300 hover:scale-105">
                          REGISTRAR HUELLA
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Registrardocente