import { Box } from '@chakra-ui/react'
import Header from "../components/global/Header"
import Footer from "../components/global/Footer"
import PageHero from '../components/global/PageHero'
import bg from "../assets/images/privacy.png"
import PrivacyInfo from '../pageComponents/privacy/PrivacyInfo'


const PrivacyPolicy = () => {
  return (
    <Box>
      <Header />
      <PageHero bgPos={"center"} minH={400} image={bg} text={"Privacy & Data Policy"} />
      <PrivacyInfo />
      <Footer />
    </Box>
  )
}

export default PrivacyPolicy