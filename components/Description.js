import styles from "../styles/Description.module.scss"

export const Description = ({description}) => {
    const experienceIntro = 'Here are some of the brands that I\'ve worked with';
    return(
        <div className={styles.container}>
            <div className={styles.description}>{description}</div>
            <div className={styles.experience}>{experienceIntro}</div>
        </div>
    )
}