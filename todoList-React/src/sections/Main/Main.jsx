import React from 'react'
import { Flex } from '@chakra-ui/react'
import { ItemList } from '../../components/ItemList'
import { AddItem } from '../../components/AddItem'

export const Main = () => {
  return (
    <Flex flexDir='column' mt='20px'>
      <AddItem/>
      <ItemList/>
    </Flex>
  )
}
