import { Flex, HStack, Image, Link, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import KASAMA_JEEP_LOGO from "../assets/kasama-logo.png"
import LetsWorkTogetherButton from "../ui-elements/lets-work-together-button";

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
          gap={{base: 0, lg: "4rem"}}
          mt={{base: "4rem", lg: 0}}
          alignItems={{base: "center", lg: "flex-start"}}
          order={{ base: 1, lg: 0 }}
        >
          <Image
            src={KASAMA_JEEP_LOGO}
            width="130px"
            height="auto"
          />
          <Stack justifyContent="flex-start" fontSize="20px">
            <Link>Work</Link>
            <Link>About</Link>
            <Link>Partners</Link>
            <Link>News</Link>
            <Link>Careers</Link>
            <Link>Contact</Link>
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