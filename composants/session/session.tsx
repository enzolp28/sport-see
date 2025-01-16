"use client"
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import useFetch from '@/lib/useFetch';
import './session.css'



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

    const CustomTooltip = ({ active, payload }: any) => {
        if (active && payload && payload.length) {
            return (
                <div style={{
                    backgroundColor: 'white',
                    padding: '5px 10px',
                    fontSize: '12px',
                }}>
                    <p style={{ margin: 0 }}>{`${payload[0].value} min`}</p>
                </div>
            );
        }
        return null;
    };

    const CustomCursor = ({ points }: any) => {
        const { x } = points[0];
        return (
            <rect
                x={x}
                y={0}
                width={500}
                height={300}
                fill="black"
                fillOpacity={0.1}
            />
        );
    };


    return (
        <div className="graph-container">
            <ResponsiveContainer width="100%" height="100%" style={{ backgroundColor: "#FF0000", borderRadius: "5px" }}>
                <LineChart
                    width={200}
                    height={200}
                    data={formattedData}
                    margin={{ top: 30, right: 5, left: 5, bottom: 5 }}
                >
                    <Legend content={<p className='legend'>Durée moyenne des sessions</p>} />

                    <defs>
                        <linearGradient id="gradientLine" x="0" x2="1.0">
                            <stop offset="0%" stopColor="white" stopOpacity={0.3} />
                            <stop offset="100%" stopColor="white" />
                        </linearGradient>
                    </defs>
                    <CartesianGrid horizontal={false} vertical={false} />
                    <XAxis
                        dataKey="day"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: 'rgba(255, 255, 255, 0.5)' }}
                        padding={{ left: 10, right: 10 }}
                    />
                    <YAxis hide={true} />
                    <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
                    <Line
                        type="monotone"
                        dataKey="sessionLength"
                        stroke="url(#gradientLine)"
                        strokeWidth={2}
                        dot={false}
                        activeDot={{ r: 5, fill: 'white', strokeWidth: 10, stroke: 'rgba(255, 255, 255, 0.2)' }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Sessions;
