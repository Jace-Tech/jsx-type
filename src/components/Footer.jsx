import { Box, Container, Grid, Stack, Typography } from "@mui/material"
import Logo from "./Logo"
import { navLinks } from "../contents/homeContent"
import NavLinkItem from "./NavLinkItem"
import { COMPANY_NAME } from "../contents"

const Footer = () => {
  return (
    <Box component={"footer"} pb={5} pt={[5, 10, 20]} bgcolor={"#fff"}>
      <Container maxWidth={"lg"}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Stack alignItems={{xs: "center", md: "flex-start"}}>
              <Logo />
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Stack justifyContent={{xs: "center", md: "flex-start"}} direction={"row"} gap={5}>
              {navLinks.map(item => <NavLinkItem key={item.name} {...item} />)}
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
           <Typography variant="body1" fontWeight={500} textAlign={{xs: "center", md: "right"}}> Copyright &copy; {(new Date()).getFullYear()}. {COMPANY_NAME}</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer