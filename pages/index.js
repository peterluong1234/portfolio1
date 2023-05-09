import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { data } from '../public/data'
import { Header } from '../components/Header.js'
import { TextBlock } from '../components/TextBlock.js'
import { HeroBanner } from '../components/HeroBanner.js'
import { HomePageHero } from '../components/HomePageHero'
import { Navbar } from '../components/Navbar'
import { Description } from '../components/Description'

const ABOUT_ME = 'Graphic Designer turned Full Stack Developer with a passion for the outdoors'
const BUTTONS = [
    {
      name: 'GitHub',
      link: 'https://github.com/peterluong1234',
    },
    {
      name: 'Resume',
      link: 'https://docs.google.com/document/d/1-Yt_XAF8nG1S9y_Qc3ANVqkjWXiLJ9uub8ifjAo188s/edit?usp=sharing'
    }
  ]

const BACKGROUND = [
  {line: 'Software developer with a background in graphic design with a drive for working on large scale projects and breaking each process down into concise actions to improve efficiency.'},
  {line: 'I bring my passion for innovation into each project through an enthusiastic approach gauge to deliver a unique and personal experience for every client.'},
  {line: 'Leveraging a strong background in graphic design and project management allows me to take a step back and view projects from both a creative and logistical standpoint.'}
]
export default function Home() {
  return (
    <div>
      <Head>
        <title>Peter Luong</title>
        <meta name="description" content="Welcome to my website." />
        <link rel="icon" href="/favicon-peter.png" />
      </Head>
      
      <main className={styles.main}>
        <Navbar />
        <HomePageHero />
        <Description description={data.description} />
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
