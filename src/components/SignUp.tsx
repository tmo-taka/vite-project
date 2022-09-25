import { FC ,useState } from 'react';
import { useRecoilState } from "recoil";
import { Button } from "@chakra-ui/react";
import { ModalTemplate } from '@Components/ModalTemplate';
import { modalFlagAtom } from '@Store/modalFlag'

type Props = {
    children?: React.ReactNode
}


export const SignUp: FC<Props> = (props) =>{

    const [modalFlag,setModalFlag] = useRecoilState(modalFlagAtom);

    const openModal = () => setModalFlag(true);

    console.log(modalFlag);

    return (
        <div>
            <Button colorScheme='accent' variant='outline' onClick={() => openModal()}>Sign Up</Button>
            <ModalTemplate>
                <div>やった</div>
            </ModalTemplate>
        </div>
    )
}