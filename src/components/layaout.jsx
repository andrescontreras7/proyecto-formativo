import React from 'react';
import Aside from "./_aside";
import Navbar from "./_navbar";

const Layout = ({ children }) => {
    return (
        <div className="flex h-full   bg-[#A0BFE0]">
            <aside className="w-[13%]     ">
                <Aside />
            </aside>
            <div className="m-auto flex-col xl:w-[83%]   w-[80%]">
                <div>
                    <nav className=' fixed top-0 left-50 w-full   bg-white shadow'>
                        <Navbar />
                    </nav>
                    <main className='h-screen  m-auto shadow-xl shadow-gray-500   '>
                        <div>{children}</div>
                    </main>
                </div>
             
            </div>
        </div>
    );
};

export default Layout;
