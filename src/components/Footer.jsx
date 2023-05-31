import { Box, Container, Stack } from "@mui/material"
import Logo from "./Logo"
import { navLinks } from "../contents/homeContent"
import NavLinkItem from "./NavLinkItem"

const Footer = () => {
  return (
    <Box component={"footer"} pb={5} pt={[5, 10, 20]} bgcolor={"#fff"}>
      <Container maxWidth={"lg"}>
        <Stack direction={{xs: "column", sm: "column", md: "row"}} gap={3} justifyContent={"space-between"} alignItems={"center"}>
          <Logo /> 
          <Stack direction={"row"} gap={5}>
            { navLinks.map(item => <NavLinkItem key={item.name} {...item} />) }
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

export default Footer