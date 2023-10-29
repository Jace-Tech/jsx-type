import { Box, Heading, Image, Link, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import Header from '../components/global/Header'
import Footer from '../components/global/Footer'
import PageHero from '../components/global/PageHero'
import bgImage from "../assets/images/c-care.png"
import { SECTION_VERTICAL_PADDING } from '../utils/constants'
import PageContainer from '../components/global/PageContainer'
import { BG_BLUE_COLOR, GRAY_COLOR, PRIMARY_COLOR } from '../utils/colors'

import phone from "../assets/images/phone.png"
import mail from "../assets/images/mail.png"
import sMedia from "../assets/images/s-media.png"



const ContactUs = () => {
  return (
    <Box>
      <Header />
      <PageHero image={bgImage} text={"We are Always here to help"} />
      <PageContainer py={SECTION_VERTICAL_PADDING} as={"section"} id={"contact"}>
        <SimpleGrid columns={[1, 2, 3]} spacing={4} mt={10}>
          <div data-aos="fade-up">
            <Stack bg={BG_BLUE_COLOR} minH={400} px={6} py={8} borderRadius={"12px"}>
              <Stack spacing={3}>
                <Image src={phone} maxW={"68px"} />
                <Heading size={"md"} fontWeight={"600"} color={"#111"}>Phone</Heading>
              </Stack>

              <Stack spacing={1}>
                <Text fontSize={"sm"} color={GRAY_COLOR}>Call us on <Link color={PRIMARY_COLOR} fontWeight={"500"} href={"tel:0700 888 8328"}>0700 888 8328</Link> or  <br /><Link color={PRIMARY_COLOR} fontWeight={"500"} href={"tel:01 8888328"}>01 8888328</Link></Text>
                <Text fontSize={"sm"} color={GRAY_COLOR}><Link color={PRIMARY_COLOR} fontWeight={"500"} href={"tel:0700 888 8329"}>0700 888 8329</Link> or <Link color={PRIMARY_COLOR} fontWeight={"500"} href={"tel:01 8888329"}>01 8888329</Link></Text>
                <Text fontSize={"sm"} color={GRAY_COLOR}>Available 24/7</Text>
              </Stack>

              <Stack>
                <Text fontSize={"sm"} color={GRAY_COLOR}>Chat with us on Whatsapp<Link color={PRIMARY_COLOR} fontWeight={"500"} href={"https://wa.me/+2349165998936"}>+2349165998936</Link></Text>
              </Stack>
            </Stack>
          </div>

          <div data-aos="fade-up" data-aos-delay={100}>
            <Stack bg={BG_BLUE_COLOR} minH={400} px={6} py={8} borderRadius={"12px"}>
              <Stack spacing={3}>
                <Image src={mail} maxW={"68px"} />
                <Heading size={"md"} fontWeight={"600"} color={"#111"}>Mail</Heading>
                <Text fontSize={"sm"} color={GRAY_COLOR}>If you have any  question? We can help you through our email channel.</Text>
              </Stack>


              <Stack>
                <Text fontSize={"sm"} color={GRAY_COLOR}><Link color={PRIMARY_COLOR} fontWeight={"500"} href={"mailto:Gee2ride@gmail.com"}>Gee2ride@gmail.com</Link></Text>
              </Stack>
            </Stack>
          </div>

          <div data-aos="fade-up" data-aos-delay={200}>
            <Stack bg={BG_BLUE_COLOR} minH={400} px={6} py={8} spacing={3} borderRadius={"12px"}>
              <Stack spacing={3}>
                <Image src={sMedia} maxW={"68px"} />
                <Heading size={"md"} fontWeight={"600"} color={"#111"}>Social media</Heading>
                <Text fontSize={"sm"} color={GRAY_COLOR}>You can also reach us via any of our verified social media pages.</Text>
              </Stack>

              <Stack spacing={0}>
                <Text color={PRIMARY_COLOR} fontSize={"sm"} fontWeight={"600"}>Instagram:</Text>
                <Link fontSize={"sm"} color={GRAY_COLOR} href={"https://"}>https://</Link>
              </Stack>

              <Stack spacing={0}>
                <Text color={PRIMARY_COLOR} fontSize={"sm"} fontWeight={"600"}>X:</Text>
                <Link fontSize={"sm"} color={GRAY_COLOR} href={"https://"}>https://</Link>
              </Stack>

              <Stack spacing={0}>
                <Text color={PRIMARY_COLOR} fontSize={"sm"} fontWeight={"600"}>Linkedin:</Text>
                <Link fontSize={"sm"} color={GRAY_COLOR} href={"https://"}>https://</Link>
              </Stack>
            </Stack>
          </div>
        </SimpleGrid>
      </PageContainer>
      <Footer />
    </Box>
  )
}

export default ContactUs