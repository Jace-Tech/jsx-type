import { Box, Container, Stack, Typography } from "@mui/material"
import bg from "../../../assets/dv/bg-foot.png"


const FootSection = () => {
  return (
    <Box py={[10, 12, 16]} sx={{ background: `linear-gradient(to right, rgb(3, 4, 94, .3), rgb(3, 4, 94, .3)), url(${bg})`, backgroundSize: "cover" }}>
      <Container maxWidth={"sm"}>
        <Stack textAlign={"center"} spacing={5}>
          <div data-aos="fade-up">
            <Typography color={"#fff"} variant="h4" fontWeight={600}>Reliable Pricing.<br />Accountable Service.</Typography>
          </div>

          {/* <Box mt={3}> */}
            <div data-aos="fade-up">
              <Box width={70} height={3} mx={"auto"} bgcolor={"#fff"} />
            </div>
          {/* </Box> */}

          <Typography color={"#ccc"} lineHeight={"1.6"}>We respect your privacy, so we built our app to work without having your credit card on file so you can pay your driver your way, not ours, with cash or a credit card. With GEE2RiDE, you can always rely on a consistent fare, with no surge pricing, during peak transportation events while letting you give immediate feedback on how our drivers are doing out in the field. </Typography>
        </Stack>
      </Container>
    </Box>
  )
}

export default FootSection