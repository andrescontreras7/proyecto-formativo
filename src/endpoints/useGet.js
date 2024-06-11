


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
  console.log(id)
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


export const  getEstudiantesAsignatura = async (auth, id) => {
  try {
    const response = await fetch(`http://localhost:3001/appi/asignaturas-estudiantes/All-estudiantes/${id}` , {
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
export const getAllInformation = async (auth) => {

export const getEstudiantesAsignatura = async (auth, id) => {
  

  try {
    const response = await fetch(`http://localhost:3001/appi/asignaturas-estudiantes` , {
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
export const getAreas = async (auth) => {
  try {
    const response = await fetch(`http://localhost:3001/appi/area` , {
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
    console.error('Error obteniendo las areas:', error);
  }
}

export const getGruposAll = async (auth, id, asigcod) => {

  try {
    const response = await fetch(`http://localhost:3001/appi/asignaturas-docente/grupo/${id}/${asigcod}    ` , {
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


export const getTemas = async (auth, id, asigcod) => {

  try {
    const response = await fetch(`http://localhost:3001/appi/asignaturas-docente/grupo/${id}/${asigcod}    ` , {
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

export const getPorcentaje = async (auth, asigs) => {
  const fetches = asigs.map(asig => {
  
    return fetch(`http://localhost:3001/appi/clases/porcentaje-asignaturas/${asig}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth.token}`
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error en la solicitud para ${asig}`);
      }
      return response.json();
    })
    .then(data => ({ asig, data }))
    .catch(error => {
      console.error(`Error obteniendo los datos para ${asig}:`, error);
      return { asig, error: error.message };  // Devolver el error asociado a la asignatura
    });
  });

  return Promise.all(fetches);
}



export const getAsignaturas = async (auth) => {

  try {
    const response = await fetch(`http://localhost:3001/appi/asignaturas` , {
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


export const getAsistencias = async (auth, asigcod, grupcod) => {

  try {
    const response = await fetch(`http://localhost:3001/appi/asistenciaEstudiantes/getAll/${asigcod}/${grupcod}  ` , {
      method: 'PUT',
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
    console.error('Error obteniendo las asistencias:', error);
  }
}

export const getEstudiantesByGrupo = async (auth, id) => {
  console.log(id)
  try {
    const response = await fetch(`http://localhost:3001/appi/asignaturas-estudiantes/All-estudiantes/${id}` , {
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

    console.error('Error obteniendo los estudiantes :', error);
  }
}