import styles from '../styles/Project.module.scss'

export const Project = ({image,brand}) => {
    return(
        <div className={styles.box}>
            <div className={styles.brand}>{brand}</div>
            <div className={styles.image}
                style={{backgroundImage: `url(${image.src})`,
                width: '100%',
                height: '100%',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                
            </div>
            
        </div>)
}