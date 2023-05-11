import styles from '../styles/ExperienceModal.module.scss';
import Image from 'next/image'

export const ExperienceModal = ({ image,setState,state,data }) => {
    return(<div className={styles.modal}>
                <Image className={styles.image} src={image} />
            <div className={styles.info}>
                <div>{data.brand}</div>
                <div>{data.role}</div>
                <div>{data.timeline}</div>
                <div className={styles.description}>{data.description}</div>
            </div>
        <button className={styles.button} onClick={()=>setState(!state)}>&times;</button>
    </div>)
}