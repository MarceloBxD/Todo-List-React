import React from "react";
import { Flex } from "@chakra-ui/react";
import { Header, Main } from './sections/index'

const App = () => {
  return(
    <Flex flexDir='column' w='100%' minH='100vh' bgColor='#2C2C34' align='center'>
      <Header/>
      <Main/>
    </Flex>
  )
}

export default App;