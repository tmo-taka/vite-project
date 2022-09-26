import {Amplify, Auth } from 'aws-amplify';
import {authConfig} from '../authConfig';
import {useState} from 'react'

Amplify.configure({ Auth: authConfig })

type Member ={
    name: string,
    password: string
}

const [newMember,setNewMember] = useState<Member>({name:'',password:''})

const inputForm = (key: keyof Member, event: {target: HTMLInputElement}):void =>{
    const obj:Member = {...newMember};
    obj[key] = event.target.value;
    setNewMember(obj)
}

const submitAuthCode = async () => {
    try {
        const cognitoUser = await Auth.signUp(newMember.name, newMember.password,'t.tkorock221@gmail.com')
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

export {
    newMember,
    inputForm,
    submitAuthCode,
}