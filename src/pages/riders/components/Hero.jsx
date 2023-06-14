import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import {useEffect, useRef} from "react"
import { PRIMARY_COLOR } from '../../../utils/colors'
import CustomButton from '../../../components/CustomButton'
import { AiOutlineArrowRight } from "react-icons/ai"
import wave from "../../../assets/wave.svg"
import { register } from 'swiper/element/bundle';

import keke from "../../../assets/vehicle/keke.png"
import car from "../../../assets/vehicle/car.png"
import SlideBox from '../../../components/SlideBox'
import { Autoplay } from 'swiper'

// import "swiper/element/css/autoplay"

register()

const Hero = () => {
  const swiperElRef = useRef(null)
  // const [interacting, setInteracting] = useState(false)


  useEffect(() => {
    const interval = setInterval(() => {
      swiperElRef?.current?.swiper.slideNext();
    }, 15000)

    return () => clearInterval(interval)
  }, []);

  return (
    <Box component={"section"} py={[10, 12, 16]} overflow={"hidden"} position={"relative"}>
      <Container maxWidth={"lg"}>
        <swiper-container
          ref={swiperElRef}
          className={"slider-container"}
          slides-per-view="1"
          navigation="true"
          speed="500" 
          autoplay={{
            delay: 100,
            disableOnInteraction: true
          }}
          modules={[Autoplay]}
          loop="true"
          pagination="false"
        >
          <swiper-slide className={"slide-item"}>
            <Grid container spacing={[5, 5, 2]}>
              <Grid item xs={12} md={6}>
                <Stack gap={4} textAlign={{ xs: "center", md: "left" }}>
                  <Stack gap={[0, 1.5]}>
                    <SlideBox height={60}>
                      <Typography fontWeight={600} lineHeight={1.3} variant='h3'>Instantly travel from</Typography>
                    </SlideBox>

                    <SlideBox height={60}>
                      <Typography fontWeight={600} lineHeight={1.3} variant='h3'> your comfort zone <span style={{ color: PRIMARY_COLOR }}>to</span></Typography>
                    </SlideBox>

                    <SlideBox height={60}>
                      <Typography fontWeight={600} lineHeight={1.3} variant='h3'><span style={{ color: PRIMARY_COLOR }}> any part of town.</span></Typography>
                    </SlideBox>
                  </Stack>

                  <Typography className="animate__animated animate__fadeInUp" color="#555" lineHeight={1.6}>Experience seamless transportation, connecting you to any destination in town with speed and ease. Enjoy comfortable rides driven by professionals, prioritizing your safety and satisfaction.</Typography>

                  <Box className="animate__animated animate__fadeInUp">
                    <CustomButton
                      endIcon={<AiOutlineArrowRight />}
                      buttonProps={{ width: "fit-content", bgcolor: PRIMARY_COLOR }}
                    >Book a ride</CustomButton>
                  </Box>
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box position={"relative"}>
                  <img src={car} className='slider-image animate__animated animate__fadeInRight' />
                </Box>
              </Grid>
            </Grid>
          </swiper-slide>

          <swiper-slide className={"slide-item"}>
            <Grid container spacing={[5, 5, 2]}>
              <Grid item xs={12} md={6}>
                <Stack gap={4} textAlign={{ xs: "center", md: "left" }}>
                  <Stack gap={[0, 1.5]}>
                    <SlideBox height={60}>
                      <Typography fontWeight={600} lineHeight={1.3} variant='h3'>Teleport from your</Typography>
                    </SlideBox>

                    <SlideBox height={60}>
                      <Typography fontWeight={600} lineHeight={1.3} variant='h3'>comfort zone to any</Typography>
                    </SlideBox>

                    <SlideBox height={60}>
                      <Typography fontWeight={600} lineHeight={1.3} variant='h3'><span style={{ color: PRIMARY_COLOR }}> part of town, no dulling!</span></Typography>
                    </SlideBox>
                  </Stack>

                  <Typography className="animate__animated animate__fadeInUp" color="#555" lineHeight={1.6}>
                  No be ordinary transportation oh! You go experience keke magic wey go carry you waka go anywia for town with speed and ease. Enjoy comfortable keke rides wey dem professionals dey drive, dem go prioritize your safety and satisfaction like say na dem mama born you.
                  </Typography>

                  <Box className="animate__animated animate__fadeInUp">
                    <CustomButton
                      endIcon={<AiOutlineArrowRight />}
                      buttonProps={{ width: "fit-content", bgcolor: PRIMARY_COLOR }}
                    >Book a ride</CustomButton>
                  </Box>
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box position={"relative"}>
                  <img src={keke} className='slider-image animate__animated animate__fadeInRight' />
                </Box>
              </Grid>
            </Grid>
          </swiper-slide>
        </swiper-container>
      </Container>
      <Box className="animate__animated animate__fadeInUp" zIndex={-1} position={"absolute"} bottom={-10} left={-5} width={"110%"}>
        <img src={wave} className={"wave-img"} />
      </Box>
    </Box>
  )
}

export default Hero