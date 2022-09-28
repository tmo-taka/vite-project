import {useState} from 'react'
import { useRecoilState } from "recoil";
import {Amplify, Auth } from 'aws-amplify';
import {authConfig} from '../authConfig';
import { stateSignUpAtom } from '@Store/stateSIgnUp'

Amplify.configure({ Auth: authConfig })

export const useSignUp = () => {

    type Member ={
        name: string,
        password: string,
        mail: string,
    }

    const [newMember,setNewMember] = useState<Member>({name:'',password:'',mail:''})
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [confirmNumber, setConfirmNumber] = useState<string>('')
    const [stateSignUp, setStateSignUp] = useRecoilState(stateSignUpAtom)

    const inputForm = (key: keyof Member, event: {target: HTMLInputElement}):void =>{
        const obj:Member = {...newMember};
        obj[key] = event.target.value;
        setNewMember(obj)
    }

    const inputConfirmForm = (event: {target: HTMLInputElement}):void => {
        const value = event.target.value;
        setConfirmNumber(value)
    }

    const nullCheck = (obj:Member):boolean => {
        const keys:string[] = Object.keys(obj);
        return keys.every((key) => key in obj ? obj[key]: false)
    }

    const activeJudge = ():boolean => {
        if(newMember.password.length > 7 && nullCheck(newMember)){
            return false
        }else {
            return true
        }
    }

    const submitAuthCode = async () => {
        setIsLoading(true)
        try {
            const cognitoUser = await Auth.signUp(newMember.name, newMember.password,newMember.mail)
            setStateSignUp('step2')
            console.log('認証に成功', cognitoUser)
        } catch (error:any) {
            if ( error.code === 'UserNotFoundException') {
                console.log('cognitoに該当するユーザーIDがない')
            }
            if ( error.code === 'NotAuthorizedException') {
                console.log('cognitoに該当するユーザーIDはあるがパスワードが一致しない')
            }
            console.log('それ以外のエラー', error)
        }finally {
            setIsLoading(false)
        }
    }

    const confirmEmail = async () => {
        setIsLoading(true)
        try {
            const cognitoNumber = await Auth.confirmSignUp(newMember.name,confirmNumber)
            setStateSignUp('step3')
            console.log('認証を作成')
        }catch (error:any) {
            console.log(error);
        }finally {
            setIsLoading(false)
        }
    }

    return { newMember, isLoading,confirmNumber, inputForm, inputConfirmForm, activeJudge ,submitAuthCode, confirmEmail}
}