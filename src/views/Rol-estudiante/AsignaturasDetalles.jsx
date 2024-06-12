import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react'
import Tabs from "../../components/tabs";
import AnimatedPage from '../../components/animatedPage';
import Layout from '../../components/layaout';

const AsignaturasDetalles = () => {
 


  
  return (
    <Layout>
    <div className="pb-2 w-full bg-[#ffffff] h-[89vh] shadow-[0_8px_20px_12px_rgba(0,0,0,0.08)] rounded-md">
      <nav className="p-2">
        <div className="flex justify-center bg-[#e7e8f0] rounded-md mb-2">
          <Tabs />
        </div>
      </nav>
      <div className=' '>
        <Outlet />
      </div>
    </div>
  </Layout>
  );
}

export default AsignaturasDetalles;
