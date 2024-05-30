import React, { useState } from "react";
import DataTable from "react-data-table-component";
import Layout from "../../components/layaout";

// Datos de ejemplo
const data = [
  {
    id: 1,
    nombre: "Juan Pérez",
    cedula: "123456789",
    asistencia: "Presente",
    registro: "2024-05-30",
  },
  {
    id: 2,
    nombre: "Ana Gómez",
    cedula: "987654321",
    asistencia: "Ausente",
    registro: "2024-05-30",
  },
  {
    id: 3,
    nombre: "Juan Pérez",
    cedula: "123456789",
    asistencia: "Presente",
    registro: "2024-05-30",
  },
  {
    id: 4,
    nombre: "Ana Gómez",
    cedula: "987654321",
    asistencia: "Ausente",
    registro: "2024-05-30",
  },
  {
    id: 5,
    nombre: "Juan Pérez",
    cedula: "123456789",
    asistencia: "Presente",
    registro: "2024-05-30",
  },
  {
    id: 6,
    nombre: "Ana Gómez",
    cedula: "987654321",
    asistencia: "Ausente",
    registro: "2024-05-30",
  },
  {
    id: 7,
    nombre: "Juan Pérez",
    cedula: "123456789",
    asistencia: "Presente",
    registro: "2024-05-30",
  },
  {
    id: 8,
    nombre: "Ana Gómez",
    cedula: "987654321",
    asistencia: "Ausente",
    registro: "2024-05-30",
  },
  // ... otros datos
];

// Definición de las columnas
const columns = [
  { name: "No.l", selector: (row) => row.id, sortable: true },
  { name: "Nombre", selector: (row) => row.nombre, sortable: true },
  { name: "Cédula", selector: (row) => row.cedula, sortable: true },
  { name: "Asistencia", selector: (row) => row.asistencia, sortable: true },
  {
    name: "Registro de Asistencia",
    selector: (row) => row.registro,
    sortable: true,
  },
];

// Función para calcular estadísticas de asistencia
const calcularEstadisticas = (data) => {
  const total = data.length;
  const presentes = data.filter((d) => d.asistencia === "Presente").length;
  const ausentes = data.filter((d) => d.asistencia === "Ausente").length;
  const retardo = data.filter(
    (d) => d.asistencia === "Presente con Retardo"
  ).length; // Asumiendo que hay un valor para "Presente con Retardo"
  const porcentajeAsistencia = ((presentes + retardo) / total) * 100;

  return {
    total,
    presentes,
    ausentes,
    retardo,
    porcentajeAsistencia,
  };
};

// Componente principal
const AsistenciaDocente = () => {
  const { total, presentes, retardo, porcentajeAsistencia } =
    calcularEstadisticas(data);

  const [grado, setGrado] = useState("");
  const [jornada, setJornada] = useState("");

  const handleGradoChange = (event) => {
    setGrado(event.target.value);
  };

  const handleJornadaChange = (event) => {
    setJornada(event.target.value);
  };

  return (
    <Layout titulo={"Asistencia docentes"}>
      <div className="pb-2 px-10 w-full bg-[#ffffff] h-[86vh] shadow-[0_8px_20px_12px_rgba(0,0,0,0.08)] rounded-md">
        <div className="p-4">
       
          <div>
          <p className="text-md">Fecha: {new Date().toLocaleDateString()}</p>
          </div>
          <div className="flex gap-4 mb-4">
            <select
              value={grado}
              onChange={handleGradoChange}
              className="border rounded p-2"
            >
              <option value="">Seleccione Grado</option>
              <option value="1">Grado 1</option>
              <option value="2">Grado 2</option>
              <option value="3">Grado 3</option>
              {/* Añadir más grados según sea necesario */}
            </select>
            <select
              value={jornada}
              onChange={handleJornadaChange}
              className="border rounded p-2"
            >
              <option value="">Seleccione Jornada</option>
              <option value="mañana">Mañana</option>
              <option value="tarde">Tarde</option>
              <option value="noche">Noche</option>
              {/* Añadir más jornadas según sea necesario */}
            </select>
          </div>
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Estadísticas de Asistencia</h2>
          </div>
          <div className="flex gap-20 justify-center">
            <p>Presentes: {presentes}</p>
            <p>Presentes con Retardo: {retardo}</p>
            <p>Ausente: {retardo}</p>
            <p>Porcentaje de Asistencia: {porcentajeAsistencia.toFixed(2)}%</p>
          </div>
        </div>
        <DataTable
          columns={columns}
          data={data}
          pagination
          responsive
          paginationPerPage={6}
          paginationRowsPerPageOptions={[6]}
          highlightOnHover
          pointerOnHover
          fixedHeader
        />
      </div>
    </Layout>
  );
};

export default AsistenciaDocente;
