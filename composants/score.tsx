"use client"
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import './score.css'

/**
 * Interface pour la structure des données de score
 * @interface ScoreData
 * @property {string} name - Nom du point de données
 * @property {number} score - Valeur du score (entre 0 et 1)
 * @property {string} fill - Couleur de remplissage pour la barre radiale
 */
interface ScoreData {
    name: string;
    score: number;
    fill: string;
}

/**
 * Composant Score qui affiche un graphique radial montrant le score de réussite de l'utilisateur
 * @component
 * @param {Object} props - Propriétés du composant
 * @param {number} props.score - Valeur du score entre 0 et 1 représentant le pourcentage de réussite
 * @returns {JSX.Element} Composant de graphique de score
 */
export default function Score({ score }: { score: number }) {

    const data: ScoreData[] = [
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
            <div className="score-container">
                <h3>Score</h3>
                <div className="score-info">
                    <p>{score * 100}%</p>
                    <p>de votre objectif</p>
                </div>
                <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart width={300} height={250} cx="50%" cy="50%" innerRadius="100%" outerRadius="100%" barSize={10} data={data} startAngle={90}>
                        <RadialBar
                            minAngle={15}
                            clockWise={false}
                            dataKey="score"
                            cornerRadius={100}
                        />
                        <circle r="115" cx="50%" cy="50%" fill="white" />

                    </RadialBarChart>
                </ResponsiveContainer>
            </div>
        </div >
    );
}
