import {Amplify, Auth } from 'aws-amplify';
import { Button } from "@chakra-ui/react";
import { FC } from 'react';
import {authConfig} from '../aws-export'
import { useRecoilState } from "recoil";
import { loginTokenAtom } from '@Store/loginToken'

Amplify.configure({ Auth: authConfig })

type Member ={
    name: string,
    password: string
}

type Props = {
    readonly member: Member,
    children?: React.ReactNode
}


export const SignIn: FC<Props> = (props) =>{

    const [loginToken,setLoginToken] = useRecoilState(loginTokenAtom);

    const handleLoginClick = async () => {
        try {
            const cognitoUser = await Auth.signIn(props.member.name, props.member.password)
            setLoginToken(cognitoUser.userDataKey);
        } catch (error:any) {
            if ( error.code === 'UserNotFoundException') {
                console.log('cognitoに該当するユーザーIDがない')
            }
            if ( error.code === 'NotAuthorizedException') {
                console.log('cognitoに該当するユーザーIDはあるがパスワードが一致しない')
            }
            console.log('それ以外のエラー', error)
        }
    }

    return (
        <Button colorScheme='accent' onClick={handleLoginClick}>Sign In</Button>
    )
}