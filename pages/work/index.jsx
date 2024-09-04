import { Navbar } from "../../components/Navbar"
import Head from 'next/head';
import styles from '../../styles/Work.module.scss'
import { useEffect, useState } from "react";
// const WORK = [
//     {
//         companyName: "Zymo Research",
//         role: "Jr. Front End Developer",
//         period: "September 2023 - Present",
//         description: "Developed custom landing pages, navigation bars, and homepages for over 10 Business Units. Managed projects and created tools to enhance website functionality.",
//         tasks: [
//             "Developed custom landing pages, navigation bars, and homepages using Shopify Liquid, HTML, CSS, and JavaScript.",
//             "Managed multiple projects, liaised with stakeholders, and presented to core managers to ensure alignment with project objectives.",
//             "Created a custom metafield tool using Shopify API and Node.js to simplify workflow processes and reduce data entry efforts.",
//             "Led the implementation of reusable components to enhance website functionality and user experience across various Business Units."
//         ],
//         projects: [
//             {
//                 title: "Metafield Tool",
//                 description: "Developed a custom metafield tool using Shopify API and Node.js to simplify workflow processes and reduce data entry efforts."
//             },
//             {
//                 title: "Reusable Components",
//                 description: "Implemented reusable components to enhance website functionality and user experience across various Business Units."
//             }
//         ]
//     },
//     {
//         companyName: "Zymo Research",
//         role: "Front End Web Developer Intern",
//         period: "June 2023 - August 2023",
//         description: "Internship focused on creating responsive landing pages, discount scripts, and a modern Navbar. Enhanced user experience through design and functionality improvements.",
//         tasks: [
//             "Completed 6 projects in 2 months using Adobe XD for wireframes and HTML, CSS, JavaScript, Liquid, jQuery, and JSON.",
//             "Revamped website navigation with a sleek, user-friendly Navbar design.",
//             "Developed JavaScript and JSON-based discount and promotional scripts.",
//             "Collaborated effectively with designers and developers to translate design concepts into functional web pages."
//         ],
//         projects: [
//             {
//                 title: "Modern Navbar",
//                 description: "Revamped website navigation with a sleek, user-friendly Navbar design, ensuring optimal cross-device functionality."
//             },
//             {
//                 title: "Discount and Promotional Scripts",
//                 description: "Developed JavaScript and JSON-based discount scripts to streamline sales processes and improve customer satisfaction."
//             }
//         ]
//     },
//     {
//         companyName: "Private Contractor",
//         role: "Jr. Web Developer",
//         period: "September 2022 - November 2022",
//         description: "Worked on multiple web development projects, focusing on creating modern websites with efficient workflows.",
//         tasks: [
//             "Built a blog/article website using NextJS for the front end and Strapi for CMS backend.",
//             "Utilized JavaScript, SCSS, and GraphQL to create components and webpages.",
//             "Implemented design improvements based on Figma mockups and design suggestions."
//         ],
//         projects: [
//             {
//                 title: "Blog Website",
//                 description: "Developed a blog/article website using NextJS and Strapi, with a focus on modern design and responsive layout."
//             }
//         ]
//     },
//     {
//         companyName: "PTCL Photography",
//         role: "Self-Employed Photographer / Web Designer",
//         period: "August 2020 - Present",
//         description: "Managed client relationships and delivered high-quality photography and website design services.",
//         tasks: [
//             "Built relationships and worked with 20+ clients ranging from personal portraits to business product photos and websites.",
//             "Created websites for clients in various industries, including eyewear and clothing.",
//             "Established a quick turnaround time with constant improvements for efficient workflow."
//         ],
//         projects: [
//             {
//                 title: "Client Websites",
//                 description: "Designed and developed websites for clients, including e-commerce platforms for eyewear and clothing."
//             }
//         ]
//     },
//     {
//         companyName: "Sunglass.LA",
//         role: "Graphic Designer",
//         period: "September 2016 - August 2018",
//         description: "Led design projects and enhanced social media engagement through innovative visual content.",
//         tasks: [
//             "Project manager for each design season, delegating tasks to team members.",
//             "Designed banners, magazine prints, product photography, and various graphics for websites and social media.",
//             "Implemented Instagram Stories, generating significant website traffic.",
//             "Created a blogger/influencer reel to attract traffic from big influencers."
//         ],
//         projects: [
//             {
//                 title: "Social Media Campaign",
//                 description: "Developed and implemented Instagram Stories and influencer collaborations, driving significant website traffic."
//             }
//         ]
//     },
//     {
//         companyName: "Frame&Optic",
//         role: "Amazon Product Strategist",
//         period: "January 2014 - August 2016",
//         description: "Developed strategies to optimize product listings and increase sales across multiple platforms.",
//         tasks: [
//             "Created product listings, including product photography, copywriting, and competitive pricing analysis.",
//             "Devised strategies to boost sales through multi-platform advertising on eBay, Amazon, Wish, etc.",
//             "Analyzed market trends and built product forecasts to manage inventory and identify new products."
//         ],
//         projects: [
//             {
//                 title: "Product Listing Optimization",
//                 description: "Specialized in creating optimized product listings for multiple e-commerce platforms."
//             }
//         ]
//     }
// ];



const Work = ({image,brand}) => {
    const [expandedWork, setExpandedWork] = useState({});
    const [work, setWork] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch('/api/jobs');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setWork(data);
            } catch (e) {
                console.error('Failed to fetch jobs:', error)
            }
            // console.log(data)
        }

        fetchJobs();
    }, [])

    const toggleWorkItem = (index) => {
        setExpandedWork((prevExpanded) => ({
            ...prevExpanded,
            [index]: !prevExpanded[index]
        }))
    }


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
                <div>
                    {
                        work.map((workplace, idx) => (
                        <div
                            key={idx}
                            className={ styles.workContainer }
                            onClick={() => toggleWorkItem(idx)}
                        >
                            <div className={ styles.workHeaderContainer }>
                                <div className={styles.workTextContainer}>
                                    <h2>{workplace.companyName}</h2>
                                    <small>{workplace.role}</small>
                                </div>
                                <img src="https://cdn.prod.website-files.com/66476c64e241589e9d182b69/668ccdcf8c39cf84da6bd553_plus.svg" alt="" />
                            </div>
                            <div
                                className={ styles.workContentContainer}
                                style={{
                                    height: expandedWork[idx] ? 'fit-content' : '0px'
                                }}
                            >
                                <div className={styles.workContent}>
                                <hr></hr>
                                <p>{workplace.description}</p>
                                { workplace.tasks ? <h3>Tasks</h3> : null }
                                    { workplace.tasks ? workplace.tasks.map((task,i) => (
                                    <div key={i}>
                                        <p>{task}</p>
                                    </div>
                                        ))
                                        : null
                                    }
                                { workplace.projects ? <h3>Projects</h3> : null }
                                    { workplace.projects ? workplace.projects.map((project,i) => (
                                    <div key={i}>
                                        <p>{project.description}</p>
                                        { project.keyPoints ? project.keyPoints.map((keyPoint, kdx) => (
                                            <div key={kdx}>{keyPoint}</div>
                                        )) : null
                                    }
                                    </div>
                                        ))
                                        : null
                                    }
                                </div>
                            </div>
                        </div>
                        ))
                    }
                    
                </div>
            </section>

        </main>
    </div>
    )
}

export default Work