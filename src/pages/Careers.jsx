import { Image, Stack, Text, Flex, Link, Accordion, AccordionItem, AccordionButton, Box, AccordionIcon, AccordionPanel } from "@chakra-ui/react";
import LEAVE from "../assets/leaf.png"
import AI_JEEP from "../assets/AI_JEEP.png"

function Careers(){
  return(
    <Stack
      position="relative"
      justifyContent="center"
      alignItems="center"
      background={{
        base: "linear-gradient(180deg, #F8D9D8 0%, #F8D9D8 6%, #FEEFDB 17%, #FEEFDB 100%)",
        lg: "linear-gradient(180deg, #F8D9D8 0%, #F8D9D8 8%, #FEEFDB 25%, #FEEFDB 100%)"
      }}
    >
      <Text
        mt={24}
        color="#213047"
        fontFamily="'Libre Baskerville', sans-serif"
        fontSize={{base: "34px", lg: "70px"}}
        fontWeight="400"
        lineHeight="130%"
        textAlign="center"
      >Make cool sh*t.<br /> And get paid.</Text>
      <Image 
        display={{base: "none", lg: "block"}}
        position="absolute"
        width="378px"
        left="-154px"
        top="70px"
        height="auto"
        src={LEAVE} 
      />
      <Stack
        mt={{base: "8rem", lg: "12rem"}}
        p={{base: 4, lg: 0}}
      >
        <Flex
          position="relative"
          direction="column"
          width={{base: "100%", lg: "1006px"}}
          p={{base: 10, lg: 16}}
          pb={{base: 12, lg: "6rem"}}
          pt="0"
          alignItems="center"
          backgroundColor="#FAE1D9"
        >
          <Image 
            position="absolute"
            top={{base: "-15%", lg: "-20%"}}
            width={{base: "197px", lg: "343px"}}
            height="auto"
            src={AI_JEEP} 
          />
          <Text
            fontSize="20px"
            mt={{base: "8rem", lg: "15rem"}}
            mb={{base: "2rem", lg: 8}}
          >CULTURE</Text>
          <Text
            fontFamily="'Libre Baskerville', sans-serif"
            fontSize={{base: "18px", lg: "24px"}}
            textAlign="center"
            width={{base: "100%", lg: "727px"}}
          >
            We’re always looking to connect with individuals who want to make the best work of their lives with the world’s greatest brands. If you’re interested in working with us or leaning more, drop us a note, portfolio link or resume. We’ll take anything you got.
          </Text>
        </Flex>
      </Stack>
      
      <Image 
        display={{base: "none", lg: "block"}}
        position="absolute"
        width="378px"
        right="-170px"
        top="620px"
        height="auto"
        src={LEAVE} 
        transform="rotate(-155.652deg);"
      />
      <Flex
        mt={{base: "4rem", lg: "8rem"}}
        position="relative"
        direction="column"
        width={{base: "100%", lg: "1006px"}}
        alignItems="center"
        p={{base: 4, lg: 0}}
      >
        <Text
          fontSize="20px"
        >OPEN ROLES</Text>
        <Accordion allowToggle w="100%" mt={8}>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Flex flex="1" direction="row" alignItems="center" justifyContent="space-between" p={2} mr="auto">
                  <Text fontSize={{base: "18px", lg: "26px"}}>Shopify Technical Lead</Text>
                  <Box
                    display={{base: "none", lg: "block"}}
                    backgroundColor="#FAE1D9"
                    borderRadius="full"
                    fontSize="15px"
                    padding="0.5rem 1.5rem"
                  >REMOTE</Box>
                </Flex>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel p={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Flex flex="1" direction="row" alignItems="center" justifyContent="space-between" p={2} mr="auto">
                  <Text fontSize={{base: "18px", lg: "26px"}}>Project Manager</Text>
                  <Box
                    display={{base: "none", lg: "block"}}
                    backgroundColor="#FAE1D9"
                    borderRadius="full"
                    fontSize="15px"
                    padding="0.5rem 1.5rem"
                  >REMOTE</Box>
                </Flex>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel p={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Flex flex="1" direction="row" alignItems="center" justifyContent="space-between" p={2} mr="auto">
                  <Text fontSize={{base: "18px", lg: "26px"}}>Shopify Lead Developer</Text>
                  <Box
                    display={{base: "none", lg: "block"}}
                    backgroundColor="#FAE1D9"
                    borderRadius="full"
                    fontSize="15px"
                    padding="0.5rem 1.5rem"
                  >REMOTE</Box>
                </Flex>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel p={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </AccordionPanel>
          </AccordionItem>
         
        </Accordion>
      </Flex>
      <Flex
        mt={{base: "4rem", lg: "8rem"}}
        mb={{base: "4rem", lg: "8rem"}}
        position="relative"
        direction="column"
        width={{base: "100%", lg: "1006px"}}
        alignItems="center"
        gap={12}
        p={{base: 4, lg: 0}}
      >
       <Text
          color="#213047"
          fontFamily="'Libre Baskerville', sans-serif"
          fontSize={{base: "34px", lg: "70px"}}
          fontWeight="400"
          lineHeight="130%"
          textAlign="center"
        >Interested in<br />joining our team?</Text>
        <Link
          borderRadius="4px"
          border="1px black solid"
          padding="0.75rem 2.5rem"
          textAlign="center"
          width={{base: "100%", lg: "20%"}}
          href=""
        >Apply today</Link>
      </Flex>
    </Stack>
  )
}

export default Careers;