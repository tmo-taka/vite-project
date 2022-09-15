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

const fetchWeather = ():Promise<API> => {
    return fetch('/api/weather').then(res => res.json())
}

// React18からはFCからはchildrenの型定義が削除されたので定義する必要あり
export const FetchWeather2: React.FC = () =>{
    const data = useWeather('weather1',fetchWeather);
    console.log(data)
    return (
        <div>
            {data.forecasts.map((i) => <div key={i.telop}>{i.date}</div>)}
            <div>Data is</div>
        </div>
    )
}

