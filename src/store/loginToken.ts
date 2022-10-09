import {atom} from 'recoil'

export const loginTokenAtom = atom<string | undefined>({
    key: "loginTokenAtom",
    default: undefined,
})




