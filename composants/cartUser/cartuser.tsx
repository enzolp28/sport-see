import React from 'react'
import './cartUser.css'
// import data from '@/lib/data';

type CartuserProps = {
    name: string,
    age: number
}

export default function Cartuser({ name, age }: CartuserProps) {

    return (
        <div className='cart-user'>
            <h2>{name}</h2>
            <p>{age} ans</p>
        </div>
    )
}
