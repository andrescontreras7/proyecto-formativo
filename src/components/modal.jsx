import React, { useState } from "react";
import {Modal, ModalContent, ModalHeader, ModalFooter, Button, useDisclosure, ModalBody, input} from "@nextui-org/react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
export default function App({objeto, id}) {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [data, setData] = useState(["pedro", "modal"]);
  const [estudiantes, setEstudiantes] = useState(false);
  const navigate = useNavigate(); 

 

  const handleOpen = () => {
    
    onOpen();
   
  
  }

  const handleEdit = (evento) => {  
    console.log(`editar estudiante con ID: ${id}`);
    setEstudiantes(true)


      
  }
  const info = (identificacion) => {
    console.log(`informacion estudiante con ID: ${identificacion}`);
    navigate(`/InformacionEstudiantes/${identificacion} `)

  }
  const handleDelete = () => {
   
    console.log(`eliminar estudiante con ID: ${id}`);
  }
  const {funcnombre} = objeto


  return (
    <>
      <div className="flex flex-wrap gap-3">

          <Button  
        
       
        
            color="" 
            onPress={() => handleOpen()}
            className=" p-0 m-0  "
          >
            <div>
                <BiDotsVerticalRounded className=" size-6" />
            </div>
        
          </Button>
  
      </div>
      <Modal backdrop="blur"  className=" " isOpen={isOpen} onClose={onClose}>
        <ModalContent>
      
            <>
              <ModalHeader className="flex flex-col gap-1 uppercase text-indigo-900 border-b-1"> {
                
                  objeto.estudnombre? objeto.estudnombre : objeto.funcnombre
                
                
                
                } </ModalHeader>
              
              <ModalBody>  

                {
                  estudiantes ? <div> <label htmlFor="">digite name</label> <input value={objeto.estudnombre} type="text"  /></div> : 
                  <ol className="p-2 flex flex-col gap-4 font-semibold uppercase">
                    <input type="checkbox" />    
                       <li onClick={() => info(objeto.estudid)} className=""><button>INFORMACION</button></li>
                      <li onClick={handleEdit} className=""><button>EDITAR</button></li>
                      <li onClick={handleDelete} className=""><button>ELIMINAR</button></li>
                  </ol>
              
                }
                
           
               
              
                  
                    
             
             </ModalBody>
              
             
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
         
        </ModalContent>
      </Modal>
    </>
  );
}