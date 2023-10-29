import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Stack } from '@chakra-ui/react'
import { NAV_LINKS } from '../../contents/landing'
import MenuLink from '../local/MenuLink'
import PropTypes from "prop-types"
import CustomButton from './CustomButton'
import { MAX_Z_INDEX } from '../../utils/constants'

const MobileNav = ({ isOpen, onClose }) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement='right'
      onClose={onClose}
      isFullHeight
    >
      <DrawerOverlay />
      <DrawerContent zIndex={MAX_Z_INDEX}>
        <DrawerHeader>
          <DrawerCloseButton />
        </DrawerHeader>

        <DrawerBody>
          <Stack>
            {NAV_LINKS.map((link) => (
              <MenuLink  fontSize={"lg"} py={2} key={link.name} {...link} />
            ))}
          </Stack>

          <Stack spacing={4} mt={4}>
            <CustomButton py={5} onClick={() => alert("coming soon! 🙂")} outlined>Login</CustomButton>
            <CustomButton py={5} onClick={() => alert("coming soon! 🙂")}>register</CustomButton>
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer >
  )
}

MobileNav.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func
}
export default MobileNav