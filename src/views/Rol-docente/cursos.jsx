import React, { useContext, useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import Layout from "../../components/layaout";
import Componente from "../../components/cursos_estudiantes";
import { counterContext } from "../../../context/CRMcontext";
import { jwtDecode } from "jwt-decode";
import { getAsiganturaDocente } from "../../endpoints/useGet";

const Cursos = () => {
  const { auth } = useContext(counterContext);
  const decodedToken = jwtDecode(auth.token);
  const [dat, setDat] = useState([]);

  useEffect(() => {
    getAsiganturaDocente(auth, decodedToken.id).then((data) => {
      setDat(data.data);


     
    });
  }, [auth]);


  return (
    <Layout titulo=" Mis asignaturas 📚" icono="">
      <div className="p-4 w-full h-[84vh] 2xl:h-[84vh]  shadow-[0_8px_10px_15px_rgba(0,0,0,0.08)] rounded-md flex flex-col lg:flex-row gap-4">
        <div className="flex-1 overflow-y-scroll">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex-1 ml-4">
              <div className="relative">
                <BsSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md"
                  type="search"
                  placeholder="Buscar cursos"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 ">
            {dat.map((item) =>
              item.length === "" ? (
                <p className="font-semibold text-center p-2">
                  No tienes asignaturas asociadas.
                </p>
              ) : (
           
                  
                  <Componente
                    enlace={`/grados/${item.asignatura.asigcod}`}
                    key={item.asignatura.asigcod}
                    titulo={item.asignatura.asignombre}
                    descripcion={item.asignatura.asigdescripcion}

                    imagen={item.asignatura.url ? item.asignatura.url : 'https://image.shutterstock.com/shutterstock/photos/1976693516/display_1500/stock-vector-no-image-available-sign-isolated-on-white-background-vector-illustration-1976693516.jpg'}
                  />
             
              )
            )}
          </div>
        </div>
        <div className="lg:w-80 border border-gray-300 rounded-md p-4">
          <h3 className="text-xl font-bold mb-2">Barra lateral</h3>
          <p>Contenido de la barra lateral</p>
        </div>
     
      </div>
    </Layout>
  );
};

export default Cursos;
