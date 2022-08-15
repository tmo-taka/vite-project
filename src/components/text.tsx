import React from "react";

type Props ={
    txt: string,
    children?: React.ReactNode
}

// React18からはFCからはchildrenの型定義が削除されたので定義する必要あり
export const Text: React.FC<Props> = (props) =>{
    console.log('再描写')

    return (
        <div>
            {props.txt}
        </div>
    )
}

export const MemoText = React.memo(Text);