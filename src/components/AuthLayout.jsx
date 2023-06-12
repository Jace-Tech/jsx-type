import { Box, Container, Grid } from '@mui/material'
import { PRIMARY_COLOR } from '../utils/colors'
import PropTypes from "prop-types"

const AuthLayout = ({ children }) => {
  
  return (
    <Box position={"relative"} width={"100%"} height={"100vh"}>
      <Grid container position={"absolute"} width={"100%"} height={"100%"}>
        <Grid xs={12} display={["none", "none", "flex"]} md={6} bgcolor={PRIMARY_COLOR}></Grid>
        <Grid xs={12} md={6} bgcolor={"#fff"}></Grid>
      </Grid>

      <Box position={"relative"}>
        <Container maxWidth={"lg"}>
          {children}
        </Container>
      </Box>
    </Box>
  )
}

AuthLayout.propTypes = {
  children: PropTypes.node
}

export default AuthLayout