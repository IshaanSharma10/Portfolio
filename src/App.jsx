import React from 'react'
import Hero from './components/sections/Hero'
import ShowcaseSection from './components/sections/ShowcaseSection'
import Navbar from './components/Navbar'
import LogoSection from './components/LogoSection'
import FeatureCard from './components/sections/FeatureCard'
import ExperienceSection from './components/sections/ExperienceSection'
import TechStack from './components/sections/TechStack'
import Testimonials from './components/sections/Testimonial'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <ShowcaseSection/>
    <LogoSection/>
    <FeatureCard/>
    <ExperienceSection/>
    <TechStack/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
