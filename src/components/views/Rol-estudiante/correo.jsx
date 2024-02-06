import React from 'react';
import Aside from '../../_aside';
import _navbar from '../../_navbar';


const Correo = () => {
  return (
   <>
    <div className='h-screen flex bg-[#A6DCF1] '>
      <div className='w-1/5'>
        <Aside/>
      </div>
      
      
        
      {/* <div className="flex w-[244px] max-w-full items-stretch justify-between gap-5 mr-9 max-md:mr-2.5">
        <div className="flex justify-between gap-2.5 items-start">
          <div className="flex-col justify-center items-center shadow-2xl overflow-hidden relative flex aspect-square w-12 px-px">
            <img
              loading="lazy"
              srcSet="..."
              className="absolute h-full w-full object-cover object-center inset-0"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/806496f8806a4fad8eac274df5ed9ba6f75eb664af0a74444f0a7f7028da3798?"
              className="aspect-[0.98] object-contain object-center w-full overflow-hidden"
            />
          </div>
          <div className="items-stretch flex grow basis-[0%] flex-col">
            <div className="text-black text-center text-base font-semibold whitespace-nowrap">
              Yamith Alonzo
            </div>
            <div className="text-black text-opacity-50 text-center text-base whitespace-nowrap">
              3rd year
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a69e68e762a664a9a48298c1db822d8cb98fd7ce117c9271bdda38eb2f006b0?"
          className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full self-start"
        />
      </div> */}
      <div className="flex-col fill-sky-200 overflow-hidden self-center relative flex min-h-[896px] w-full max-w-[1104px] items-stretch mt-0 pt-1 pb-1 max-md:max-w-full">


        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4bf6350d0dbc9e628da90c732b720860688df00a50d45909871eac5221e1de2?"
          className="absolute h-full w-full object-cover object-center inset-0 rounded-3xl"
        />

        
        <div className="relative flex flex-col pl-9 pr-12 max-md:max-w-full max-md:px-5">
          <div className="self-stretch flex w-full justify-between gap-5 pr-4 items-start max-md:max-w-full max-md:flex-wrap">
            <div className="justify-center text-black text-center text-xl mt-5">
              Nuevo
              
            </div>
            <div className="flex-col fill-violet-500 fill-opacity-0 overflow-hidden self-stretch relative flex aspect-[3.58974358974359] justify-between gap-5 pl-3.5 pr-9 py-3 items-start max-md:pr-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2cecb165d9f83226fd676344d4c399d563ee92bb06b22316bafda04ffeccf0e0?"
                className="absolute h-full w-full object-cover object-center inset-0 rounded-3xl"
              />
    
              <div className="relative justify-center text-black text-center text-base ">
                + Agregar
              </div>
            </div>
            

          </div>
          <div className="flex w-[958px] max-w-full items-center justify-between gap-5 mt-10 self-end max-md:flex-wrap">
            <div className="justify-center text-black text-center text-xl my-auto">
              Asunto
            </div>
            <div className="flex-col text-black text-opacity-100 text-2xl relative max-w-[840px] fill-white fill-opacity-50 overflow-hidden self-stretch min-h-[57px] w-[859px] justify-center pl-7 pr-16 py-5 items-start max-md:max-w-full max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b27ecbd60e2b43f418ccac8542e9c703a2ede5db599d5cd45a05c6e2a7d36fd4?"
                className="absolute h-15 top-1 w-100px object-cover object-center inset-0 rounded-3xl"
              />
              Cita Medica
            </div>
          </div>
          <div className="self-stretch flex justify-between gap-3.5 mt-2.5 pr-3 items-start max-md:max-w-full max-md:flex-wrap">
            <div className="justify-center text-black text-center text-xl">
              Administrativos /<br />
              Docentes
            </div>
            
            <div className="flex-col fill-white fill-opacity-50 overflow-hidden relative flex min-h-[57px] w-[825px] justify-center pl-6 pr-16 py-2.5 items-start max-md:max-w-full max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/262cf67bf71f3b651db702a40782267a34afe3af1846821f4767fc111bb17c7c?"
                className="absolute h-full w-full object-cover object-center inset-0 rounded-3xl"
              />
              <div className="flex-col relative text-black text-opacity-50 text-2xl whitespace-nowrap fill-indigo-700 overflow-hidden aspect-[8.368421052631579] items-stretch pl-4 pr-6 pt-1 pb-1 max-md:pr-5">
                Jose Roberto Forero Rojas
              </div>
            </div>

          </div>
          <div className="self-center flex ml-0 items-center justify-between gap-5 mt-5 max-md:max-w-full max-md:flex-wrap">
            <div className="justify-center text-black text-center text-xl my-auto">
              Estudiantes
            </div>
            
            <div className="flex-col fill-white fill-opacity-50 overflow-hidden self-stretch relative flex min-h-[57px] w-[825px] pl-6 pr-16 pt-1 pb-1.5 items-start max-md:max-w-full max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5086dc79a1aa55e603b46c3ac752d536296e8a94ef557d4369d30c5df93c11c8?"
                className="absolute h-full w-full object-cover object-center inset-0 rounded-3xl"
              />
              <div className="flex-col relative text-black text-opacity-50 text-2xl fill-indigo-700 overflow-hidden aspect-[8.18421052631579] justify-center items-stretch pl-6 pr-14 py-2.5 max-md:px-5"> 
                Mari Carmen de la Hoz
              </div>
            </div>


          </div>
          <div className="flex-col fill-sky-200 fill-opacity-80 stroke-[1px] stroke-black overflow-hidden self-stretch relative flex min-h-[490px] w-full items-stretch mt-5 pt-px pb-12 max-md:max-w-full border border-black">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/362c6e156eedb4211010e96e872db63da258ca2ca1529a9eddf0e6aae7a40f57?"
              className="absolute h-full w-full object-cover object-center inset-0"
            />
            <div className="relative bg-white bg-opacity-50 flex items-start justify-between gap-1.5 pl-3 pr-20 py-8 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
              <div className="text-black text-opacity-50 text-2xl grow shrink basis-auto self-start">
                Nota del estudiante...
              </div>
              <div className="justify-between items-stretch self-stretch flex gap-5 max-md:justify-center">
                <div className="text-neutral-800 text-base font-bold leading-6 whitespace-nowrap">
                  B
                </div>
                <div className="text-neutral-800 text-base italic leading-6">
                  I
                </div>
                <div className="text-neutral-800 text-base leading-6 underline whitespace-nowrap">
                  U
                </div>
              </div>
              <div className="items-stretch self-stretch flex justify-between gap-4">
                <div className="text-neutral-800 text-base leading-6 grow whitespace-nowrap">
                  Source Sams Pro
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f67c725a048dd808e343c5c994a6d12b08a14723031fce24206f3b5a83d3b15a?"
                  className="aspect-square object-contain object-center w-4 overflow-hidden self-center shrink-0 max-w-full my-auto"
                />
              </div>
              <div className="items-stretch self-stretch flex justify-between gap-4">
                <div className="text-neutral-800 text-base leading-6 grow whitespace-nowrap">
                  14
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f67c725a048dd808e343c5c994a6d12b08a14723031fce24206f3b5a83d3b15a?"
                  className="aspect-square object-contain object-center w-4 overflow-hidden self-center shrink-0 max-w-full my-auto"
                />
              </div>
              <div className="text-neutral-800 text-base font-bold leading-6 self-center my-auto">
                A
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f67c725a048dd808e343c5c994a6d12b08a14723031fce24206f3b5a83d3b15a?"
                className="aspect-square object-contain object-center w-4 overflow-hidden self-center shrink-0 max-w-full my-auto"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7549507ba3ad4a2e99212af9ef1e0950bfe7d06def40ad5f101c4b02c07e393?"
                className="aspect-square object-contain object-center w-5 overflow-hidden self-center shrink-0 max-w-full my-auto"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9727c0c8a7fc83ccc8d43a1de58461e1e585ba74c399677a850611b0534d4d6e?"
                className="aspect-square object-contain object-center w-5 overflow-hidden self-center shrink-0 max-w-full my-auto"
              />
              <div className="justify-between items-center flex gap-5 self-start max-md:justify-center">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3060f0ceb5327f03ee5b01633b81bddcbcf1d3561e99f31908fd282da979303?"
                  className="aspect-square object-contain object-center w-5 overflow-hidden self-stretch shrink-0 max-w-full"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d30523164f69042370cf87faf482abd08dbfb764c3b75deae021e7adcaf4d44?"
                  className="aspect-square object-contain object-center w-5 overflow-hidden self-stretch shrink-0 max-w-full"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2aa15f12435b141c70ed3ec7762677cd38b12cd43e1f46a75081f7ea992398c?"
                  className="aspect-[1.43] object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                />
              </div>
            </div>
            <div className="relative text-black text-opacity-50 text-2xl max-w-[663px] ml-4 mt-5 mb-32 self-start max-md:max-w-full max-md:mb-10">
              Coordial saludo.
              <br />
              La estudiante Mari Carmen no podrá asistir a clases el dia de
              mañana debido a una cita programada. Estará de regreso el dia
              jueves.
              <br />
              <br />
              Le agradecemos su comprensión y colaboración.
              <br />
              <br />
            </div>
          </div>
        </div>
        <div className="flex-col relative justify-center text-black text-center text-base fill-violet-500 fill-opacity-50 overflow-hidden aspect-[3.6315789473684212] items-stretch mr-16 mt-1 px-10 py-2 self-end max-md:mr-2.5 max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c7445894032a8dc232874c663a29b35246dc112a1d00fcdf8aefcbe1ad9ae50?"
            className="absolute h-full w-full object-cover object-center inset-0"
          />
          Guardar
        </div>

      </div>
    </div>
   </>
  );
}

export default Correo;
