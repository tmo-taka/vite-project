
type Obj = {
    date: string,
    dateLabel: string,
    telop: string
}

type API = {
    forecasts: Obj[]
}

const dataMap: Map<string ,API> = new Map();

export const useWeather = (key: string, fetchWeather : () => Promise<API>): API =>{
    const cacheData:API | undefined = dataMap.get(key);
    if(cacheData === undefined) {
        throw fetchWeather().then((data) => dataMap.set(key,data));
    }

    return cacheData;
}