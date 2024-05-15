import React from 'react';
import Layout from "../../components/layaout"
import Select from '../../components/seletct';
import {useState, useEffect} from "react"
import SelectGrupo from "../../components/selectGrupo"
import SelectRol from "../../components/selectRol"


export default function RegistrarAlumno() {
  const [data, setData] = useState({
    nombre :"",
    apellido:"",
    correo: "",
    numero:"",
    grupo:"",
    grado:"",
    direccion:"",
    rol:""



  })
  const [modal, setModal] = useState(false)
  const [vista, setVista] = useState(false)
  const validarDatos = () =>{

  /*  const {nombre,apellido,numero, grado} = data

    let valido = !nombre.length || !numero.length || !apellido.length; 

    return valido;
*/
  
  }
  const actualizarState = (e) => {
    let value = e.target.value;
  
    setData({
      ...data,
      [e.target.name] : value
    });
   
    if(e.target.name === 'rol'){
      if(value === "2"){
        setModal(true);
        setVista(false);
      } else if(value === "1"){
        setVista(true);
        setModal(false);
      } else {
        setModal(false);
        setVista(false);
      }
    }
  }





  return (
    <Layout titulo={"Registro de usuarios"}  >
      <div className="bg-white w-full h-[85vh] 2xl:h-[86vh] flex justify-center items-start  rounded-md">
        <form className="w-3/4 space-y-8 mt-10">
          <h2 className="text-2xl font-semibold text-center">FORMULARIO</h2>
          <div className="grid grid-cols-2 gap-4">
            <input className="w-full p-2 border border-gray-300 rounded-md" type="text" placeholder="Nombre del estudiante"
            name='nombre'
            onChange={actualizarState} />
            <input className="w-full p-2 border border-gray-300 rounded-md" type="text" placeholder="Apellido del estudiante" name='apellido' 
               onChange={actualizarState}/>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input className="w-full p-2 border border-gray-300 rounded-md" type="text" placeholder="Correo electrónico" 
            name='correo'
            onChange={actualizarState}/>
            <input className="w-full p-2 border border-gray-300 rounded-md" type="number" placeholder="Número de teléfono"
            onChange={actualizarState}
            name="numero " />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <input className="w-full p-2 border border-gray-300 rounded-md" type="text" placeholder="Correo electrónico" 
            name='direccion'
            onChange={actualizarState}/>
            <input className="w-full p-2 border border-gray-300 rounded-md" type="text" placeholder="Direccion"
            onChange={actualizarState}
            name="numero " />
             <SelectRol ac={actualizarState} nom={"rol"} />
          </div>
         
          {modal && (
            <div className="grid grid-cols-2 gap-4">
              <Select ac={actualizarState}  nom={"grado"} />
              <SelectGrupo ac={actualizarState} nom={"grupo"}  p={"seleccione el grupo del estudiante "}/>
            </div>
          )}
        {vista && (
            <button className='border p-2 border-red-700 rounded-md'>Registrar huella</button>
         
        )}

          <input 
          className="w-full p-2 bg-blue-700 text-white rounded-md" 
          type="submit" 
          value="Agregar estudiante" 
          disabled={ validarDatos() }    />
        </form>
      </div>
    </Layout>
  );
}