import Link from 'next/link';
import React from 'react';
import { Navbar } from './Navbar';
import styles from '../styles/Header.module.scss'

export const Header = () => {
   return (
        <div className={styles.header}>
            <Link href="/">
                <div className={styles.logo}>Peter Luong</div>
            </Link>
            <Navbar />
        </div>
    )
}