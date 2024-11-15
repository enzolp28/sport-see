import Image from "next/image";
import './macronutriment.css';

type MacronutrimentProps = {
    id: number,
    calories: number,
    info: string,
    src: string,
    value: string
};

/**
 * Composant Macronutriment
 * @param {MacronutrimentProps} props - Props du composant
 * @returns {JSX.Element} Élément JSX du composant
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
