import { Box, Container, Grid, Stack } from "@mui/material"



const Hero = () => {
  return (
    <Box>
      <Container>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Stack>

            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box>
              {/* <img  /> */}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Hero