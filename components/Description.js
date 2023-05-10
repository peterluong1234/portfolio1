import styles from "../styles/Description.module.scss"

export const Description = ({data}) => {
    return(
        <div className={styles.container}>
            <div className={styles.header}>{data.header}</div>
            {   
                data.experienceIntro ?
                <div className={styles.experience}>{data.experienceIntro}</div>
                : ''
            }
            {
                data.paragraph ?
                data.paragraph.map((p, idx) => (
                    <div className={styles.paragraph} key={idx}>{p}<br /></div>
                )) 
                :
                ""
            }
            {
                data.paragraph? 
                <div className={styles.spacer}></div>
                :
                ""
            }
        </div>
    )
}