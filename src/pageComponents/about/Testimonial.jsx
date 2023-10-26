import { Center, Heading, Image, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react'
import PageContainer from '../../components/global/PageContainer'
import { SECTION_VERTICAL_PADDING } from '../../utils/constants'
import { TESTIFIERS } from '../../contents/about'
import { PRIMARY_COLOR, GRAY_COLOR } from '../../utils/colors'



const Testimonial = () => {
  return (
    <PageContainer py={SECTION_VERTICAL_PADDING} as={"section"} id={name}>
      <VStack>
        <Heading fontWeight={"500"} size={"md"}>Our clients </Heading>
        <Heading lineHeight={"1.2"} fontWeight={"700"} color={GRAY_COLOR} size={"2xl"}>Testimonal.</Heading>
      </VStack>

      <SimpleGrid columns={[1, 2, 3]} spacing={4} mt={10}>
        { TESTIFIERS.map((value, index) => (
          <Stack key={`testifier-${index}`} >
            <Center mb={-12} position={"relative"}>
              <Image maxW={"80px"} src={value.icon} />
            </Center>
            <VStack minH={300} px={6} py={8} spacing={2} bg={PRIMARY_COLOR} borderTopStartRadius={"38px"} borderBottomEndRadius={"38px"}>
              <Heading mt={4} color={"white"} size={"md"}>{value.name}</Heading>
              <Text color={"white"} fontWeight={"light"}>{value.work}</Text>
              <Text textAlign={"center"} color={"white"} mt={4}>{value.comment}</Text>
            </VStack>
          </Stack>
        )) }
      </SimpleGrid>
    </PageContainer>
  )
}

export default Testimonial