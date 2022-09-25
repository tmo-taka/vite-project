import { FC } from 'react';
import { Modal, ModalOverlay, ModalContent,ModalBody } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { modalFlagAtom } from '@Store/modalFlag'

type Props = {
    children: React.ReactNode
}

export const ModalTemplate: FC<Props> = (props) =>{

    const [modalFlag,setModalFlag] = useRecoilState(modalFlagAtom);

    const closeModal = () => setModalFlag(false)

    return (
        <Modal isOpen={modalFlag} onClose={() => closeModal()}>
            <ModalOverlay />
            <ModalContent>
                <ModalBody>
                    認証コードを送りました
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}