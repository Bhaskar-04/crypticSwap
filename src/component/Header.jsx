import { HStack,Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React from 'react'

const Header = () => {
  return (
    <HStack bgColor={"black"} p={"4"} gap={"8"} w={"full"}>
      <Button variant={"unstyled"} color={"white"}>
        <Link to={"/"} >Home</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"}>
        <Link to={"/exchange"}>Exchange</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"}>
        <Link to={"/coins"} >Coins</Link>
      </Button>
    </HStack>
  )
}

export default Header