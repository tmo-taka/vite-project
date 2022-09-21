import React, { createContext, useState, useContext } from 'react';

type DataContext = {
    data: number
    setData: React.Dispatch<React.SetStateAction<number>>
}

const DataContext = createContext({} as DataContext);

type Children = {
    children: React.ReactNode
}

export function useDataContext() {
    return useContext(DataContext);
}

export function DataProvider({ children }:Children) {
    const [data, setData] = useState<number>(0);

    const value:DataContext = {
        data,
        setData,
    };

    return (
        <DataContext.Provider value={value}>{children}</DataContext.Provider>
    );
}