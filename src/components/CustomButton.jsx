import { ButtonBase, Stack, useTheme } from '@mui/material'
import { PRIMARY_COLOR } from '../utils/colors';
import PropTypes from "prop-types"

const CustomButton = ({ endIcon, children, title, startIcon, stackProps, buttonProps }) => {
  const { shadows } = useTheme()
  return (
    <ButtonBase sx={{ 
      opacity: .85, 
      "&:hover": { 
        opacity: 1 
      }, 
      borderRadius: 1, 
      boxShadow: shadows[5],
      bgcolor: PRIMARY_COLOR, 
      color: "white", ...buttonProps 
      }}
    >
      <Stack 
        direction={"row"} 
        alignItems={"center"} 
        gap={1} 
        fontWeight={500} 
        fontSize={".95rem"} 
        px={3} py={1.5} 
        {...stackProps}
      >
        { startIcon || null }
        { title || children }
        { endIcon || null }
      </Stack>
    </ButtonBase>
  )
}


CustomButton.propTypes = {
  children: PropTypes.node,
  endIcon: PropTypes.node,
  title: PropTypes.string,
  startIcon: PropTypes.string,
  stackProps: PropTypes.object,
  buttonProps: PropTypes.object,
};


export default CustomButton