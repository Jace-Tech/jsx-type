import { Image, Text, VStack } from "@chakra-ui/react"
import PropTypes from "prop-types"
import { PRIMARY_COLOR } from "../../utils/colors"

const ChooseCard = ({ icon, title, text }) => {
  return (
    <VStack minH={["auto", 310]} rounded={"md"} color={"white"} spacing={6} w={"100%"} textAlign={"center"} bg={PRIMARY_COLOR} maxW={400} px={6} py={10}>
      <Image w={12} src={icon} alt={title + " icon"} />
      <Text fontSize={"xl"} fontWeight={600}>{title}</Text>
      <Text color={"gray.300"} fontSize={"md"}>{text}</Text>
    </VStack>
  )
}
ChooseCard.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
}
export default ChooseCard