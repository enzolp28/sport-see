'use client';
// import { USER_MAIN_DATA } from '@/lib/data';

import Activity from '@/composants/dailyActivity/activity';
import Macronutriment from '@/composants/macronutriment/macronutriment';
import './page.css'
import Sessions from '@/composants/session';
import Performance from '@/composants/performance';
import Score from '@/composants/score';
import useFetch from '@/lib/useFetch';
import { use } from 'react';
import { useParams } from 'next/navigation';



type ParamsType = {
    params: {
        id: string
    }
}


export default  function Profil() {
    // const { id } = await params;
    //const data = USER_MAIN_DATA.find((user) => user.id === Number(id));
    const params = useParams();
    const id = params?.id;
    const { data } = useFetch(Number(id), '');


    const score = data?.score ? data.score : data?.todayScore;


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
                <div className="statistics">
                    <Activity id={Number(id)} />
                    <div className="three-graph">
                        <Sessions id={Number(id)} />
                        <Performance id={Number(id)} />
                         <Score score={score} /> 
                    </div>
                </div>
                <div className="macro-container">
                    <Macronutriment id={Number(id)} calories={data.keyData.calorieCount} info="KCal" src="/calories-icon.svg" value="Calories" />
                    <Macronutriment id={Number(id)} calories={data.keyData.proteinCount} info="g" src="/protein-icon.svg" value="Proteines" />
                    <Macronutriment id={Number(id)} calories={data.keyData.carbohydrateCount} info="g" src="/glucide-icon.svg" value="Glucides" />
                    <Macronutriment id={Number(id)} calories={data.keyData.lipidCount} info="g" src="/lipide-icon.svg" value="Lipides" />
                </div>
            </div>
        </div>
    );
}
