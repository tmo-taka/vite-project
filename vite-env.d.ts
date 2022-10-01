/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_USER_POOL_ID: string
    readonly VITE_USER_POOL_WEB_CLIENT_ID: string
    readonly VITE_API_URL: string
    readonly VITE_API_KEY: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
