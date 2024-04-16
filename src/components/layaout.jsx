import React from 'react';
import Aside from "./_aside";
import Navbar from "./_navbar";

const Layout = ({ children }) => {
    return (
        <div className="flex h-full   bg-[#C5DFF8]">
            <aside className="w-[15%]    ">
                <Aside />
            </aside>
            <div className="m-auto flex-col xl:w-[83%]   w-[80%]">
                <div>
                    <nav className=' fixed top-0 left-50 w-full   bg-white shadow'>
                        <Navbar />
                    </nav>
                    <main className='h-screen mx-auto '>
                        <div>{children}</div>
                    </main>
                </div>
                <footer className='fixed  bottom-0 left-50 w-full bg-[#7895CB] '>
                    <p className='text-center'>Powered by Andres cavadia</p>
                </footer>
            </div>
        </div>
    );
};

export default Layout;
