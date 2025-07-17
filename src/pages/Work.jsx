import { Stack, Text } from "@chakra-ui/react";

function Work(){
  return(
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
     <Text>WORK PAGE</Text>
    </Stack>
  )
}

export default Work;