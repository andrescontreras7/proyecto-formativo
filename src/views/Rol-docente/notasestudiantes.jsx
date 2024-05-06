import React, { useState } from 'react';

const NotasView = () => {
  const [selectedDocente, setSelectedDocente] = useState('');
  const [selectedGrado, setSelectedGrado] = useState('');
  const [selectedAsignatura, setSelectedAsignatura] = useState('');
  const [selectedPeriodo, setSelectedPeriodo] = useState('');

  const notasData = [
    { id: 1, nombre: 'Alonso Yamith', logros: [8, 2, 2], porcentaje: 30 },
    { id: 2, nombre: 'Otro Estudiante', logros: [2, 8, 1], porcentaje: 38 },
    { id: 3, nombre: 'Otro Estudiante 2', logros: [4, 2, 4], porcentaje: 40 },
  ];

  const handleVisualizarNotas = () => {
    // Lógica para visualizar notas
  };

  const handleGuardarNotas = () => {
    // Lógica para guardar notas
  };

  return (
    <div className="bg-blue-500 h-screen p-4 flex flex-col">
      {/* Filtros */}
      <div className="flex items-center justify-center mb-4">
        <select
          name=""
          className="h-[45px] w-[11%] mr-2 p-1 rounded-lg"
          id="filtro"
        >
          <option value="">Grado</option>
          <option value="">Grado 1° A</option>
          <option value="">Grado 1° B</option>
          <option value="">Grado 2° A</option>
          <option value="">Grado 2° B</option>
          <option value="">Grado 3° A</option>
          <option value="">Grado 3° B</option>
        </select>
        <select
          name=""
          className="h-[45px] w-[11%] p-1 rounded-lg"
          id="filtro1"
        >
          <option value="">Jornada</option>
          <option value="">Mañana</option>
          <option value="">Tarde</option>
        </select>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto bg-white p-4 flex-1">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="bg-blue-200 border p-2"></th>
              <th className="bg-blue-200 border p-2">N°</th>
              <th className="border p-2">Nombre del Estudiante</th>
              <th className="border p-2">Logro 1 - Cognitivo</th>
              <th className="border p-2">Logro 2 - Actitudinal</th>
              <th className="border p-2">Logro 3 - Actividad Rentar</th>
              <th className="border p-2"></th>
              <th className="border p-2">Definitiva</th>
            </tr>
          </thead>
          <tbody>
            {notasData.map((logros, index) => (
              <tr key={logros.id}>
                <td className="border p-2">
                  <input type="checkbox" />
                </td>
                <td className="border p-2">{index + 1}</td>
                <td className="border p-2">{logros.nombre}</td>
                <td className="border p-2">
                  {logros.logros.map((logro, idx) => (
                    <span key={idx} className="inline-block bg-gray-300 rounded-full p-2 m-1">
                      {logro}
                    </span>
                  ))}
                </td>
                <td className="border p-2">
                  {/* Agrega aquí los logros del segundo tipo */}
                  
                  {logros.logros.map((logro, idx) => (
                    <span key={idx} className="inline-block bg-gray-300 rounded-full p-2 m-1">
                      {logro}
                    </span>
                  ))}
                </td>
                <td className="border p-2">
                  {/* Agrega aquí los logros del tercer tipo */}
                  
                  {logros.logros.map((logro, idx) => (
                    <span key={idx} className="inline-block bg-gray-300 rounded-full p-2 m-1">
                      {logro}
                    </span>
                  ))}
                </td>
                <td className="border p-2">{`${logros.porcentaje}%`}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-between mt-4">
          <button
            className="bg-indigo-500 text-white py-2 px-4 rounded"
            onClick={handleVisualizarNotas}
          >
            Visualizar Notas
          </button>
          <button
            className="bg-indigo-500 text-white py-2 px-4 rounded"
            onClick={handleGuardarNotas}
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotasView;
