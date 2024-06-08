import React,{useState,useEffect, useContext} from 'react';
import Layout from '../../components/layaout';
import { useParams } from 'react-router-dom';
import {getGruposAll} from '../../endpoints/useGet';
import {counterContext} from '../../../context/CRMcontext';
import { jwtDecode } from "jwt-decode";
import { button } from '@nextui-org/react';
import { Link } from 'react-router-dom';
function Grados() {
  
    const { id } = useParams();
    const {auth} = useContext(counterContext);
    const decodedToken = jwtDecode(auth.token);
   

    const [grupos, setGrupos] = useState([]);
    useEffect(() => {
        getGruposAll(auth, decodedToken.id, id).then(res => { 
        setGrupos(res.data);
  
    
        });
      }, [auth, id]); 
      

  return (

        <Layout >
           <div className="p-4 w-full h-[84vh] 2xl:h-[84vh]  shadow-[0_8px_10px_15px_rgba(0,0,0,0.08)] rounded-md  lg:flex-row gap-4">
            <div className='flex p-2 '>
                <h1 className='font-semibold text-gray-600 text-2xl'>
                    Mis Grados
                </h1>
                
               
            </div>
            <p className='p-1'>
                            salones a los cuales actualmente imparte clase 
                        </p>
            <div className='flex justify-start p-2   w-full'>
                
                    <ul className='border-2 flex gap-4 border-indigo-300 rounded-md p-2 text-center'>
                       
                        {grupos.map((item) => (
                        
                            <Link to={`/Cursos/${id}/${item.grupo.grupcod}/informacion`} > 
                            <li className='bg-purple-500 bg-opacity-70 p-2 rounded-md w-20' key={item.grupo.grupcod}>
                                <p>{item.grupo.grupsalon}</p>
                            </li>
                            </Link>
                           
                        ))}
                    </ul>
                </div>
            </div>
         
      
        </Layout>
  

    
  );
}

export default Grados;
