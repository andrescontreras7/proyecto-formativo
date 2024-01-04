import React, { useState } from 'react';
import { BiUser, BiLock, BiShow, BiHide } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';

const Recuperar = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
    <div className="bg-[#A6DCF1] h-screen flex">
      
      <div className="flex-1 bg-[#65C1CD] p-8">
        <div className="flex items-center justify-center mb-4 text-black">
          <BiUser className="text-4xl mr-2" />
          <h1 className="text-2xl font-bold">Contraseña</h1>
        </div>
        <h1 className="text-black mb-4">
          Aquí podrás modificar la contraseña con la que accedes.
        </h1>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col items-start">
            <label className="text-black text-sm mb-2">Contraseña actual</label>
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
            <label className="text-black text-sm mb-2">Contraseña nueva</label>
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
            <label className="text-black text-sm mb-2">Confirmar contraseña</label>
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
              className="bg-indigo-500 text-white px-4 py-2 rounded"
              onClick={handleSave}
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Recuperar;