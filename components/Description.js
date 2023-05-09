import styles from "../styles/Description.module.scss"

export const Description = ({description}) => {
    return(
        <div className={styles.container}>
            <div className={styles.description}>{description}</div>
            <div className={styles.about}>About Me</div>
        </div>
    )
}