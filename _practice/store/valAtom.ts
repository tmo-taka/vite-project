import {atom,selector} from 'recoil'

export const valAtom = atom<string>({
    key: 'valAtom',
    default: 'あ'
})

export const valSelector = selector({
    key: 'valSelector',
    get: ({get}):string => `こいつの名前は:` + get(valAtom),
    //getに対しての変更は受け付けていないっぽい
    set: ({set},newValue):void => set(valAtom, newValue)
})