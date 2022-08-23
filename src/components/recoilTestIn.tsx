import React from "react";
import { RecoilTestInIn } from '@Components/recoilTestInIn'

// React18からはFCからはchildrenの型定義が削除されたので定義する必要あり
export const RecoilTestIn: React.FC = () =>{

    console.log(`RecoilTestIn(recoil)ここは描画されないはず`)
    return (
        <div>
            <RecoilTestInIn />
        </div>
    )
}