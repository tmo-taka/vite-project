import { useState } from 'react'
import { Input ,InputGroup, InputRightElement, Button, Heading, Box} from "@chakra-ui/react";
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
      <Heading color="primary" mb={16}>Hello {member.name}</Heading>
      <Box w='560px' m={[0, 'auto']} >
        <Input
          placeholder='name'
          size='md'
          mb={8}
          value={member.name}
          onChange={(event) => inputForm('name',event)}
        />
        <InputGroup size='md'>
          <Input
            placeholder='password'
            size='md'
            type={show ? 'text' : 'password'}
            value={member.password}
            onChange={(event) => inputForm('password',event)}
          />
          <InputRightElement width='4.5rem'>
            <Button h='1.75rem' size='sm' onClick={displayClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
      </Box>
    </div>
  )
}

export default App
