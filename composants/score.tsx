"use client"
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';




export default function Score({ score }: { score: number }) {

    const data = [
        {
            name: 'score',
            score,
            fill: '#E60000',
        },
        {
            name: 'score',
            score: 1,
            fill: 'transparent',
        }
    ];

    return (
        <div className="graph-container">

            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart width={530} height={250} cx="50%" cy="50%" innerRadius="100%" outerRadius="100%" barSize={10} data={data} startAngle={90}>
                    <RadialBar
                        minAngle={15}
                        clockWise={false}
                        dataKey="score"
                        cornerRadius={10}
                    />
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    );
}
