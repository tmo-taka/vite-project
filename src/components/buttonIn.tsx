import React from "react";
import { useDataContext } from '@Context/dataContext';
import { css } from '@emotion/css';

// React18からはFCからはchildrenの型定義が削除されたので定義する必要あり
export const ButtonIn: React.FC = () =>{

    const {data, setData} = useDataContext()

    return (
        <div className={styles.container}>
            <a onClick={() => setData(data+1)} className={styles.link}>contextのリンク</a>
        </div>
    )
}

const styles = {
    container: css`
        margin-bottom: 48px;
        padding: 12px 34px;
        display: flex;
        justify-content: center;
    `,
    link: css`
        font-size: 30px;
        color: blue;
        &:hover {
            color: red;
        }
    `
}