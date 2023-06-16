import { Box, Image, SimpleGrid, Stack } from "@chakra-ui/react"
import PageContainer from "../../components/global/PageContainer"
import { SECTION_VERTICAL_PADDING } from "../../utils/constants"
import { SECTION_2_CONTENTS, SECTION_2_IMAGE, SECTION_2_TITLE } from "../../contents/landing"
import UnderlinedText from "../../components/global/UnderlinedText"
import DriveListItem from "../../components/local/DriveListItem"

const DriveSection = () => {
  return (
    <PageContainer py={SECTION_VERTICAL_PADDING}>
      <SimpleGrid columns={[1, 1, 2]} gap={8}>
        <Box>
          <div data-aos="fade-right" data-aos-delay={300}>
            <Image w={"100%"} maxW={500} src={SECTION_2_IMAGE} roundedTopLeft={"60"} roundedBottomRight={"60"} />
          </div>
        </Box>

        <Stack spacing={14}>
          <div data-aos="fade-up">
            <UnderlinedText TextProps={{ lineHeight: "1.3" }}>{SECTION_2_TITLE}</UnderlinedText>
          </div>

          <Stack spacing={6}>
            {SECTION_2_CONTENTS.map((content, number) => (
              <div data-aos="fade-left" key={`drive-content-list-${number}`} data-aos-delay={number * 100}>
                <DriveListItem number={number + 1} {...content} />
              </div>
            ))}
          </Stack>
        </Stack>
      </SimpleGrid>
    </PageContainer>
  )
}

export default DriveSection