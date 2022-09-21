import { useState } from 'react'
import { Input ,InputGroup, InputRightElement, Button, Heading, Box, Text } from "@chakra-ui/react";
import { RecoilRoot} from 'recoil'
import './App.css'

function App() {
  type Member ={
    name: string,
    password: string
  }
  const [member,setMember] = useState<Member>({name:'',password:''})
  const [show,setShow] = useState<Boolean>(false);

  const inputForm = (key: keyof Member, event: {target: HTMLInputElement}):void =>{
      const obj:Member = {...member};
      obj[key] = event.target.value;
      setMember(obj)
  }

  const displayClick = () => setShow(!show);

  return (
    <div>
      <Heading mb={16}>Hello,<Text color="primary.500">{member.name}</Text></Heading>
      <Box w='560px' m={[0, 'auto']} >
        <Input
          placeholder='name'
          size='md'
          mb={8}
          p={4}
          value={member.name}
          onChange={(event) => inputForm('name',event)}
          bg="white"
        />
        <InputGroup size='md'>
          <Input
            placeholder='password'
            size='md'
            mb={8}
            p={4}
            type={show ? 'text' : 'password'}
            bg="white"
            value={member.password}
            onChange={(event) => inputForm('password',event)}
          />
          <InputRightElement width='4.5rem'>
            <Button h='1.75rem' size='sm' onClick={displayClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Button colorScheme='accent'>Sign In</Button>
      </Box>
    </div>
  )
}

export default App
