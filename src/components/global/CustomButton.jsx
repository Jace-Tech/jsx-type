import { Button } from "@chakra-ui/react";
import PropTypes from "prop-types"
import { PRIMARY_COLOR } from "../../utils/colors";

const CustomButton = ({ outlined, bColor, ...props }) => {
  return (
    <Button
      variant={outlined ? "outlined" : "solid"}
      border={outlined ? `1px solid hsl(239, 94%, 19%)` : "none"}
      fontSize={"sm"}
      py={1} color={ outlined ? bColor || PRIMARY_COLOR : "white"}
      textTransform={"capitalize"}
      _hover={{
        bg: bColor || "hsl(239, 94%, 19%)",
        color: "white"
      }}
      _active={{
        bg: bColor || "hsl(239, 94%, 25%)",
      }}
      minW={100} bgColor={outlined ? "white" : bColor || "hsl(239, 94%, 25%)"}
      rounded={"lg"} {...props}
    />
  );
}
CustomButton.propTypes = {
  props: PropTypes.object,
  bColor: PropTypes.string,
  outlined: PropTypes.bool
}

export default CustomButton;  