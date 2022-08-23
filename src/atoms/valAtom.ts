import {atom} from 'recoil'

export const valAtom = atom<string>({
    key: 'valAtom',
    default: 'あ'
})