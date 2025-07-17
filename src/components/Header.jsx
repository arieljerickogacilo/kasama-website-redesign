import { Flex, Heading, HStack, Image, SimpleGrid, IconButton, Box, Text, useDisclosure } from "@chakra-ui/react";
import KASAMA_JEEP_LOGO from "../assets/kasama-logo.png"
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
} from '@chakra-ui/react'

import { useNavigate } from "react-router-dom";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { useEffect, useState } from "react";

const NavLink = ({ navigate, setDrawerIsOpen, link, children, ...props }) => {
  const handleNavigate = () => {
    setDrawerIsOpen(false);
    navigate(link);
  };

  return (
    <Box
      {...props}
      color="#213047"
      fontSize={{ base: "32px", lg: "18px" }}
      fontFamily={{ base: "'Libre Baskerville', sans-serif", lg: "'Space Grotesk', sans-serif" }}
      cursor="pointer"
      _hover={{
        textDecoration: "underline",
      }}
      onClick={handleNavigate}
    >
      {children}
    </Box>
  )
}

function Header() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  
  
  useEffect(() => {
    console.log(drawerIsOpen)
  }, [drawerIsOpen])

  const navigate = useNavigate();

  return (
    <>
      <Drawer
        isOpen={drawerIsOpen}
        placement='right'
        size="100%"
      >
        <DrawerOverlay />
        <DrawerContent
          background="linear-gradient(180deg, #F8D9D8 0%, #F8D9D8 50%, #FEEFDB 75%, #FEEFDB 100%)"
        >
          <DrawerHeader padding={{ base: "0 1rem", lg: "0" }} >
            <Flex direction="row" alignItems="center" justifyContent="space-between">
              <Image
                width={{ base: "75px", lg: "120px" }}
                height={{ base: "75px", lg: "120px" }}
                src={KASAMA_JEEP_LOGO}
              />
              <Box
                onClick={() => setDrawerIsOpen(false)}
                width="47px"
                height="47px"
                borderRadius="full"
                display="flex"
                justifyContent="center"
                alignItems="center"
                backgroundColor="#fdebd2"
                fontSize="26px"
              >
                <RxCross1 />
              </Box>
            </Flex>
          </DrawerHeader>
          <DrawerBody mt={16}>
            <Flex
              direction="column"
              gap={6}
            >
              <NavLink setDrawerIsOpen={setDrawerIsOpen} navigate={navigate} link="/work">Work</NavLink>
              <NavLink setDrawerIsOpen={setDrawerIsOpen} navigate={navigate} link="/about">About</NavLink>
              <NavLink setDrawerIsOpen={setDrawerIsOpen} navigate={navigate} link="/partners">Partners</NavLink>
              <NavLink setDrawerIsOpen={setDrawerIsOpen} navigate={navigate} link="/news">News</NavLink>
              <NavLink setDrawerIsOpen={setDrawerIsOpen} navigate={navigate} link="/careers">Careers</NavLink>
              <NavLink setDrawerIsOpen={setDrawerIsOpen} navigate={navigate} link="/contact">Contact</NavLink>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Flex
        direction="row"
        padding={{ base: "0 1rem", lg: "0" }}
        justifyContent={{ base: "space-between", lg: "center" }}
        alignItems="center"
        gap={12}
        backgroundColor="#F8D9D8"
      >
        <Image
          width={{ base: "75px", lg: "120px" }}
          height={{ base: "75px", lg: "120px" }}
          src={KASAMA_JEEP_LOGO}
        />
        <Box
          onClick={() => setDrawerIsOpen(true)}
          width="47px"
          height="47px"
          borderRadius="full"
          display={{ base: "flex", lg: "none" }}
          justifyContent="center"
          alignItems="center"
          backgroundColor="#fdebd2"
          fontSize="26px"
        >
          <RxHamburgerMenu />
        </Box>
        <Flex
          display={{ base: "none", lg: "flex" }}
          direction="row"
          padding="1rem 2rem"
          gap={12}
          borderRadius={4}
          backgroundColor="#FDEADA"
        >
          <NavLink navigate={navigate} link="/work">Work</NavLink>
          <NavLink navigate={navigate} link="/about">About</NavLink>
          <NavLink navigate={navigate} link="/partners">Partners</NavLink>
          <NavLink navigate={navigate} link="/news">News</NavLink>
          <NavLink navigate={navigate} link="/careers">Careers</NavLink>
          <NavLink navigate={navigate} link="/contact">Contact</NavLink>
        </Flex>
      </Flex>
    </>
  )
}

export default Header;