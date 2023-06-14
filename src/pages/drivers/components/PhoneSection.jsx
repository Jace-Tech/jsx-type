import { Box, Container, Stack, Typography } from "@mui/material"
import phone from "../../../assets/dv/phone.png"
import { PRIMARY_COLOR } from "../../../utils/colors"

const PhoneSection = () => {
  return (
    <Box py={[10, 12, 16]}>
      <Container maxWidth="sm">
        <Stack textAlign={"center"} spacing={1}>
          <Box width={250} mx={"auto"}>
            <div data-aos="fade-up">
              <img style={{ width: '100%', objectFit: "contain" }} src={phone} alt="phone-image" />
            </div>
          </Box>
          <div data-aos="fade-up">
            <Typography variant="h5" fontWeight={500}>Transportation </Typography>
          </div>

          <div data-aos="fade-up">
            <Typography variant="h4" fontWeight={500}>At Your Fingertips </Typography>
          </div>

        </Stack>

        <Box mt={3}>
          <div data-aos="fade-up">
            <Box width={70} height={3} mx={"auto"} bgcolor={PRIMARY_COLOR} />
          </div>
        </Box>

        <Box mt={4} textAlign={"center"}>
          <div data-aos="fade-up">
            <Typography lineHeight={"1.6"} variant="body">Now that 64% of the Nigerian population own smartphones, the need for service industry app solutions is greater than ever. That{"'"}s why GEE2RiDE has developed its own free transportation app, allowing customers in Nigeria to request a ride with the touch of a screen. Using GPS and mobile technology, our customers can now order a taxi online, watch in real-time as the cab arrives, and rate their customer experience all from their mobile devices. Download our app today and see for yourself.</Typography>
          </div>
        </Box>
      </Container>
    </Box>
  )
}



export default PhoneSection