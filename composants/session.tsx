"use client"
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { USER_AVERAGE_SESSIONS } from '@/lib/data';
import useFetch from '@/lib/useFetch';


const Sessions = ({ id }: { id: number }) => {
    const { data, loading } = useFetch(id, 'average-sessions');

    if (loading) {
        return <div>Loading...</div>;
    }

    // const data = USER_AVERAGE_SESSIONS.find((user) => user.userId === id);
    const jourDeSemaine = ["L", "M", "M", "J", "V", "S", "D"];
    const formattedData = data?.sessions.map((session) => ({
        day: jourDeSemaine[session.day - 1],
        sessionLength: session.sessionLength
    }))
    console.log('forma', formattedData);

    return (
        <ResponsiveContainer width="100%" height="100%" style={{ backgroundColor: "#FF0000" }}>
            <LineChart width={300} height={200} data={formattedData}>
                <Line type="monotone" dataKey="sessionLength" stroke="#fff" strokeWidth={2}
                    dot={false}
                    activeDot={{
                        // fill: 'white',
                        stroke: 'rgba(255, 255, 255, 0.5)',
                        strokeWidth: 10,
                        r: 5,
                    }} />
                <XAxis dataKey="day" dy={10} tickLine={false} axisLine={false} stroke='rgba(255, 255, 255, 0.8)' />
            </LineChart>
        </ResponsiveContainer>
    );
};


export default Sessions;
