import React from 'react'
import { GoArrowLeft } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { Link } from 'react-router-dom';



const Calendario = () => {
  return (
    <>
    
    <div className="w-[1908px] h-[1024px] relative bg-sky-200">
  <div className="w-[1088px] h-[938px] left-[300px] top-[40px] absolute">
    <div className="w-[1072px] left-[16px] top-[16px] absolute justify-between items-start inline-flex">
      <div className="justify-start items-start gap-px flex">
        <div className="justify-start items-start flex">
          <div className="p-1 bg-zinc-100 rounded-tl-md rounded-bl-md justify-center items-center gap-2 flex">
            <div className="w-5 h-5 relative" />
          </div>
        </div>
        
        < div className="justify-start items-start flex">
          <div className="px-4 py-1.5 bg-zinc-100 justify-center items-center gap-2 flex">
            <button  className="text-zinc-900 text-xxs font-normal font-['arial'] leading-none">Hoy</button>
          </div>
        </div>
        <div className="justify-start items-start flex">
          <div className="p-1 bg-zinc-100 rounded-tr-md rounded-br-md justify-center items-center gap-2 flex">
            <div className="w-5 h-5 relative" />
          </div>
        </div>
      </div>
      <div className="justify-start items-start flex">
        <div className="justify-start items-start flex">
          <div className="px-4 py-1 rounded-lg justify-center items-center gap-2 flex">
            <div className="text-zinc-500 text-xxs font-medium font-['arial'] leading-tight">Dia</div>
          </div>
        </div>
        <div className="justify-start items-start flex">
          <div className="px-4 py-1 bg-red-600 rounded-lg justify-center items-center gap-2 flex">
            <div className="text-white text-sm font-medium font-['arial'] leading-tight">Semana</div>
          </div>
        </div>
        <div className="justify-start items-start flex">
          <div className="px-4 py-1 rounded-lg justify-center items-center gap-2 flex">
            <div className="text-zinc-500 text-sm font-medium font-['arial'] leading-tight">Mes</div>
          </div>
        </div>
        <div className="justify-start items-start flex">
          <div className="px-4 py-1 rounded-lg justify-center items-center gap-2 flex">
            <div className="text-zinc-500 text-sm font-medium font-['arial'] leading-tight">año</div>
          </div>
        </div>
      </div>
      <div className="h-7" />
    </div>
    <button className="w-[79px] h-[50.33px] left-[16px] top-[60px] absolute flex items-center">
  <div className="w-[79px] h-[50.33px] left-0 top-0 absolute bg-blue-700 rounded-[25px]" />
  <Link to="/Home" className="absolute top-1/2 left-[16px] transform -translate-y-1/2">
    <GoArrowLeft color='white' size={35} />
  </Link>
</button>


    <div className="w-[1156px] left-[16px] top-[126.33px] absolute flex-col justify-start items-start inline-flex">
      <div className="w-[1108px] pl-12 justify-start items-start gap-3 inline-flex">
        <div className="justify-start items-start flex">
          <div className="w-[144.57px] px-2 pt-1 pb-4 bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch text-zinc-500 text-[10px] font-bold font-['arial'] leading-3">LUNES</div>
            <div className="self-stretch text-black text-[22px] font-medium font-['arial'] leading-loose">21</div>
          </div>
          <div className="w-[144.57px] px-2 pt-1 pb-4 bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch text-zinc-500 text-[10px] font-bold font-['arial'] leading-3">MARTES</div>
            <div className="self-stretch text-black text-[22px] font-medium font-['arial'] leading-loose">22</div>
          </div>
          <div className="w-[144.57px] px-2 pt-1 pb-4 bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch text-zinc-500 text-[10px] font-bold font-['arial] leading-3">MIÉRCOLES </div>
            <div className="self-stretch text-black text-[22px] font-medium font-['arial'] leading-loose">23</div>
          </div>
          <div className="w-[144.57px] px-2 pt-1 pb-4 bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch text-zinc-500 text-[10px] font-bold font-['arial'] leading-3">JUEVES</div>
            <div className="self-stretch text-black text-[22px] font-medium font-['arial'] leading-loose">24</div>
          </div>
          <div className="w-[144.57px] px-2 pt-1 pb-4 bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch text-zinc-500 text-[10px] font-bold font-['arial'] leading-3">VIERNES</div>
            <div className="self-stretch text-black text-[22px] font-medium font-['arial'] leading-loose">25</div>
          </div>
          <div className="w-[144.57px] px-2 pt-1 pb-4 bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch text-zinc-500 text-[10px] font-bold font-['arial'] leading-3">SÁBADO </div>
            <div className="self-stretch text-black text-[22px] font-medium font-['arial'] leading-loose">26</div>
          </div>
        </div>
      </div>
      <div className="w-[1060px] justify-start items-start gap-3 inline-flex">
        <div className="w-9 text-zinc-500 text-xs font-semibold font-normal-['Inter'] leading-none">7 AM</div>
        <div className="w-[1594.86px] self-stretch justify-start items-start flex">
          <div className="w-[143px] h-[68px] bg-purple-500 bg-opacity-10 rounded justify-start items-start flex">
            <div className="w-[3px] self-stretch bg-sky-500" />
            <div className="grow shrink basis-0 h-[68px] p-1.5 rounded flex-col justify-start items-start inline-flex">
              <div className="self-stretch justify-start items-center gap-1 inline-flex">
                <button className="text-sky-700 text-xs font-semibold font-normal-['Inter'] leading-none">9:00</button>
                <div className="text-sky-700 text-xs font-semibold font-normal-['Inter'] leading-none">AM</div>
              </div>
              <button className="text-sky-700 text-xs font-semibold font-normal-['Inter'] leading-none w-32 outline-none">Compromiso de Sociales</button>
            </div>
          </div>
          <div className="w-[143px] h-[68px] bg-purple-500 bg-opacity-10 rounded justify-start items-start flex">
            <div className="w-[3px] self-stretch bg-sky-500" />
            <div className="grow shrink basis-0 h-[68px] p-1.5 rounded flex-col justify-start items-start inline-flex">
              <div className="self-stretch justify-start items-center gap-1 inline-flex">
                <button className="text-sky-700 text-xs font-semibold font-normal-['Inter'] leading-none">9:00</button>
                <div className="text-sky-700 text-xs font-semibold font-normal-['Inter'] leading-none">AM</div>
              </div>
              <button className="self-stretch text-sky-700 text-xs font-semibold font-normal['Inter'] leading-none">Compromiso de ética </button>
            </div>
          </div>
          <div className="w-[143px] h-[68px] bg-purple-500 bg-opacity-10 rounded justify-start items-start flex">
            <div className="w-[3px] self-stretch bg-sky-500" />
            <div className="grow shrink basis-0 h-[68px] p-1.5 rounded flex-col justify-start items-start inline-flex">
              <div className="self-stretch justify-start items-center gap-1 inline-flex">
                <button className="text-sky-700 text-xs font-semibold font-normal-['Inter'] leading-none">9:00</button>
                <div className="text-sky-700 text-xs font-semibold font-normal-['Inter'] leading-none">AM</div>
              </div>
              <button className="self-stretch text-sky-700 text-xs font-semibold font-normal['Inter'] leading-none">Compromiso de Sociales</button>
            </div>
          </div>
          <div className="w-[143px] h-[68px] bg-purple-500 bg-opacity-10 rounded justify-start items-start flex">
            <div className="w-[3px] self-stretch bg-sky-500" />
            <div className="grow shrink basis-0 h-[68px] p-1.5 rounded flex-col justify-start items-start inline-flex">
              <div className="self-stretch justify-start items-center gap-1 inline-flex">
                <button className="text-sky-700 text-xs font-semibold font-normal-['Inter'] leading-none">9:00</button>
                <div className="text-sky-700 text-xs font-semibold font-normal-['Inter'] leading-none">AM</div>
              </div>
              <button className="self-stretch text-sky-700 text-xs font-semibold font-normal['Inter'] leading-none">Compromiso de ética </button>
            </div>
          </div>
          <div className="w-[151px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="w-[144.57px] h-9 bg-sky-200 shadow-inner" />
            <div className="w-[151px] h-9 bg-sky-200" />
          </div>
          <div className="w-[144.57px] bg-sky-200 shadow-inner" />
          <div className="w-[149px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
        </div>
        <div className="w-9 text-zinc-500 text-xs font-semibold font-normal-['Inter'] leading-none">7 AM</div>
      </div>
      <div className="w-[1156px] justify-start items-start gap-3 inline-flex">
        <div className="w-9 text-zinc-500 text-xs font-semibold font-normal-['Inter'] leading-none">8 AM</div>
        <div className="w-[1153.43px] self-stretch justify-start items-start flex">
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="w-[143px] h-[68px] bg-purple-500 bg-opacity-10 rounded justify-start items-start inline-flex">
              <div className="w-[3px] self-stretch bg-sky-500" />
              <div className="grow shrink basis-0 h-[68px] p-1.5 rounded flex-col justify-start items-start inline-flex">
                <div className="self-stretch justify-start items-center gap-1 inline-flex">
                  <button className="text-sky-700 text-xs font-semibold font-normal-['Inter'] leading-none">9:00</button>
                  <div className="text-sky-700 text-xs font-semibold font-normal-['Inter'] leading-none">AM</div>
                </div>
                <button className="self-stretch text-sky-700 text-xs font-semibold font-normal-['Inter'] leading-none">Compromiso de Sociales</button>
              </div>
            </div>
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
          <div className="w-[143px] h-[68px] bg-purple-500 bg-opacity-10 rounded justify-start items-start flex">
            <div className="w-[3px] self-stretch bg-sky-500" />
            <div className="grow shrink basis-0 h-[68px] p-1.5 rounded flex-col justify-start items-start inline-flex">
              <div className="self-stretch justify-start items-center gap-1 inline-flex">
                <button className="text-sky-700 text-xs font-semibold font-normal-['Inter'] leading-none">9:00</button>
                <div className="text-sky-700 text-xs font-semibold font-normal-['Inter'] leading-none">AM</div>
              </div>
              <button className="self-stretch text-sky-700 text-xs font-semibold font-normal-['Inter'] leading-none">Compromiso de ética </button>
            </div>
          </div>
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="w-[143px] h-[68px] bg-purple-500 bg-opacity-10 rounded justify-start items-start inline-flex">
              <div className="w-[3px] self-stretch bg-sky-500" />
              <div className="grow shrink basis-0 h-[68px] p-1.5 rounded flex-col justify-start items-start inline-flex">
                <div className="self-stretch justify-start items-center gap-1 inline-flex">
                  <button className="text-sky-700 text-xs font-semibold font-normal-['Inter'] leading-none">9:00</button>
                  <div className="text-sky-700 text-xs font-semibold font-normal-['Inter'] leading-none">AM</div>
                </div>
                <button className="self-stretch text-sky-700 text-xs font-semibold font-normal-['Inter'] leading-none">Compromiso de Sociales</button>
              </div>
            </div>
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="w-[143px] h-[68px] bg-purple-500 bg-opacity-10 rounded justify-start items-start inline-flex">
              <div className="w-[3px] self-stretch bg-sky-500" />
              <div className="grow shrink basis-0 h-[68px] p-1.5 rounded flex-col justify-start items-start inline-flex">
                <div className="self-stretch justify-start items-center gap-1 inline-flex">
                  <button className="text-sky-700 text-xs font-semibold font-normal-['Inter'] leading-none">9:00</button>
                  <div className="text-sky-700 text-xs font-semibold font-normal-['Inter'] leading-none">AM</div>
                </div>
                <button className="self-stretch text-sky-700 text-xs font-semibold font-normal-['Inter'] leading-none">Compromiso de Sociales</button>
              </div>
            </div>
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
          <div className="w-[143px] h-[68px] bg-purple-500 bg-opacity-10 rounded justify-start items-start flex">
            <div className="w-[3px] self-stretch bg-sky-500" />
            <div className="grow shrink basis-0 h-[68px] p-1.5 rounded flex-col justify-start items-start inline-flex">
              <div className="self-stretch justify-start items-center gap-1 inline-flex">
                <button className="text-sky-700 text-xs font-semibold font-normal-['Inter'] leading-none">9:00</button>
                <div className="text-sky-700 text-xs font-semibold font-normal-['Inter'] leading-none">AM</div>
              </div>
              <button className="self-stretch text-sky-700 text-xs font-semibold font-normal-['Inter'] leading-none">Compromiso de Sociales</button>
            </div>
          </div>
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
        </div>
      </div>
      <div className="w-[1156px] justify-start items-start gap-3 inline-flex">
        <div className="w-9 text-zinc-500 text-xs font-semibold font-normal-['Inter'] leading-none">9 AM</div>
        <div className="w-[1727px] self-stretch justify-start items-start flex">
          <div className="w-[143px] h-[68px] bg-purple-500 bg-opacity-10 rounded justify-start items-start flex">
            <div className="w-[3px] self-stretch bg-sky-500" />
            <div className="grow shrink basis-0 h-[68px] p-1.5 rounded flex-col justify-start items-start inline-flex">
              <div className="self-stretch justify-start items-center gap-1 inline-flex">
                <button className="text-sky-700 text-xs font-semibold font-normal-['Inter'] leading-none">9:00</button>
                <div className="text-sky-700 text-xs font-semibold font-normal-['Inter'] leading-none">AM</div>
              </div>
              <button className="self-stretch text-sky-700 text-xs font-semibold font-normal-['Inter'] leading-none">Compromiso de Sociales</button>
            </div>
          </div>
          <div className="w-[143px] h-[68px] bg-purple-500 bg-opacity-10 rounded justify-start items-start flex">
            <div className="w-[3px] self-stretch bg-sky-500" />
            <div className="grow shrink basis-0 h-[68px] p-1.5 rounded flex-col justify-start items-start inline-flex">
              <div className="self-stretch justify-start items-center gap-1 inline-flex">
                <button className="text-sky-700 text-xs font-semibold font-normal-['Inter'] leading-none">9:00</button>
                <div className="text-sky-700 text-xs font-semibold font-normal-['Inter'] leading-none">AM</div>
              </div>
              <button className="self-stretch text-sky-700 text-xs font-semibold font-normal-['Inter'] leading-none">Compromiso de Sociales</button>
            </div>
          </div>
          <div className="w-[143px] h-[68px] bg-purple-500 bg-opacity-10 rounded justify-start items-start flex">
            <div className="w-[3px] self-stretch bg-sky-500" />
            <div className="grow shrink basis-0 h-[68px] p-1.5 rounded flex-col justify-start items-start inline-flex">
              <div className="self-stretch justify-start items-center gap-1 inline-flex">
                <button className="text-sky-700 text-xs font-semibold font-normal-['Inter'] leading-none">9:00</button>
                <div className="text-sky-700 text-xs font-semibold font-normal-['Inter'] leading-none">AM</div>
              </div>
              <button className="self-stretch text-sky-700 text-xs font-semibold font-normal-['Inter'] leading-none">Compromiso de Sociales</button>
            </div>
          </div>
          <div className="w-[143px] h-[68px] bg-purple-500 bg-opacity-10 rounded justify-start items-start flex">
            <div className="w-[3px] self-stretch bg-sky-500" />
            <div className="grow shrink basis-0 h-[68px] p-1.5 rounded flex-col justify-start items-start inline-flex">
              <div className="self-stretch justify-start items-center gap-1 inline-flex">
                <button className="text-sky-700 text-xs font-semibold font-normal-['Inter'] leading-none">9:00</button>
                <div className="text-sky-700 text-xs font-semibold font-normal-['Inter'] leading-none">AM</div>
              </div>
              <button className="self-stretch text-sky-700 text-xs font-semibold font-normal-['Inter'] leading-none">Compromiso de Sociales</button>
            </div>
          </div>
          <div className="w-[143px] h-[68px] bg-purple-500 bg-opacity-10 rounded justify-start items-start flex">
            <div className="w-[3px] self-stretch bg-sky-500" />
            <div className="grow shrink basis-0 h-[68px] p-1.5 rounded flex-col justify-start items-start inline-flex">
              <div className="self-stretch justify-start items-center gap-1 inline-flex">
                <button className="text-sky-700 text-xs font-semibold font-normal-['Inter'] leading-none">9:00</button>
                <div className="text-sky-700 text-xs font-semibold font-normal-['Inter'] leading-none">AM</div>
              </div>
              <button className="self-stretch text-sky-700 text-xs font-semibold font-normal-['Inter'] leading-none">Compromiso de Sociales</button>
            </div>
          </div>
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
        </div>
        <div className="w-9 text-zinc-500 text-xs font-semibold font-normal-['Inter'] leading-none">9 AM</div>
      </div>
      <div className="w-[1156px] justify-start items-start gap-3 inline-flex">
        <div className="w-[42px] text-zinc-500 text-xs font-semibold font-normal-['Inter'] leading-none">10 AM</div>
        <div className="w-[1298px] self-stretch justify-start items-start flex">
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
          <div className="w-[143px] h-[68px] bg-purple-500 bg-opacity-10 rounded justify-start items-start flex">
            <div className="w-[3px] self-stretch bg-sky-500" />
            <div className="grow shrink basis-0 h-[68px] p-1.5 rounded flex-col justify-start items-start inline-flex">
              <div className="self-stretch justify-start items-center gap-1 inline-flex">
                <div className="text-sky-700 text-xs font-semibold font-normal-['Inter'] leading-none">9:00</div>
                <div className="text-sky-700 text-xs font-semibold font-normal-['Inter'] leading-none">AM</div>
              </div>
              <div className="self-stretch text-sky-700 text-xs font-semibold font-normal['Inter'] leading-none">Compromiso de Sociales</div>
            </div>
          </div>
          <div className="w-[143px] h-[68px] bg-purple-500 bg-opacity-10 rounded justify-start items-start flex">
            <div className="w-[3px] self-stretch bg-sky-500" />
            <div className="grow shrink basis-0 h-[68px] p-1.5 rounded flex-col justify-start items-start inline-flex">
              <div className="self-stretch justify-start items-center gap-1 inline-flex">
                <button className="text-sky-700 text-xs font-semibold font-normal-['Inter'] leading-none">9:00</button>
                <div className="text-sky-700 text-xs font-semibold font-normal-['Inter'] leading-none">AM</div>
              </div>
              <button className="self-stretch text-sky-700 text-xs font-semibold font-normal['Inter'] leading-none">Compromiso de Sociales</button>
            </div>
          </div>
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
        </div>
      </div>
      <div className="w-[1156px] justify-start items-start gap-3 inline-flex">
        <div className="w-9 text-zinc-500 text-xs font-semibold font-normal['Inter'] leading-none">11 AM</div>
        <div className="w-[1584px] self-stretch justify-start items-start flex">
          <div className="w-[143px] h-[68px] bg-purple-500 bg-opacity-10 rounded justify-start items-start flex">
            <div className="w-[3px] self-stretch bg-sky-500" />
            <div className="grow shrink basis-0 h-[68px] p-1.5 rounded flex-col justify-start items-start inline-flex">
              <div className="self-stretch justify-start items-center gap-1 inline-flex">
                <button className="text-sky-700 text-xs font-semibold font-normal['Inter'] leading-none">9:00</button>
                <div className="text-sky-700 text-xs font-semibold font-normal['Inter'] leading-none">AM</div>
              </div>
              <button className="self-stretch text-sky-700 text-xs font-semibold font-normal['Inter'] leading-none">Compromiso de Sociales</button>
            </div>
          </div>
          <div className="w-[143px] h-[68px] bg-purple-500 bg-opacity-10 rounded justify-start items-start flex">
            <div className="w-[3px] self-stretch bg-sky-500" />
            <div className="grow shrink basis-0 h-[68px] p-1.5 rounded flex-col justify-start items-start inline-flex">
              <div className="self-stretch justify-start items-center gap-1 inline-flex">
                <button className="text-sky-700 text-xs font-semibold font-normal['Inter'] leading-none">9:00</button>
                <div className="text-sky-700 text-xs font-semibold font-normal['Inter'] leading-none">AM</div>
              </div>
              <button className="self-stretch text-sky-700 text-xs font-semibold font-normal['Inter'] leading-none">Compromiso de Sociales</button>
            </div>
          </div>
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
          <div className="w-[143px] h-[68px] bg-purple-500 bg-opacity-10 rounded justify-start items-start flex">
            <div className="w-[3px] self-stretch bg-sky-500" />
            <div className="grow shrink basis-0 h-[68px] p-1.5 rounded flex-col justify-start items-start inline-flex">
              <div className="self-stretch justify-start items-center gap-1 inline-flex">
                <button className="text-sky-700 text-xs font-semibold font-normal['Inter'] leading-none">9:00</button>
                <div className="text-sky-700 text-xs font-semibold font-normal['Inter'] leading-none">AM</div>
              </div>
              <button className="self-stretch text-sky-700 text-xs font-semibold font-normal['Inter'] leading-none">Compromiso de Sociales</button>
            </div>
          </div>
          <div className="w-[143px] h-[68px] bg-purple-500 bg-opacity-10 rounded justify-start items-start flex">
            <div className="w-[3px] self-stretch bg-sky-500" />
            <div className="grow shrink basis-0 h-[68px] p-1.5 rounded flex-col justify-start items-start inline-flex">
              <div className="self-stretch justify-start items-center gap-1 inline-flex">
                <button className="text-sky-700 text-xs font-semibold font-normal['Inter'] leading-none">9:00</button>
                <div className="text-sky-700 text-xs font-semibold font-normal['Inter'] leading-none">AM</div>
              </div>
              <button className="self-stretch text-sky-700 text-xs font-semibold font-normal['Inter'] leading-none">Compromiso de Sociales</button>
            </div>
          </div>
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
        </div>
        <div className="w-9 text-zinc-500 text-xs font-semibold font-normal['Inter'] leading-none">11 AM</div>
      </div>
      <div className="w-[1156px] justify-start items-start gap-3 inline-flex">
        <div className="w-9 text-zinc-500 text-xs font-semibold font-normal['Inter'] leading-none">12 PM</div>
        <div className="w-[1441px] self-stretch justify-start items-start flex">
          <div className="w-[143px] h-[68px] bg-purple-500 bg-opacity-10 rounded justify-start items-start flex">
            <div className="w-[3px] self-stretch bg-sky-500" />
            <div className="grow shrink basis-0 h-[68px] p-1.5 rounded flex-col justify-start items-start inline-flex">
              <div className="self-stretch justify-start items-center gap-1 inline-flex">
                <button className="text-sky-700 text-xs font-semibold font-normal['Inter'] leading-none">9:00</button>
                <div className="text-sky-700 text-xs font-semibold font-normal['Inter'] leading-none">AM</div>
              </div>
              <button className="self-stretch text-sky-700 text-xs font-semibold font-normal['Inter'] leading-none">Compromiso de Sociales</button>
            </div>
          </div>
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
          <div className="w-[143px] h-[68px] bg-purple-500 bg-opacity-10 rounded justify-start items-start flex">
            <div className="w-[3px] self-stretch bg-sky-500" />
            <div className="grow shrink basis-0 h-[68px] p-1.5 rounded flex-col justify-start items-start inline-flex">
              <div className="self-stretch justify-start items-center gap-1 inline-flex">
                <button className="text-sky-700 text-xs font-semibold font-normal['Inter'] leading-none">9:00</button>
                <div className="text-sky-700 text-xs font-semibold font-normal['Inter'] leading-none">AM</div>
              </div>
              <button className="self-stretch text-sky-700 text-xs font-semibold font-normal['Inter'] leading-none">Compromiso de Sociales</button>
            </div>
          </div>
          <div className="w-[143px] h-[68px] bg-purple-500 bg-opacity-10 rounded justify-start items-start flex">
            <div className="w-[3px] self-stretch bg-sky-500" />
            <div className="grow shrink basis-0 h-[68px] p-1.5 rounded flex-col justify-start items-start inline-flex">
              <div className="self-stretch justify-start items-center gap-1 inline-flex">
                <button className="text-sky-700 text-xs font-semibold font-normal['Inter'] leading-none">9:00</button>
                <div className="text-sky-700 text-xs font-semibold font-normal['Inter'] leading-none">AM</div>
              </div>
              <button className="self-stretch text-sky-700 text-xs font-semibold font-normal['Inter'] leading-none">Compromiso de Sociales</button>
            </div>
          </div>
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
        </div>
      </div>
      <div className="w-[1156px] justify-start items-start gap-3 inline-flex">
        <div className="w-9 text-sky-200 text-xs font-semibold font-normal['Inter'] leading-none">1 PM</div>
        <div className="w-[1012px] self-stretch justify-start items-start flex">
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
        </div>
      </div>
      <div className="justify-start items-start gap-3 inline-flex">
        <div className="w-9 text-sky-200 text-xs font-semibold font-normal['Inter'] leading-none">2 PM</div>

        <div className="w-[1012px] self-stretch justify-start items-start flex">
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
        </div>
        <div className="w-9 text-sky-200 text-xs font-semibold font-normal['Inter'] leading-none">2 PM</div>
      </div>
      <div className="w-[1156px] justify-start items-start gap-3 inline-flex">
        <div className="w-9 text-sky-200 text-xs font-semibold font-normal['Inter'] leading-none">3 PM</div>
        <div className="w-[1012px] self-stretch justify-start items-start flex">
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
        </div>
        <div className="w-9 text-sky-200 text-xs font-semibold font-normal['Inter'] leading-none">3 PM</div>
      </div>
      <div className="w-[1156px] justify-start items-start gap-3 inline-flex">
        <div className="w-9 text-sky-200 text-xs font-semibold font-normal['Inter'] leading-none">4 PM</div>
        <div className="w-[1012px] self-stretch justify-start items-start flex">
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
          <div className="w-[144.57px] bg-sky-200 shadow-inner flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-9 bg-sky-200 shadow-inner" />
            <div className="self-stretch h-9 bg-sky-200" />
          </div>
        </div>
        <div className="w-9 text-sky-200 text-xs font-semibold font-normalInter'] leading-none">4 PM</div>

      </div>
    </div>
    <div className="w-[32.08px] h-[39.32px] left-[141px] top-[16px] absolute">
    </div>
  </div>
  <div className="w-[184px] p-1 left-[1352px] top-[56px] absolute bg-zinc-100 rounded justify-start items-center gap-2 inline-flex">
    <div className="w-5 h-5 relative" />
    <div className="relative">
        <input
            type="text"
            placeholder="Buscar"
            className="grow shrink basis-0 text-zinc-400 text-xxs font-normal font-['arial'] leading-none bg-transparent outline-none border-none pr-6"
        />
        <IoIosSearch color='black' size={25} className="absolute right-12 top-0 mt-0" />
    </div>
</div>


    <div className="left-[15px] top-[851px] absolute justify-start items-center gap-3 inline-flex">
      <div className="w-6 h-6 relative" />
    </div>
  </div>

        
    </>
    
  )
}

export default Calendario