import { Box, ButtonBase, Container, Grid, Stack, Typography } from '@mui/material'

import rider from "../../../assets/rider.png"
import phone from "../../../assets/phone.png"
import wave from "../../../assets/wave-white.svg"
import { appSectionBg } from '../../../contents/homeContent'

import playStore from "../../../assets/icons/android.png"
import appStore from "../../../assets/icons/apple.png"

const AppSection = () => {
  return (
    <Box component={"section"} sx={appSectionBg} minHeight={["55vh", "65vh", "90vh"]} py={[5, 8, 10]} position={"relative"} display={"flex"} alignItems={["flex-start", "center"]}>
      <Box className="animate__animated animate__fadeInUp" zIndex={1} top={-15} left={0} position={"absolute"} width={"110%"}>
        <img src={wave} className={"wave-img"} />
      </Box>
      <Container maxWidth={"lg"}>
        <Grid container alignItems={"center"}>
          <Grid item xs={12} maxHeight={400} md={6} position={"relative"} zIndex={2} display={{ xs: "none", md: "block" }}>
            <div data-aos="fade-in" className='up-down'>
              <PhoneComponent />
            </div>
          </Grid>
          <Grid item xs={12} sm={10} md={6} zIndex={4}>
            <Stack mt={[10, 24]} spacing={3}>
              <div data-aos="fade-up">
                <Typography color={"#fff"} lineHeight={1.6} fontWeight={600} variant="h4">Get Ready to Ride for Free: Download the App Now!</Typography>
              </div>
              <div data-aos="fade-up">
                <Typography color={"#ccc"} lineHeight={1.6}>
                  Experience the revolution in transportation with Gee2&apos;s app, putting you in control. Download now for free rides and convenient travel. Say goodbye to high fares, hello to seamless journeys. Join Gee2&apos;s community today and enjoy effortless, complimentary rides. Don&apos;t miss out - get the app and hit the road with Gee2 now!
                </Typography>
              </div>
              <div data-aos="fade-up">
                <Stack direction={ "row"} gap={2}>
                  <ButtonBase>
                    <img src={playStore} className="download-btn play" alt="download on playstore" />
                  </ButtonBase>

                  <ButtonBase>
                    <img src={appStore} className="download-btn" alt="download on appstore" />
                  </ButtonBase>
                </Stack>
              </div>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

const PhoneComponent = (props) => {
  return (

    <Box maxWidth={350} sx={{ transform: "translateY(-100px)" }} zIndex={2} mx={"auto"} height={700} position={"relative"} display={"flex"} alignItems={"center"} justifyContent={"center"} {...props}>
      <Box overflow={"hidden"} width={"89%"} height={"93%"} borderRadius={10}>
        <img src={rider} style={{ width: "100%", aspectRatio: 1 / 1, height: "100%", objectFit: "cover" }} />
      </Box>
      <img src={phone} style={{ left: 0, top: 0, aspectRatio: 1 / 1, position: "absolute", width: '100%', height: '100%' }} />
    </Box>
  )
}

export default AppSection