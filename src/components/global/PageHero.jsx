import { Box, Heading } from '@chakra-ui/react'
import PageContainer from './PageContainer'
import PropType from "prop-types"

const PageHero = ({ text, image }) => {
  return (
    <Box minH={[400, 600]} position={"relative"} bg={`linear-gradient(0deg, #03045E -4.62%, rgba(3, 4, 94, 0.00) 86.37%), url('${image}')`} bgSize={"cover"}>
      <PageContainer h={"full"}>
        <Heading pos={"absolute"} bottom={12} zIndex={5} size={"lg"} color="white">{text}</Heading>
      </PageContainer>
    </Box>
  )
}

PageHero.propTypes = {
  text: PropType.string,
  image: PropType.string
}

export default PageHero