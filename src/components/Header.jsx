import { Box, Button, Container, Drawer, IconButton, List, ListItem, ListItemButton, Stack, Typography, useTheme } from '@mui/material'
import { useEffect } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'

import logo from "../assets/logo.png"
import Image from 'mui-image'
import { navLinks } from '../contents/homeContent'
import { PRIMARY_COLOR } from '../utils/colors'
import useBoolean from '../hooks/useBoolean'
import { IoClose } from "react-icons/io5"
import PropTypes  from 'prop-types'


const Header = () => {
  const { isOpen: isSticky, open: openSticky, close: closeSticky } = useBoolean()
  const { isOpen, open, close } = useBoolean()
  const { shadows } = useTheme()

  useEffect(() => {
    const handleHeaderScroll = () => {
      if(window.scrollY > 200) {
        openSticky()
        return
      }
      closeSticky()
    }
    window.addEventListener("scroll", handleHeaderScroll)

    return () => window.removeEventListener("scroll", handleHeaderScroll)
  }, [])

  return (
    <Box component="header" py={3} boxShadow={isSticky ? shadows[6] : "none"} className={`header ${isSticky ? "sticky-header" : ""}`}>
      <Container maxWidth={"lg"}>
        <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
          <Link to="/" style={{textDecoration: "none"}}>
            <Stack gap={1} alignItems={"center"} direction={"row"}>
              <Image src={logo} fit='contain' width={40} duration={200}/>
              <Typography fontWeight={600} variant='h6' color={"rgba(0, 0, 0, .85)"}>Gee2</Typography>
            </Stack>
          </Link>

          {/* LINKS */}
          <Stack direction={"row"} gap={5} display={{ xs: "none", md: "flex" }} sx={{ overflowY: "hidden" }}>
            { navLinks.map(item => <NavLinkItem key={item.name} {...item} />) }
          </Stack>

          {/* LINK */}
          <Stack direction={"row"} gap={2} alignItems={"center"} display={{ xs: "none", md: "flex" }} height={30}>
            <Button sx={{ textTransform: "capitalize" }} color={"primary"} variant='outlined'> Login </Button>
            <Button sx={{ textTransform: "capitalize", color: "white" }} color={"primary"} variant='contained'> Register </Button>
          </Stack>

          <IconButton onClick={open} sx={{ display: {xs: "flex", md: "none"}, width: 40, height: 40, borderRadius: 2, color: PRIMARY_COLOR }}>
            <Stack alignItems={"flex-end"} gap={.7}>
              <Box component={"span"} height={2} borderRadius={2} bgcolor={PRIMARY_COLOR} width={28}></Box>
              <Box component={"span"} height={2} borderRadius={2} bgcolor={PRIMARY_COLOR} width={20}></Box>
              <Box component={"span"} height={2} borderRadius={2} bgcolor={PRIMARY_COLOR} width={15}></Box>
            </Stack>
          </IconButton>
        </Stack>
      </Container>

      <Drawer
        anchor={"right"}
        open={isOpen}
        onClose={close}
        PaperProps={{sx: { width: "100%", maxWidth: 350 }}}
      >
        <Stack alignItems={"flex-end"} px={3} pt={2}>
          <IconButton onClick={close}>
            <IoClose />
          </IconButton>
        </Stack>
        <Stack gap={3}>
          <List>
            { navLinks.map(item => <NavLinkItem key={item.name} {...item} isMobile />) }
          </List>
          <Stack gap={2} px={3}>
            <Button sx={{ textTransform: "capitalize" }} size={"large"} color={"primary"} variant='outlined'> Login </Button>
            <Button sx={{ textTransform: "capitalize", color: "white" }} size={"large"} color={"primary"} variant='contained'> Register </Button>
          </Stack>
        </Stack>
      </Drawer>
    </Box>
  )
}

const NavLinkItem = ({ name, link, isMobile }) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const isActiveLink = pathname === link

  if(isMobile) return (
    <ListItem>
      <ListItemButton onClick={() => navigate(link)} sx={{ color: isActiveLink? PRIMARY_COLOR : "#555" }}>
        <Typography fontWeight={500} fontSize={".95rem"}>{name}</Typography>
      </ListItemButton>
    </ListItem>
  )
  return (
    <NavLink to={link} className="header-link">
      <Typography fontWeight={500} fontSize={".95rem"}>{name}</Typography>
    </NavLink>
  )
}

NavLinkItem.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
  isMobile: PropTypes.bool,
}
export default Header