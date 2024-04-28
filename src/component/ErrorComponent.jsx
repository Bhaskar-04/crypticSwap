import { Alert, AlertIcon } from '@chakra-ui/react'
import React from 'react'

const ErrorComponent = ({message}) => {
  return (
    <Alert bottom={"4"} left={"50%"} transform={"translateX(-50%)"} pos={"fixed"} w={"container.lg"} colorScheme='red'>
      <AlertIcon />
      {message}
    </Alert>
  )
}

export default ErrorComponent