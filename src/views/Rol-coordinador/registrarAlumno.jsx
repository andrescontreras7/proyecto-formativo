import React from 'react';
import Layout from "../../components/layaout"
import Select from '../../components/seletct';
import {useState, useEffect} from "react"
import SelectGrupo from "../../components/selectGrupo"



export default function RegistrarAlumno() {
  const [data, setData] = useState({
    nombre :"",
    apellido:"",
    correo: "",
    numero:"",
    grupo:"",
    grado:""



  })
  const validarDatos = () =>{

    const {nombre,apellido,numero} = data
    let valido = !nombre.length || !numero.length || !apellido.length; 

    return valido;

  
  }
  const actualizarState = (e) => {
    setData({
      ...data,
      [e.target.name] : e.target.value
      
    })
    console.log(data)



  }





  return (
    <Layout>
      <div className="bg-white w-full h-[85vh] 2xl:h-[86vh] flex justify-center items-center rounded-md">
        <form className="w-3/4 space-y-8">
          <h2 className="text-2xl font-semibold text-center">Registro de Estudiantes</h2>
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
          <div className="grid grid-cols-2 gap-4">
            <Select ac={actualizarState} nom={"grado"} />
            <SelectGrupo/>
          </div>

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