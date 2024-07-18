import { Flex, Container, Box, Image } from '@chakra-ui/react'
import React from 'react'

const AuthPage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
        <Container maxW={Container.md} padding={0}>
            I will add the Auth page here!
            <Box display={{base: 'none', md:"block"}}>
                <Image/>
            </Box>
        </Container>
    </Flex>
  )
}

export default AuthPage