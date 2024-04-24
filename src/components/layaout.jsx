import React from 'react';
import { useNavigate } from 'react-router-dom';
import  { useState, useEffect, useContext } from "react"; 
import Aside from "./_aside";
import Navbar from "./_navbar";
import { counterContext } from "../../context/CRMcontext";





const Layout = ({ children, titulo, icono }) => {


    const {auth} = useContext(counterContext);
    const navigate = useNavigate();
/* validacion del token de autenticacion, accedo a el mediante el contexto que cree para luego validar que haya iniciado session
mediante el token de autenticacion */
    useEffect(() => {    
        if (!auth.token) {
        
            navigate('/');
        }
    }, [auth, navigate]);

   



    return (
        <div className="flex h-[100%] overflow-y-scroll bg-[#91b1ce]"> 
            <aside className="w-[13%] max-[1400px]:w-[16%]">
                <Aside rol={auth.rol}    />
            </aside>
            <div className="w-[95%]  flex-col max-[1400px]:w-[95%]">
                <div className='h-full'> 
                    <nav className='flex w-[100%] flex-col justify-center items-center '>
                        <Navbar />
                        <div className='w-full flex  items-center gap-1   p-2'>
                            <button>{icono}</button> <h1 className='font-normal  text-gray-800 text-xl'>     {titulo}</h1>
                        </div>
                    </nav>
                    <main className='   w-[97%] m-auto '> 
                        <div>{children}</div>
                        
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Layout;