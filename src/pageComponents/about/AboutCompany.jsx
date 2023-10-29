import PageSection from "../../components/local/PageSection"
import bg from "../../assets/images/people-pc.png"
import { Heading, Stack, Text } from "@chakra-ui/react"
import { ABOUT_US } from "../../contents/about"
import { GRAY_COLOR } from "../../utils/colors"
import TitleText from "../../components/global/TitleText"


const AboutCompany = () => {
  return (
    <PageSection isReversed image={bg} name={"mission-and-vision"}>
      <Stack spacing={10}>
        <Stack spacing={4}>
          <div data-aos="fade-up">
            <Heading fontWeight={"500"} size={"md"}>About the Company</Heading>
          </div>
          <div data-aos="fade-up" data-aos-delay={100}>
            <TitleText lineHeight={"1.2"} color={GRAY_COLOR}>About Gee2-Rides.</TitleText>
          </div>
        </Stack>

        <Stack spacing={4}>
          {ABOUT_US.map((item, index) => (
              <div data-aos="fade-up" key={`about-${index}`} data-aos-delay={index * 100}>
                <Text fontSize={"md"} color={GRAY_COLOR}>{item}</Text>
              </div>
          ))}
        </Stack>
      </Stack>
    </PageSection>
  )
}

export default AboutCompany