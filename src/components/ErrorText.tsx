import { FC } from 'react';
import { FormErrorMessage } from "@chakra-ui/react";

type Props = {
    children: React.ReactNode
}

export const ErrorText: FC<Props> = (props) =>{

    return (
        <FormErrorMessage>{props.children}</FormErrorMessage>
    )
}