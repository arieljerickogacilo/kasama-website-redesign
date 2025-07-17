import { Image, Stack, Text, Flex, Box, Textarea, SimpleGrid, FormControl, FormLabel, Input, Divider } from "@chakra-ui/react";
import LEAVE from "../assets/leaf.png"
import SALESFORCE_LOGO from "../assets/salesforce-logo.png"
import SHOPIFY_LOGO from "../assets/shopify-logo.png"

// LOGO FOR PARTNER

import SALSIFY_LOGO from "../assets/partner-logo/salsify.png";
import KLAVIYO_LOGO from "../assets/partner-logo/klaviyo.png";
import PIPE17_LOGO from "../assets/partner-logo/pipe17.png";
import AVALARA_LOGO from "../assets/partner-logo/avalara.png";
import YOTPO_LOGO from "../assets/partner-logo/yotpo.png";
import MULESOFT_LOGO from "../assets/partner-logo/mulesoft.png";

function Partners() {
  return (
    <Stack
      overflowX="hidden"
      flex="1"
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
        fontSize={{ base: "24px", lg: "70px" }}
        fontWeight="400"
        lineHeight="130%"
        textAlign="center"
      >Partnering with industry<br /> leaders for proficiency</Text>
      <Text
        w={{base: "100%", lg: "40%"}}
        p={{base: "0 1rem", lg: 0}}
        mt="4rem"
        color="#213047"
        fontFamily="'Libre Baskerville', sans-serif"
        fontSize={{ base: "18px", lg: "24px" }}
        fontWeight="400"
        lineHeight="130%"
        textAlign="center"
      >Our commitment to excellence leads us to collaborate with top industry professionals, ensuring your business achieves sustained growth and operational excellence.</Text>
      <Image
        display={{ base: "none", lg: "block" }}
        position="absolute"
        width="378px"
        left="-154px"
        top="70px"
        height="auto"
        src={LEAVE}
      />
      <Stack
        width="100%"
        p={{base: 4, lg: "0 8rem"}}
        mt={{base: "4rem", lg: "4rem"}}
        gap={{base: "2rem", lg: "2rem"}}
      >
        <Divider borderColor="#213047" />
        <Text fontSize={{base: "24px", lg: "30px"}}>Top commerce partners</Text>
        <SimpleGrid columns={{base: 1, lg: 3}} spacing={{base: "4rem", lg: "1rem"}} mt="2rem" mb="4rem">
          <Stack spacing="2rem">
            <Image p={8} backgroundColor="#FAE1D9" borderRadius="4px" src={SHOPIFY_LOGO} />
            <Text fontSize="30px" fontFamily="'Libre Baskerville', sans-serif">Salesforce</Text>
            <Text
              fontFamily="'Space Grotesk', sans-serif"
              fontSize={{base: "16px", lg: "20px"}}
              w={{base: "100%", lg: "80%"}}
            >
              Shopify is a leading global commerce company, providing trusted tools to start, grow, market, and manage a retail business of any size. 
            </Text>
            <Box
              fontSize="18px"
              border="1px solid #213047"
              borderRadius="4px"
              w={{base: "100%", lg: "159px"}}
              textAlign="center"
              p="0.75rem 0"
            >
              Learn more
            </Box>
          </Stack> 
          <Stack spacing="2rem">
            <Image p={8} backgroundColor="#FAE1D9" borderRadius="4px" src={SALESFORCE_LOGO} />
            <Text fontSize="30px" fontFamily="'Libre Baskerville', sans-serif">Shopify</Text>
            <Text
              fontFamily="'Space Grotesk', sans-serif"
              fontSize={{base: "16px", lg: "20px"}}
              w={{base: "100%", lg: "80%"}}
            >
              Salesforce is a collection of cloud-based solutions which enterprise customers use to craft best-in-class experiences across all brand touch points.
            </Text>
            <Box
              fontSize="18px"
              border="1px solid #213047"
              borderRadius="4px"
              w={{base: "100%", lg: "159px"}}
              textAlign="center"
              p="0.75rem 0"
            >
              Learn more
            </Box>
          </Stack>
          <Stack spacing="2rem">
            <Image p={8} backgroundColor="#FAE1D9" borderRadius="4px" src={SHOPIFY_LOGO} />
            <Text fontSize="30px" fontFamily="'Libre Baskerville', sans-serif">Shopify</Text>
            <Text
              fontFamily="'Space Grotesk', sans-serif"
              fontSize={{base: "16px", lg: "20px"}}
              w={{base: "100%", lg: "80%"}}
            >
              BigCommerce is a scalable eCommerce platform that supports multi-channel selling and advanced analytics for business growth.
            </Text>
            <Box
              fontSize="18px"
              border="1px solid #213047"
              borderRadius="4px"
              w={{base: "100%", lg: "159px"}}
              textAlign="center"
              p="0.75rem 0"
            >
              Learn more
            </Box>
          </Stack>
        </SimpleGrid>
      </Stack>
      <Stack
        width="100%"
        p={{base: 4, lg: "0 8rem"}}
        mt={{base: 0, lg: "4rem"}}
        gap={{base: "2rem", lg: "2rem"}}
      >
        <Divider borderColor="#213047" />
        <Text fontSize={{base: "24px", lg: "30px"}}>Build partners</Text>
        <SimpleGrid columns={{base: 2, lg: 6}} gap={4} mt="2rem" mb={{base: 0, lg: "4rem"}} >
          <Stack spacing="1rem" mb="4rem">
            <Image width="236px" height="236px" objectFit="contain" p={8} backgroundColor="#FAE1D9" borderRadius="4px" src={SALSIFY_LOGO} />
            <Text fontSize="24px">Salsify</Text>
          </Stack>
          <Stack spacing="1rem" mb="4rem">
            <Image width="236px" height="236px" objectFit="contain" p={8} backgroundColor="#FAE1D9" borderRadius="4px" src={KLAVIYO_LOGO} />
            <Text fontSize="24px">Klaviyo</Text>
          </Stack>
          <Stack spacing="1rem" mb="4rem">
            <Image width="236px" height="236px" objectFit="contain" p={8} backgroundColor="#FAE1D9" borderRadius="4px" src={PIPE17_LOGO} />
            <Text fontSize="24px">Pipe 17</Text>
          </Stack>
          <Stack spacing="1rem" mb="4rem">
            <Image width="236px" height="236px" objectFit="contain" p={8} backgroundColor="#FAE1D9" borderRadius="4px" src={AVALARA_LOGO} />
            <Text fontSize="24px">Avalara</Text>
          </Stack>
          <Stack spacing="1rem" mb="4rem">
            <Image width="236px" height="236px" objectFit="contain" p={8} backgroundColor="#FAE1D9" borderRadius="4px" src={YOTPO_LOGO} />
            <Text fontSize="24px">Yotpo</Text>
          </Stack>
          <Stack spacing="1rem" mb="4rem">
            <Image width="236px" height="236px" objectFit="contain" p={8} backgroundColor="#FAE1D9" borderRadius="4px" src={MULESOFT_LOGO} />
            <Text fontSize="24px">MuleSoft</Text>
          </Stack>
          <Stack spacing="1rem" mb="4rem">
            <Image width="236px" height="236px" objectFit="contain" p={8} backgroundColor="#FAE1D9" borderRadius="4px" src={SALSIFY_LOGO} />
            <Text fontSize="24px">Salsify</Text>
          </Stack>
          <Stack spacing="1rem" mb="4rem">
            <Image width="236px" height="236px" objectFit="contain" p={8} backgroundColor="#FAE1D9" borderRadius="4px" src={KLAVIYO_LOGO} />
            <Text fontSize="24px">Klaviyo</Text>
          </Stack>
          <Stack spacing="1rem" mb="4rem">
            <Image width="236px" height="236px" objectFit="contain" p={8} backgroundColor="#FAE1D9" borderRadius="4px" src={PIPE17_LOGO} />
            <Text fontSize="24px">Pipe 17</Text>
          </Stack>
          <Stack spacing="1rem" mb="4rem">
            <Image width="236px" height="236px" objectFit="contain" p={8} backgroundColor="#FAE1D9" borderRadius="4px" src={AVALARA_LOGO} />
            <Text fontSize="24px">Avalara</Text>
          </Stack>
          <Stack spacing="1rem" mb="4rem">
            <Image width="236px" height="236px" objectFit="contain" p={8} backgroundColor="#FAE1D9" borderRadius="4px" src={YOTPO_LOGO} />
            <Text fontSize="24px">Yotpo</Text>
          </Stack>
          <Stack spacing="1rem" mb="4rem">
            <Image width="236px" height="236px" objectFit="contain" p={8} backgroundColor="#FAE1D9" borderRadius="4px" src={MULESOFT_LOGO} />
            <Text fontSize="24px">MuleSoft</Text>
          </Stack>
          <Stack spacing="1rem" mb="4rem">
            <Image width="236px" height="236px" objectFit="contain" p={8} backgroundColor="#FAE1D9" borderRadius="4px" src={SALSIFY_LOGO} />
            <Text fontSize="24px">Salsify</Text>
          </Stack>
          <Stack spacing="1rem" mb="4rem">
            <Image width="236px" height="236px" objectFit="contain" p={8} backgroundColor="#FAE1D9" borderRadius="4px" src={KLAVIYO_LOGO} />
            <Text fontSize="24px">Klaviyo</Text>
          </Stack>
          <Stack spacing="1rem" mb="4rem">
            <Image width="236px" height="236px" objectFit="contain" p={8} backgroundColor="#FAE1D9" borderRadius="4px" src={PIPE17_LOGO} />
            <Text fontSize="24px">Pipe 17</Text>
          </Stack>
          <Stack spacing="1rem" mb="4rem">
            <Image width="236px" height="236px" objectFit="contain" p={8} backgroundColor="#FAE1D9" borderRadius="4px" src={AVALARA_LOGO} />
            <Text fontSize="24px">Avalara</Text>
          </Stack>
          <Stack spacing="1rem" mb="4rem">
            <Image width="236px" height="236px" objectFit="contain" p={8} backgroundColor="#FAE1D9" borderRadius="4px" src={YOTPO_LOGO} />
            <Text fontSize="24px">Yotpo</Text>
          </Stack>
          <Stack spacing="1rem" mb="4rem">
            <Image width="236px" height="236px" objectFit="contain" p={8} backgroundColor="#FAE1D9" borderRadius="4px" src={MULESOFT_LOGO} />
            <Text fontSize="24px">MuleSoft</Text>
          </Stack>
          
        </SimpleGrid>
      </Stack>
      <Flex
        mt={{base: "0", lg: "4rem"}}
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
        <Box
          borderRadius="4px"
          border="1px black solid"
          padding="0.75rem 2.5rem"
          textAlign="center"
          width={{base: "100%", lg: "20%"}}
        >Apply today</Box>
      </Flex>
    </Stack>
  )
}

export default Partners;