import { ListItem, ListItemButton, Typography } from "@mui/material"
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import { PRIMARY_COLOR } from "../utils/colors"
import PropTypes  from 'prop-types'

const NavLinkItem = ({ name, link, isMobile }) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const isActiveLink = pathname === link

  if (isMobile) return (
    <ListItem>
      <ListItemButton onClick={() => navigate(link)} sx={{ color: isActiveLink ? PRIMARY_COLOR : "#555" }}>
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

export default NavLinkItem