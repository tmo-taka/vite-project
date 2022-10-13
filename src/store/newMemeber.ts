import {atom} from 'recoil'

type Member ={
    name: string,
    password: string,
    mail: string,
}

export const newMemberAtom = atom<Member>({
    key: "newMemberAtom",
    default: {
        name: '',
        password:'',
        mail: ''
    },
})

export const newErrorMemberAtom = atom<Member>({
    key: "newErrorMemberAtom",
    default: {
        name: '',
        password:'',
        mail: ''
    },
})