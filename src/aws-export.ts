export const authConfig =({
    region: 'ap-northeast-1',
    userPoolId: import.meta.env.VITE_USER_POOL_ID,
    userPoolWebClientId: import.meta.env.VITE_USER_POOL_WEB_CLIENT_ID,
})

export const apiConfig =({
    aws_appsync_region: 'ap-northeast-1',
    aws_appsync_graphqlEndpoint: import.meta.env.VITE_ENDPOINT,
    aws_appsync_authenticationType: "API_KEY",
    aws_appsync_apiKey: import.meta.env.VITE_API_KEY,
})