import { FC ,useState } from 'react';
import { useRecoilState, useRecoilValue } from "recoil";
import { ModalTemplate } from '@Components/ModalTemplate';
import { modalFlagAtom } from '@Store/modalFlag'
import { stateSignUpAtom } from '@Store/stateSIgnUp'
import { useSignUp } from '@Hooks/useSignUp'
import { Input,
        InputGroup,
        InputRightElement,
        Button,
        ButtonGroup,
        Text,
        Collapse,
        Center
    } from "@chakra-ui/react";
import {CheckCircleIcon} from '@chakra-ui/icons'

type Props = {
    children?: React.ReactNode
}

export const SignUp: FC<Props> = (props) =>{

    const [modalFlag,setModalFlag] = useRecoilState(modalFlagAtom);
    const stateSignUp = useRecoilValue(stateSignUpAtom);
    const [show,setShow] = useState<Boolean>(false);

    const openModal = () => setModalFlag(true);

    const { newMember, isLoading, confirmNumber, inputForm, inputConfirmForm, activeJudge, submitAuthCode, confirmEmail } = useSignUp();

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
                <Text mb={2} align='center'>認証コードをメールアドレス宛にお送りしました。</Text>
                <Text mb={4} align='center'>認証コードを入力してください。</Text>
                <Input
                    placeholder='number'
                    size='md'
                    mb={8}
                    p={4}
                    bg="white"
                    value={confirmNumber}
                    onChange={(event) => inputConfirmForm(event)}
                />
                <ButtonGroup
                    display='flex'
                    justifyContent='center'
                >
                    <Button
                        colorScheme='accent'
                        onClick={() => confirmEmail()}
                    >
                        Confirm
                    </Button>
                </ButtonGroup>
            </Collapse>
            <Collapse in={stateSignUp === 'step3' ? true : false}>
                <Text mb={2} align='center'>メールアドレスを確認させていただきました。</Text>
                <Text mb={4} align='center'>{newMember.name}様,是非ともお楽しみください！！</Text>
                <Center>
                    <CheckCircleIcon boxSize={20} color="primary.500"/>
                </Center>
            </Collapse>
            </ModalTemplate>
        </div>
    )
}