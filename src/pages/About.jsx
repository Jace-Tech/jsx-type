import { Box } from '@chakra-ui/react'
import Header from '../components/global/Header'
import Footer from '../components/global/Footer'
import PageHero from '../components/global/PageHero'
import bgImage from "../assets/images/girl-driving.png"
import MissionSection from '../pageComponents/about/MissionSection'
import CoreValues from '../pageComponents/about/CoreValues'
import AboutCompany from '../pageComponents/about/AboutCompany'
import Testimonial from '../pageComponents/about/Testimonial'
// import React from 'react'

const About = () => {
  return (
    <Box>
      <Header />
      <PageHero image={bgImage} text={"About Gee2-Rides"} />
      <MissionSection />
      <CoreValues />
      <AboutCompany />
      <Testimonial />
      <Footer />
    </Box>
  )
}

export default About