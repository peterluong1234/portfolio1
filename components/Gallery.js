import * as photos from '../public/images';
import styles from '../styles/Gallery.module.scss'
import Image from 'next/image'

export const Gallery = () => {
    return(<div className={styles.container}>
        <div className={styles.imageA}><Image className={styles.image} src={photos.ABOUT.image5} alt=""/></div>
        <div className={styles.imageC}><Image className={styles.image} src={photos.ABOUT.image9} alt=""/></div>
        <div className={styles.imageB}><Image className={styles.image} src={photos.ABOUT.image11} alt=""/></div>
        <div className={styles.imageD}><Image className={styles.image} src={photos.ABOUT.image16} alt=""/></div>
        <div className={styles.imageE}><Image className={styles.image} src={photos.ABOUT.image13} alt=""/></div>
        <div><Image className={styles.image} src={photos.ABOUT.image17} alt=""/></div>
        {/* <div ><Image className={styles.image} src={photos.ABOUT.image10} alt=""/></div> */}
        <div ><Image className={styles.image} src={photos.ABOUT.image14} alt=""/></div>
    </div>)
}