import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import "./src/assets/css/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./src/views/Rol-estudiante/Home.jsx";
import Horario from "./src/views/Rol-estudiante/horario.jsx";
import Asignaturas from "./src/views/Rol-estudiante/asignaturas.jsx";
import Formulario from "./src/views/Rol-estudiante/InicioSesion.jsx";
import AsignaturasDetalles from "./src/views/Rol-estudiante/AsignaturasDetalles.jsx";
import Correo from "./src/views/Rol-estudiante/correo.jsx";
import Tematicas from "./src/views/Rol-estudiante/tematicas.jsx";
import InformacionMateria from "./src/views/Rol-estudiante/infomateria.jsx";
import Observaciones from "./src/views/Rol-estudiante/observaciones.jsx";
import Asistencia from "./src/views/Rol-estudiante/asistencia.jsx";
import Himno from "./src/views/Rol-estudiante/himno.jsx";
import Calificaciones from "./src/views/Rol-estudiante/calificaciones.jsx";
import Notas from "./src/views/Rol-estudiante/notas.jsx";
import NotasEstudiante from "./src/views/Rol-estudiante/notasEstudiante.jsx";

import Perfil from "./src/views/Rol-estudiante/perfil.jsx";
import Informacion from "./src/views/Rol-estudiante/informacionES.jsx";
import Panel from "./src/views/Rol-coordinador/Panel.jsx";
import AsistenciasD from "./src/views/Rol-coordinador/asistencias.jsx";
import Calendario from "./src/views/Rol-estudiante/calendario.jsx";
import Asistenciafor from "./src/views/Rol-coordinador/asistenciasEstudiantes.jsx";
import Tarea from "./src/views/Rol-coordinador/AdministrarAreas.jsx";
import ObservadorOpc from "./src/views/Rol-coordinador/ObservadorOpc.jsx";
import RegistroObservador from "./src/views/Rol-coordinador/registroObservador.jsx";
import ObservadorG from "./src/views/Rol-coordinador/ObservadorGeneral.jsx";
import AsistenciaDocente from "./src/views/Rol-coordinador/AsistenciasDocentes.jsx";
import InformeObservador from "./src/views/Rol-coordinador/InformesObservador.jsx";
import GestionarPermisos from "./src/views/Rol-coordinador/GestionarPermisos.jsx";
import Recuperar from "./src/views/Rol-coordinador/recuperarcon.jsx";
import Listado from "./src/views/Rol-coordinador/listadoes.jsx";
import NotasView from "./src/views/Rol-estudiante/notas.jsx";
import Coordinador from "./src/views/Rol-coordinador/coordinador.jsx";
import Registroasistencias from "./src/views/Rol-coordinador/registroAsistencias.jsx";
import Horaslabor from "./src/views/Rol-coordinador/horaslabor.jsx";
import Cursos from "./src/views/Rol-docente/cursos.jsx";
import Obser_estudiante from "./src/views/Rol-docente/obser_estudiante.jsx";
import Desempeño from "./src/views/Rol-coordinador/desempeño.jsx";
import Statecom from "./src/components/Statecompo.jsx";
import RegistrarAlumno from "./src/views/Rol-coordinador/registrarAlumno.jsx";
import Tematicas2 from "./src/views/Rol-estudiante/tematicas2.jsx";
import Infomateria from "./src/views/Rol-estudiante/infomateria.jsx";
import Calificacions from "./src/views/Rol-estudiante/Calificacion.jsx";
import { NextUIProvider } from "@nextui-org/react";
import RegistroAsignatura from "./src/views/Rol-coordinador/Registrar_asignatura.jsx";
import ObserAspectos from "./src/views/Rol-coordinador/ObsEstudiante.jsx";
import Listadocentes from "./src/views/Rol-coordinador/Listadocentes.jsx";
import ListadoEstudiantes from "./src/views/Rol-docente/listaEstudiantes.jsx";
import Grados from "./src/views/Rol-docente/grados.jsx";
import HomeD from "./src/views/Rol-docente/Home-docente.jsx";
import Documentos from "./src/views/Rol-docente/documentos.jsx";
import FormTemas from './src/views/Rol-docente/formTemas.jsx';
import ListadoAsigna from './src/views/Rol-coordinador/listadoAsignaturas.jsx'
import AsignaturasList from './src/views/Rol-docente/asignaturaenplataforma.jsx'
import ExcusaForm from './src/views/Rol-docente/excusaForm.jsx'
import ResetPassword from './src/auth/resetPassword.jsx';
import Actividades from './src/views/Rol-docente/Actividades.jsx'
import ActividadesDetalle from './src/views/Rol-docente/ActividadesDetalle.jsx'
import AsignaturasDetallesEstudiante from './src/views/Rol-estudiante/AsignaturasDetallesEstudiante.jsx'
import AsignaturasEstudiante from './src/views/Rol-estudiante/AsignaturasEstudiante.jsx'
import CalificacionesEstudiante from './src/views/Rol-estudiante/calificacionesEstudiante.jsx'
import TareasSubidas from './src/views/Rol-estudiante/tareasSubidas.jsx'
import Estadisticas from './src/views/Rol-coordinador/estadisticas.jsx';
import RegistrarFuncionario from './src/views/Rol-coordinador/RegistrarFuncionario.jsx';
import AsignaturaDocente from './src/views/Rol-coordinador/docente_asignatura.jsx';
import InfoEstudiantes from './src/views/Rol-coordinador/InfoEstudiantes.jsx';
import Informe from './src/views/Rol-coordinador/informe.jsx';
import EstadisticasUsuario from "./src/views/Rol-coordinador/Estadisticasbyid.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Statecom>
      <NextUIProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Formulario />} />
            <Route path="/reset-password"  element={<ResetPassword />} />
            <Route path="/asignatura-docente"  element={<AsignaturaDocente />} />
            <Route path="/Estas"  element={<Estadisticas />} />
            <Route path="/InformacionEstudiantes/:id"  element={<InfoEstudiantes />}>

            <Route path="InformacionGeneral"  element={<Informe />} />
            <Route path="estadisticas"  element={<EstadisticasUsuario />} />
            
            
            
            
            
            
            </Route>
   
            <Route path="/Registrar-asignatura" element={<Documentos/>} />
            <Route path="/excusaForm" element={<ExcusaForm/>} />
          </Routes>
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Listado-asignaturas" element={<ListadoAsigna />} />
            <Route path="/registrar-temas/:asigcod" element={<FormTemas />} />
            <Route path="/grados/:id/" element={<Grados />} />
            <Route
              path="/Cursos/:id/:grupcod"
              element={<AsignaturasDetalles />}
            >
              <Route path="informacion" element={<InformacionMateria />} />
              <Route path="Tematicas" element={<Tematicas2 />} />
              <Route path="Informacion" element={<InformacionMateria />} />
              <Route path="Asistencias" element={<Asistencia />} />
              <Route path="Calificaciones" element={<Calificaciones />} />
              <Route
                path="Listado-estudiantes"
                element={<ListadoEstudiantes />}
              />
              <Route path="Actividades" element={<Actividades />} />
              <Route
                path="ActividadesDetalle/:idACT"
                element={<ActividadesDetalle />}
              />
            </Route>
            <Route
              path="/AsignaturasDetallesEstudiante/:idasig/:idgrupo"
              element={<AsignaturasDetallesEstudiante />}
            >
              <Route
                path="calificacionesEstudiante"
                element={<CalificacionesEstudiante />}
              />
              <Route path="tareasSubidas" element={<TareasSubidas />} />
            </Route>

            <Route path="/Himno" element={<Himno />} />
            <Route path="/Observaciones" element={<Observaciones />} />
            <Route path="/Horario" element={<Horario />} />
            <Route path="/Asignaturas" element={<Asignaturas />} />
            <Route
              path="/AsignaturasEstudiante"
              element={<AsignaturasEstudiante />}
            />

            <Route path="/Correo" element={<Correo />} />
            <Route path="/Notas" element={<NotasEstudiante />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/Informacion" element={<Informacion />} />
            <Route path="/Calificacions" element={<Calificacions />} />

            <Route path="/Recuperar" element={<Recuperar />} />
            <Route path="/Panel" element={<Panel />} />
            <Route path="/AsistenciasEstudiantes" element={<AsistenciasD />} />
            <Route path="/Calendario" element={<Calendario />} />
            <Route path="/sss/:id" element={<Asistenciafor />} />
            <Route path="/Areas" element={<Tarea />} />
            <Route path="/Observador" element={<ObservadorOpc />} />
            <Route
              path="/RegistrarObservacion"
              element={<RegistroObservador />}
            />
            <Route path="/ObservadorGeneral" element={<ObservadorG />} />
            <Route
              path="/AsistenciasDocentes"
              element={<AsistenciaDocente />}
            />
            <Route path="/Informes" element={<InformeObservador />} />
            <Route path="/Gestionar" element={<GestionarPermisos />} />
            <Route path="/Listado" element={<Listado />} />
            <Route path="/NotasView" element={<NotasView />} />
            <Route path="/Home-docente" element={<HomeD />} />
            <Route
              path="/Registroasistencias"
              element={<Registroasistencias />}
            />
            <Route path="/Horaslabor" element={<Horaslabor />} />
            <Route path="/Mis-Cursos" element={<Cursos />} />
            <Route
              path="/Observadorestudiante"
              element={<Obser_estudiante />}
            />
            <Route path="/desempeño" element={<Desempeño />} />
            <Route path="/registrarAlumno" element={<RegistrarAlumno />} />
            <Route path="/listadocentes" element={<Listadocentes />} />
            <Route path="/coordinador" element={<Coordinador />} />
            <Route path="/AsignaturasList" element={<AsignaturasList />} />
            <Route
              path="/Registrarfuncionario"
              element={<RegistrarFuncionario />}
            />
       
          </Routes>
        </BrowserRouter>
      </NextUIProvider>
    </Statecom>
    
  </React.StrictMode>
);
