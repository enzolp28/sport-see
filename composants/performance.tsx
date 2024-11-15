"use client"
// import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import useFetch from '@/lib/useFetch';

export default function Performance({ id }: { id: number }) {

    const { data, loading } = useFetch(id, 'performance');

    if (loading) {
        return <div>Loading...</div>;
    }

    // const translations = {
    //     intensity: 'intensité',
    //     speed: 'vitesse',
    //     strength: 'force',
    //     endurance: 'endurance',
    //     energy: 'énergie',
    //     cardio: 'cardio',
    // };

    const translations = {
        cardio: 'Cardio',
        energy: 'Ènergie',
        endurance: 'Endurance',
        strength: 'Force',
        speed: 'Vitesse',
        intensity: 'Intensité'
    };

    const desiredOrder = ['Intensité', 'Vitesse', 'Force', 'Endurance', 'Ènergie', 'Cardio'];

    const formattedData = data?.data
        .map((item) => ({
            kind: translations[data.kind[item.kind]],
            value: item.value
        }))
        .sort((a, b) => desiredOrder.indexOf(a.kind) - desiredOrder.indexOf(b.kind));

    const dataKind = Object.values(data?.kind);
    console.log(dataKind)

    console.log('formattedData', formattedData);



    return (
        <div className="graph-container">
            <ResponsiveContainer width="100%" height="100%" style={{ backgroundColor: "#282D30" }}>
                <RadarChart cx="50%" cy="50%" outerRadius="80%" width={380} height={263} data={formattedData}>
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis dataKey="kind" tick={{ fill: "white", fontSize: 15 }} />
                    <Radar name="Mike" dataKey="value" stroke="#FF0000" fill="#FF0000" fillOpacity={0.7} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );

}
