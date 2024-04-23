import React from 'react';
import Aside from "./_aside";
import Navbar from "./_navbar";


const Layout = ({ children, titulo, icono }) => {
    return (
        <div className="flex h-[100%] overflow-y-scroll bg-[#91b1ce]"> {/* Cambia h-[80%] por h-screen */}
            <aside className="w-[13%] max-[1400px]:w-[16%]">
                <Aside />
            </aside>
            <div className="w-[95%]  flex-col max-[1400px]:w-[95%]">
                <div className='h-full'> {/* Cambia h-[100%] por h-full */}
                    <nav className='flex w-[100%] flex-col justify-center items-center '>
                        <Navbar />
                        <div className='w-full flex  items-center gap-1   p-2'>
                            <button>{icono}</button> <h1 className='font-normal  text-gray-800 text-xl'>     {titulo}</h1>
                        </div>
                    </nav>
                    <main className='   w-[97%] m-auto '> {/* Cambia h- por h-full */}
                        <div>{children}</div>
                        
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Layout;