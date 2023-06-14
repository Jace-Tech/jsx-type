import { Box, Container, Grid, Stack, Typography } from "@mui/material"
import bg from "../../../assets/dv/bg.png"
import SlideBox from "../../../components/SlideBox"
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../../utils/colors"
import car from "../../../assets/dv/car.png"
import CustomButton from "../../../components/CustomButton"


const Hero = () => {
  return (
    <Box py={[10, 12, 16]} sx={{ background: `linear-gradient(to right, rgb(3, 4, 94, .4), rgb(3, 4, 94, .3), rgb(3, 4, 94, .1)), url(${bg})`, backgroundSize: "cover" }}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={7}>
            <Stack spacing={2} textAlign={["center", "center", "left"]}>
              <SlideBox>
                <Typography
                  color={"#fff"}
                  fontWeight={600}
                  lineHeight={1.3}
                  variant='h3'
                >Join us today as a driver and</Typography>
              </SlideBox>

              <SlideBox>
                <Typography
                  color={"#fff"}
                  fontWeight={600}
                  lineHeight={1.3}
                  variant='h3'
                >experience the <span style={{ color: SECONDARY_COLOR }}>GEE2RiDE</span></Typography>
              </SlideBox>

              <SlideBox>
                <Typography
                  color={"#fff"}
                  fontWeight={600}
                  lineHeight={1.3}
                  variant='h3'
                ><span style={{ color: SECONDARY_COLOR }}>app with its stunning features.</span></Typography>
              </SlideBox>

              <Box pt={4}>
                <CustomButton
                  buttonProps={{ bgcolor: "#fff", fontWeight: 600, color: PRIMARY_COLOR }}
                >Become a driver</CustomButton>
              </Box>
            </Stack>
          </Grid>

          <Grid item xs={12} md={5} position={"relative"} display={{ xs: "none", md: "block" }}>
            <Box
              mt={[10, 8, 0]}
              mx={"auto"}
              position={["static", "static", "absolute"]}
              width={{ xs: "100%", sm: 500, md: 600 }}
              bottom={-100}
              right={0}
              maxWidth={700}
            >
              <div data-aos="fade-left">
                <img src={car} style={{ width: "100%", objectFit: "contain" }} />
              </div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Hero