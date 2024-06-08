import React, { useState, useEffect, useContext } from 'react';
import Layout from '../../components/layaout';
import { getAsignaturas } from '../../endpoints/useGet';
import { counterContext } from "../../../context/CRMcontext";
import { AsignaturasData } from "../../views/Rol-docente/datatable";
import { Toaster, toast } from "react-hot-toast";

function ListadoAsignaturas() {
    const [asignaturas, setAsignaturas] = useState([]);
    
    const { auth } = useContext(counterContext);

    useEffect(() => {
        getAsignaturas(auth).then((data) => {
            setAsignaturas(data.data);
        });
    }, []);


    return (
        <Layout titulo={"Listado Asignaturas"}>
             <Toaster
            position=" bottom-right"
            reverseOrder={true}
            autoClose={5000}
            toastOptions={{
              style: {
                margin: "30px 20px",
                transition: "all 0.2s ease-in-out",
              },
            }}
          />
         <div className="p-4 w-full h-[84vh] 2xl:h-[84vh]  shadow-[0_8px_10px_15px_rgba(0,0,0,0.08)] rounded-md flex flex-col lg:flex-row gap-4">
                <div className="p-2 overflow-hidden w-full ">
                    <div className="rounded-md">
                        <AsignaturasData asignaturas={asignaturas} />
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default ListadoAsignaturas;
