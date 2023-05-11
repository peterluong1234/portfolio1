import styles from '../styles/ExperienceModal.module.scss';

export const ExperienceModal = ({ brand,setState,state,data }) => {
    
    return(<div className={styles.modal}>
            <div className={styles.image}><img src={data.image} /></div>
            <div className={styles.info}>
            <div>{data.brand}</div>
            <div>{data.role}</div>
            <div>{data.timeline}</div>
            <div className={styles.description}>{data.description}</div>
            </div>
        <button className={styles.button} onClick={()=>setState(!state)}>&times;</button>
    </div>)
}