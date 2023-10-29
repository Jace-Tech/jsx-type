import { Center, Heading, Image, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react'
import PageContainer from '../../components/global/PageContainer'
import { SECTION_VERTICAL_PADDING } from '../../utils/constants'
import { TESTIFIERS } from '../../contents/about'
import { PRIMARY_COLOR, GRAY_COLOR } from '../../utils/colors'
import TitleText from '../../components/global/TitleText'



const Testimonial = () => {
  return (
    <PageContainer py={SECTION_VERTICAL_PADDING} as={"section"} id={name}>
      <VStack>
        <div data-aos="fade-up">
          <Heading fontWeight={"500"} size={"md"}>Our clients </Heading>
        </div>
        <div data-aos="fade-up" data-aos-delay={100}>
          <TitleText lineHeight={"1.2"} color={GRAY_COLOR}>Testimonal.</TitleText>
        </div>
      </VStack>

      <SimpleGrid columns={[1, 2, 3]} spacing={4} mt={10}>
        {TESTIFIERS.map((value, index) => (
          <div data-aos="zoom-in" data-aos-delay={index * 100} key={`testifier-${index}`} >
            <Stack>
              <Center mb={-12} position={"relative"}>
                <Image maxW={"80px"} src={value.icon} />
              </Center>
              <VStack minH={300} px={6} py={8} spacing={2} bg={PRIMARY_COLOR} borderTopStartRadius={"38px"} borderBottomEndRadius={"38px"}>
                <Heading mt={4} color={"white"} size={"md"}>{value.name}</Heading>
                <Text color={"white"} fontWeight={"light"}>{value.work}</Text>
                <Text textAlign={"center"} color={"white"} mt={4}>{value.comment}</Text>
              </VStack>
            </Stack>
          </div>
        ))}
      </SimpleGrid>
    </PageContainer>
  )
}

export default Testimonial