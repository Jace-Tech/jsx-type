import { Box, Container, Grid, Paper, Stack, Typography } from '@mui/material'
// import bgImage from "../../../assets/pattern.jpg"
import { PRIMARY_COLOR } from '../../../utils/colors'
import Image from 'mui-image'
import { serviceContents } from '../../../contents/homeContent'
import PropTypes from "prop-types"


const Service = () => {

  return (
    <Box component={"section"} pb={[8, 10, 12]}>
      <Box className={"service-bg"} minHeight={300} pt={[6, 8, 12]} pb={20}>
        <Container maxWidth={"sm"}>
          <Stack textAlign={"center"} gap={4}>
            <div data-aos="fade-up">
              <Typography lineHeight={1.6} fontWeight={600} variant="h4" color={"white"}>Unmatched Car Rental Services: Experience the Best</Typography>
            </div>
            <div data-aos="fade-up">
              <Typography color={"#ccc"}>We take great pride in providing unmatched service. Our team of dedicated professionals guarantees a smooth and effortless experience, delivering exceptional service from beginning to end.</Typography>
            </div>
          </Stack>
        </Container>
      </Box>
      <Box mt={-16}>
        <Container maxWidth={"lg"}>
          <Grid container spacing={4} justifyContent={"center"}>
            {serviceContents.map((content, index) => <ServiceCard index={index} key={content.name} {...content} />)}
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}

const ServiceCard = ({ image, text, name, index }) => {
  return (
    <Grid item xs={12} sm={6} md={4} display={"flex"} justifyContent={"center"}>
      <div data-aos="zoom-in" data-aos-delay={`${index && index * 100}`}>
        <Paper elevation={10} sx={{ p: 3, maxWidth: 350, minHeight: 380, borderBottom: `8px solid ${PRIMARY_COLOR}` }}>
          <Stack gap={4}>
            <Image src={image} height={150} fit='contain' alt={`${name} image`} />
            <Stack spacing={2}>
              <Typography textTransform={"capitalize"} variant='h6'>{name}</Typography>
              <Typography lineHeight={1.6} fontSize={".95rem"}>{text}</Typography>
            </Stack>
          </Stack>
        </Paper>
      </div>
    </Grid>
  )
}

ServiceCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  text: PropTypes.string,
  index: PropTypes.number,
}

export default Service