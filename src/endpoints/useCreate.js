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

