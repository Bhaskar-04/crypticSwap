import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import btc from "../assets/btc.png"
import {motion} from "framer-motion"

const Home = () => {
  return (
    <Box bgColor={'black'} w={"full"} h={"85vh"} >

      <motion.div 

      style={{
        height:"80vh"
      }}

      animate={{
        translateY:"25px"
      }}

      transition={{
        duration:2,
        repeat:Infinity,
        repeatType:"reverse"
      }}

      >
      <Image w={"full"} h={"full"} src={btc} filter={"grayscale(1)"} objectFit={"contain"} />
      </motion.div>
      <Text fontSize={"6xl"} textAlign={"center"} mt={"-10"} fontWeight={"thin"} color={"whiteAlpha.700"} >CrypticSwap</Text>
    </Box>
  )
}

export default Home