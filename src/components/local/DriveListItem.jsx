import PropTypes from 'prop-types'
import { Circle, HStack, Stack, Text } from '@chakra-ui/react'
import { PRIMARY_COLOR } from '../../utils/colors'

const DriveListItem = ({ number, text, title }) => {
  return (
    <HStack spacing={4} alignItems={"flex-start"}>
      <Circle size={8} bgColor={PRIMARY_COLOR} color={"white"}>{number}</Circle>
      <Stack flex={1}>
        <Text color={PRIMARY_COLOR} fontWeight={"semibold"} fontSize={"xl"}>{ title }</Text>
        <Text fontWeight={"medium"} fontSize={"md"}>{text}</Text>
      </Stack>
    </HStack>
  )
}

DriveListItem.propTypes = {
  number: PropTypes.number,
  title: PropTypes.string,
  text: PropTypes.string,
}

export default DriveListItem