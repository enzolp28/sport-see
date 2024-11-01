import React from 'react'
import Image from 'next/image'
import './header.css'

export default function Header() {
    return (
        <div className="header">
            <Image src="logo-sportsee.svg" alt="logo" width={178} height={60.93} />
            <p>Accueil</p>
            <p>Profil</p>
            <p>Réglage</p>
            <p>Communauté</p>
        </div>
    )
}
