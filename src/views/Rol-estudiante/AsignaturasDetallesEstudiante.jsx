import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react'
import Tabs from "../../components/tabsEstudiante";
import AnimatedPage from '../../components/animatedPage';
import Layout from '../../components/layaout';

const AsignaturasDetallesEstudiante = () => {
  const[padding, setPading] = useState()
  const[color, setColor] = useState()


  const click = () =>{
  
   
    

  
  if (padding>800){
    setPading(0) 
    setColor('#925FE2')

  }

  else{
    setPading(2000) 
    setColor('white')

  }
 


  }
  return (
   <Layout>

<div className=' pb-2 w-full bg-[#ffffff]   h-[89vh]     shadow-[0_8px_20px_12px_rgba(0,0,0,0.08)]   rounded-md       '>
     
     
<nav className="p-2  ">
        
   <div className='flex justify-center bg-[#626cb8]  rounded-md mb-2  '>
   <Tabs className/>

  </div>
</nav>
       
        <div>
          
              <Outlet >
              
              </Outlet>
        </div>
            
  </div>
 


   
   </Layout>
  );
}

export default AsignaturasDetallesEstudiante;
