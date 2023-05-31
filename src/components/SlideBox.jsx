import { Box } from '@mui/material'
import PropTypes from "prop-types"

const SlideBox = (prop) => {
  return (
    <Box className={"slide-box"} style={{ overflowY: "hidden" }} {...prop} />
  )
}

SlideBox.propTypes = {
  prop: PropTypes.object
}

export default SlideBox