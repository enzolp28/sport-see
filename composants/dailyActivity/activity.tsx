"use client"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { USER_ACTIVITY } from '@/lib/data';
import './activity.css'
import useFetch from '@/lib/useFetch';

/**
 * Interface pour les propriétés de l'infobulle
 * @interface TooltipProps
 * @property {boolean} active - Indique si l'infobulle est active
 * @property {Array} payload - Les données à afficher dans l'infobulle
 * @property {number} label - Le label du point de données
 */
interface TooltipProps {
    active?: boolean;
    payload?: any[];
    label?: number;
}

/**
 * Composant Activity qui affiche un graphique en barres de l'activité quotidienne
 * @component
 * @param {Object} props - Propriétés du composant
 * @param {number} props.id - ID de l'utilisateur pour récupérer les données d'activité
 * @returns {JSX.Element} Composant de graphique d'activité
 */
export default function Activity({ id }: { id: number }) {
    const { data, loading } = useFetch(id, 'activity');

    if (loading) {
        return <div>Loading...</div>;
    }
    console.log('activity', data);

    const formattedData = data?.sessions.map((session) => ({
        day: Number(session.day.slice(-2)),
        kilogram: session.kilogram,
        calories: session.calories
    }))

    console.log(formattedData);

    const minKilogram = Math.min(...formattedData.map((data) => data.kilogram));
    const maxKilogram = Math.max(...formattedData.map((data) => data.kilogram));
    console.log(minKilogram, maxKilogram);


    const minCalories = Math.min(...formattedData.map((data) => data.calories));
    const maxCalories = Math.max(...formattedData.map((data) => data.calories));

    /**
     * Composant d'infobulle personnalisée pour le graphique d'activité
     * @component
     * @param {TooltipProps} props - Propriétés de l'infobulle fournies par recharts
     * @returns {JSX.Element|null} Composant d'infobulle ou null si inactif
     */
    const CustomTooltip = ({ active, payload, label }: TooltipProps) => {
        console.log('payload', payload);

        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip">
                    <p className="label">{`${payload[0].value}`}kg</p>
                    <p className="label">{`${payload[1].value}`}kCal</p>
                </div>
            );
        }
    }



    return (
        <div className='activity-container'>
            <h2 className='activity-title'>Activité quotidienne</h2>
            <ResponsiveContainer width={"100%"} height={"100%"} className="activity-responsive-container" >
                <BarChart
                    data={formattedData}
                    width={835}
                    height={320}
                    barSize={7}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    barGap={12}
                >
                    <CartesianGrid vertical={false} strokeDasharray="3" />
                    <XAxis
                        dataKey={"day"}
                        // range={[0, 30]}
                        // domain={[minCalories, maxCalories]}
                        tickLine={false}
                        tickMargin={15}
                        tick={{ fontSize: 15 }}
                    />

                    <YAxis
                        dataKey="kilogram"
                        orientation="right"
                        // domain={['dataMin - 30', 'dataMax + 30']}
                        type='number'
                        tickCount={3}
                        tickLine={false}
                        tickMargin={20}
                        axisLine={false}
                        tick={{ fontSize: 15 }}
                        yAxisId="kilogram"
                    />
                    <YAxis
                        hide={true}
                        dataKey="calories"
                        type='number'
                        // domain={['dataMin - 20', 'dataMax + 10']}
                        yAxisId="calories"
                    // tickCount={3}
                    />

                    <Tooltip content={<CustomTooltip />} />
                    <Legend
                        verticalAlign="top"
                        align="right"
                        iconType="circle"
                        height={80}
                    />
                    <Bar
                        name="Poids (kg)"
                        barSize={10}
                        dataKey="kilogram"
                        fill="#282D30"
                        radius={[10, 10, 0, 0]}
                        activeBar={false}
                        yAxisId="kilogram"

                    />
                    <Bar
                        name="Calories brulees (kCal)"
                        barSize={10}
                        dataKey="calories"
                        fill="#E60000"
                        radius={[10, 10, 0, 0]}
                        yAxisId="calories"
                    />

                </BarChart>
            </ResponsiveContainer>
        </div>

    );
}
