import PageSection from "../../components/local/PageSection"
import bg from "../../assets/images/people-pc.png"
import { Heading, Stack, Text } from "@chakra-ui/react"
import { ABOUT_US } from "../../contents/about"
import { GRAY_COLOR } from "../../utils/colors"


const AboutCompany = () => {
  return (
    <PageSection isReversed image={bg} name={"mission-and-vision"}>
      <Stack spacing={10}>

        <Stack spacing={4}>
          <Heading fontWeight={"500"} size={"md"}>About the Company</Heading>
          <Heading lineHeight={"1.2"} fontWeight={"700"} color={GRAY_COLOR} size={"2xl"}>About Gee2-Rides.</Heading>
        </Stack>

        <Stack spacing={4}>
          {ABOUT_US.map((item, index) => (
            <Text fontSize={"md"} color={GRAY_COLOR} key={`about-${index}`}>{item}</Text>
          ))}
        </Stack>
      </Stack>
    </PageSection>
  )
}

export default AboutCompany