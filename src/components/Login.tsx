import {Amplify, Auth } from 'aws-amplify';

export const authConfig =({
    region: 'ap-northeast-1',
    userPoolId: import.meta.env.VITE_USER_POOL_ID,
    userPoolWebClientId: import.meta.env.VITE_USER_POOL_WEB_CLIENT_ID,
})

Amplify.configure({ Auth: authConfig })

export const Login = () =>{

    const handleLoginClick = async () => {
        try {
            const cognitoUser = await Auth.signIn('ユーザーID', 'パスワード')
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
        <button type="button" onClick={handleLoginClick}>ログイン</button>
    )
}