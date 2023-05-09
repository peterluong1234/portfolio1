import Image from 'next/image';
import styles from '../styles/HomePageHero.module.scss';
import background from '../public/FrontPhoto.jpg'
import {data} from '../public/data.js'

export const HomePageHero = () => {
    console.log(data.description)
    return <div 
        className={styles.container}  
        style={{
            backgroundImage: `url(${background.src})`, 
            width: '100vw',
            height: '100vh',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
                <div className={styles.text}>Peter Luong</div>

    </div>
}