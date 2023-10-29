import { Center, Heading, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import PageContainer from '../../components/global/PageContainer'
import { SECTION_VERTICAL_PADDING } from '../../utils/constants'
import { CORE_VALUES } from '../../contents/about'
import { PRIMARY_COLOR, GRAY_COLOR } from '../../utils/colors'
import TitleText from '../../components/global/TitleText'



const CoreValues = () => {
  return (
    <PageContainer py={SECTION_VERTICAL_PADDING} as={"section"} id={name}>
      <VStack>
        <div data-aos="fade-up">
          <Heading fontWeight={"500"} size={"md"}>Values</Heading>
        </div>
        <div data-aos="fade-up" data-aos-delay={100}>
          <TitleText lineHeight={"1.2"} color={GRAY_COLOR}>Our Core values.</TitleText>
        </div>
      </VStack>

      <SimpleGrid columns={[1, 2, 3]} spacing={4} mt={10}>
        {CORE_VALUES.map((value, index) => (
          <div data-aos="zoom-in" data-aos-delay={index * 100} key={`values-${index}`}>
            <VStack spacing={4} minH={300} justifyContent={"center"} bg={PRIMARY_COLOR} p={6} borderTopStartRadius={"38px"} borderBottomEndRadius={"38px"}>
              <Center>
                <Image src={value.icon} w={"32px"} />
              </Center>
              <Heading color={"white"} size={"md"}>{value.title}</Heading>
              <Text textAlign={"center"} color={"white"}>{value.text}</Text>
            </VStack>
          </div>
        ))}
      </SimpleGrid>
    </PageContainer>
  )
}

export default CoreValues