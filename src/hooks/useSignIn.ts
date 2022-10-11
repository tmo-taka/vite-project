import { useState } from 'react'
import {Amplify, Auth } from 'aws-amplify';
import {authConfig} from '../aws-export'
import { useRecoilState } from "recoil";
import { loginTokenAtom } from '@Store/loginToken'
import { memberAtom } from '@Store/member';

Amplify.configure({ Auth: authConfig })

export const useSignIn = () => {

    type Member ={
        name: string,
        password: string,
    }

    const [member,setMember] = useRecoilState(memberAtom)
    const [show,setShow] = useState<Boolean>(false);
    const [loginToken,setLoginToken] = useRecoilState(loginTokenAtom);


    const inputForm = (key: keyof Member, event: {target: HTMLInputElement}):void =>{
        const obj:Member = {...member};
        obj[key] = event.target.value;
        setMember(obj)
        console.log(member);
    }

    const displayClick = () => setShow(!show);

    const confirmSignIn = async() => {
        try {
            const cognitoUser = await Auth.signIn(member.name, member.password)
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

    return { member, show, inputForm, displayClick, confirmSignIn}
}