import React from "react";
import { useSetRecoilState, useRecoilState } from "recoil"
import { valAtom, valSelector } from "../store/valAtom"

// React18からはFCからはchildrenの型定義が削除されたので定義する必要あり
export const RecoilTestInIn: React.FC = React.memo(() =>{
    console.log(`ここがRecoilで描画されないのか`)
    // こちらしかない場合はsetの値が変動するので再描画されない
    // const setVal = useSetRecoilState(valAtom)

    const [val,setVal] = useRecoilState(valAtom)
    const [getVal,setGetVal] = useRecoilState(valSelector)

    // addTextがこれの場合は再描画されない
    const addText = ():void => {
        setVal((text:string):string => text + 'あ')
    }

    return (
        <div>
            <p>{getVal}</p>
            <button onClick ={() => setGetVal(val + 'い')}>recoilをsetで変更</button>
            <button onClick={() => addText()}>recoilの値変更</button>
        </div>
    )
})