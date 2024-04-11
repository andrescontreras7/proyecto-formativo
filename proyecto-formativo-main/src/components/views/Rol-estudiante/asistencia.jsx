import React from 'react';

const Asistencia = () => {
  return (
    <div className="p-8  bg-purple-300 bg-opacity-30  shadow-[0_8px_20px_20px_rgba(0,0,0,0.08)] h-[80%] rounded-3xl ">
      
      <h1 className='text-center font-bold   text-[2rem] mb-8'>Tus Asistencias <p className='text-gray-600 text-start font-bold text-[1rem] mb-8' >13 mayo de 2004</p> </h1>
      <table className='w-full border-t border-4 rounded-2xl'>
        <thead>
          <tr className='border-[4px] text-gray-500'>
            <th className='p-4 text-left'>Dia</th>
            <th className='p-4 text-left'>Hora</th>
            <th className='p-4 text-left'>Asignatura</th>
            <th className='p-4 text-left'>Anotaciones</th>
            <th className='p-4 text-left'>Asistencia</th>
          </tr>
        </thead>
        <tbody className='font-semibold'>
          <tr className='border-[1px]'>
            <td className='p-4'>Lunes</td>
            <td className='p-4'>6:30AM</td>
            <td className='p-4'>Castellano</td>
            <td className='p-4'>Llego tarde</td>
            <td className='p-4'>Presente</td>
          </tr>
          <tr className='border-[1px]'>
            <td className='p-4'>Martes</td>
            <td className='p-4'>8:00AM</td>
            <td className='p-4'>Matemáticas</td>
            <td className='p-4'>-</td>
            <td className='p-4'>Ausente</td>
          </tr>
          <tr className='border-[1px]'>
            <td className='p-4'>Miércoles</td>
            <td className='p-4'>10:30AM</td>
            <td className='p-4'>Historia</td>
            <td className='p-4'>-</td>
            <td className='p-4'>Presente</td>
          </tr>
          <tr className='border-[1px]'>
            <td className='p-4'>Jueves</td>
            <td className='p-4'>9:00AM</td>
            <td className='p-4'>Ciencias</td>
            <td className='p-4'>Junior tu papa</td>
            <td className='p-4'>Presente</td>
          </tr>
          <tr className='border-[1px]'>
            <td className='p-4'>Viernes</td>
            <td className='p-4'>11:30AM</td>
            <td className='p-4'>Inglés</td>
            <td className='p-4'>-</td>
            <td className='p-4'>Ausente</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Asistencia;