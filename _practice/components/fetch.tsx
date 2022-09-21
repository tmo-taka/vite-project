import React from "react";
import useSWR from "swr"
import { css } from '@emotion/css';

// React18からはFCからはchildrenの型定義が削除されたので定義する必要あり
export const Fetch: React.FC = () =>{

    const { data, error } = useSWR('/api/weather', fetcher ,{ suspense: true })
    console.log(data,error)
    const lists = data ? data.forecasts.map((d) => <div key={d.date}>{d.telop}</div>): "";
    return (
        <div>{lists}</div>
    )
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


