import React, { FC } from "react";

type Props ={
    type: small | normal | large,
    txt: string,
    onClick: () => void
    color?: string,
    children?: React.ReactNode
}

// React18からはFCからはchildrenの型定義が削除されたので定義する必要あり
const Button: React.FC<Props> = (props) =>{

    return (
        <button className={props.type} onClick={() => props.onClick()}>
            {props.txt}
        </button>
    )
}

export default Button