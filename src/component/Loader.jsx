import { Spinner, VStack,Box } from '@chakra-ui/react'
import React from 'react'

const Loader = () => {
  return (
    <VStack justifyContent={"center"} w={"container.xl"} h={"80vh"}>
        <Box transform={"scale(4)"}>
        <Spinner />
        </Box>
    </VStack>
  )
}

export default Loader