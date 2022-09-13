import React,{useState} from "react";
import useSWR from "swr"
import { css } from '@emotion/css';

// React18からはFCからはchildrenの型定義が削除されたので定義する必要あり
export const FetchState: React.FC = () =>{

    // mountをしていないのフックをぶち込むとエラーになるよ
    console.log('永遠と再レンタリング')
    const [test,setTest] = useState<API | null>(null)
    if(test === null) {
        throw fetcher().then(setTest);
    }else {
        return (<div>データ取得</div>)
    }
}

type Obj = {
    date: string,
    dateLabel: string,
    telop: string
}

type API = {
    forecasts: Obj[]
}

const sleep = (sec:number) => new Promise(resolve => setTimeout(resolve, sec * 1000));

const fetcher = async ():Promise<API> => {
    await sleep(5);
    return fetch('/api/weather').then(res => res.json())
};


