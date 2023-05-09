import Image from 'next/image';
import styles from '../styles/HomePageHero.module.scss';
import background from '../public/FrontPhoto.jpg'
import {data} from '../public/data.js'

export const HeroSection = ({heroPhoto,text}) => {
    return <div 
        className={styles.container}  
        style={{
            backgroundImage: `url(${heroPhoto.src})`, 
            width: '100vw',
            height: '100vh',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
                <div className={styles.text}>{text}</div>

    </div>
}