import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import { data } from '../public/data';
import { Header } from '../components/Header.js';
import { HeroBanner } from '../components/HeroBanner.js';
import { HeroSection } from '../components/HeroSection';
import { Description } from '../components/Description';
import { Project } from '../components/Project';
import { ExperienceModal } from '../components/ExperienceModal';
import * as photos from '../public/images';
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
        <HeroSection 
          heroPhoto={heroPhoto}
          text='Peter Luong'
        />
        <Description data={data.description} />
        <div className={styles.experience} id="projects">
          <Project 
            image={photos.experience1}
            brand='SUNGLASS.LA'
            setState={setViewSGLA}
            state={viewSGLA}
          />
          {viewSGLA ? <ExperienceModal 
            brand='SUNGLASS.LA'
            setState={setViewSGLA}
            state={viewSGLA}
            data={data.sgla}
          /> : ''}
          <Project 
            image={photos.experience3}
            brand='Fashion Goose Boutique'
            setState={setViewGoose}
            state={viewGoose}
          />
          {viewGoose ? <ExperienceModal 
              brand='Fashion Goose Boutique'
              setState={setViewGoose}
              state={viewGoose}
          /> : ''}
          </div>
        <div className={styles.experience}>
          <Project 
            image={photos.experience2}
            brand='Project Child Hunger'
            setState={setViewChild}
            state={viewChild}
          />
          {viewChild ? <ExperienceModal 
            brand='Project Child Hunger'
            setState={setViewChild}
            state={viewChild}
          /> : ''}
          <Project 
            image={photos.experience4}
            brand='zeroUV'
            setState={setViewZeroUV}
            state={viewZeroUV}
          />
          {viewZeroUV ? <ExperienceModal 
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
