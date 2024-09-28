import styles from '../styles/HomePageHero.module.scss';
import { useEffect, useState } from 'react';

export const HeroSection = ({heroPhoto,text}) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    },[])

    return <div 
        className={styles.container}
        style={{
            backgroundImage: `url(${heroPhoto.src})`, 
            // width: '100vw',
            // height: '100vh',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
        <h1 className={`${styles.header} ${ isVisible ? styles.show : styles.hidden}`}>{text}</h1>
        {/* <div>Sometime's</div> */}

    </div>
}