export const createEstudiante = async (data, auth) => {
    try {
        const response = await fetch('http://localhost:3001/appi/estudiante/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${auth.token}`
            },
            body: JSON.stringify(data)
        });

        const responseData = await response.json();

        if (response.ok) {
            return { message: "Estudiante creado con éxito", data: responseData };
        } else if (response.status === 409) {
            return { message: "El correo o el ID ya existen", data: responseData };
        } else {
            return { message: "Error al crear el estudiante", data: responseData };
        }
    } catch (error) {
        console.error('Error creando el alumno:', error);
        return { message: "Error al crear el estudiante", error: error.message };
    }
};


export const createAsignatura = async (auth, data) => {
  
   
    try {
        const response = await fetch('http://localhost:3001/appi/asignaturas/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${auth.token}`
            },
            body: JSON.stringify(data)
        });

        const responseData = await response.json();

        if (response.ok) {
            return { message: "Asignatura creada con éxito", data: responseData };
        } else if (response.status === 409) {
            return { message: "Esta asignatura ya existe", data: responseData };
        } else {
            return { message: "Error al crear la asignatura", data: responseData };
        }
    } catch (error) {
        console.error('Error creando la asignatura:', error);
        return { message: "Error al crear la asignatura", error: error.message };
    }
};



export const createTemas = async (auth, data) => {
  
   
    try {
        const response = await fetch('http://localhost:3001/appi/Tematicas/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${auth.token}`
            },
            body: JSON.stringify(data)
        });

        const responseData = await response.json();

        if (response.ok) {
            return { message: "Tematicas creada con éxito", data: responseData };
        } else if (response.status === 409) {
            return { message: "Esta  ya existe", data: responseData };
        } else {
            return { message: "Error al crear la Tematica", data: responseData };
        }
    } catch (error) {
        console.error('Error creando la Tematica:', error);
        return { message: "Error al crear la Tematica", error: error.message };
    }
};


export const crearAsistencia = async (auth, datas) => {
    console.log(datas);
    try {
      const response = await fetch(`http://localhost:3001/appi/asistenciaEstudiantes/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${auth.token}`
        },
        body: JSON.stringify( datas )
      });
  
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error registrando la asistencia:', error);
    }
  };
  
  export const createExcusas = async (auth, data) => {
  
   
    try {
        const response = await fetch('http://localhost:3001/appi/excusas/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${auth.token}`
            },
            body: JSON.stringify(data)
        });

        const responseData = await response.json();

        if (response.ok) {
            return { sucess:true, message: "Excusa creada con éxito", data: responseData };
        } else if (response.status === 409) {
            return { message: "Esta Excusa ya existe", data: responseData };
        } else {
            return { message: "Error al crear la excusa", data: responseData };
        }
    } catch (error) {
        console.error('Error creando la excusa:', error);
        return { message: "Error al crear la excusa", error: error.message };
    }
};
     
export const createAreas = async (auth, data) => {
    try {
        const response = await fetch('http://localhost:3001/appi/area', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${auth.token}`
            },
            body: JSON.stringify(data)
        });

        const responseData = await response.json();

        if (response.ok) {
            return { message: "Tematicas creada con éxito", data: responseData };
        } else if (response.status === 409) {
            return { message: "Esta  ya existe", data: responseData };
        } else {
            return { message: "Error al crear la Area", data: responseData };
        }
    } catch (error) {
        console.error('Error creando la Tematica:', error);
        return { message: "Error al crear la Area", error: error.message };
    }
};

export const createFuncionario = async (auth, data) => {
    try {
        const response = await fetch('http://localhost:3001/appi/funcionario/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${auth.token}`
            },
            body: JSON.stringify(data)
        });

        const responseData = await response.json();

        if (response.ok) {
            return { message: "Funcionario creado con éxito", data: responseData };
        } else if (response.status === 409) {
            return { message: "El correo o el ID ya existen", data: responseData };
        } else {
            return { message: "Error al funcionario", data: responseData };
        }
    } catch (error) {
        console.error('Error creando funcionario:', error);
        return { message: "Error al crear Funcioario", error: error.message };
    }
};



export const createActividad = async (auth, data) => {
    try {
        const response = await fetch('http://localhost:3001/appi/evaluaciones/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${auth.token}`
            },
            body: JSON.stringify(data)
        });

        const responseData = await response.json();

        if (response.ok) {
            return { message: "Actividad creada con éxito", data: responseData };
        } else if (response.status === 409) {
            return { message: "Esta  ya existe", data: responseData };
        } else {
            return { message: "Error al crear la Actividad", data: responseData };
        }
    } catch (error) {
        console.error('Error creando la Actividad:', error);
        return { message: "Error al crear la Actividad", error: error.message };
    }
};


export const createTarea = async (auth, data) => {
    try {
        const response = await fetch('http://localhost:3001/appi/tarea-send/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${auth.token}`
            },
            body: JSON.stringify(data)
        });

        const responseData = await response.json();

        if (response.ok) {
            return { message: "Actividad creada con éxito", data: responseData };
        } else if (response.status === 409) {
            return { message: "Esta  ya existe", data: responseData };
        } else {
            return { message: "Error al crear la Actividad", data: responseData };
        }
    } catch (error) {
        console.error('Error creando la Actividad:', error);
        return { message: "Error al crear la Actividad", error: error.message };
    }
};


export const createAsignaturaDocente = async (auth, data) =>{
    try {
        const response = await fetch('http://localhost:3001/appi/asignaturas-docente/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${auth.token}`
            },
            body: JSON.stringify(data)
        });
        const responseData = await response.json();
        if (response.ok) {
            return { message: "Asignatura creada con éxito", data: responseData };
       
        } else {
            return { message: "Error al crear la asignatura", data: responseData };
        }
        
    } catch (error) {
        console.error('Error creando la asignatura:', error);
        return { message: "Error al crear la asignatura", error: error.message };
    }


}
