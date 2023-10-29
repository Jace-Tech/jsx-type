import { Box, HStack, IconButton, Image, Link, VStack, useDisclosure } from "@chakra-ui/react"
import PageContainer from "./PageContainer"
import { Link as ReactLink } from "react-router-dom"

import HeaderLogo from "../../assets/images/logo/logo.png"
import { NAV_LINKS } from "../../contents/landing"
import CustomButton from "./CustomButton"
import { PRIMARY_COLOR } from "../../utils/colors"
import { useEffect, useState } from "react"
import MenuLink from "../local/MenuLink"
import MobileNav from "./MobileNav"


const Header = () => {
  const [isSticky, setIsSticky] = useState(false)
  const { isOpen, onClose, onOpen } = useDisclosure()
  

  useEffect(() => {
    const checkHeight = () => {
      if (window.scrollY > 200) setIsSticky(true)
      else setIsSticky(false)
    }

    window.addEventListener("scroll", checkHeight)
    return () => window.removeEventListener("scroll", checkHeight)
  }, [])

  useEffect(() => {
    console.log("IS-STICKY:", isSticky)
  }, [isSticky])

  return (
    <PageContainer 
      className={isSticky ? "animate__animated animate__slideInDown" : ""} 
      zIndex={20} py={5} top={0} bg={"white"} w={"100%"} left={0} 
      shadow={isSticky ? "md" : "none"} 
      position={isSticky ? "fixed" : "static"}>
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
          {NAV_LINKS.map((link) => (
            <MenuLink key={link.name} {...link} />
          ))}
        </HStack>

        <HStack hideBelow={"md"} spacing={4}>
          <CustomButton outlined onClick={() => alert("coming soon! 🙂")}>Login</CustomButton>
          <CustomButton onClick={() => alert("coming soon! 🙂")}>register</CustomButton>
        </HStack>

        <IconButton onClick={onOpen} variant={"ghost"} hideFrom={"md"} display={"flex"} rounded={"sm"} color={PRIMARY_COLOR}>
          <VStack alignItems={"flex-end"} spacing={1}>
            <Box as={"span"} h={"2px"} rounded={"sm"} bg={PRIMARY_COLOR} w={"28px"} />
            <Box as={"span"} h={"2px"} rounded={"sm"} bg={PRIMARY_COLOR} w={"20px"} />
            <Box as={"span"} h={"2px"} rounded={"sm"} bg={PRIMARY_COLOR} w={"15px"} />
          </VStack>
        </IconButton>
      </HStack>

      <MobileNav isOpen={isOpen} onClose={onClose} />
    </PageContainer>
  )
}



export default Header