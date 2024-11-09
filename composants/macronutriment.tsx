import Image from "next/image";
import '../composants/macronutriment.css';

type MacronutrimentProps = {
    calories: number;
    info: string;
    src: string

};



export default function Macronutriment({ calories, info, src }: MacronutrimentProps) {

    const formattedCalories = calories.toLocaleString("en-US");

    return (
        <div className="macronutriment-container">
            <Image src={src} alt="logo" width={60} height={60} />
            <div className="macronutriment">
                <h3>{formattedCalories}{info}</h3>
                <p>Calories</p>
            </div>
        </div>
    );
}
