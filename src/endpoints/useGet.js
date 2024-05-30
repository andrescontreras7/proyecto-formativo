


export const fetchEstudiantes = async (auth) => {
  try {
    const response = await fetch('http://localhost:3001/appi/estudiante', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth.token}`
      }
    });

    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error obteniendo los estudiantes:', error);
  }
}

export const getAsiganturaDocente = async (auth, id) => {
  try {
    const response = await fetch(`http://localhost:3001/appi/asignaturas-docente/${id}` , {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth.token}`
      }
    });

    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error obteniendo las asignaturas:', error);
  }
}

export const getDocente = async (auth) => {
  try {
    const response = await fetch(`http://localhost:3001/appi/funcionario` , {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth.token}`
      }
    });

    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error obteniendo los docentes:', error);
  }
}