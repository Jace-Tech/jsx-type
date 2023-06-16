import PropTypes from "prop-types"
import { Box, Container } from "@chakra-ui/react"

const PageContainer = ({ children, ...props }) => {
  return (
    <Box {...props}>
      <Container maxW={"container.lg"}>
        { children }
      </Container>
    </Box>
  )
}

PageContainer.propTypes = {
  props: PropTypes.object,
  children: PropTypes.node,
}

export default PageContainer