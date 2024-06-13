export const updateArea = async (auth, cod_area, nuevosDatos) => {
  const response = await fetch(`http://localhost:3001/appi/area/${cod_area}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth.token}`
    },
    body: JSON.stringify(nuevosDatos) 
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Error al eliminar el área.");
  }

  return data;
};

// useUpdate.js
export const updateFuncionario = async (auth, funcid, data) => {
  const response = await fetch(`http://localhost:3001/appi/funcionario/update/${funcid}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth.token}`
    },
    body: JSON.stringify(data)
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(responseData.message || "Error al actualizar el funcionario");
  }

  return responseData;
};



export const updateTareaNota = async (auth, cod_tarea, nuevosDatos) => {
  console.log(nuevosDatos)
  const response = await fetch(`http://localhost:3001/appi/tarea-send/${cod_tarea}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth.token}`
    },
    body: JSON.stringify(nuevosDatos) 
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Error al eliminar el área.");
  }

  return data;
};