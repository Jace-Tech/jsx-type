import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, HStack, Text } from "@chakra-ui/react"
import { IoIosArrowDropdown } from "react-icons/io"
import PropTypes from 'prop-types'

const FaqItem = ({ question, answer, num }) => {
  const isEven = +num && (+num % 2 == 0)
  return (
    <AccordionItem  border={"none"} mb={5} shadow={"sm"} rounded={"sm"}>
      <Box>
        <div data-aos={isEven ? "fade-right" : "fade-left"} data-aos-delay={num * 100}>
          <AccordionButton textAlign={"left"} p={4}  bg={"white"}>
            <HStack w={"100%"}>
              <Text fontWeight={"medium"} fontSize={"lg"} flex={1}>{question}</Text>
              <AccordionIcon as={IoIosArrowDropdown} fontSize={"2xl"} />
            </HStack>
          </AccordionButton>
        </div>
      </Box>
      <AccordionPanel p={10}>
        <Text color={"gray.600"}>{answer}</Text>
      </AccordionPanel>
    </AccordionItem>
  )
}

FaqItem.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
  num: PropTypes.number,
}

export default FaqItem