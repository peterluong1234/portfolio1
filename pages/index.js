import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { data } from '../public/data'
import { Header } from '../components/Header.js'
import { HeroBanner } from '../components/HeroBanner.js'
import { HeroSection } from '../components/HeroSection'
import { Navbar } from '../components/Navbar'
import { Description } from '../components/Description'
import { Project } from '../components/Project'
import * as photos from '../public/images'
import photo1 from '../public/images/experience/image1.png'
import heroPhoto from '../public/FrontPhoto.jpg'


const BACKGROUND = [
  {line: 'Software developer with a background in graphic design with a drive for working on large scale projects and breaking each process down into concise actions to improve efficiency.'},
  {line: 'I bring my passion for innovation into each project through an enthusiastic approach gauge to deliver a unique and personal experience for every client.'},
  {line: 'Leveraging a strong background in graphic design and project management allows me to take a step back and view projects from both a creative and logistical standpoint.'}
]
console.log(data.description)
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
        <HeroSection 
          heroPhoto={heroPhoto}
          text='Peter Luong'
        />
        <Description data={data.description} />
        <div className={styles.experience} id="projects">
          <Project 
            image={photos.experience1}
            brand='SUNGLASS.LA'
          />
          <Project 
            image={photos.experience3}
            brand='Fashion Goose Boutique'
          />
          </div>
        <div className={styles.experience}>
          <Project 
            image={photos.experience2}
            brand='Project Child Hunger'
          />
          <Project 
            image={photos.experience4}
            brand='zeroUV'
          />
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
