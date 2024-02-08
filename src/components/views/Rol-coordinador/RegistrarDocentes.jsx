import React from 'react'
import { GoArrowLeft } from "react-icons/go";

const Registrardocente = () => {
  return (
    

        <div className="bg-sky-200 flex flex-col justify-center items-center px-16 py-12 max-md:px-5">
          <div className="flex w-full max-w-[1182px] flex-col items-stretch mt-2 mb-6 max-md:max-w-full">
            <div className="flex items-stretch justify-between gap-2.5 max-md:max-w-full max-md:flex-wrap">
              <div className="bg-violet-500 bg-opacity-30 flex basis-[0%] flex-col justify-center items-center px-10 py-2 rounded-3xl">
              <GoArrowLeft color='black' size={35} />
              </div>
              <div className="justify-center text-black text-center text-xl font-semibold bg-violet-500 bg-opacity-30 grow pl-5 pr-16 py-5 rounded-3xl items-start max-md:max-w-full max-md:pr-5">
                Registrar usuarios
              </div>
            </div>
            <div className="shadow-2xl bg-sky-200 flex flex-col justify-center items-center mt-6 px-16 py-12 rounded-3xl max-md:max-w-full max-md:px-5">
              <div className="flex items-center justify-between gap-5 mb-6 max-md:max-w-full max-md:flex-wrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/af6aea118878b9cc212745cdf7f444497b5411ceda741769292b0f66e35edbef?"
                  className="aspect-[0] object-contain object-center w-px stroke-[1px] stroke-zinc-500 overflow-hidden shrink-0 max-w-full my-auto"
                />
                <div className="self-stretch flex grow basis-[0%] flex-col items-stretch max-md:max-w-full">
                  <div className="flex justify-between gap-2.5 items-start max-md:max-w-full max-md:flex-wrap">
                    <div className="flex grow basis-[0%] flex-col items-stretch">
                      <div className="text-zinc-900 text-2xl font-semibold">
                        Nombres
                      </div>
                      <div className="text-zinc-500 text-2xl font-medium bg-white justify-center mt-3.5 pl-4 pr-16 py-5 rounded-md border-2 border-solid border-zinc-500 items-start max-md:pr-5">
                        Jose{" "}
                      </div>
                    </div>
                    <div className="self-stretch flex grow basis-[0%] flex-col items-stretch">
                      <div className="text-zinc-900 text-2xl font-semibold whitespace-nowrap">
                        apellidos
                      </div>
                      <div className="text-zinc-500 text-2xl font-medium bg-white justify-center mt-2.5 pl-5 pr-16 py-5 rounded-md border-2 border-solid border-zinc-500 items-start max-md:pr-5">
                        Yepes Camargo
                      </div>
                    </div>
                  </div>
                  <div className="text-zinc-900 text-2xl font-semibold mt-4 max-md:max-w-full">
                    Correo
                  </div>
                  <div className="text-zinc-500 text-2xl font-medium max-w-[506px] bg-white mt-2 pl-3.5 pr-16 pt-6 pb-3.5 rounded-md border-2 border-solid border-zinc-500 items-start max-md:max-w-full max-md:pr-5">
                    YepesCamargo@gmail.edu.co
                  </div>
                  <div className="text-zinc-900 text-2xl font-semibold mt-3.5 max-md:max-w-full">
                    Direccion
                  </div>
                  <div className="bg-white flex flex-col justify-center items-center rounded-md border-2 border-solid border-zinc-500 max-md:max-w-full max-h-[300px]">
                    <div className="flex-col fill-white stroke-[2px] stroke-zinc-500 overflow-hidden relative flex min-h-[58px] w-full justify-between gap-5 pl-11 pr-20 pt-6 pb-2 items-start max-md:max-w-full max-md:flex-wrap max-md:px-5">
                      
                      <div className="relative text-zinc-500 text-2xl font-medium grow shrink basis-auto">
                        33062 Zboncak isle
                      </div>
                      <div className="relative justify-center text-black text-center text-xl mt-3.5">
                        
                      </div>
                    </div>
                  </div>
                  <div className="text-zinc-900 text-2xl font-semibold mt-4 max-md:max-w-full">
                    Numero de celular
                  </div>
                  <div className="text-zinc-500 text-2xl font-medium max-w-[368px] bg-white justify-center pl-4 pr-16 py-5 rounded-md border-2 border-solid border-zinc-500 items-start max-md:max-w-full max-md:pr-5">
                    3012489486
                  </div>
                  <div className="mt-2.5 max-md:max-w-full">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                      <div className="flex flex-col items-stretch w-[48%] max-md:w-full max-md:ml-0">
                        <div className="flex grow flex-col items-stretch max-md:mt-7">
                          <div className="text-zinc-900 text-2xl font-semibold">
                            Tipo documento
                          </div>
                          <div className="bg-white flex items-center justify-between gap-5 mt-1.5 pl-4 pr-9 py-3 rounded-md border-2 border-solid border-zinc-500 max-md:pr-5">
                            <div className="text-zinc-500 text-2xl font-medium my-auto">
                              Cedula
                            </div>
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ed1c52aa981f7b916f557d6d3f1667ff9b6a502f2f09826258632836f7f02b4?"
                              className="aspect-[1.08] object-contain object-center w-10 overflow-hidden self-stretch shrink-0 max-w-full"
                            />
                          </div>
                          <div className="text-black text-2xl font-semibold mt-5">
                            Usuario
                          </div>
                          <div className="bg-white flex shrink-0 h-14 flex-col mt-3 rounded-lg border-2 border-solid border-zinc-500" />
                          <div className="text-black text-2xl font-semibold mt-2.5">
                            Contraseña
                          </div>
                          <div className="bg-white flex shrink-0 h-14 flex-col mt-4 rounded-lg border-2 border-solid border-zinc-500" />
                        </div>
                      </div>
                      <div className="flex flex-col items-stretch w-[52%] ml-5 max-md:w-full max-md:ml-0">
                        <div className="flex grow flex-col max-md:mt-7">
                          <div className="text-black text-2xl font-semibold max-w-[316px] ml-7 self-start max-md:ml-2.5">
                            Rol
                          </div>
                          <div className="bg-white self-stretch flex justify-between gap-5 mt-2 pl-3.5 pr-16 py-5 rounded-lg border-2 border-solid border-zinc-500 items-start max-md:pr-5">
                            <div className="text-zinc-500 text-2xl font-medium">
                              Docente
                            </div>
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf4d37836e6b1e93a92b2a0a04b65a95f896126cf90b522b5e358b1612a232ff?"
                              className="aspect-[1.82] object-contain object-center w-5 fill-zinc-900 overflow-hidden shrink-0 max-w-full mt-2.5"
                            />
                          </div>
                          <div className="self-stretch flex items-stretch justify-between gap-5 mt-16 pr-20 max-md:mt-10 max-md:pr-5">
                            <div className="bg-white flex grow basis-[0%] flex-col items-stretch pl-2 pr-3.5 py-1.5 rounded-xl border-2 border-solid border-zinc-500">
                              <div className="flex items-stretch justify-between gap-3.5">
                                <div className="flex grow basis-[0%] flex-col items-stretch">
                                  <div className="justify-center text-black text-center text-xs whitespace-nowrap">
                                    Grado
                                  </div>
                                  <div className="justify-center text-black text-center text-base mt-2">
                                    GRADO 3°
                                  </div>
                                </div>
                                <div className="flex-col fill-black overflow-hidden self-center relative flex aspect-[1.125] w-[9px] justify-center items-center my-auto">
                                  <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/87a00770751f19cf98e42fb2f9cf1bde5885a9eecb5e35627f1d5c554f19b9c9?"
                                    className="absolute h-full w-full object-cover object-center inset-0"
                                  />
                                  <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/87a00770751f19cf98e42fb2f9cf1bde5885a9eecb5e35627f1d5c554f19b9c9?"
                                    className="aspect-[1.13] object-contain object-center w-full fill-black overflow-hidden"
                                  />
                                </div>
                              </div>
                              <div className="bg-black shrink-0 h-px" />
                              <div className="bg-black z-[1] shrink-0 h-px" />
                            </div>
                            <div className="bg-zinc-50 flex grow basis-[0%] flex-col items-stretch pl-2 pr-3.5 py-1.5 rounded-xl border-2 border-solid border-zinc-500">
                              <div className="flex items-stretch justify-between gap-5 px-0.5">
                                <div className="flex grow basis-[0%] flex-col items-stretch">
                                  <div className="justify-center text-black text-center text-xs">
                                    Jornada
                                  </div>
                                  <div className="justify-center text-black text-center text-base mt-2">
                                    Mañana
                                  </div>
                                </div>
                                <img
                                  loading="lazy"
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/87a00770751f19cf98e42fb2f9cf1bde5885a9eecb5e35627f1d5c554f19b9c9?"
                                  className="aspect-[1.13] object-contain object-center w-[9px] fill-black overflow-hidden self-center shrink-0 max-w-full my-auto"
                                />
                              </div>
                              <div className="bg-black shrink-0 h-px" />
                            </div>
                          </div>
                          <div className="self-stretch flex items-stretch justify-between gap-5 mt-14 px-0.5 max-md:mt-10">
                            <div className="justify-center text-white text-center text-xl font-semibold bg-violet-500 bg-opacity-70 grow items-stretch pl-9 pr-11 py-5 rounded-xl max-md:px-5">
                              Generar
                            </div>
                            <div className="text-white text-xxs font-semibold bg-violet-500 bg-opacity-70 grow justify-center items-stretch pl-4 pr-7 py-6 rounded-xl max-md:pr-5">
                              REGISTRAR HUELLA
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
        </div>
      );
    }

export default Registrardocente