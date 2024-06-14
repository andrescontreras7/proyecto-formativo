import React, { useState, useContext, useEffect } from 'react';
import Layout from '../../components/layaout';
import { createAsignaturaDocente } from '../../endpoints/useCreate';
import { counterContext } from "../../../context/CRMcontext";
import { getAsignaturas, getDocente, getGrupos } from '../../endpoints/useGet';
import { Toaster, toast } from "react-hot-toast";

function DocenteAsignatura() {
  const [asignatura, setAsignatura] = useState([]);
  const [docente, setDocente] = useState([]);
  const [grupo, setGrupo] = useState([]);
  const [selectedAsignatura, setSelectedAsignatura] = useState('');
  const [selectedDocente, setSelectedDocente] = useState('');
  const [selectedGrupos, setSelectedGrupos] = useState([]);

  const { auth } = useContext(counterContext);

  useEffect(() => {
    const fetchData = async () => {
      const gruposData = await getGrupos(auth);
      setGrupo(gruposData);

      const docentesData = await getDocente(auth);
      setDocente(docentesData.data);

      const asignaturasData = await getAsignaturas(auth);
      setAsignatura(asignaturasData.data);
    };
    fetchData();
  }, [auth]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      asignaturaAsigcod: parseInt(selectedAsignatura),
      funcionarioFuncid: parseInt(selectedDocente),
      grupoFK: selectedGrupos.map(grupo => parseInt(grupo))
    };
    createAsignaturaDocente(auth, payload).then((data) => {
      console.log(data);
      toast.success('Grupo asignado con éxito');
    }).catch((error) => {
      console.error('Error al asignar grupo:', error);
      toast.error('Error al asignar grupo');
    });
  };

  return (
    <Layout>
      <Toaster /> {/* Renderizar el componente Toaster fuera del formulario */}
      <form onSubmit={handleSubmit} className="space-y-6 p-8 bg-white shadow-md rounded-md">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Asignaturas</label>
          <select
            value={selectedAsignatura}
            onChange={(e) => setSelectedAsignatura(e.target.value)}
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Selecciona una asignatura</option>
            {asignatura.map((asig) => (
              <option key={asig.asigcod} value={asig.asigcod}>
                {asig.asignombre}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Docentes</label>
          <select
            value={selectedDocente}
            onChange={(e) => setSelectedDocente(e.target.value)}
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Selecciona un docente</option>
            {docente.map((doc) => (
              <option key={doc.funcid} value={doc.funcid}>
                {doc.funcnombre}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Grupos</label>
          <select
            multiple
            value={selectedGrupos}
            onChange={(e) =>
              setSelectedGrupos(Array.from(e.target.selectedOptions, (option) => option.value))
            }
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            {grupo.map((gr) => (
              <option key={gr.grupcod} value={gr.grupcod}>
                {gr.grupsalon}
              </option>
            ))}
          </select>
        </div>

        <div className="text-right">
          <button
            type="submit"
            className="px-4 py-2 font-semibold text-white bg-indigo-500 rounded-md shadow hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Asignar
          </button>
        </div>
      </form>
    </Layout>
  );
}

export default DocenteAsignatura;
