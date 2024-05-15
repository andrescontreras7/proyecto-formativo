import React, { useState } from 'react';
import Layout from '../../components/layaout';
import { HiArrowSmallLeft } from "react-icons/hi2";

const tematicas2 = () => {
  const [expandedIndex, setExpandedIndex] = useState(-1); // Inicia como -1 para que ninguna sección esté expandida por defecto

  const handleToggle = (index) => {
    if (index === expandedIndex) {
      // Si se hace clic en la sección ya expandida, la contrae
      setExpandedIndex(-1);
    } else {
      // De lo contrario, expande la sección correspondiente
      setExpandedIndex(index);
    }
  };

  return (
    <>
      <Layout titulo={"Contenido de asiganturas"} icono={<HiArrowSmallLeft className='text-xl' />}  >
        <div className="flex flex-col ">
          <div className="text-3xl text-black text-center">Temas</div>

          {/* Primer acordeón */}
          <div className="flex flex-col px-9 pt-6 pb-20 mt-9 w-full bg-white rounded-xl shadow-lg max-md:px-5 max-md:max-w-full">
            {/* Sección 1 */}
            <div className="flex gap-4 self-start font-bold leading-[140%]" onClick={() => handleToggle(0)}>
              <div className="flex flex-col">
                <div className="text-xl text-slate-700">Matematica pura </div>
                <div className="self-start mt-7 ml-4 text-base text-black max-md:ml-2.5">
                  PERIODO NUMERO 1
                </div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f9ba85f25419d99a2a1e8317b7991e41820b6e422252278db0f7eba6d3fb17f?"
                className="shrink-0 self-end mt-12 w-5 aspect-[1.67] fill-black max-md:mt-10"
              />
            </div>

            {/* Sección 2 (primer elemento del acordeón) */}
            <div className={`flex gap-5 justify-between px-11 py-5 mt-2.5 w-full bg-white rounded-xl border border-solid border-slate-500 max-md:flex-wrap max-md:px-5 max-md:max-w-full ${expandedIndex === 0 ? '' : 'hidden'}`}>
              <div className="flex flex-col leading-[140%]">
                <div className="text-sm font-bold text-slate-700">
                  Desarrollo de problemas
                </div>
                <div className="flex gap-5 mt-7 text-xs whitespace-nowrap">
                  <div className="text-slate-500">Periodo:</div>
                  <div className="flex-auto font-bold text-slate-700">1</div>
                </div>
                <div className="flex gap-5 mt-4">
                  <div className="flex flex-col whitespace-nowrap">
                    <div className="text-xs text-slate-500">Descripción:</div>
                    <div className="flex gap-2.5 mt-4 text-xs font-medium text-zinc-600">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc6b359f72208a3036d2cb93d78b1ed9b7634d0293d2c3732218d66da112a5c8?"
                        className="shrink-0 w-4 border-2 border-solid aspect-[0.72] border-stone-500 stroke-[2px] stroke-stone-500"
                      />
                      <div className="my-auto">algoritmos.docs</div>
                    </div>
                  </div>
                  <div className="flex-auto self-start text-xs font-bold text-slate-700">
                    Desarrollar según sugerencias
                  </div>
                </div>
              </div>
            </div>

            {/* Sección 3 (segundo elemento del acordeón) */}
            <div className={`flex flex-col px-6 py-5 mt-5 bg-white rounded-xl border border-solid border-slate-500 max-md:px-5 max-md:max-w-full ${expandedIndex === 0 ? '' : 'hidden'}`}>
              <div className="text-sm font-bold leading-5 text-slate-700 max-md:max-w-full">
                Desarrollo de problemas
              </div>
              <div className="flex gap-5 items-start mt-2.5 max-md:flex-wrap">
                <div className="flex flex-col mt-2 text-xs leading-4 whitespace-nowrap text-slate-500">
                  <div>Periodo:</div>
                  <div className="mt-5">Descripción:</div>
                  <div className="flex gap-2.5 mt-4 text-xs font-medium text-zinc-600">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc6b359f72208a3036d2cb93d78b1ed9b7634d0293d2c3732218d66da112a5c8?"
                      className="shrink-0 w-4 border-2 border-solid aspect-[0.72] border-stone-500 stroke-[2px] stroke-stone-500"
                    />
                    <div>algoritmos.docs</div>
                  </div>
                </div>
                <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
                  <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
                    <div className="self-start text-xs font-bold leading-4 text-slate-700">
                      1
                    </div>
                  </div>
                  <div className="text-xs font-bold leading-4 text-slate-700 max-md:max-w-full">
                    Desarrollar según sugerencias
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Segundo acordeón */}
          <div className="flex flex-col px-9 pt-6 pb-20 mt-9 w-full bg-white rounded-xl shadow-lg max-md:px-5 max-md:max-w-full">
            {/* Sección 1 */}
            <div className="flex gap-4 self-start font-bold leading-[140%]" onClick={() => handleToggle(1)}>
              <div className="flex flex-col">
                <div className="text-xl text-slate-700">Ciencias sociales </div>
                <div className="self-start mt-7 ml-4 text-base text-black max-md:ml-2.5">
                  PERIODO NUMERO 1
                </div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f9ba85f25419d99a2a1e8317b7991e41820b6e422252278db0f7eba6d3fb17f?"
                className="shrink-0 self-end mt-12 w-5 aspect-[1.67] fill-black max-md:mt-10"
              />
            </div>

            {/* Sección 2 (primer elemento del acordeón) */}
            <div className={`flex gap-5 justify-between px-11 py-5 mt-2.5 w-full bg-white rounded-xl border border-solid border-slate-500 max-md:flex-wrap max-md:px-5 max-md:max-w-full ${expandedIndex === 1 ? '' : 'hidden'}`}>
              <div className="flex flex-col leading-[140%]">
                <div className="text-sm font-bold text-slate-700">
                  Desarrollo de problemas
                </div>
                <div className="flex gap-5 mt-7 text-xs whitespace-nowrap">
                  <div className="text-slate-500">Periodo:</div>
                  <div className="flex-auto font-bold text-slate-700">1</div>
                </div>
                <div className="flex gap-5 mt-4">
                  <div className="flex flex-col whitespace-nowrap">
                    <div className="text-xs text-slate-500">Descripción:</div>
                    <div className="flex gap-2.5 mt-4 text-xs font-medium text-zinc-600">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc6b359f72208a3036d2cb93d78b1ed9b7634d0293d2c3732218d66da112a5c8?"
                        className="shrink-0 w-4 border-2 border-solid aspect-[0.72] border-stone-500 stroke-[2px] stroke-stone-500"
                      />
                      <div className="my-auto">algoritmos.docs</div>
                    </div>
                  </div>
                  <div className="flex-auto self-start text-xs font-bold text-slate-700">
                    Desarrollar según sugerencias
                  </div>
                </div>
              </div>
            </div>

            {/* Sección 3 (segundo elemento del acordeón) */}
            <div className={`flex flex-col px-6 py-5 mt-5 bg-white rounded-xl border border-solid border-slate-500 max-md:px-5 max-md:max-w-full ${expandedIndex === 1 ? '' : 'hidden'}`}>
              <div className="text-sm font-bold leading-5 text-slate-700 max-md:max-w-full">
                Desarrollo de problemas
              </div>
              <div className="flex gap-5 items-start mt-2.5 max-md:flex-wrap">
                <div className="flex flex-col mt-2 text-xs leading-4 whitespace-nowrap text-slate-500">
                  <div>Periodo:</div>
                  <div className="mt-5">Descripción:</div>
                  <div className="flex gap-2.5 mt-4 text-xs font-medium text-zinc-600">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc6b359f72208a3036d2cb93d78b1ed9b7634d0293d2c3732218d66da112a5c8?"
                      className="shrink-0 w-4 border-2 border-solid aspect-[0.72] border-stone-500 stroke-[2px] stroke-stone-500"
                    />
                    <div>algoritmos.docs</div>
                  </div>
                </div>
                <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
                  <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
                    <div className="self-start text-xs font-bold leading-4 text-slate-700">
                      1
                    </div>
                  </div>
                  <div className="text-xs font-bold leading-4 text-slate-700 max-md:max-w-full">
                    Desarrollar según sugerencias
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default tematicas2;
