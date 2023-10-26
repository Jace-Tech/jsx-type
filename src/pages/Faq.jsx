import { Box, Accordion, Heading} from '@chakra-ui/react'
import Header from '../components/global/Header'
import Footer from '../components/global/Footer'
import PageContainer from "../components/global/PageContainer"
import { BG_BLUE_COLOR } from "../utils/colors"
import { FAQs } from "../contents/landing"
import FaqItem from "../components/local/FaqItem"


const Faq = () => {
  return (
    <Box>
      <Header />
      <PageContainer py={12}>
        <div data-aos="fade-up">
        <Heading fontWeight={"500"} size={"xl"}>Frequently asked questions (FAQ)</Heading>
        </div>
      </PageContainer>
      <PageContainer py={12} bg={BG_BLUE_COLOR}>
        <Accordion allowToggle>
          {FAQs.map((item, num) => (
            <FaqItem num={num} key={`faq-item-${num}`} {...item} />
          ))}
        </Accordion>
      </PageContainer>
      <Footer />
    </Box>
  )
}

export default Faq