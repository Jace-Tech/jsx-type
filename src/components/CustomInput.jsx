import { Box } from "@mui/material"

const CustomInput = ({ ...props }) => {
  return (
    <Box flex={1} width="100%">
      <input type="text" className="custom-input" {...props} />
    </Box>
  )
}

export default CustomInput