import React from "react";
import { useDataContext } from '../context/dataContext';
import {ButtonIn} from '../components/buttonIn'

type Props ={
    type: 'small' | 'normal' | 'large',
    txt: string,
    onClick: () => void
    color?: string,
    children?: React.ReactNode
}

// React18からはFCからはchildrenの型定義が削除されたので定義する必要あり
export const Button: React.FC<Props> = (props) =>{

    const {data, setData} = useDataContext()

    // NOTE:contextの場合は親、子、孫すべてdataを使っている場合再描画されるので最適化必須
    console.log(`Button再描画`);

    return (
        <div>
            <button className={props.type} onClick={() => props.onClick()}>
                {props.txt} + {data}
            </button>
            <ButtonIn />
        </div>
    )
}