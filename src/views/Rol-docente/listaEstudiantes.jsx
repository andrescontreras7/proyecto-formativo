import React, { useState, useEffect, useContext } from "react";
import { getEstudiantesByGrupo } from "../../endpoints/useGet";
import { counterContext } from "../../../context/CRMcontext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {jwtDecode} from "jwt-decode"; 
import { Toaster, toast } from "react-hot-toast";
import EstudiantesDataTable from "../../views/Rol-docente/datatable";

const ListadoEstudiantes = () => {
  const [estudiantes, setEstudiantes] = useState([]);
  const { auth } = useContext(counterContext);
  const { id, grupcod } = useParams();

  const decodedTokens = jwtDecode(auth.token)
 

  useEffect(() => {
    getEstudiantesByGrupo(auth, decodedTokens.id, id, grupcod ).then((data) => {
      setEstudiantes(data);
      
    });
  }, [auth]);

  return (
    <div>
      <div className="bg-[#ffffff]  w-full h-full 2xl:h-[80vh] ">
        <div>
          <div className="w-[98%] bg-[#6f99e1] bg-opacity-25 rounded-md mt-2 flex justify-between items-center border-[#5d659f] p-2 m-auto h-20 ">
            <div>
            <Toaster
            position=" top-right"
            reverseOrder={true}
            autoClose={5000}
            toastOptions={{
              style: {
                margin: "40px 20px",
                transition: "all 0.2s ease-in-out",
              },
            }}
          />
            </div>
            <div className=" p-2">
              <Link
                to={"/registrarAlumno"}
                className="text-end font-bold bg-[#E2EDEA]   uppercase text-gray-600 rounded-md  h-[50px] p-2 "
              >
                Agregar Estudiante
              </Link>
            </div>
          </div>
          <div className="p-2">
            <EstudiantesDataTable estudiantes={estudiantes} asig={id} grupoId={grupcod}  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListadoEstudiantes;
