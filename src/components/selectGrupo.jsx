import React,{useState, useContext, useEffect}  from "react";
import {Select, SelectItem} from "@nextui-org/react";
import { counterContext } from '../../context/CRMcontext';
import s_axios from '../../config/axios';
export default function App({nom, ac}) {

    const [grupo, setGrupo] = useState([]);
    const {auth} = useContext(counterContext);

    useEffect(() => {  

        const consulta = async () => {
            try {
              const grupoConsulta  = await s_axios.get('/grupo' ,{
                headers : {
                  Authorization : `Bearer ${auth.token}`
                }
              });
              const lol = grupoConsulta.data.data
              setGrupo(lol);
              
             
            } catch (error) {
              console.log(error)
            }
          }
          consulta();
          
        }, []);
        



  
     


    
  return (
    <Select
    onChange={ac}
      name={nom}
      key={grupo.grupcod}
      label="Grupos"
      placeholder="Filtrar por grupo"
      description=""
      
      className="max-w-xs"
    >
     {grupo.map(grupos =>  (
         <SelectItem key={grupos.grupcod} value="">
               {grupos.grupsalon}  
         </SelectItem>
       
      )
     )}
       
     
    </Select>
  );
}
