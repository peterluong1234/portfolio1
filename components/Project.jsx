import styles from '../styles/Project.module.scss'
import { ExperienceModal } from './ExperienceModal';
import React, { useEffect } from 'react';

export const Project = ({ image, brand, setState, state }) => {

	return (
		<div className={styles.box}>
			<div className={styles.brandContainer}>
				<div className={styles.brand}>{brand}</div>
				<button className={styles.brandBtn} onClick={() => setState(!state)}>View More</button>
			</div>
			<div className={styles.image}
				style={{
					backgroundImage: `url(${image.src})`,
					width: '100%',
					height: '100%',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}

			>
			</div>
		</div>)
}