import { FormControl, FormErrorMessage, GridItem, IconButton, Input, InputGroup, InputRightElement, useDisclosure } from "@chakra-ui/react"
import PropTypes from "prop-types"
import { useController } from "react-hook-form"
import { IoIosEye, IoIosEyeOff } from "react-icons/io"


export const BTN_DEFAULT_STYLES = {
  bg: "white",
  border: "none",
  py: 7
}

const CustomInput = ({ InputProps, password, name, rules, control, ...props }) => {
  const { onToggle, isOpen } = useDisclosure()

  const { field, fieldState: { error } } = useController({ control, name, rules })


  return password ? (
    <GridItem {...props}>
      <FormControl isInvalid={error}>
        <InputGroup>
          <InputRightElement mt={2} mr={2}>
            <IconButton colorScheme="gray" variant={"link"} fontSize={"xl"} onClick={onToggle} icon={isOpen ? <IoIosEyeOff /> : <IoIosEye />} />
          </InputRightElement>
          <Input {...BTN_DEFAULT_STYLES} type={isOpen ? "text" : "password"} {...field} {...InputProps} />
        </InputGroup>
        <FormErrorMessage>{error?.message}</FormErrorMessage>
      </FormControl>
    </GridItem>
  ) : (
    <GridItem {...props}>
      <FormControl isInvalid={error}>
        <Input {...BTN_DEFAULT_STYLES} {...field} {...InputProps} />
        <FormErrorMessage>{error?.message}</FormErrorMessage>
      </FormControl>
    </GridItem>
  )
}

CustomInput.propTypes = {
  InputProps: PropTypes.object,
  rules: PropTypes.object,
  password: PropTypes.bool,
  control: PropTypes.any,
  name: PropTypes.string
}

export default CustomInput