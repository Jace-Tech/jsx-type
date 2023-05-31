import { Box, Button, Container, Drawer, IconButton, List, Stack, useTheme } from '@mui/material'
import { useEffect } from 'react'

import { navLinks } from '../contents/homeContent'
import { PRIMARY_COLOR } from '../utils/colors'
import useBoolean from '../hooks/useBoolean'
import { IoClose } from "react-icons/io5"
import Logo from './Logo'
import NavLinkItem from './NavLinkItem'


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
          <Logo />

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

export default Header