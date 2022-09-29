import { FC ,useState } from 'react';
import { useRecoilState, useRecoilValue } from "recoil";
import { ModalTemplate } from '@Components/ModalTemplate';
import { ErrorText } from '@Components/ErrorText';
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
        Center,
        FormControl
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

    const { newMember, newErrorMember, isLoading, confirmNumber, errorNumber, inputForm, inputConfirmForm, activeJudge, submitAuthCode, submitAgain, confirmEmail } = useSignUp();

    const displayClick = () => setShow(!show);

    const numberErrorText = () => {
        switch(errorNumber){
            case 1:
                return '認証コードが間違っています。'
            case 2:
                return '認証コードが期限切れです。再送信してください。'
            case 3:
                return 'このユーザーは既に認証済みです。'
            case 99:
                return '例外的なエラーです'
            default: ''
        }
    }

    return (
        <div>
            <Button colorScheme='accent' variant='outline' onClick={() => openModal()}>Sign Up</Button>
            <ModalTemplate>
            <Collapse in={stateSignUp === 'step1' ? true : false}>
                <FormControl isInvalid={newErrorMember.name} mb={8}>
                    <Input
                        placeholder='name'
                        size='md'
                        p={4}
                        value={newMember.name}
                        onChange={(event) => inputForm('name',event)}
                        bg="white"
                    />
                    <ErrorText>
                        {newErrorMember.name}
                    </ErrorText>
                </FormControl>
                <FormControl isInvalid={newErrorMember.password} mb={8}>
                    <InputGroup size='md'>
                        <Input
                            placeholder='password'
                            size='md'
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
                    <ErrorText>
                        {newErrorMember.password}
                    </ErrorText>
                </FormControl>
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
                <FormControl isInvalid={errorNumber !== 0} mb={8}>
                    <Input
                        placeholder='number'
                        size='md'
                        p={4}
                        bg="white"
                        value={confirmNumber}
                        onChange={(event) => inputConfirmForm(event)}
                    />
                    <ErrorText>
                        {numberErrorText()}
                    </ErrorText>
                </FormControl>
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
                    <Button
                        colorScheme='accent'
                        onClick={() => submitAgain()}
                    >
                        Send Again
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