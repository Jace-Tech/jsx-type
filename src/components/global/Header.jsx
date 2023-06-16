import { Box, HStack, IconButton, Image, Link, VStack } from "@chakra-ui/react"
import PageContainer from "./PageContainer"
import { Link as ReactLink } from "react-router-dom"

import HeaderLogo from "../../assets/images/logo/logo.png"
import { NAV_LINKS } from "../../contents/landing"
import CustomButton from "./CustomButton"
import { PRIMARY_COLOR } from "../../utils/colors"
import { useEffect, useState } from "react"
import { MAX_Z_INDEX } from "../../utils/constants"

const Header = () => {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const checkHeight = () => {
      if(window.scrollY > 200) setIsSticky(true)
      else setIsSticky(false)
    }

    window.addEventListener("scroll", checkHeight)
    return () => window.removeEventListener("scroll", checkHeight)
  }, [])

  return (
    <PageContainer zIndex={MAX_Z_INDEX} py={5} top={0} bg={"white"} w={"100%"} left={0} shadow={isSticky? "md" : "none"} position={isSticky ? "sticky" : "static"}>
      <HStack alignItems={"center"} justifyContent={"space-between"}>
        <Link as={ReactLink} to={"/"}>
          <Image
            src={HeaderLogo}
            w={120}
            objectFit={"contain"}
            alt={"logo"}
          />
        </Link>

        <HStack hideBelow={"md"} spacing={8} flex={1} justifyContent={"center"} alignItems={"center"}>
          {NAV_LINKS.map(({ name, link }) => (
            <Link fontSize={"1rem"} whiteSpace={"nowrap"} as={ReactLink} to={link} key={name}> {name} </Link>
          ))}
        </HStack>

        <HStack hideBelow={"md"} spacing={4}>
          <CustomButton outlined>Login</CustomButton>
          <CustomButton>register</CustomButton>
        </HStack>

        <IconButton hideFrom={"md"} display={"flex"} rounded={"sm"} color={PRIMARY_COLOR}>
          <VStack alignItems={"flex-end"} spacing={1}>
            <Box as={"span"} h={"2px"} rounded={"sm"} bg={PRIMARY_COLOR} w={"28px"} />
            <Box as={"span"} h={"2px"} rounded={"sm"} bg={PRIMARY_COLOR} w={"20px"} />
            <Box as={"span"} h={"2px"} rounded={"sm"} bg={PRIMARY_COLOR} w={"15px"} />
          </VStack>
        </IconButton>
      </HStack>
    </PageContainer>
  )
}


export default Header