import Image from "next/image";
import './macronutriment.css';

/**
 * Interface des propriétés pour le composant Macronutriment
 * @interface MacronutrimentProps
 * @property {number} id - Identifiant unique du macronutriment
 * @property {number} calories - Nombre de calories
 * @property {string} info - Informations supplémentaires sur le macronutriment
 * @property {string} src - URL source de l'icône du macronutriment
 * @property {string} value - Valeur d'affichage pour le macronutriment
 */
type MacronutrimentProps = {
    id: number,
    calories: number,
    info: string,
    src: string,
    value: string
};

/**
 * Composant Macronutriment affiche les informations nutritionnelles avec une icône
 * @component
 * @param {Object} props - Propriétés du composant
 * @param {number} props.calories - Nombre de calories à afficher
 * @param {string} props.info - Texte d'information supplémentaire
 * @param {string} props.src - URL source de l'icône
 * @param {string} props.value - Texte de la valeur à afficher
 * @returns {JSX.Element} Carte d'information sur les macronutriments
 */
export default function Macronutriment({ calories, info, src, value }: MacronutrimentProps) {
    /**
     * Formatage des calories en chaîne de caractères
     * @type {string}
     */
    const formattedCalories = calories.toLocaleString("en-US");

    return (
        <div className="macronutriment-container">
            <Image src={src} alt="logo" width={60} height={60} />
            <div className="macronutriment">
                <h3>{formattedCalories}{info}</h3>
                <p>{value}</p>
            </div>
        </div>
    );
}
