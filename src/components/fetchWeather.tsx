import React from "react";
import { useWeather } from '@Hooks/useWeather'

type Obj = {
    date: string,
    dateLabel: string,
    telop: string
}

type API = {
    forecasts: Obj[]
}

const fetchWeather = async():Promise<API> => {
    await sleep(5);
    return fetch('/api/weather').then(res => res.json())
}

const sleep = (sec:number) => new Promise(resolve => setTimeout(resolve, sec * 1000));

// React18からはFCからはchildrenの型定義が削除されたので定義する必要あり
export const FetchWeather: React.FC = () =>{
    const data = useWeather('weather2',fetchWeather);
    console.log(data)
    return (
        <div>
            {data.forecasts.map((i) => <div key={i.telop}>{i.date}</div>)}
            <div>Data is</div>
        </div>
    )
}

