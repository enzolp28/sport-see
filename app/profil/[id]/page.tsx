
import React from 'react'
import { USER_MAIN_DATA } from '@/lib/data';
import Activity from '@/composants/activity';


type ParamsType = {
    params: {
        id: string
    }
}

export default async function Profil({ params }: ParamsType) {
    const { id } = await params;
    const data = USER_MAIN_DATA.find((user) => user.id === Number(id));


    console.log(data);
    if (!data) {
        return <div>Loading...</div>;
    }



    return (
        <div>
            <h1>Profil : {id}</h1>
            <p>Nom : {data.userInfos.firstName}</p>
            <Activity id={Number(id)} />
        </div>
    );
}
