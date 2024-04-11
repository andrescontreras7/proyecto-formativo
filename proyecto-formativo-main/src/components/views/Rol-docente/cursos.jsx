import React from 'react';
import Aside from './AsideDO';
import { BsSearch } from "react-icons/bs";

const Cursos = () => {
  return (
    <div className='bg-[#A6DCF1] min-h-screen flex justify-start'>
      <Aside />
      <div className='bg-violet-500 bg-opacity-40 px-5 py-3 rounded-xl absolute top-5 left-80 right-1 max-w-6xl flex justify-between' style={{ marginLeft: '90px' }}>
        <div className="text-black text-xl font-semibold max-w-max mx-auto">Asignaturas</div>
      </div>

      <div className="justify text-center mt-20" style={{ marginLeft: '510px', marginTop: '120px' }}>
        <div className="flex gap-2.5 px-5 text-base whitespace-nowrap">
          <div className="relative">
            <input type="text" placeholder='Buscar asignatura' className="mx-auto block w-64 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" />
            <BsSearch className='absolute right-0 top-0 mt-2 mr-4' size={24} />
          </div>

          <div className="my-auto font-extrabold tracking-wide text-center leading-[150%] text-black text-opacity-80">
            FILTRAR
          </div>

          <div className="my-auto flex justify-between items-center py-2 pr-10 pl-10 rounded-2xl bg-white text-neutral-400">
            <select>
              <option value="opcion1">Español</option>
              <option value="opcion2">Inglés</option>
              <option value="opcion3">Naturales</option>
            </select>
          </div>
        </div>
      </div>
      {/* scroll para las tarjetas */}
      <div className="justify text-center overflow-y-auto " style={{ margin: 'auto', display: 'flex', marginLeft: '-800px', gap: '20px', maxHeight: '50vh', padding: '0 20px' }}>
        {/* Columna 1 */}
        <div>
          {/* Fila 1 */}
          <div className="flex flex-col">
            {/* Card 1 */}
            <button className="rounded-lg overflow-hidden mb-5">
              <img src="public/español.png" alt="" className="w-full h-auto object-cover" style={{ maxHeight: '200px' }} draggable="false" />
            </button>
            {/* Card 2 */}
            <button className="rounded-lg overflow-hidden mb-5">
              <img src="public\naturales.png" alt="" className="w-full h-auto object-cover" style={{ maxHeight: '200px' }} draggable="false" />
            </button>
            {/* Card 3 */}
            <button className="rounded-lg overflow-hidden mb-5">
              <img src="public\ingles.png" alt="" className="w-full h-auto object-cover" style={{ maxHeight: '200px' }} draggable="false" />
            </button>
          </div>
        </div>

        {/* Columna 2 */}
        <div>
          {/* Fila 2 */}
          <div className="flex flex-col">
            {/* Card 4 */}
            <button className="rounded-lg overflow-hidden mb-5">
              <img src="public\ingles.png" alt="" className="w-full h-auto object-cover" style={{ maxHeight: '200px' }} draggable="false" />
            </button>
            {/* Card 5 */}
            <button className="rounded-lg overflow-hidden mb-5">
              <img src="public/español.png" alt="" className="w-full h-auto object-cover" style={{ maxHeight: '200px' }} draggable="false" />
            </button>
            {/* Card 6 */}
            <button className="rounded-lg overflow-hidden mb-5">
              <img src="public\ingles.png" alt="" className="w-full h-auto object-cover" style={{ maxHeight: '200px' }} draggable="false" />
            </button>
          </div>
        </div>

        {/* Columna 3 */}
        <div>
          {/* Fila 3 */}
          <div className="flex flex-col">
            {/* Card 7 */}
            <button className="rounded-lg overflow-hidden mb-5">
              <img src="public/español.png" alt="" className="w-full h-auto object-cover" style={{ maxHeight: '200px' }} draggable="false" />
            </button>
            {/* Card 8 */}
            <button className="rounded-lg overflow-hidden mb-5">
              <img src="public/español.png" alt="" className="w-full h-auto object-cover" style={{ maxHeight: '200px' }} draggable="false" />
            </button>
            {/* Card 9 */}
            <button className="rounded-lg overflow-hidden mb-5">
              <img src="public\ingles.png" alt="" className="w-full h-auto object-cover" style={{ maxHeight: '200px' }} draggable="false" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cursos;
