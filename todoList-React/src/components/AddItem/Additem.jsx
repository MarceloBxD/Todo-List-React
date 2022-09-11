import React, {useState} from 'react'
import { Flex, Input } from '@chakra-ui/react'

export const AddItem = () => {
  return(
  <Flex mb='20px'>
    <Input color='#ffffff' placeholder='Add New Item'/>
  </Flex>
  )
}
