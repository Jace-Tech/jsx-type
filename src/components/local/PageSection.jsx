import PageContainer from '../global/PageContainer'
import { SECTION_VERTICAL_PADDING } from '../../utils/constants'
import { Box, Image, SimpleGrid, Stack } from '@chakra-ui/react'
import PropTypes from "prop-types"


const PageSection = ({ image, name, children, isReversed }) => {
  return (
    <PageContainer py={SECTION_VERTICAL_PADDING} as={"section"} id={name}>
      {isReversed ? (
        <SimpleGrid columns={[1, 1, 2]} gap={8}>
          <Stack spacing={14}>
            {children}
          </Stack>

          <Box>
            <div data-aos="fade-right" data-aos-delay={300}>
              <Image w={"100%"} mx={["auto", "auto", "unset"]} maxW={450} src={image} roundedTopLeft={"60"} roundedBottomRight={"60"} />
            </div>
          </Box>
        </SimpleGrid>
      ) : (
        <SimpleGrid columns={[1, 1, 2]} gap={8}>
          <Box>
            <div data-aos="fade-right" data-aos-delay={300}>
              <Image w={"100%"} mx={["auto", "auto", "unset"]} maxW={450} src={image} roundedTopLeft={"60"} roundedBottomRight={"60"} />
            </div>
          </Box>

          <Stack spacing={14}>
            {children}
          </Stack>
        </SimpleGrid>
      )}
    </PageContainer>
  )
}


PageSection.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.node,
  isReversed: PropTypes.bool,
}
export default PageSection