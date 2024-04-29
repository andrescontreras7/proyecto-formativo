import React, { useState, useEffect } from 'react';
import { counterContext } from '../../context/CRMcontext';


const Statecom = ({ children }) => {
  const [auth, guardarToken] = useState(() => {
    const savedAuth = localStorage.getItem('auth');
    if (savedAuth) {
      return JSON.parse(savedAuth);
    } else {
      return { token: "", autenticado: false };
    }
  });

  useEffect(() => {
    localStorage.setItem('auth', JSON.stringify(auth));
    
  }, [auth]);

  const cerrarSesion = () => {
    localStorage.removeItem('auth'); 
    console.log("token borrado pa")
   
  };

  return (
    <counterContext.Provider value={{auth, guardarToken,cerrarSesion}}>
      {children}
    </counterContext.Provider>
  );
}

export default Statecom;