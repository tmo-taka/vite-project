import React, {useRef,useEffect} from "react";
import { css,cx } from '@emotion/css';

type Props ={
    txt: string,
    children?: React.ReactNode
}

// React18からはFCからはchildrenの型定義が削除されたので定義する必要あり
export const Text: React.FC<Props> = (props) =>{
    console.log('再描写')

    const wrapper = useRef<HTMLDivElement>(null)
    // NOTE:やっぱりDOM生成された後でないとuseRefがnull値なのでuseEffect噛ませる必要ありか...
    useEffect(() => {
        if(props.txt === 'これです'){
            wrapper.current?.classList.add('big')
        }
    },[])

    const styles = {
        container: css`
            width: 360px;
            display: flex;
            justify-content: space-between;
            &.big {
                transform: scale(1.5);
            }
        `,
        txt: css`
            font-size: 16px;
            font-weight: bold;
            @media (max-width: 600px){
                font-weight: normal;
            }
        `,
        red: css`
            color: red
        `,
        blue: css`
            color: blue
        `
    }

    return (
        <div ref={wrapper} className={styles.container}>
            <p className={cx(styles.txt, styles.red)}>これもテキスト</p>
            <p className={cx(styles.txt, styles.blue)}>{props.txt}</p>
        </div>
    )
}

export const MemoText = React.memo(Text);