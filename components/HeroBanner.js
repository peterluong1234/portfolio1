import styles from '../styles/HeroBanner.module.scss'
import Image from 'next/image'
import Button from "./Button.js"

export const HeroBanner = ({image, title, text, buttons}) => {
    buttons.map(({ name, link }) => {
        console.log(name)
      }) 
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <div className={styles.title}>{title}</div>
                <div className={styles.body}>{text}</div>
                <div className={styles.buttons}>
                    {buttons.map(({name, link}, idx) => (
                        <Button 
                        key={idx} 
                        name={name} 
                        link={link} 
                        />
                    ))}
                </div>
            </div>
            <div>
                <Image
                    src={image}
                    className={styles.image}
                    alt='hero image'
                />
            </div>
        </div>
    )
}