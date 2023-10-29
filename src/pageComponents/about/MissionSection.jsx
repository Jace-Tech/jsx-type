import PageSection from "../../components/local/PageSection"
import bg from "../../assets/images/people.png"
import spike from "../../assets/images/spikes.png"
import { Box, HStack, Heading, Image, Stack, Text } from "@chakra-ui/react"
import { MISSION_VISION } from "../../contents/about"
import { GRAY_COLOR } from "../../utils/colors"
import TitleText from "../../components/global/TitleText"


const MissionSection = () => {
  return (
    <PageSection isReversed image={bg} name={"mission-and-vision"}>
      <Stack spacing={10}>

        <Stack spacing={4}>
          <div data-aos="fade-up">
            <Heading fontWeight={"500"} size={"md"}>Our Mission and Vision</Heading>
          </div>

          <div data-aos="fade-up" data-aos-delay={100}>
            <Box pos={"relative"}>
              <TitleText lineHeight={"1.2"} color={GRAY_COLOR}>Where Community Drives the <span style={{ display: "inline-block", position: "relative" }}>Experience.  <Image src={spike} pos={"absolute"} w={"42px"} top={-2} right={-6} /></span></TitleText>
            </Box>
          </div>
        </Stack>

        <Stack spacing={4}>
          {MISSION_VISION.map((item, index) => (
             <div data-aos="fade-up" key={`item-${index}`} data-aos-delay={index * 100}>
              <HStack alignItems={"flex-start"} spacing={4}>
                <Image src={item.image} w={"34px"} />
                <Stack>
                  <Heading fontWeight={"600"} size={"md"}>{item.title}</Heading>
                  <Text color={GRAY_COLOR} fontSize={"md"}>{item.text}</Text>
                </Stack>
              </HStack>
             </div>
          ))}
        </Stack>
      </Stack>
    </PageSection>
  )
}

export default MissionSection