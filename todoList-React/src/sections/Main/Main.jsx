import React from 'react'
import { Flex } from '@chakra-ui/react'
import { AddItem } from '../../components/AddItem'

export const Main = () => {
  return (
    <Flex flexDir='column' mt='20px'>
      <AddItem/>
    </Flex>
  )
}
