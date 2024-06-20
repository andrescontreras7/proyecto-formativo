import React, { useState, useEffect } from 'react';
import 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import { getActividadUsers } from '../../endpoints/useGet';

function Estadisticas() {
    const [actividad, setActividad] = useState(null);
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth()); 
    useEffect(() => {
        const fetchActividad = async () => {
            try {
                const res = await getActividadUsers(selectedMonth); 

                
                const estudiantes = res.filter(item => item.userType === 'estudiante');
                const funcionarios = res.filter(item => item.userType === 'funcionario');

                const totalEstudiantes = estudiantes.reduce((acc, curr) => acc + curr.loginCount, 0);
                const totalFuncionarios = funcionarios.reduce((acc, curr) => acc + curr.loginCount, 0);

                const data = {
                    labels: ['Estudiantes', 'Funcionarios'],
                    datasets: [{
                        label: 'Cantidad de Inicios de Sesión',
                        data: [totalEstudiantes, totalFuncionarios],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)'  
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)'
                        ],
                        borderWidth: 1,
                    }],
                };

                setActividad(data);
            } catch (error) {
                console.error('Error al obtener datos de actividad:', error);
            }
        };

        fetchActividad();
    }, [selectedMonth]);

    const handleChangeMonth = (event) => {
        setSelectedMonth(parseInt(event.target.value, 10)); 
    };

    if (actividad === null) {
        return <p>Cargando...</p>; 
    }

    return (
        <div>
            <div className='w-[50%]'>
                <div>
                    <label htmlFor="mes">Seleccionar mes:</label>
                    <select id="mes" value={selectedMonth} onChange={handleChangeMonth}>
                        <option value={0}>Enero</option>
                        <option value={1}>Febrero</option>
                        <option value={2}>Marzo</option>
                        <option value={3}>Abril</option>
                        <option value={4}>Mayo</option>
                        <option value={5}>Junio</option>
                        <option value={6}>Julio</option>
                        <option value={7}>Agosto</option>
                        <option value={8}>Septiembre</option>
                        <option value={9}>Octubre</option>
                        <option value={10}>Noviembre</option>
                        <option value={11}>Diciembre</option>
                    </select>
                </div>
                <div className="chart-container">
                    <Bar data={actividad} />
                </div>
            </div>
        </div>
    );
}

export default Estadisticas;
