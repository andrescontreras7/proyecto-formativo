export const deleteAsignatura = async (auth, asigcod) => {
  const response = await fetch(`http://localhost:3001/appi/asignaturas/${asigcod}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth.token}`
    }
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Error al eliminar la asignatura");
  }

  return data;
};

export const deleteArea = async (auth, cod_Area) => {
  console.log("hhhhh")
  console.log(cod_Area)
  const response = await fetch(`http://localhost:3001/appi/area/${cod_Area}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${auth.token}`
    }
  });

  if (!response.ok) {
    throw new Error("Error al eliminar el área.");
  }

  return { message: "Tematicas creada con éxito"};
};