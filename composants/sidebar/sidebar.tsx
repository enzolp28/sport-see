import Image from 'next/image'
import './sidebar.css'

/**
 * Composant Sidebar affiche les icônes d'activité et les informations de copyright
 * @component
 * @returns {JSX.Element} Barre latérale avec icônes d'activité et mention de copyright
 * @description Barre latérale verticale contenant des icônes pour différentes activités physiques 
 * (yoga, natation, vélo, musculation) et une mention de copyright en bas
 */
export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="icon">
                <Image src="/icon-yoga.svg" alt="icon yoga" width={64} height={64} />
                <Image src="/icon-swim.svg" alt="icon yoga" width={64} height={64} />
                <Image src="/icon-bike.svg" alt="icon yoga" width={64} height={64} />
                <Image src="/icon-muscu.svg" alt="icon yoga" width={64} height={64} />
            </div>
            <div className="copyright">
                <p>Copyright, SportSee 2020</p>
            </div>
        </div>
    )
}
