import PageSection from "../../components/local/PageSection"
import bg from "../../assets/images/people.png"
import spike from "../../assets/images/spikes.png"
import { Box, HStack, Heading, Image, Stack, Text } from "@chakra-ui/react"
import { MISSION_VISION } from "../../contents/about"
import { GRAY_COLOR } from "../../utils/colors"


const MissionSection = () => {
  return (
    <PageSection isReversed image={bg} name={"mission-and-vision"}>
      <Stack spacing={10}>

        <Stack spacing={4}>
          <Heading fontWeight={"500"} size={"md"}>Our Mission and Vision</Heading>
          <Box pos={"relative"}>
            <Heading lineHeight={"1.2"} fontWeight={"700"} color={GRAY_COLOR} size={"2xl"}>Where Community Drives the Experience.</Heading>
            <Image src={spike} pos={"absolute"} w={"42px"} top={-2} right={6} />
          </Box>
        </Stack>
    
        <Stack spacing={4}>
          { MISSION_VISION.map((item, index) => (
            <HStack key={`item-${index}`} alignItems={"flex-start"} spacing={4}>
              <Image src={item.image} w={"34px"}  />
              <Stack>
                <Heading fontWeight={"600"} size={"md"}>{item.title}</Heading>
                <Text color={GRAY_COLOR} fontSize={"md"}>{item.text}</Text>
              </Stack>
            </HStack>
          )) }
        </Stack>
      </Stack>
    </PageSection>
  )
}

export default MissionSection