import { Heading, Image, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react'
import PageContainer from '../../components/global/PageContainer'
import { SECTION_VERTICAL_PADDING } from '../../utils/constants'
import { CORE_VALUES } from '../../contents/about'
import { PRIMARY_COLOR, GRAY_COLOR } from '../../utils/colors'



const CoreValues = () => {
  return (
    <PageContainer py={SECTION_VERTICAL_PADDING} as={"section"} id={name}>
      <VStack>
        <Heading fontWeight={"500"} size={"md"}>Values</Heading>
        <Heading lineHeight={"1.2"} fontWeight={"700"} color={GRAY_COLOR} size={"2xl"}>Our Core values.</Heading>
      </VStack>

      <SimpleGrid columns={[1, 2, 3]} spacing={4} mt={10}>
        { CORE_VALUES.map((value, index) => (
          <Stack spacing={4} key={`values-${index}`} bg={PRIMARY_COLOR} p={6} borderTopStartRadius={"38px"} borderBottomEndRadius={"38px"}>
            <Image src={value.icon} w={"32px"} />
            <Heading color={"white"} size={"md"}>{value.title}</Heading>
            <Text color={"white"}>{value.text}</Text>
          </Stack>
        )) }
      </SimpleGrid>
    </PageContainer>
  )
}

export default CoreValues