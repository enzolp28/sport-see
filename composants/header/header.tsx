import React from 'react'
import Image from 'next/image'
import './header.css'
import Link from 'next/link'

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
