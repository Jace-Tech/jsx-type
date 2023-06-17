import { Container, Grid, GridItem, Link, Image, Text, Box } from "@chakra-ui/react"
import { PRIMARY_COLOR } from "../../utils/colors"
import { Link as ReactLink } from "react-router-dom"
import { BLUE_LOGO, G2_LOGO, WHITE_LOGO } from "../../utils/assets"
import { SECTION_VERTICAL_PADDING } from "../../utils/constants"
import PropTypes from "prop-types"

const AuthLayout = ({ title, children, ...props }) => {
  return (
    <Box pos={"relative"}>
      <Box position={"absolute"} top={0} left={0} width={"full"} py={[4, 5, 6]}>
        <Container maxW={"container.xl"}>
          <Link hideBelow={"md"} as={ReactLink} to={"/"}>
            <Image
              src={WHITE_LOGO}
              w={120}
              objectFit={"contain"}
              alt={"logo"}
            />
          </Link>

          <Link hideFrom={"md"} as={ReactLink} to={"/"}>
            <Image
              src={BLUE_LOGO}
              w={120}
              objectFit={"contain"}
              alt={"logo"}
            />
          </Link>
        </Container>
      </Box>

      <Grid templateColumns={"repeat(7, 1fr)"} minH={"100vh"}>
        <GridItem bgImage={G2_LOGO} backgroundBlendMode={"soft-light"} bgRepeat={"repeat"} bgSize={90} colSpan={3} bgColor={PRIMARY_COLOR} display={["none", "none", "block"]} />
        <GridItem colSpan={[7, 7, 4]} py={[SECTION_VERTICAL_PADDING, SECTION_VERTICAL_PADDING, SECTION_VERTICAL_PADDING - 8]} {...props}>
          <Container maxW={"xl"}>
            <Text mb={8} fontSize={"4xl"} fontWeight={"semibold"}>{title}</Text>
            {children}
          </Container>
        </GridItem>
      </Grid>
    </Box>
  )
}

AuthLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
}

export default AuthLayout