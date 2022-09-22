import {Amplify, Auth } from 'aws-amplify';
import { Button } from "@chakra-ui/react";
import { FC } from 'react';

export const authConfig =({
    region: 'ap-northeast-1',
    userPoolId: import.meta.env.VITE_USER_POOL_ID,
    userPoolWebClientId: import.meta.env.VITE_USER_POOL_WEB_CLIENT_ID,
})

Amplify.configure({ Auth: authConfig })

type Member ={
    name: string,
    password: string
}

type Props = {
    readonly member: Member,
    children?: React.ReactNode
}


export const Login: FC<Props> = (props) =>{

    const handleLoginClick = async () => {
        try {
            const cognitoUser = await Auth.signIn(props.member.name, props.member.password)
            console.log('認証に成功', cognitoUser)
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