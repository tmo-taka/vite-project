import React from "react";
import { useRecoilValue } from "recoil"
import { valAtom } from "../store/valAtom"
import { RecoilTestIn } from '../components/recoilTestIn'

// React18からはFCからはchildrenの型定義が削除されたので定義する必要あり
export const RecoilTest: React.FC = () =>{
    const val = useRecoilValue(valAtom)

    return (
        <div>
            <p>recoilの値:{val}</p>
            <RecoilTestIn />
        </div>
    )
}