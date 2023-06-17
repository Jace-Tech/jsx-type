import { Link } from "@chakra-ui/react"
import PropTypes from "prop-types"
import { Link as ReactLink } from "react-router-dom"

import { Link as ScrollLink } from "react-scroll";


const MenuLink = ({ name, link, isInternal }) => {
  return isInternal ? (
    <Link duration={1000} spy smooth fontSize={"1rem"} whiteSpace={"nowrap"} as={ScrollLink} to={link}> {name} </Link>
  ) : (
    <Link fontSize={"1rem"} whiteSpace={"nowrap"} as={ReactLink} to={link}> {name} </Link>
  )
}

MenuLink.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
  isInternal: PropTypes.bool,
}

export default MenuLink