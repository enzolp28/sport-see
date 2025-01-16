"use client"
// import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import useFetch from '@/lib/useFetch';
import { log } from 'console';

/**
 * Composant Performance qui affiche un graphique radar des différentes métriques de performance
 * @component
 * @param {Object} props - Propriétés du composant
 * @param {number} props.id - ID de l'utilisateur pour récupérer les données de performance
 * @returns {JSX.Element} Composant de graphique radar de performance
 */
export default function Performance({ id }: { id: number }) {

    const { data, loading } = useFetch(id, 'performance');

    if (loading) {
        return <div>Loading...</div>;
    }

    /**
     * Mapping des traductions pour les métriques de performance
     * @type {Object.<string, string>}
     */
    const translations = {
        cardio: 'Cardio',
        energy: 'Ènergie',
        endurance: 'Endurance',
        strength: 'Force',
        speed: 'Vitesse',
        intensity: 'Intensité'
    };

    /**
     * Ordre d'affichage souhaité pour les métriques de performance
     * @type {string[]}
     */
    const desiredOrder = ['Intensité', 'Vitesse', 'Force', 'Endurance', 'Ènergie', 'Cardio'];

    /**
     * Interface pour les données de performance formatées
     * @interface FormattedPerformanceData
     * @property {string} kind - Type de métrique de performance
     * @property {number} value - Valeur de la métrique de performance
     */
    interface FormattedPerformanceData {
        kind: string;
        value: number;
    }
    console.log("Data----", data)
    const formattedData = data?.data ?
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
            <ResponsiveContainer width="100%" height="100%" style={{ backgroundColor: "#282D30", borderRadius: "5px" }}>
                <RadarChart outerRadius="70%" width={300} height={300} data={formattedData}>
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis dataKey="kind" tick={{ fill: "white", fontSize: 15, dy: 5 }} />
                    <Radar dataKey="value" stroke="#FF0000" fill="#FF0000" fillOpacity={0.7} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );

}
