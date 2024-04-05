import styles from '../styles/HomePageHero.module.scss';


export const HeroSection = ({heroPhoto,text}) => {
    return <div 
        className={styles.container}  
        style={{
            backgroundImage: `url(${heroPhoto.src})`, 
            // width: '100vw',
            // height: '100vh',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
        <div className={styles.text}>{text}</div>
        {/* <div>Sometime's</div> */}

    </div>
}