import { Accordion, Box } from "@chakra-ui/react"
import { SECTION_VERTICAL_PADDING } from "../../utils/constants"
import PageContainer from "../../components/global/PageContainer"
import TitleText from "../../components/global/TitleText"
import { BG_BLUE_COLOR } from "../../utils/colors"
import { FAQs } from "../../contents/landing"
import FaqItem from "../../components/local/FaqItem"

const FaqSection = () => {

  return (
    <Box py={SECTION_VERTICAL_PADDING} pb={0}>
      <PageContainer py={12}>
        <div data-aos="fade-up">
          <TitleText>Frequently asked questions (FAQ)</TitleText>
        </div>
      </PageContainer>
      <PageContainer py={12} bg={BG_BLUE_COLOR}>
        <Accordion allowToggle>
          {FAQs.map((item, num) => (
            <FaqItem num={num} key={`faq-item-${num}`} {...item} />
          ))}
        </Accordion>
      </PageContainer>
    </Box>
  )
}

export default FaqSection