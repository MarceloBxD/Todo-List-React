import React, { useState } from 'react'
import { Checkbox, Flex, Input } from '@chakra-ui/react'
import { ListItems } from '../../assets/List/List.json'

export const AddItem = () => {

  const [list, setList] = useState(ListItems)
  const [isChecked, setIsChecked] = useState(false)
  const [inputText, setInputText] = useState('')

  const handleAddTask = (txt) => {
    const newList = [...list]
    newList.push({
      id: list.length + 1,
      name: txt,
      done: false
    });
    setList(newList);
    setInputText('');
  }

  const handleChange = (e) => {
    {
      e.code === 'Enter' && inputText &&
        handleAddTask(inputText);
    }
  }

  return (
    <Flex w='980px' borderRadius='10px'  gap='10px' flexDir='column' mb='20px'>
      <Input p='5px' value={inputText} onKeyUp={handleChange} onChange={e => setInputText(e.target.value)} color='#ffffff' placeholder='Add New Item' />
      {list.map((item, index) => (
        <Flex bgColor='#1C1C21' borderRadius='10px' p='10px' key={index} gap='10px'>
          <Checkbox onChange={e => e.target.checked} value={isChecked}/>
          <Flex w='400px' textDecoration={isChecked ? 'line-through' : 'none'} fontSize='18px' fontWeight='bold' color='#fff' key={index}>{item.name}</Flex>
        </Flex>
      ))}
    </Flex>
  )
}
