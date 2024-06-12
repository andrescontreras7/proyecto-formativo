


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


export const getEstudiantesAsignaturas = async (auth, id) => {
  

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


export const getEstudiante = async (auth, id) => {
  console.log(id)
  try {
    const response = await fetch(`http://localhost:3001/appi/estudiante/${id}` , {
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

export const getEstudiantesByGrupo = async (auth, id_fun, asigcod, grupoFK) => {

  try {
    const response = await fetch(`http://localhost:3001/appi/asignaturas-docente/grupo/${id_fun}/${asigcod}/${grupoFK}` , {
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
    return data.data;
  } catch (error) {

    console.error('Error obteniendo los estudiantes :', error);
  }
}

export const getTematicasGrupo = async (auth, asigcod,id_fun, grupoFK) => {

  try {
    const response = await fetch(`http://localhost:3001/appi/Tematicas-grupos/${asigcod}/${id_fun}/${grupoFK}` , {
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
    return data.data;
  } catch (error) {

    console.error('Error obteniendo las tematicas :', error);
  }
}


export const getEvaluacionesPorEstudiante = async (auth,id_estudiante,idasig, idgrupo) => {
  try {
    const response = await fetch(`http://localhost:3001/appi/tarea-send/${id_estudiante}/${idasig}/${idgrupo}` , {
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

    console.error('Error obteniendo las actividades :', error);
  }
}


export const getEvaluacionesPorId = async (auth, id) => {
  console.log(id)
  try {
    const response = await fetch(`http://localhost:3001/appi/evaluaciones/${id}` , {
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

    console.error('Error obteniendo las actividades :', error);
  }
}


export const getEvaluacionesTipos = async (auth) => {
  try {
    const response = await fetch(`http://localhost:3001/appi/evaluaciones_tipos` , {
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

    console.error('Error obteniendo las actividades :', error);
  }
}


export const getEvaluacionesEstudiantes = async (auth, id) => {
  console.log(id)
  try {
    const response = await fetch(`http://localhost:3001/appi/evaluaciones_estudiantes/${id}` , {
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

    console.error('Error obteniendo las actividades :', error);
  }
}

export const getAllInformation = async (auth) => {
  

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

export const getActividadesPorFuncionario = async (auth, id) => {
  console.log(id)
  try {
    const response = await fetch(`http://localhost:3001/appi/evaluaciones_por_funcionario/${id}` , {
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

    console.error('Error obteniendo las actividades :', error);
  }
}
export const getActividadesDelEstudiante = async (auth, idasig,idgrupo) => {
  try {
    const response = await fetch(`http://localhost:3001/appi/evaluaciones_del_estudiante/${idasig}/${idgrupo}` , {
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

    console.error('Error obteniendo las actividades :', error);
  }
}