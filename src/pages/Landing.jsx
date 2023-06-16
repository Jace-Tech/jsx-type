import Header from "../components/global/Header"
import {Box} from "@chakra-ui/react"
import LandingHero from "../pageComponents/landing/LandingHero"
import WhySection from "../pageComponents/landing/WhySection"
import DriveSection from "../pageComponents/landing/DriveSection"
import DowloadSection from "../pageComponents/landing/DowloadSection"
import FaqSection from "../pageComponents/landing/FaqSection"
import Footer from "../components/global/Footer"

const LandingPage = () => {
  return (
    <Box>
      <Header />
      <LandingHero />
      <WhySection />
      <DriveSection />
      <DowloadSection />
      <FaqSection />
      <Footer />
    </Box>
  )
}

export default LandingPage