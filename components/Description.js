import styles from "../styles/Description.module.scss"

export const Description = ({description}) => {
    return(
        <div className={styles.container}>
            <div className={styles.description}>{description}</div>
            <div className={styles.experience}>Here are some of the brands that I've worked with</div>
        </div>
    )
}