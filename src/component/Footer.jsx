import { Avatar, Box, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box bgColor={'black'} w={"full"} minH={"48"} color={"WhiteAlpha.700"} px={"16"} py={["16","8"]} >
        <Stack direction={["column","row"]} h={"full"} alignItems={"center"} >
            <VStack w={"full"} alignItems={["column", "flex-start"]}  >
                <Text fontWeight={"bold"} fontSize={"xl"} >About Us</Text>
                <Text fontSize={"sm"} textAlign={["center", "left"]} letterSpacing={"widest"}  >
                    We list around 1lakh+ crypto coins from around the globe , with detailed graph view and in-depth analysis based on past records.
                </Text>
            </VStack>
            <VStack>
                <Avatar boxSize={"28"} mt={["4","0"]} />
                <Text>Our founder</Text>
            </VStack>
        </Stack>
    </Box>
  )
}

export default Footer