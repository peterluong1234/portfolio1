
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import { data } from '../public/data';
import { Navbar } from '../components/Navbar';
import { Header } from '../components/Header';
import { HeroBanner } from '../components/HeroBanner';
import { HeroSection } from '../components/HeroSection';
import { Description } from '../components/Description';
import { Project } from '../components/Project';
import { ExperienceModal } from '../components/ExperienceModal';
import ContactForm from '../components/ContactForm/ContactForm';
import * as photos from '../public/images/index';
import heroPhoto from '../public/FrontPhoto.jpg';
import React from 'react';
import { useState } from 'react';

// const BACKGROUND = [
//   {line: 'Software developer with a background in graphic design with a drive for working on large scale projects and breaking each process down into concise actions to improve efficiency.'},
//   {line: 'I bring my passion for innovation into each project through an enthusiastic approach gauge to deliver a unique and personal experience for every client.'},
//   {line: 'Leveraging a strong background in graphic design and project management allows me to take a step back and view projects from both a creative and logistical standpoint.'}
// ]



export default function Home() {
  const [viewSGLA, setViewSGLA] = useState(false);
  const [viewGoose, setViewGoose] = useState(false);
  const [viewChild, setViewChild] = useState(false);
  const [viewZeroUV, setViewZeroUV] = useState(false);

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
          { /* SGLA */ }
          <Project image={photos.experience1} brand='SUNGLASS.LA' setState={setViewSGLA} state={viewSGLA} />
          {viewSGLA ? <ExperienceModal setState={setViewSGLA} state={viewSGLA} data={data.sgla} image={photos.PROJECT.sgla} /> : ''}

          { /* Fashion Goose Boutique */ }
          <Project image={photos.experience3} brand='Fashion Goose Boutique' setState={setViewGoose} state={viewGoose} />
          {viewGoose ? <ExperienceModal setState={setViewGoose} state={viewGoose} data={data.goose} /> : ''}
        </div>

        <div className={styles.experience}>
          { /* Project Child Hunger */ }
          <Project 
            image={photos.experience2}
            brand='Project Child Hunger'
            setState={setViewChild}
            state={viewChild}
          />
          {viewChild ? <ExperienceModal 
            data={data.childHunger}
            image={photos.PROJECT.childHunger}
            setState={setViewChild}
            state={viewChild}
          /> : ''}

          { /* zeroUV */ }
          <Project 
            image={photos.experience4}
            brand='zeroUV'
            setState={setViewZeroUV}
            state={viewZeroUV}
          />
          {viewZeroUV ? <ExperienceModal 
            data={data.zeroUV}
            image={photos.PROJECT.zeroUV}
            brand='zeroUV'
            setState={setViewZeroUV}
            state={viewZeroUV}
          /> : ''}
        </div>
            
      </main>
      {/* <footer className={styles.footer}>
      </footer> */}
    </div>
  )
}
