import React from 'react'
import './cartUser.css'
// import data from '@/lib/data';

export default function Cartuser({ name, age }) {

    return (
        <div className='cart-user'>
            <h2>{name}</h2>
            <p>{age} ans</p>
        </div>
    )
}
