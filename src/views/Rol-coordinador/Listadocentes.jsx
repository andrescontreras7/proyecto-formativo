import React, { useState, useEffect, useContext } from "react";
import { HiArrowSmallLeft } from "react-icons/hi2";
import Layout from "../../components/layaout";
import DataTable from "react-data-table-component";
import { getDocente } from "../../endpoints/useGet";
import { counterContext } from "../../../context/CRMcontext";
import Modal from "../../components/Modal_listadocente";
const Listadocentes = () => {
  const [filterText, setFilterText] = useState("");
  const [docentes, setDocentes] = useState([]);
  const { auth } = useContext(counterContext);

  useEffect(() => {
    fetchFuncionarios(auth).then((data) => {
      setDocentes(data.data);
    });
  }, [auth]);

  const fetchFuncionarios = async (auth) => {
    try {
      const data = await getDocente(auth);
      // mostrar los docentes por el rol 
      const docentesFiltrados = data.data.filter(docente => docente.rolFK === 2);
      setDocentes(docentesFiltrados);
    } catch (error) {
      console.error("Error obteniendo los funcionarios:", error);
    }
  };
  

  const handleEdit = (row) => {
    console.log("Editar:", row);
  };

  const handleDelete = (row) => {
    console.log("Eliminar:", row);
  };

  const filteredDocentes = docentes.filter((docente) => {
    const initials = docente.funcnombre
      .split(" ")
      .map((word) => word.charAt(0).toLowerCase())
      .join("");
    return initials.includes(filterText.toLowerCase());
  });

  const columns = [
    {
      name: "Nombre",
      selector: (row) => `${row.funcnombre} ${row.funcapellido}`,
      sortable: true,
    },
    {
      name: "Correo Electrónico",
      selector: (row) => row.funccorreo,
      sortable: true,
    },
    {
      name: "Rol",
      selector: (row) => row.funcrol,
      sortable: true,
    },
   {name: 'Estado', sortable: true, selector: (row) =>  <div className= {row.activo ? 'bg-green-400 p-2 rounded-xl text-white font-semibold' : 'bg-red-400' + ' bg-opacity-100 p-2 rounded-xl text-white font-semibold'}>    { row.activo !== null && row.activo !== undefined ? row.activo ? "Activo" : "Inactivo" : ""}  </div> },
    {
      name: "Acciones",
      cell: (row) => (
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mr-5 ">
          <Modal objeto={row} id={row.funcid} />
          
        </div>
      ),
    },
  ];

  return (
    <Layout
      titulo={"Listado de docentes "}
      icono={<HiArrowSmallLeft className="text-xl" />}
    >
      <div className="pb-2 w-full bg-[#ffffff] h-[86vh] shadow-[0_8px_20px_12px_rgba(0,0,0,0.08)] rounded-md">
        <DataTable
          columns={columns}
          data={filteredDocentes}
          pagination
          paginationPerPage={6}
          paginationRowsPerPageOptions={[6]}
          selectableRows
          selectableRowsHighlight
          responsive
          subHeader
          subHeaderComponent={
            <div className="mb-3">
              <input
                type="text"
                placeholder="Buscar..."
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
                className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out text-gray-700 bg-white hover:bg-gray-50 mt-4 mr-2"
              />
            </div>
          }
        />
        <div className="w-full flex p-2 justify-between items-end ml-3 mt-[-2.5%]">
          <div className="shadow-md duration-300 hover:translate-y-[-10px] hover:border-[#4A55A2] bg-[#626cb881] border border-gray-300 rounded-md">
            <div className="flex flex-col m-auto p-4 gap-4">
              <h1 className="font-bold text-7xl text-gray-600 text-center">
                {docentes.length}
              </h1>
              <p className="font-semibold text-gray-700 text-left">
                Total de{" "}
                <span className="text-[#4856bd] font-bold">
                  Docentes registrados{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Listadocentes;
