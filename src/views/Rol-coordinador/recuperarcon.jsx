import React, { useState } from 'react';
import { BiUser, BiLock, BiShow, BiHide } from 'react-icons/bi';


import Asidecon from '../../components/_asideconfi';

const Recuperar1 = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSave = () => {

    console.log('Contraseña guardada');
  };

  const togglePasswordVisibility = (type) => {
    switch (type) {
      case 'current':
        setShowCurrentPassword(!showCurrentPassword);
        break;
      case 'new':
        setShowNewPassword(!showNewPassword);
        break;
      case 'confirm':
        setShowConfirmPassword(!showConfirmPassword);
        break;
      default:
        break;
    }
  };

  return (
    
    
    <div className=" bg-indigo-500  h-screen flex ">
         <Asidecon/>
      <div className="flex-1 bg-[#F3F3F4] p-20 ">
        <div className=" bg-[#F3F3F4] p-8 rounded-md shadow-md h-full">
          <div className="flex items-center justify-center mb-10 text-black ">
            <BiUser className="text-5xl mr-8" />
            <h1 className="text-2xl font-bold">Julian Londoño</h1>
          </div>
         
          <h1 className="text-black mb-6">
            Aquí podrás modificar la contraseña con la que accedes.
          </h1>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col items-start">
              <label className="text-black text-lg mb-6">Contraseña actual</label>
              <div className="relative w-full">
                <input
                  type={showCurrentPassword ? 'text' : 'password'}
                  className="w-full p-2 border rounded bg-transparent text-black pl-8 pr-4"
                  placeholder="Ingresa tu contraseña actual"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
                <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
                  {showCurrentPassword ? (
                    <BiShow
                      className="cursor-pointer text-black"
                      onClick={() => togglePasswordVisibility('current')}
                    />
                  ) : (
                    <BiHide
                      className="cursor-pointer text-black"
                      onClick={() => togglePasswordVisibility('current')}
                    />
                  )}
                </div>
                <BiLock className="absolute top-1/2 left-2 transform -translate-y-1/2 text-black" />
              </div>
            </div>
            <div className="flex flex-col items-start">
              <label className="text-black text-lg mb-6">Contraseña nueva</label>
              <div className="relative w-full">
                <input
                  type={showNewPassword ? 'text' : 'password'}
                  className="w-full p-2 border rounded bg-transparent text-black pl-8 pr-4"
                  placeholder="Ingresa tu nueva contraseña"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
                  {showNewPassword ? (
                    <BiShow
                      className="cursor-pointer text-black"
                      onClick={() => togglePasswordVisibility('new')}
                    />
                  ) : (
                    <BiHide
                      className="cursor-pointer text-black"
                      onClick={() => togglePasswordVisibility('new')}
                    />
                  )}
                </div>
                <BiLock className="absolute top-1/2 left-2 transform -translate-y-1/2 text-black" />
              </div>
            </div>
            <div className="flex flex-col items-start">
              <label className="text-black text-lg mb-6">Confirmar contraseña nueva </label>
              <div className="relative w-full">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  className="w-full p-2 border rounded bg-transparent text-black pl-8 pr-4"
                  placeholder="Confirma tu nueva contraseña"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
                  {showConfirmPassword ? (
                    <BiShow
                      className="cursor-pointer text-black "
                      onClick={() => togglePasswordVisibility('confirm')}
                    />
                  ) : (
                    <BiHide
                      className="cursor-pointer text-black"
                      onClick={() => togglePasswordVisibility('confirm')}
                    />
                  )}
                </div>
                <BiLock className="absolute top-1/2 left-2 transform -translate-y-1/2 text-black" />
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="bg-indigo-500 text-white px-4 py-4 rounded"
                onClick={handleSave}
              >
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
   
   
  );
};

export default Recuperar1;
