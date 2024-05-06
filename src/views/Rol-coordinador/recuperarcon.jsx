import React, { useState } from 'react';
import { BiUser, BiLock, BiShow, BiHide } from 'react-icons/bi';


const Recuperar = () => {
  
  const handleSave = () => {
    // Implementa la lógica para guardar la nueva contraseña
    // Puedes validar que la contraseña actual sea correcta y que la nueva y la confirmación coincidan
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
    <div className="bg-[#A6DCF1] h-screen flex ">
      <Asidecon />
      <div className="flex-1 bg-[#B3D6DD] p-20 ">
        <div className=" bg-[#B3D6DD] p-8 rounded-md shadow-md h-full">
          <div className="flex items-center justify-center mb-10 text-black ">
            <BiUser className="text-5xl mr-8" />
            <h1 className="text-2xl font-bold">Julian Londoño</h1>
          </div>

          <h1 className="text-black mb-8 text-3xl ">
            Aquí podrás modificar la contraseña con la que accedes.
          </h1>
          <form className="flex flex-col gap-4">
            {/* Contraseña actual */}
            <div className="flex flex-col items-start relative">
              <label className="text-black text-lg mb-2">Contraseña actual</label>
              <div className="relative w-2/5">
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

            {/* Contraseña nueva */}
            <div className="flex flex-col items-start relative">
              <label className="text-black text-lg mb-2">Contraseña nueva</label>
              <div className="relative w-2/5">
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

            {/* Confirmar contraseña nueva */}
            <div className="flex flex-col items-start relative">
              <label className="text-black text-lg mb-2">Confirmar contraseña nueva </label>
              <div className="relative w-2/5">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  className="w-full p-2 border rounded bg-transparent text-black pl-6 pr-4"
                  placeholder="Confirma tu nueva contraseña"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
                  {showConfirmPassword ? (
                    <BiShow
                      className="cursor-pointer text-black"
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

            {/* Botón de guardar centrado */}
            <div className="flex justify-center">
              <button
                type="button"
                className="bg-indigo-500 text-white px-4 py-2 rounded"
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

export default Recuperar;
