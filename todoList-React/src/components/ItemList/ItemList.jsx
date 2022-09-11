import React, { useState } from 'react'
import { Flex, Checkbox, Text } from '@chakra-ui/react'
import { ListItems } from '../../assets/List/List.json'

export const ItemList = () => {

  const [list, setList] = useState(ListItems);
  const [isChecked, setIsChecked] = useState(true);

  return (
    <Flex gap='10px' mt='10px' flexDir='column' color='#fff'>
      {list.map((item, index) => (
        <Flex gap='10px' key={index}>
          <Checkbox onChange={(e) => setIsChecked(e.target.checked)} isChecked={isChecked} w='25px' h='25px'/>
          <Text fontSize='20px'>{item.id} - {item.name}</Text>
        </Flex>
      ))}
    </Flex>
  )
}
