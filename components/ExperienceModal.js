import styles from '../styles/ExperienceModal.module.scss';
import Image from 'next/image'
import { useEffect } from 'react'

export const ExperienceModal = ({ image, setState, state, data }) => {
	useEffect(() => {
		const handleEscapeKey = (e) => {
			if (e.keyCode === 27) setState(false)
		}

		const handleClickOutside = (e) => {
			const modal = document.querySelector(`.${styles.modal}`)
			if (state && !modal.contains(e.target)) {
				setState(false)
			}
		}
		if (state) {
			document.addEventListener('mousedown', handleClickOutside);
			document.addEventListener('keydown', handleEscapeKey);
		} else {
			document.removeEventListener('mousedown', handleClickOutside);
			document.removeEventListener('keydown', handleEscapeKey);
		}

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
	}, [state])

	return (
		<div className={styles.modal}>
			<button className={styles.button} onClick={() => setState(!state)}>&times;</button>
			<div className={styles.contentContainer}>
				<Image className={styles.modalImage} src={image} alt="poster-image" />
				<div className={styles.info}>
					<h2>{data.brand}</h2>
					<div className={styles.infoContainer}>
						<div className={styles.infoRow}>
							<div className={styles.infoHeader}>Job Title:</div>
							<div>{data.role}</div>
						</div>
						<div className={styles.infoRow}>
							<div className={styles.infoHeader}>Experience: </div>
							<div>{data.yearsOfExperience}</div>
						</div>
						<div className={styles.infoRow}>
							<div className={styles.infoHeader}>Tools: </div>
							<div className={styles.toolList}>
								{data.tools.map((tool, idx) => (
									<div className={styles.toolListItem} key={idx}>{tool}</div>
								))}
							</div>
						</div>
						<div className={styles.description}>{data.description}</div>
					</div>
				</div>

		</div>
		</div>
	)
}