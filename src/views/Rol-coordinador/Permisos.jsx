import React from "react";
const Permisoscor = () => {
    // Funciones para generar nombres y apellidos aleatorios
const nombreAleatorio = () => nombres[Math.floor(Math.random() * nombres.length)];
const apellidoAleatorio = () => apellidos[Math.floor(Math.random() * apellidos.length)];

const cuadroEstilo = {
  width: "100px",
  height: "50px",
  backgroundColor: "#fff",
  border: "2px solid #A6DCF1",
  borderRadius: "20px",
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const textoCuadro = {
  margin: 0,
  textAlign: "center",
  fontFamily: 'Poppins, sans-serif',
  fontSize: "14px",
};

// Estilo para celdas de la tabla
const celdaEstilo = {
  borderBottom: "1px solid #ddd",
  padding: "8px",
  textAlign: "left",
};

// Datos aleatorios para nombres y apellidos
const nombres = ["Juan", "Ana", "Pedro", "María", "Carlos", "Laura", "Javier", "Luisa"];
const apellidos = ["Gomez", "Rodriguez", "Perez", "Fernandez", "Lopez", "Martinez", "Diaz", "Sanchez"];

  return (
    <div className="flex h-screen">
      <Aside />
      <div className="flex-1 flex flex-col p-4 bg-[#A6DCF1]">
        <div className="bg-[#AEE4F5] border-2 border-[#A6DCF1] rounded p-4 shadow-md relative">
          <h2 className="font-bold text-2xl mb-4" style={{ fontFamily: 'Poppins, sans-serif', color: "#333" }}>
            Gestionar Permisos
          </h2>
          <div className="flex items-center space-x-4">
            <div className="w-1/4" style={cuadroEstilo}>
              <p style={textoCuadro}>Grado:</p>
              <p style={textoCuadro}>GRADO 3°</p>
            </div>
            <div className="w-1/4" style={cuadroEstilo}>
              <p style={textoCuadro}>Jornada:</p>
              <p style={textoCuadro}>TARDE</p>
            </div>
          </div>

          {/* Cuadro blanco que envuelve la tabla */}
          <div className="bg-white rounded p-10 shadow-md mt-4">
            {/* Agregar la tabla */}
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th style={celdaEstilo}>N°</th>
                  <th style={celdaEstilo}>Nombre del Docente</th>
                  <th style={celdaEstilo}>Dar permisos</th>
                  <th style={celdaEstilo}>Menú</th>
                  <th style={celdaEstilo}>Sub menú</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 8 }, (_, index) => (
                  <tr key={index + 1} className="border-t">
                    <td style={celdaEstilo}>{index + 1}</td>
                    <td style={celdaEstilo}>{`${nombreAleatorio()} ${apellidoAleatorio()}`}</td>
                    <td style={celdaEstilo}>
                      <button className="w-8 h-8 bg-blue font-black text-purple-600">Activar</button>
                    </td>
                    <td style={celdaEstilo}>Mis Cursos</td>
                    <td style={celdaEstilo}>Asignaturas Actuales</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Permisoscor;


