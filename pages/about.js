import { HeroSection } from '../components/HeroSection';
import {HeroBanner} from '../components/HeroBanner';
import { Navbar } from '../components/Navbar';
import heroImage from '../public/images/about/profile.jpeg'

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

export default function About() {
    return <div>
        <Navbar />
        <HeroSection 
            heroPhoto={heroImage}
            text='About Me'
        />
    </div>
}