import { data } from '../public/data'
import { Description } from '../components/Description';
import { HeroSection } from '../components/HeroSection';
import { HeroBanner } from '../components/HeroBanner';
import { Navbar } from '../components/Navbar';
import { Gallery } from '../components/Gallery';
import heroImage from '../public/images/about/profile.jpeg';
import  * as photos  from '../public/images/'
import Image from 'next/image'

console.log(photos.ABOUT)

export default function About() {
    return <div>
        <Navbar />
        <HeroSection 
            heroPhoto={heroImage}
            text='About Me'
        />
        <Description data={data.aboutMe} />
        <Gallery />
    </div>
}