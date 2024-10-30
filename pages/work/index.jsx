import { Navbar } from "../../components/Navbar"
import Head from 'next/head';
import styles from '../../styles/Work.module.scss'
import { useEffect, useState } from "react";
import { Accordion } from "../../components/Accordion";
import { workData } from "../../lib/data/work";

const Work = ({image,brand}) => {
    const [work, setWork] = useState(workData);

    // useEffect(() => {
    //     const fetchJobs = async () => {
    //         try {
    //             const response = await fetch('/api/jobs');
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             const data = await response.json();
    //             const sortedByDescending = data.sort((a,b) => new Date(b.startDate) - new Date(a.startDate))
    //             setWork(sortedByDescending);
    //             console.log(sortedByDescending)
    //         } catch (e) {
    //             console.error('Failed to fetch jobs:', error)
    //         }
    //     }

    //     // fetchJobs();
    // }, [])

    return (
    <div>
        <Head>
            <title>Peter Luong</title>
            <meta name="description" content="Welcome to my website." />
            <link rel="icon" href="/favicon-peter.png" />
        </Head>
        <Navbar color='black' />
        <main className={styles.pageContainer}>
            <div className={styles.headerContainer}><h1>Work</h1></div>
            <section>
                <Accordion work={work} />
            </section>
        </main>
    </div>
    )
}

export default Work