import Image from "next/image";
import '../composants/macronutriment.css';

type MacronutrimentProps = {
    calories: number;
    info: string;
};



export default function Macronutriment({ calories, info }: MacronutrimentProps) {

    const formattedCalories = calories.toLocaleString("en-US");

    return (
        <div className="macronutriment-container">
            <Image src="/calories-icon.svg" alt="logo" width={60} height={60} />
            <div className="macronutriment">
                <h3>{formattedCalories}{info}</h3>
                <p>Calories</p>
            </div>
        </div>
    );
}
