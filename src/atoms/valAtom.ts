import {atom} from 'recoil'

type valAtom = {
    key: string,
    default: string
}

export const valAtom = atom(<valAtom>{
    key: 'valAtom',
    default: 'あ'
})