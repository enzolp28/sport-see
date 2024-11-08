"use client"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { USER_ACTIVITY } from '@/lib/data';
import '../composants/activity.css'
import useFetch from '@/lib/useFetch';




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



    return (
        <div className='activity-container'>
            <h2 className='activity-title'>Activité quotidienne</h2>
            <ResponsiveContainer width={"100%"} height={"100%"}>
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
                        tickMargin={20}
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

                    <Tooltip />
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
