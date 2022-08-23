import React from "react";
import { useRecoilState } from "recoil"
import { valAtom } from "../atoms/valAtom"

// React18からはFCからはchildrenの型定義が削除されたので定義する必要あり
export const RecoilTestInIn: React.FC = () =>{
    const [val,setVal] = useRecoilState(valAtom)

    const addText = ():void => {
        setVal((text:string):string => text + 'あ')
    }

    return (
        <div>
            <button onClick={() => addText()}>recoilの値変更</button>
        </div>
    )
}