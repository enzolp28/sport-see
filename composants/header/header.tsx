import React from 'react'
import Image from 'next/image'
import './header.css'
import Link from 'next/link'

/**
 * Composant Header affiche la barre de navigation principale de l'application
 * @component
 * @returns {JSX.Element} Barre de navigation avec logo et liens de navigation
 * @description Contient le logo SportSee et les liens de navigation pour Accueil, Profil, Réglages et Communauté
 */
export default function Header() {
    return (
        <div className="header">
            <Image src="/logo-sportsee.svg" priority={true} alt="logo" width={178} height={0} />
            <Link href="/">
                <p>Accueil</p>
            </Link>
            <p>Profil</p>
            <p>Réglage</p>
            <p>Communauté</p>
        </div>
    )
}
