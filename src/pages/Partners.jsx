import { Stack, Text } from "@chakra-ui/react";

function Partners(){
  return(
    <Stack
      flex="1"
      position="relative"
      justifyContent="center"
      alignItems="center"
      background={{
        base: "linear-gradient(180deg, #F8D9D8 0%, #F8D9D8 6%, #FEEFDB 17%, #FEEFDB 100%)",
        lg: "linear-gradient(180deg, #F8D9D8 0%, #F8D9D8 8%, #FEEFDB 25%, #FEEFDB 100%)"
      }}
    >
      <Text>PARTNERS PAGE</Text>
    </Stack>
  )
}

export default Partners;