import { Box, HStack, Image, Link, SimpleGrid, Stack, Text } from "@chakra-ui/react"
import { PRIMARY_COLOR } from "../../utils/colors"
import PageContainer from "../global/PageContainer"
import TitleText from "../global/TitleText"
import PropTypes from 'prop-types'
import { DOWNLOAD_SECTION } from "../../contents/landing"



const DownloadCard = ({ type }) => {
  const { image, icon, links, text, title } = DOWNLOAD_SECTION[type]

  return (
    <PageContainer bg={PRIMARY_COLOR} pt={20}>
      <SimpleGrid columns={[1, 1, 2]} gap={8} rowGap={12}>
        <Stack spacing={10}>
          <div data-aos="fade-up">
            <TitleText color={"white"}>{title}</TitleText>
          </div>

          <div data-aos="fade-up">
            <Text color={"white"} fontSize={"lg"}>{text}</Text>
          </div>

          <HStack mt={10} spacing={4} justifyContent={["center", "center", "flex-start"]}>
            <Link href={links.ios} target="_blank" rel="noopener noreferrer" as={Image} w={40} src={icon.ios} alt="Download on App Store" />
            <Link href={links.android} target="_blank" rel="noopener noreferrer" as={Image} w={40} src={icon.android} alt="Download on Play Store" />
          </HStack>
        </Stack>

        <Box>
          <div data-aos="fade-left">
            <Image src={image} mx={["auto", "auto", "unset"]} w={"100%"} maxW={400} alt={type + " app"} />
          </div>
        </Box>
      </SimpleGrid>
    </PageContainer>
  )
}

DownloadCard.propTypes = {
  type: PropTypes.string
}

export default DownloadCard