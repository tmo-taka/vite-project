import {atom} from 'recoil'

type Member ={
    name: string,
    password: string,
}

export const memberAtom = atom<Member>({
    key: "memberAtom",

    default: {
        name: '',
        password:''
    },
})