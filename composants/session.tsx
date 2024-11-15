"use client"
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
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
        <div className="graph-container">
            <ResponsiveContainer width="100%" height="100%" style={{ backgroundColor: "#FF0000" }}>
                <LineChart width={500} height={300} data={formattedData} margin={{ top: 30, right: 5, left: 5, bottom: 5 }} >
                    <Line type="monotone" dataKey="sessionLength" stroke="#fff" strokeWidth={2}
                        dot={false}
                        activeDot={{
                            // fill: 'white',
                            stroke: 'rgba(255, 255, 255, 0.5)',
                            strokeWidth: 10,
                            r: 5,
                        }} />
                    <XAxis dataKey="day" dy={10} tickLine={false} axisLine={false} stroke='rgba(255, 255, 255, 0.8)' />
                    <text x="60%" y="30%" textAnchor="middle" fontSize="18" fontWeight="bold" fill="white">
                        Durée moyenne des sessions
                    </text>
                </LineChart>
            </ResponsiveContainer>
        </div>


    );
};

export default Sessions;
