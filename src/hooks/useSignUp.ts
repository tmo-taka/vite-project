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

    const errorTypes = [0,1,2,3,99] as const
    type ErrorType = typeof errorTypes[number];

    const [newMember,setNewMember] = useState<Member>({name:'',password:'',mail:''})
    const [newErrorMember,setNewErrorMember] = useState<Member>({name:'',password:'',mail:''})
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [confirmNumber, setConfirmNumber] = useState<string>('')
    const [errorNumber,setErrorNumber] = useState<ErrorType>(0)
    const [stateSignUp, setStateSignUp] = useRecoilState(stateSignUpAtom)

    const inputForm = (key: keyof Member, event: {target: HTMLInputElement}):void =>{
        const obj:Member = {...newMember};
        obj[key] = event.target.value;
        setNewMember(obj)
    }

    const setError = (key: keyof Member, message:string):void =>{
        const obj:Member = {...newErrorMember};
        obj[key] = message;
        setNewErrorMember(obj);
    }

    const initialObjError = ():void => {
        const emptyObj:Member = {name:'',password:'',mail:''}
        const obj:Member = {...newErrorMember, ...emptyObj};
        setNewErrorMember(obj);
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
            // initialObjError();
            const cognitoUser = await Auth.signUp(newMember.name, newMember.password,newMember.mail)
            setStateSignUp('step2')
            console.log('認証に成功', cognitoUser)
        } catch (error:any) {
            initialObjError();
            if ( error.code === 'UsernameExistsException') {
                setError('name','nameが他ユーザーとかぶっています。')
            }
            else if ( error.code === 'InvalidPasswordException') {
                setError('password','パスワードに大文字小文字を使用してください。')
            }
            else if ( error.code === 'InvalidParameterException') {
                setError('password','パスワードは8文字以上にしてください。')
            }else [
                console.log(error)
            ]
        }finally {
            setIsLoading(false)
        }
    }

    const submitAgain = async () => {
        try {
            await Auth.resendSignUp(newMember.name)
        }catch (error:any) {
            console.log(error);
        }
    }

    const confirmEmail = async () => {
        setIsLoading(true)
        try {
            setErrorNumber(0);
            const cognitoNumber = await Auth.confirmSignUp(newMember.name,confirmNumber)
            setStateSignUp('step3')
            console.log('認証を作成')
        }catch (error:any) {
            if(error.code === 'CodeMismatchException'){
                setErrorNumber(1);
            }else if(error.code) {
                console.log(error.code === 'ExpiredCodeException');
                setErrorNumber(2)
            }else if(error.code) {
                console.log(error.code === 'NotAuthorizedException');
                setErrorNumber(3)
            }else {
                console.log(error.code);
                setErrorNumber(99)
            }
        }finally {
            setIsLoading(false)
        }
    }

    return { newMember, newErrorMember, isLoading,confirmNumber,errorNumber, inputForm, inputConfirmForm, activeJudge ,submitAuthCode, submitAgain, confirmEmail}
}