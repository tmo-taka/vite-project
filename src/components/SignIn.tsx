import { FC } from 'react';
import { Box, Input ,InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import { useSignIn } from '@Hooks/useSignIn';


type Props = {
    children?: React.ReactNode
}

export const SignIn: FC<Props> = (props) =>{

    const { member , show, inputForm, displayClick }= useSignIn();
    console.log(member.name);
    return (
        <Box w='560px' m={[0, 'auto']} >
            <form>
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
            </form>
        </Box>
    )
}