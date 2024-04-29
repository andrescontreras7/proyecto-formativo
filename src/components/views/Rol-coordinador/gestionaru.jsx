import { useState } from 'react';

const Gestionaru = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    direccion: '',
    numeroCedula: '',
    tipoDocumento: '',
    rol: '',
    usuario: '',
    contrasena: '',
    huella: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica para enviar o procesar la información del formulario
    console.log('Formulario enviado:', formData);
  };

  return (
    <>
      <div className='flex  min-h-screen bg-[#A6DCF1]'>
        <Aside />
        <div className='flex flex-col mx-auto w-2/3 p-4 bg-[#A6DCF1]'>
          <input
            type='text'
            name='search'
            placeholder='Buscar por nombre, apellido, correo, etc.'
            className='border p-2 rounded mb-4'
          />
          <form onSubmit={handleSubmit} className='bg-[#A6DCF1] p-6 rounded shadow'>
            <div className='flex mb-4'>
              <div className='w-1/2 pr-2'>
                <label htmlFor='nombre'>Nombre:</label>
                <input
                  type='text'
                  name='nombre'
                  value={formData.nombre}
                  onChange={handleChange}
                  className='border p-2 rounded w-full'
                />
              </div>
              <div className='w-1/2 pl-2'>
                <label htmlFor='apellido'>Apellido:</label>
                <input
                  type='text'
                  name='apellido'
                  value={formData.apellido}
                  onChange={handleChange}
                  className='border p-2 rounded w-full'
                />
              </div>
            </div>

            <div className='mb-4'>
              <label htmlFor='correo'>Correo:</label>
              <input
                type='email'
                name='correo'
                value={formData.correo}
                onChange={handleChange}
                className='border p-2 rounded w-full'
              />
            </div>

            <div className='mb-4'>
              <label htmlFor='direccion'>Dirección:</label>
              <input
                type='text'
                name='direccion'
                value={formData.direccion}
                onChange={handleChange}
                className='border p-2 rounded w-full'
              />
            </div>

            <div className='mb-4'>
              <label htmlFor='numeroCedula'>Número de Cédula:</label>
              <input
                type='text'
                name='numeroCedula'
                value={formData.numeroCedula}
                onChange={handleChange}
                className='border p-2 rounded w-full'
              />
            </div>

            <div className='flex mb-4'>
              <div className='w-1/2 pr-2'>
                <label htmlFor='tipoDocumento'>Tipo de Documento:</label>
                <select
                  name='tipoDocumento'
                  value={formData.tipoDocumento}
                  onChange={handleChange}
                  className='border p-2 rounded w-full'
                >
                  <option value=''>Seleccionar</option>
                  <option value='cedula'>Cédula</option>
                  <option value='tarjetaIdentidad'>Tarjeta de Identidad</option>
                </select>
              </div>
              <div className='w-1/2 pl-2'>
                <label htmlFor='rol'>Rol:</label>
                <input
                  type='text'
                  name='rol'
                  value={formData.rol}
                  onChange={handleChange}
                  className='border p-2 rounded w-full'
                />
              </div>
            </div>
            <div className='w-1/2 pr-2'></div>
            <div className='mb-4'>
              <label htmlFor='usuario'>Usuario:</label>
              <input
                type='text'
                name='usuario'
                value={formData.usuario}
                onChange={handleChange}
                className='border p-2 rounded w-full'
              />
            </div>
            <div className='w-1/2 pr-2'>
            <div className='mb-4'>
              <label htmlFor='contrasena'>Contraseña:</label>
              <input
                type='password'
                name='contrasena'
                value={formData.contrasena}
                onChange={handleChange}
                className='border p-2 rounded w-full'
              />
            </div>
            </div>
            <div className='flex items-center space-x-2'>
              <button type='submit' className='bg-purple-500 text-white p-2 rounded'>
                Generar
              </button>
              <button type='button' className='bg-purple-500 text-white p-2 rounded'>
                Registrar Huella
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Gestionaru;
