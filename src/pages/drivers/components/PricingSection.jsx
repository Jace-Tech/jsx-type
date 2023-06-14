import { Box, Container, Grid, Stack, Typography } from "@mui/material"
import { GRAY, PRIMARY_COLOR } from "../../../utils/colors"
import CustomButton from "../../../components/CustomButton"
import { IoArrowForward } from "react-icons/io5"
import pricing from "../../../assets/dv/check.png"

const PricingSection = () => {
  return (
    <Box py={[10, 12, 16]} bgcolor={"white"}>
      <Container maxWidth={"lg"}>
        <Grid container justifyContent={"space-between"}>
          <Grid item xs={12} md={5}>
            <Stack spacing={2}>
              <div data-aos="fade-up">
                <Typography variant="h5" color={"#333"} fontWeight={600}>Reliable Pricing</Typography>
              </div>

              <div data-aos="fade-up">
                <Typography variant="h4" lineHeight={"1.4"} color={PRIMARY_COLOR} fontWeight={600}>Accountable Service Nationwide.</Typography>
              </div>

              <div data-aos="fade-up">
                <Typography color={GRAY} lineHeight={"1.6"}>
                  We respect your privacy, so we built our app to work without having your credit card on file so you can pay your driver your way, not ours, with cash or a credit card. with <span style={{ color: PRIMARY_COLOR }}>GEE2RiDE</span>, you can always rely on a consistent fare, with no surge pricing, during peak transportation events while letting you give immediate feedback on how our drivers are doing out in the field.
                </Typography>
              </div>

              <div data-aos="fade-in">
                <CustomButton
                  buttonProps={{ mt: 3 }}
                  endIcon={<IoArrowForward />}
                >Read More</CustomButton>
              </div>
            </Stack>
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={12} md={5}>
            <Box mx={"auto"} maxWidth={[450, 400]} mt={[4, 6, 0]}>
              <div data-aos="fade-left">
                <img src={pricing} style={{ borderRadius: 20, width: '100%', objectFit: "contain" }} alt={"pricing-bg"} />
              </div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default PricingSection