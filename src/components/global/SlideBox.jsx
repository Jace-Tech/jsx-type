import { Box } from '@chakra-ui/react'
import PropTypes from "prop-types"

const SlideBox = (prop) => {
  return (
    <Box className={"slide-box"} overflowY="hidden" {...prop} />
  )
}

SlideBox.propTypes = {
  prop: PropTypes.object
}

export default SlideBox