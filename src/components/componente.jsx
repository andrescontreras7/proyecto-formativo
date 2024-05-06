
import { Link } from 'react-router-dom';
import React from 'react';

export default function componente({titulo, descripcion,src, to }) {
  return (
    <div>
    <Link to={to} className=' col-span-2 '  >
        <button className=' col-span-full   p-4 duration-300 border hover:border-[#4A55A2] bg-[#6f99e1] bg-opacity-25  shadow-md hover:shadow-2xl   flex-col items-center   rounded-md h-[18rem] w-[19rem] '> 
        <div className='overflow-hidden'>
                  <img src={src} className=' size-1 w-[100%] rounded-md h-[6rem] ' alt=" " />
            <h1 className='font-medium text-xl text-left  '>{titulo} </h1>
        <p className='font-normal text-gray-700 text-left'> {descripcion} </p>        
      </div>
    </button>
</Link>
      
    </div>
  );
}
