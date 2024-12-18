import React from 'react'
import './cartUser.css'
// import data from '@/lib/data';

/**
 * Interface des propriétés pour le composant CartUser
 * @interface CartuserProps
 * @property {string} name - Nom de l'utilisateur
 * @property {number} age - Âge de l'utilisateur
 */
type CartuserProps = {
    name: string,
    age: number
}

/**
 * Composant CartUser affiche une carte d'information utilisateur
 * @component
 * @param {Object} props - Propriétés du composant
 * @param {string} props.name - Nom de l'utilisateur à afficher
 * @param {number} props.age - Âge de l'utilisateur à afficher
 * @returns {JSX.Element} Carte d'information utilisateur
 */
export default function Cartuser({ name, age }: CartuserProps) {

    return (
        <div className='cart-user'>
            <h2>{name}</h2>
            <p>{age} ans</p>
        </div>
    )
}
