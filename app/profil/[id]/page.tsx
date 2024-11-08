import React from 'react'
import { USER_MAIN_DATA } from '@/lib/data';
import Activity from '@/composants/activity';
import Macronutriment from '@/composants/macronutriment';
import './page.css'
import Sessions from '@/composants/session';


type ParamsType = {
    params: {
        id: string
    }
}

export default async function Profil({ params }: ParamsType) {
    const { id } = await params;
    const data = USER_MAIN_DATA.find((user) => user.id === Number(id));


    console.log(data?.keyData.calorieCount);
    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div className='profil-page'>
            <h1>
                Bonjour <span className='firstName'>{data.userInfos.firstName}</span>
            </h1>
            <p className='texte-encouragement'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            <div className='statistics-container'>
                <Activity id={Number(id)} />
                <Sessions id={Number(id)} />
                <div className="macro-container">
                    <Macronutriment id={Number(id)} calories={data.keyData.calorieCount} info="KCal" />
                    <Macronutriment id={Number(id)} calories={data.keyData.calorieCount} info="KCal" />
                    <Macronutriment id={Number(id)} calories={data.keyData.calorieCount} info="KCal" />
                    <Macronutriment id={Number(id)} calories={data.keyData.calorieCount} info="KCal" />
                </div>
            </div>
        </div>
    );
}
