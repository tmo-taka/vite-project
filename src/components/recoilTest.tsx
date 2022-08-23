import React from "react";
import { useRecoilState } from "recoil"
import { valAtom } from "../atoms/valAtom"
import { RecoilTestIn } from '../components/recoilTestIn'

// React18からはFCからはchildrenの型定義が削除されたので定義する必要あり
export const RecoilTest: React.FC = () =>{
    const [val,setVal] = useRecoilState(valAtom)

    console.log(`RecoilTest(recoil)が再描画された`)
    return (
        <div>
            <p>recoilの値:{val}</p>
            <RecoilTestIn />
        </div>
    )
}