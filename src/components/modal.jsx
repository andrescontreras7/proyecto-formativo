import React, { useState } from "react";
import {Modal, ModalContent, ModalHeader, ModalFooter, Button, useDisclosure, ModalBody} from "@nextui-org/react";
import { BiDotsVerticalRounded } from "react-icons/bi";
export default function App({objeto, id}) {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [data, setData] = useState(["pedro", "modal"]);
 

  const handleOpen = () => {
    
    onOpen();
    console.log(objeto)
  }
  const handleDelete = () => {
   
    console.log(`eliminar estudiante con ID: ${id}`);
  }


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
              <ModalHeader className="flex flex-col gap-1 uppercase text-indigo-900 border-b-1">{objeto.estudnombre} </ModalHeader>
              
              <ModalBody>  

                
           
                    <ol className="p-2 flex flex-col gap-4 font-semibold uppercase">
                      <input type="checkbox" />    
                         <li className=""><button>INFORMACION</button></li>
                        <li className=""><button>EDITAR</button></li>
                        <li onClick={handleDelete} className=""><button>ELIMINAR</button></li>
                    </ol>
                
               
              
                  
                    
             
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