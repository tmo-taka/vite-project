import { FC ,useState } from 'react';
import { useRecoilState, useRecoilValue } from "recoil";
import { ModalTemplate } from '@Components/ModalTemplate';
import { modalFlagAtom } from '@Store/modalFlag'
import { stateSignUpAtom } from '@Store/stateSIgnUp'
import { useSignUp } from '@Hooks/useSignUp'
import { Input ,InputGroup, InputRightElement, Button, ButtonGroup,Text ,Collapse } from "@chakra-ui/react";

type Props = {
    children?: React.ReactNode
}

export const SignUp: FC<Props> = (props) =>{

    const [modalFlag,setModalFlag] = useRecoilState(modalFlagAtom);
    const stateSignUp = useRecoilValue(stateSignUpAtom);
    const [show,setShow] = useState<Boolean>(false);

    const openModal = () => setModalFlag(true);

    const { newMember, isLoading, inputForm, activeJudge, submitAuthCode } = useSignUp();

    const displayClick = () => setShow(!show);

    return (
        <div>
            <Button colorScheme='accent' variant='outline' onClick={() => openModal()}>Sign Up</Button>
            <ModalTemplate>
            <Collapse in={stateSignUp === 'step1' ? true : false}>
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
                <Input
                    placeholder='mail'
                    size='md'
                    mb={8}
                    p={4}
                    value={newMember.mail}
                    onChange={(event) => inputForm('mail',event)}
                    bg="white"
                />
                <ButtonGroup
                    display='flex'
                    justifyContent='center'
                >
                    <Button
                        colorScheme='accent'
                        isLoading= {isLoading ? true: false}
                        onClick={() => submitAuthCode()}
                        isDisabled={activeJudge()}
                    >
                        Register
                    </Button>
                </ButtonGroup>
            </Collapse>
            <Collapse in={stateSignUp === 'step2' ? true : false}>
                <Text>認証コードをメールアドレス宛にお送りしました。</Text>
                <Text>認証コードを入力してください。</Text>
                <Input
                    placeholder='number'
                    size='md'
                    mb={8}
                    p={4}
                    bg="white"
                />
            </Collapse>
            </ModalTemplate>
        </div>
    )
}