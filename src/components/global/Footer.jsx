import { SimpleGrid, Stack, Link, Image, HStack, IconButton, Icon, Text } from "@chakra-ui/react"
import { PRIMARY_COLOR } from "../../utils/colors"
import { COMPANY_ADDRESS, COMPANY_NAME, SECTION_VERTICAL_PADDING } from "../../utils/constants"
import PageContainer from "./PageContainer"
import footerLogo from "../../assets/images/logo/logo-foot.png"
import { Link as ReactLink } from "react-router-dom"
import { ANDROID_DOWNLOAD_BTN, COMPANY_LINKS, IOS_DOWNLOAD_BTN, PRODUCT_LINKS, SOCIAL_LINKS } from "../../contents/landing"

const Footer = () => {
  return (
    <PageContainer py={SECTION_VERTICAL_PADDING} bg={PRIMARY_COLOR} as={"footer"} id={"Footer"}>
      <SimpleGrid columns={[1, 2, 4, 5]} spacing={6}>
        
        {/* COMPANY LOGO */}
        <Stack gridColumn={"span 2"}>
          <div data-aos="fade-in">
            <Link as={ReactLink} to={"/"}>
              <Image src={footerLogo} maxW={150} alt={COMPANY_NAME + " logo"} />
            </Link>
          </div>
          <HStack spacing={4} mt={6}>
            {SOCIAL_LINKS.map((link, index) => (
               <div key={link.name} data-aos="zoom-in" data-aos-delay={index * 100}>
                <Link href={link.link} target="_blank" rel="noopener noreferrer">
                  <IconButton fontSize={"2xl"} colorScheme={"whiteAlpha"} variant={"ghost"} size={"md"}>
                    <Icon color={"gray.300"} as={link.icon} />
                  </IconButton>
                </Link>
               </div>
            ))}
          </HStack>
        </Stack>

        {/* COMPANY LINKS */}
        <Stack spacing={8}>
          <div data-aos="fade-in">
            <Text color={"white"} fontWeight={"medium"} fontSize={"2xl"}>Company</Text>
          </div>
          <Stack spacing={6}>

            {COMPANY_LINKS.map((link, delay) => (
              <div data-aos="fade-in" data-aos-delay={delay * 100} key={link.name}>
                <Link as={ReactLink} color={"gray.400"} to={link.link}>{link.name}</Link>
              </div>
            ))}
          </Stack>
        </Stack>

        {/* PRODUCTS LINKS */}
        <Stack spacing={8}>
          <div data-aos="fade-in">
            <Text color={"white"} fontWeight={"medium"} fontSize={"2xl"}>Products</Text>
          </div>
          <Stack spacing={6}>

            {PRODUCT_LINKS.map((link, delay) => (
              <div data-aos="fade-in" data-aos-delay={delay * 100} key={link.name}>
                <Link as={ReactLink} color={"gray.400"} to={link.link}>{link.name}</Link>
              </div>
            ))}
          </Stack>
        </Stack>

        {/* LOCATION LINKS */}
        <Stack spacing={8}>
          <Text color={"white"} fontWeight={"medium"} fontSize={"2xl"}>Enugu</Text>

          <div data-aos="fade-in">
            <Text color={"gray.400"}>{COMPANY_ADDRESS}</Text>
            <Text color={"gray.400"}>Enugu, Nigeria</Text>
          </div>
        </Stack>
      </SimpleGrid>
      <SimpleGrid columns={[1, 1, 2]} alignItems={"baseline"} mt={8}>
        <Text mb={2} color={"gray.400"}>Copyrights &copy; {(new Date()).getFullYear()} <Link as={ReactLink} fontWeight={"semibold"} color={"white"} to={"/"}>{COMPANY_NAME}</Link> </Text>
        <HStack mt={10} spacing={4} justifyContent={["center", "center", "flex-start"]}>
          <Link as={Image} maxW={40} w={"100%"} src={IOS_DOWNLOAD_BTN} alt="Download on ios" />
          <Link as={Image} maxW={40} w={"100%"} src={ANDROID_DOWNLOAD_BTN} alt="Download on ios" />
        </HStack>
      </SimpleGrid>
    </PageContainer>
  )
}

export default Footer