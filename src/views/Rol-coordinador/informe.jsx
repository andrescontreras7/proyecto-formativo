import React, { useState } from 'react';
import Layout from "../../components/layaout";

const students = [
  { id: '1', name: 'Juan Pérez', grade: '10' },
  { id: '2', name: 'Ana Gómez', grade: '9' },
  { id: '3', name: 'Carlos Sánchez', grade: '11'},
  { id: '4', name: 'Steven Gonzalez', grade: '8'},
  { id: '5', name: 'yonier pertuz', grade: '11'},
  { id: '6', name: 'el loco santiago', grade: '7'},
  { id: '7', name: 'Carlos Sánchez', grade: '2'},
  { id: '8', name: 'Carlos Sánchez', grade: '3'},
  // añadir más estudiantes
];

const Informe = () => {
  const [filterGrade, setFilterGrade] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStudents = students.filter(student => {
    return student.grade.includes(filterGrade) && student.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <Layout titulo={"Observadores de informe"}>
      <div className="container mx-auto py-4 p-2 bg-[#D2DCEF] mb-2 flex justify-center red rounded-lg">
        <div className="flex flex-col md:flex-row justify-center items-center w-full md:w-1/2">
          <div className="w-full mb-2 md:mb-0 text-center">
            <label htmlFor="gradeFilter" className="mr-2">Filtrar por grado:</label>
            <select id="gradeFilter" className="border p-2 rounded" onChange={(e) => setFilterGrade(e.target.value)}>
              <option value="">Todos</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
            </select>
            <input type="text" placeholder="Buscar por nombre..." className="border p-2 rounded ml-2" onChange={(e) => setSearchTerm(e.target.value)} />
          </div>
        </div>
      </div>
      <div className="container mx-auto p-4">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg">
            <thead>
              <tr className="bg-[#626CB8] text-white">
                <th className="py-2 px-4">N°</th>
                <th className="py-2 px-4">Nombre del Estudiante</th>
                <th className="py-2 px-4">Grado</th>
                <th className="py-2 px-4">Observador Académico</th>
                <th className="py-2 px-4">Observador Convivencia</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student, index) => (
                <tr key={index} className="text-center">
                  <td className="py-2 px-4 border-b">{student.id}</td>
                  <td className="py-2 px-4 border-b">{student.name}</td>
                  <td className="py-2 px-4 border-b">{student.grade} °</td>
                  <td className="py-2 px-4 border-b">
                    <button className="bg-[#626CB8] text-white px-6 py-1 rounded hover:bg-indigo-600">
                      Generar
                    </button>
                  </td>
                  <td className="py-2 px-4 border-b">
                    <button className="bg-[#626CB8] text-white px-6 py-1 rounded hover:bg-indigo-600">
                      Generar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Informe;