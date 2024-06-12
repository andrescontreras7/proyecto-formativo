import React, { useState } from 'react';
import Layout from '../components/layaout';


const ResetPassword = () => {
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
 
 //    
    } catch (error) {
      
    }
  };

  return (

     <form onSubmit={handleSubmit}>
      <label>
        Nueva contraseña:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Restablecer contraseña</button>
    </form>

  
  );
};

export default ResetPassword;