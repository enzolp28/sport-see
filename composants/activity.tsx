"use client"
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { USER_ACTIVITY } from '@/lib/data';



export default function Activity({ id }: number) {
    const data = USER_ACTIVITY.find((user) => user.userId === id);
    console.log("aactivité", data);
    const formattedData = data?.sessions.map((session) => ({
        day: Number(session.day.slice(-2)),
        kilogram: session.kilogram,
        calories: session.calories
    }))
    console.log("formatted", formattedData);

    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                width={500}
                height={300}
                data={formattedData}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend align="right" verticalAlign="top" iconType='circle' />
                <Bar barSize={10} dataKey="kilogram" fill="#282D30" />
                <Bar barSize={10} dataKey="calories" fill="#E60000" />
            </BarChart>
        </ResponsiveContainer>
    );
}
