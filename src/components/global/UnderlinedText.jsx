import { Box } from "@chakra-ui/react"
import TitleText from "./TitleText"
import PropTypes from "prop-types"
import { PRIMARY_COLOR } from "../../utils/colors"

const UnderlinedText = ({ TextProps, BoxProps, children }) => {
  return (
    <Box {...BoxProps}>
      <TitleText {...TextProps}>{children}</TitleText>
      <Box h={1.5} mt={2} rounded={"md"} bgColor={PRIMARY_COLOR} w={20} />
    </Box>
  )
}


UnderlinedText.propTypes = {
  TextProps: PropTypes.object, 
  BoxProps: PropTypes.object,
  children: PropTypes.node
}

export default UnderlinedText