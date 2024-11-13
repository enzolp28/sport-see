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
        cardio: 'cardio',
        energy: 'énergie',
        endurance: 'endurance',
        strength: 'force',
        speed: 'vitesse',
        intensity: 'intensité'
    };

    const desiredOrder = ['intensité', 'vitesse', 'force', 'endurance', 'énergie', 'cardio'];

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
        <ResponsiveContainer width="100%" height="100%" style={{ backgroundColor: "#282D30" }}>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" width={380} height={263} data={formattedData}>
                <PolarGrid radialLines={false} />
                <PolarAngleAxis dataKey="kind" tick={{ fill: "white", fontSize: 15 }} />
                <Radar name="Mike" dataKey="value" stroke="#FF0000" fill="#FF0000" fillOpacity={0.7} />
            </RadarChart>
        </ResponsiveContainer>
    );
}
