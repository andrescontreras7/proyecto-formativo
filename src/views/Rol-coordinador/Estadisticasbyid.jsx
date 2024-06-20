import React, { useState, useEffect } from 'react';
import 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import { getActividadUserByid } from '../../endpoints/useGet';
import { useParams } from 'react-router-dom';

function EstadisticasUsuario() {
    const [actividad, setActividad] = useState(null);
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
    const { id } = useParams();

    useEffect(() => {
        const fetchActividad = async () => {
            try {
                const res = await getActividadUserByid(selectedMonth, id);
                const totalLoginCount = res.reduce((total, item) => total + item.loginCount, 0);

                const data = {
                    labels: ['Inicios de Sesión'],
                    datasets: [{
                        label: 'Cantidad de Inicios de Sesión',
                        data: [totalLoginCount],
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1,
                    }],
                };

                setActividad(data);
            } catch (error) {
                console.error('Error al obtener datos de actividad:', error);
            }
        };

        fetchActividad();
    }, [selectedMonth, id]);

    const handleChangeMonth = (event) => {
        setSelectedMonth(parseInt(event.target.value, 10));
    };

    if (actividad === null) {
        return <p>Cargando...</p>;
    }

    return (
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg mt-2 p-4">
            <div className="mb-4">
                <label htmlFor="mes" className="block text-gray-700 text-sm font-bold mb-2">Seleccionar mes:</label>
                <select
                    id="mes"
                    value={selectedMonth}
                    onChange={handleChangeMonth}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
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
            <div className="h-64">
                <Bar data={actividad} options={{ maintainAspectRatio: false }} />
            </div>
        </div>
    );
}

export default EstadisticasUsuario;
