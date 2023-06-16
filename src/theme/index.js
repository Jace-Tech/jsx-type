import {extendTheme} from "@chakra-ui/react"
import containerTheme from "./containerTheme"

export default extendTheme({
  components: {
    Container: containerTheme
  },
})
