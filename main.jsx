import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import './src/assets/css/index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './src/views/Rol-estudiante/Home.jsx';
import Horario from './src/views/Rol-estudiante//horario.jsx';
import Asignaturas from './src/views/Rol-estudiante//asignaturas.jsx';
import Formulario from './src/views/Rol-estudiante//InicioSesion.jsx';
import AsignaturasDetalles from './src/views/Rol-estudiante//AsignaturasDetalles.jsx';
import Correo from './src/views/Rol-estudiante//correo.jsx';
import Tematicas from './src/views/Rol-estudiante//tematicas.jsx';
import InformacionMateria from './src/views/Rol-estudiante/infomateria.jsx';
import Observaciones from './src/views/Rol-estudiante//observaciones.jsx';
import Asistencia from './src/views/Rol-estudiante//asistencia.jsx';
import Himno from './src/views/Rol-estudiante//himno.jsx';
import Calificaciones from './src/views/Rol-estudiante//calificaciones.jsx';
import Notas from './src/views/Rol-estudiante//notas.jsx';
import Perfil from './src/views/Rol-estudiante//perfil.jsx';
import Informacion from './src/views/Rol-estudiante//informacionES.jsx';
import Panel from './src/views/Rol-coordinador/Panel.jsx';
import AsistenciasD from './src/views/Rol-coordinador/asistencias.jsx';
import Calendario from './src/views/Rol-estudiante//calendario.jsx';
import Asistenciafor from './src/views/Rol-coordinador/asistenciasEstudiantes.jsx';
import Tarea from './src/views/Rol-coordinador/AdministrarAreas.jsx';
import ObservadorOpc from './src/views/Rol-coordinador/ObservadorOpc.jsx';
import RegistroObservador from './src/views/Rol-coordinador/registroObservador.jsx';
import ObservadorG from './src/views/Rol-coordinador/ObservadorGeneral.jsx';
import AsistenciaDocente from './src/views/Rol-coordinador/AsistenciasDocentes.jsx';
import InformeObservador from './src/views/Rol-coordinador/InformesObservador.jsx';
import Registrardocente from './src/views/Rol-coordinador/RegistrarDocentes.jsx';
import Permisoscor from './src/views/Rol-coordinador/Permisos.jsx';
import Recuperar from './src/views/Rol-coordinador/recuperarcon.jsx';
import Listado from './src/views/Rol-coordinador/listadoes.jsx';
import NotasView from './src/views/Rol-estudiante/notas.jsx';
import Coordinador from './src/views/Rol-coordinador/coordinador.jsx';
import Registroasistencias from './src/views/Rol-coordinador/registroAsistencias.jsx';
import Horaslabor from './src/views/Rol-coordinador/horaslabor.jsx';
import Cursos from './src/views/Rol-docente/cursos.jsx';
import Obser_estudiante from './src/views/Rol-docente/obser_estudiante.jsx';
import Desempeño from './src/views/Rol-coordinador/desempeño.jsx';
import Statecom from "./src/components/Statecompo.jsx";
import RegistrarAlumno from './src/views/Rol-coordinador/registrarAlumno.jsx';
import Tematicas2 from './src/views/Rol-estudiante/tematicas2.jsx';
import Infomateria from './src/views/Rol-estudiante/infomateria.jsx';
import {NextUIProvider} from '@nextui-org/react'
// Define las rutas de la app de React
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Statecom>
    <NextUIProvider>
    <BrowserRouter>
    <Routes>
  <Route path="/Hoome" element={<Home/>} />
  <Route path="/" element={<Formulario />} />
  <Route path="/DetallesAsignatura" element={<AsignaturasDetalles />}>
    <Route path="/DetallesAsignatura/Tematicas" element={<Tematicas2 />} />
    <Route path="/DetallesAsignatura/Informacion" element={<InformacionMateria />} />
    <Route path="/DetallesAsignatura/Asistencias" element={<Asistencia />} />
    <Route path="/DetallesAsignatura/Calificaciones" element={<Calificaciones />} />
  </Route>
  <Route path="/Home" element={<Home />} />
  <Route path="/Himno" element={<Himno />} />
  <Route path="/Observaciones" element={<Observaciones />} />
  <Route path="/Horario" element={<Horario />} />
  <Route path="/Asignaturas" element={<Asignaturas />} />
  <Route path="/Correo" element={<Correo />} />
  <Route path="/Notas" element={<Notas />} />
  <Route path="/perfil" element={<Perfil />} />
  <Route path="/Informacion" element={<Informacion />} />

  <Route path="/Recuperar" element={<Recuperar />} />
  <Route path="/Panel" element={<Panel />} />
  <Route path="/AsitenciasD" element={<AsistenciasD />} />
  <Route path="/Calendario" element={<Calendario />} />
  <Route path="/AsistenciasEstudiantes" element={<Asistenciafor />} />
  <Route path="/Areas" element={<Tarea />} />
  <Route path="/Observador" element={<ObservadorOpc />} />
  <Route path="/RegistrarObservacion" element={<RegistroObservador />} />
  <Route path="/ObservadorGeneral" element={<ObservadorG />} />
  <Route path="/AsistenciasDocentes" element={<AsistenciaDocente />} />
  <Route path="/Informes" element={<InformeObservador />} />
  <Route path="/Registrardocente" element={<Registrardocente />} />
  <Route path="/Permisos" element={<Permisoscor />} />
  <Route path="/Listado" element={<Listado />} />
  <Route path="/NotasView" element={<NotasView />} />
  <Route path="/Coordinador" element={<Coordinador />} />
  <Route path="/Registroasistencias" element={<Registroasistencias />} />
  <Route path="/Horaslabor" element={<Horaslabor />} />
  <Route path="/Cursos" element={<Cursos />} />
  <Route path="/Observadorestudiante" element={<Obser_estudiante />} />
  <Route path="/desempeño" element={<Desempeño />} />
  <Route path="/registrarAlumno" element={<RegistrarAlumno />} />
  <Route path="/Tematicas2" element={<Tematicas2 />} />
  <Route path="/Infomateria" element={<Infomateria />} />


  

    </Routes>
      </BrowserRouter>
    </NextUIProvider>
    </Statecom>
  </React.StrictMode>
);
