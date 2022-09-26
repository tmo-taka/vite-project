import { FC ,useState } from 'react';
import { useRecoilState } from "recoil";
import { ModalTemplate } from '@Components/ModalTemplate';
import { modalFlagAtom } from '@Store/modalFlag'
import { useSignUp } from '@Hooks/useSignUp'
import { Input ,InputGroup, InputRightElement, Button, ButtonGroup } from "@chakra-ui/react";

type Props = {
    children?: React.ReactNode
}

export const SignUp: FC<Props> = (props) =>{

    const [modalFlag,setModalFlag] = useRecoilState(modalFlagAtom);
    const [show,setShow] = useState<Boolean>(false);

    const openModal = () => setModalFlag(true);

    const { newMember, inputForm, activeJudge, submitAuthCode } = useSignUp();

    const displayClick = () => setShow(!show);

    return (
        <div>
            <Button colorScheme='accent' variant='outline' onClick={() => openModal()}>Sign Up</Button>
            <ModalTemplate>
            <Input
                placeholder='name'
                size='md'
                mb={8}
                p={4}
                value={newMember.name}
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
                value={newMember.password}
                onChange={(event) => inputForm('password',event)}
            />
            <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={displayClick}>
                {show ? 'Hide' : 'Show'}
                </Button>
            </InputRightElement>
            </InputGroup>
            <ButtonGroup
                display='flex'
                justifyContent='center'
            >
                <Button
                    colorScheme='accent'
                    onClick={() => submitAuthCode}
                    isDisabled={activeJudge()}
                >
                    Register
                </Button>
            </ButtonGroup>
            </ModalTemplate>
        </div>
    )
}