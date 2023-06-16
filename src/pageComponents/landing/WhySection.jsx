import { SimpleGrid, Stack, Text } from "@chakra-ui/react"
import PageContainer from "../../components/global/PageContainer"
import { SECTION_VERTICAL_PADDING } from "../../utils/constants"
import UnderlinedText from "../../components/global/UnderlinedText"
import { SECTION_1_TEXT, SECTION_1_TITLE, CARD_CONTENTS } from "../../contents/landing"
import ChooseCard from "../../components/local/ChooseCard"

const WhySection = () => {
  return (
    <PageContainer py={SECTION_VERTICAL_PADDING}>
      <Stack spacing={8}>
        <div data-aos="fade-up">
          <UnderlinedText>{SECTION_1_TITLE}</UnderlinedText>
        </div>
        <div data-aos="fade-up">
          <Text fontSize={"lg"} fontWeight={"medium"} maxW={['full', 'md']}>{SECTION_1_TEXT}</Text>
        </div>
      </Stack>

      <SimpleGrid columns={[1, 2, 3]} gap={4} mt={16}>
        {CARD_CONTENTS.map((content, delay) => (
          <div data-aos="fade-up" data-aos-delay={delay * 100} key={content.title}>
            <ChooseCard {...content} />
          </div>
        ))}
      </SimpleGrid>
    </PageContainer>
  )
}

export default WhySection