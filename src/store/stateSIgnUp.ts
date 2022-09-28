import {atom} from 'recoil'

type step = 'step1' | 'step2' | 'step3'

export const stateSignUpAtom = atom<step>({
    key: "stateSIgnUpAtom",
    default: 'step1',
})




