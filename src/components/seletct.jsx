import React,{useState, useContext, useEffect}  from "react";
import {Select, SelectItem} from "@nextui-org/react";
import { counterContext } from '../../context/CRMcontext';
import s_axios from '../../config/axios';
export default function App() {

    const [grupo, setGrupo] = useState([]);
    const auth = useContext(counterContext);

    useEffect(() => {  

        const consulta = async () => {
            try {
              const asistenciaConsulta  = await s_axios.get('/grado' ,{
                headers : {
                  Authorization : `Bearer ${auth.token}`
                }
              });
              const lol = asistenciaConsulta.data.data
              console.log(lol)
              setGrupo(lol);
              
             
            } catch (error) {
              console.log(error);
              if(error.response.status === 403){
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'No tienes permisos para acceder a este contenido',
                  footer: '<a href>Why do I have this issue?</a>'
                })
                navigate('/')
              }
            }
          }
          consulta();
          
        }, []);
        



  
     


    
  return (
    <Select
        key={grupo.grupcod}
      label="Grado"
      placeholder="Filtrar por grado"
      description=""
      
      className="max-w-xs"
    >
     {grupo.map(grupos =>  (
         <SelectItem key={grupos.grupcod} value="">
               {grupos.grupgrado}  
         </SelectItem>
       
      )
     )}
       
     
    </Select>
  );
}
