import React from "react";
import { useDataContext } from '../context/dataContext';

// React18からはFCからはchildrenの型定義が削除されたので定義する必要あり
export const ButtonIn: React.FC = () =>{

    const {data, setData} = useDataContext()

    return (
        <div>
            <a onClick={() => setData(data+1)}>contextのリンク</a>
        </div>
    )
}