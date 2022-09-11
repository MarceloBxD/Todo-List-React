import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

export const Header = () => {
  return (
    <Flex>
        <Text borderBottom='1px solid #AAA' h='fit-content' textAlign='center' minW='980px' fontSize='40px' mt='20px' fontWeight='bold' color='#FFF'>Lista de Tarefas</Text>
    </Flex>
  )
}
