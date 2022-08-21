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

    return (
        <div>
            <button className={props.type} onClick={() => props.onClick()}>
                {props.txt} + {data}
            </button>
            <ButtonIn />
        </div>
    )
}