import { useEffect } from 'react'
import { Box, Button , Heading, Text ,Stack ,Collapse } from "@chakra-ui/react";
import { SignIn } from '@Components/SignIn'
import { SignUp } from '@Components/SignUp'
import { ChatArea } from '@Components/ChatArea'
import { useSignIn } from '@Hooks/useSignIn'
import { useRecoilValue } from "recoil";
import { loginTokenAtom } from '@Store/loginToken'

const App = () =>{
  const { member, confirmSignIn }= useSignIn()
  const loginToken = useRecoilValue(loginTokenAtom);

  return (
    <Box>
      <Heading mb={16}>Hello,<Text color="primary.500">{member.name}</Text></Heading>
      <Box w='560px' m={[0,'auto']}>
        <Collapse in={loginToken ? true: false} animateOpacity>
          <ChatArea />
        </Collapse>
      </Box>
      <Collapse in={loginToken ? false: true} animateOpacity>
        <SignIn />
        <Stack direction='row' spacing={4} justify={'center'}>
          <Button colorScheme='accent' onClick={() => confirmSignIn()}>Sign In</Button>
          <SignUp />
        </Stack>
      </Collapse>
    </Box>
  )
}

export default App
