export const updateArea = async (auth, cod_area) => {
    const response = await fetch(`http://localhost:3001/appi/area/${cod_area}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth.token}`
      }
    });
  
    const data = await response.json();
  
    if (!response.ok) {
      throw new Error(data.message || "Error al eliminar el área.");
    }
  
    return data;
  };