import { Box, Flex, HStack, Image, Link, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import KASAMA_JEEP_LOGO from "../assets/kasama-logo.png"
import LetsWorkTogetherButton from "../ui-elements/lets-work-together-button";
import { useNavigate } from "react-router-dom";

const HeaderLink = ({children, link}) => {
  return(
    <Box 
      cursor="pointer"
      w="100"
      _hover={{
        textDecoration: "underline",
      }}
      onClick={() => window.location.href = link}
    >
      {children}
    </Box>
  )
}

function Footer(props) {
  return (
    <Stack
      alignSelf="flex-end"
      p={{ base: 4, lg: "3rem 8rem" }}
      backgroundColor="#FAE1D9"
      {...props}
    >
      <SimpleGrid
        alignItems="center"
        columns={{ base: 1, lg: 2 }}
      >
        <Stack
          width={{base: "100%", lg: "70%"}}
          gap={8}
          order={{ base: 0, lg: 1 }}
          mt={{base: "4rem", lg: 0}}
        >
          <Text fontSize={{base: "28px", lg: "40px"}}>
            We collaborate with ambitious brands and people.
          </Text>
          <LetsWorkTogetherButton />
        </Stack>

        <Flex
          direction={{base: "column", lg: "row"}}
          gap={{base: 0, lg: "8rem"}}
          mt={{base: "4rem", lg: 0}}
          alignItems={{base: "center", lg: "flex-start"}}
          order={{ base: 1, lg: 0 }}
        >
          <Image
            src={KASAMA_JEEP_LOGO}
            width="130px"
            height="auto"
          />
          <Stack 
            w={{base: "100%", lg: "100%"}}
            fontSize="20px"
          >
            <HeaderLink link="/work">Work</HeaderLink>
            <HeaderLink link="/about">About</HeaderLink>
            <HeaderLink link="/partners">Partners</HeaderLink>
            <HeaderLink link="/news">News</HeaderLink>
            <HeaderLink link="/careers">Careers</HeaderLink>
            <HeaderLink link="/contact">Contact</HeaderLink>
          </Stack>
        </Flex>
      </SimpleGrid>
      <HStack
        mt="8rem"
        gap={4}
        fontFamily="'Libre Baskerville', sans-serif"
      >
        <Link>Boston</Link>
        <Link>Dallas</Link>
        <Link>Manila</Link>
      </HStack>
    </Stack>
  )
}

export default Footer;