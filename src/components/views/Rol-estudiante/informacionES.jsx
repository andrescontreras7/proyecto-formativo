import { useState } from 'react';
import Asidecon from '../../_asideconfi';

const Informacion = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    direccion: '',
    numeroDocumento: '',
    tipoDocumento: '',
    numeroTelefono: '',
  });

  const [profilePicture, setProfilePicture] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDeletePhoto = () => {
    setProfilePicture(null);
    console.log('Foto eliminada');
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    setProfilePicture(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    // Include logic to save changes, including the profile picture
  };

  return (
    <div className="bg-[#A6DCF1] h-screen flex ">
         <Asidecon/>
    <div className='flex flex-col mx-auto w-full p-4 bg-[#A6DCF1]'>
      <div className='flex'>
        <div className='w-2/3 bg-[#A6DCF1] p-6 rounded shadow'>
          <h2 className='text-3xl font-bold mb-4'>Información Básica</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 ...">
                <div className='flex flex-wrap mb-4'>
                  <div className='w-full sm:w-2/3 pr-2 mb-4 sm:mb-0 flow-root'>
                    <div className='sm:w-1/2 float-left'>
                      <label htmlFor='nombre' className='block font-bold mb-'>
                        Nombre:
                      </label>
                      <input
                        type='text'
                        name='nombre'
                        placeholder=' Juan'
                        value={formData.nombre}
                        onChange={handleChange}
                        className='border p-2 rounded'
                      />
                    </div>
                    <div className='sm:w-2/1  float-left'>
                      <label htmlFor='apellido' className='block font-bold mb-2'>
                        Apellido:
                      </label>
                      <input
                        type='text'
                        name='apellido'
                        placeholder=' Pérez'
                        value={formData.apellido}
                        onChange={handleChange}
                        className='border p-2 rounded'
                      />
                    </div>
                  </div>
                </div>
                <div className='mb-4'>
                    <label htmlFor='correo' className='block font-bold mb-2'>
                      Correo:
                    </label>
                    <input
                      type='email'
                      name='correo'
                      placeholder=' juanprez2021.com'
                      value={formData.correo}
                      onChange={handleChange}
                      className='border p-2 rounded w-3/5'
                    />
                  </div>
                  <div className='mb-4'>
                    <label htmlFor='correo' className='block font-bold mb-2'>
                      Correo:
                    </label>
                    <input
                      type='text'
                      name='Direccion'
                      placeholder='calle del jambre'
                      value={formData.correo}
                      onChange={handleChange}
                      className='border p-2 rounded w-3/5'
                    />
                  </div>
                  <div className='mb-4'>
                    <label htmlFor='correo' className='block font-bold mb-2'>
                      Correo:
                    </label>
                    <input
                      type='text'
                      name='Bario'
                      placeholder=' Gardenias'
                      value={formData.correo}
                      onChange={handleChange}
                      className='border p-2 rounded w-3/5'
                    />
                  </div>
                  <div className='mb-4'>
                    <label htmlFor='correo' className='block font-bold mb-2'>
                      Correo:
                    </label>
                    <input
                      type='number'
                      name='Numero de cedular'
                      placeholder=' 30488577'
                      value={formData.correo}
                      onChange={handleChange}
                      className='border p-2 rounded w-3/5 rounded border'
                    />
                  </div>
              </div>
              <div className="...">
                <div className='mb-4'>
                  <label htmlFor='profilePicture' className='block font-bold mb-2'>
                    Foto de Perfil:
                  </label>
                  <div className='flex items-center space-x-2 mb-2'>
                    <input
                      type='file'
                      id='profilePicture'
                      name='profilePicture'
                      accept='image/*'
                      onChange={handleProfilePictureChange}
                    />
                    <label htmlFor='profilePicture' className='cursor-pointer'>
                      <span className='text-blue-500'>Cambiar foto</span>
                    </label>
                  </div>
                  {profilePicture && (
                    <div className='mb-2'>
                      <img
                        src={URL.createObjectURL(profilePicture)}
                        alt='Profile'
                        className='w-20 h-20 object-cover rounded-full '
                      />
                    </div>
                  )}
                  {profilePicture && (
                    <button
                      type='button'
                      onClick={handleDeletePhoto}
                      className='text-red-500 cursor-pointer rounded-full'
                    >
                      Eliminar foto
                    </button>
                  )}
                </div>
                <div className='flex items-center space-x-2'>
                  <button type='submit' className='bg-purple-500 text-white p-2 rounded'>
                    Guardar Cambios
                  </button>
                </div>
              </div>
            </div>
            
            
            
            
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Informacion;
