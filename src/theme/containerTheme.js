import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

// define custom sizes
const sizes = {
  lg: defineStyle({
    maxW: '85ch !important',
  }),
}

// export the component theme
export default defineStyleConfig({ sizes })