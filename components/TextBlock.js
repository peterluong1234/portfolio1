import styles from '../styles/TextBlock.module.scss'

export const TextBlock = ({text,header}) => {
    console.log(text)
    return(
        <div className={styles.container}>
            <div className={styles.header}>{header}</div>
            {text.map(({line}) => (
                <p>{line}</p>   
            ))}
        </div>
    )
}
