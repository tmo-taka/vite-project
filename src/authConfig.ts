export const authConfig =({
    region: 'ap-northeast-1',
    userPoolId: import.meta.env.VITE_USER_POOL_ID,
    userPoolWebClientId: import.meta.env.VITE_USER_POOL_WEB_CLIENT_ID,
    aws_appsync_graphqlEndpoint: import.meta.env.VITE_ENDPOINT,
    aws_appsync_apiKey: import.meta.env.VITE_API_KEY
})