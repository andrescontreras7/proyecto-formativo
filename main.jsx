import React from 'react'
import ReactDOM from 'react-dom/client'
import './src/assets/css/index.css'
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './src/components/views/Rol-estudiante/Home.jsx'
import Horario from './src/components/views/Rol-estudiante/horario.jsx'
import Asignaturas from './src/components/views/Rol-estudiante/asignaturas.jsx'
import Formulario from './src/components/views/Rol-estudiante/InicioSesion.jsx'
import AsignaturasDetalles from './src/components/views/Rol-estudiante/AsignaturasDetalles.jsx'
import Correo from './src/components/views/Rol-estudiante/correo.jsx'
import Tematicas from'./src/components/views/Rol-estudiante/tematicas.jsx'
import InformacionA from './src/components/views/Rol-estudiante/informacionA.jsx'
import Observaciones from './src/components/views/Rol-estudiante/observaciones.jsx'
import Asistencia from './src/components/views/Rol-estudiante/asistencia.jsx'
import Himno from './src/components/views/Rol-estudiante/himno.jsx'
import Calificaciones from './src/components/views/Rol-estudiante/calificaciones.jsx'
import Notas from './src/components/views/Rol-estudiante/notas.jsx'
import Perfil from './src/components/views/Rol-estudiante/perfil.jsx'
import Informacion from './src/components/views/Rol-estudiante/informacionES.jsx'
import Gestionaru from './src/components/views/Rol-coordinador/gestionaru.jsx'
import Panel from './src/components/views/Rol-coordinador/Panel.jsx'
import AsistenciasD from './src/components/views/Rol-coordinador/asistencias.jsx'
import Calendario from './src/components/views/Rol-estudiante/calendario.jsx'
import Asistenciafor from './src/components/views/Rol-coordinador/asistenciasEstudiantes.jsx'
import Tarea from './src/components/views/Rol-coordinador/AdministrarAreas.jsx'
import ObservadorOpc from './src/components/views/Rol-coordinador/ObservadorOpc.jsx'
import RegistroObservador from './src/components/views/Rol-coordinador/registroObservador.jsx'
import ObservadorG from './src/components/views/Rol-coordinador/ObservadorGeneral.jsx'
import AsistenciaDocente from './src/components/views/Rol-coordinador/AsistenciasDocentes.jsx'
import InformeObservador from './src/components/views/Rol-coordinador/InformesObservador.jsx'
import Registrardocente from './src/components/views/Rol-coordinador/RegistrarDocentes.jsx'
import Permisoscor from './src/components/views/Rol-coordinador/Permisos.jsx'
import Recuperar from './src/components/views/Rol-coordinador/recuperarcon.jsx'
import Recuperar1 from './src/components/views/Rol-estudiante/recuperarconEs.jsx'













//define las rutas de la app de react 


const router = createBrowserRouter([
  {
    path:"/Hoome",
    element :<Home/>
    },
{
path:"/login",
element :<Formulario/>
},
// roles Estudiante
{
path:"/DetallesAsignatura",
element :<AsignaturasDetalles/>,
children:[{
//estas serian las rutas hijas de una ruta principal
    path:"Tematicas",
    element:<Tematicas/> 
    
},
{
  path:"Informacion",
  element:<InformacionA/>
},
{
  path:"Asistencias",
  element:<Asistencia/>
},
{
  path:"Calificaciones",
  element:<Calificaciones/>
},


]
  

},

{
  path:"/Home",
  element :<Home/>
},
{
path:"/Himno",
element:<Himno/>
},
{
  path:"/Observaciones",
  element :<Observaciones/>
},
{
    path:"/Horario",
    element :<Horario/>
},
{
    path:"/Asignaturas",
    element :<Asignaturas/>,
  
},
{
  path:"/Correo",
  element:<Correo/>
},
{
  path:"Notas",
  element:<Notas/>
},
{
  path:"perfil",
  element:<Perfil/>
},
{
  path: "/Informacion",
  element: <Informacion/>
  },
  {
    path:"Passs",
    element:<Recuperar1/>
  },



// roles coordinador

  {
    path:"Gestion",
    element:<Gestionaru/>
  },
  {
    path:"Recuperar",
    element:<Recuperar/>
  },
  {
    path:"Panel",
    element:<Panel/>
  },
{
  path:"AsitenciasD",
  element:<AsistenciasD/>
},
{
  path:"Calendario",
  element:<Calendario/>
},
{
  path:"AsistenciasEstudiantes",
  element:<Asistenciafor/>

},
{
  path:"Areas",
  element:<Tarea/>

},
{
  path:"Observador",
  element:<ObservadorOpc/>

},
{
  path:"RegistrarObservacion",
  element:<RegistroObservador/>

},
{
  path:"ObservadorGeneral",
  element:<ObservadorG/>

},
{
  path:"AsistenciasDocentes",
  element:<AsistenciaDocente/>

},
{
  path:"Informes",
  element:<InformeObservador/>

},
{
  path:"Registrardocente",
  element:<Registrardocente/>

},
{
  path:"Permisos",
  element:<Permisoscor/>

}














  



])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider   router ={router}/>
  </React.StrictMode>,
)
