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