import styles from '../styles/Footer.module.scss';

export const Footer = () => {
    return <div className={styles.container}>
        <div>Made with Next.js | Hosted on Vercel</div>
        <div className={styles.smallText}>© Peter Luong 2023</div>
    </div>
}