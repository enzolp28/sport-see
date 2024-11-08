import Image from 'next/image'
import './sidebar.css'

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
