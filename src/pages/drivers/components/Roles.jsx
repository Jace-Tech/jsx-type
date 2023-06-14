import { Box, Container, Grid, Stack, Typography } from "@mui/material"
import { GRAY, PRIMARY_COLOR } from "../../../utils/colors"
import PropTypes from "prop-types"

const Roles = () => {
  const roles = [
    { title: "Hire a Driver", text: "Effortlessly book professional drivers for a stress-free ride. Download our app now for convenient transportation on demand." },
    { title: "Become a driver", text: "Earn money on your own schedule. Join our app as a driver and start driving today!" },
    { title: "Identify drivers", text: "Quickly and accurately identify drivers with our intuitive app. Streamline your driver management process and ensure safety and efficiency." },
  ]
  return (
    <Box py={[10, 12, 16]} bgcolor={"#fcfcfe"}>
      <Container maxWidth={"lg"}>
        <Stack textAlign={"center"} spacing={1}>
        <div data-aos="fade-up">
          <Typography variant="subtitle1" color={GRAY}>Our Roles and Responsibilities</Typography>
        </div>

        <div data-aos="fade-up">
          <Typography variant={"h4"} fontWeight={600} color={PRIMARY_COLOR}>Our Services</Typography>
        </div>
        </Stack>

        <Grid container justifyContent={"space-between"} gap={3} mt={10}>
          {roles.map((role, index) => (
            <ServiceCard index={index} key={index + role.title} {...role} />
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

const ServiceCard = ({ title, text, index }) => {
  return (
    <Grid item xs={12} sm={5.8} md={5.8} lg={3.8} >
      <div data-aos="fade-up" data-aos-delay={index * 100}>
        <Box width={"100%"} p={4} borderRadius={"8px"} minHeight={250} bgcolor={PRIMARY_COLOR}>
          <Stack spacing={3}>
            <Typography fontWeight={500} color={"#fff"} variant="h5">{title}</Typography>
            <Typography color={"#fff"}>{text}</Typography>
          </Stack>
        </Box>
      </div>
    </Grid>
  )
}

ServiceCard.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  index: PropTypes.number,
  link: PropTypes.string
}

export default Roles