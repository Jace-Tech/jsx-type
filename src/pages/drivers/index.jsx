import { Box } from "@mui/material"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Hero from "./components/Hero"
import PricingSection from "./components/PricingSection"
import Roles from "./components/Roles"
import PhoneSection from "./components/PhoneSection"
import FootSection from "./components/FootSection"


const Drivers = () => {
  return (
    <Box>
      <Header />
      <Hero />
      <PricingSection />
      <Roles />
      <PhoneSection />
      <FootSection />
      <Footer />
    </Box>
  )
}

export default Drivers