import { Stack, Typography } from '@mui/material'
import Image from 'mui-image'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"
import PropTypes from "prop-types"


const Logo = ({ light }) => {
  return (
    <Link to="/" style={{textDecoration: "none"}}>
    <Stack gap={1} alignItems={"center"} direction={"row"}>
      <Image src={logo} fit='contain' width={40} duration={200}/>
      <Typography fontWeight={600} variant='h6' color={ light ? "white" : "rgba(0, 0, 0, .85)"}>Gee2</Typography>
    </Stack>
  </Link>
  )
}

Logo.propTypes = {
  light: PropTypes.bool
}

export default Logo