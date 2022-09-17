import React from 'react';
import {Loadable} from '@Components/loadable'

export const DataLoader: React.FC<{
    data: Loadable<string>;
}> = ({data}) => {
    const value = data.getOrThrow();

    return (
        <div>
            <div>{value}</div>
        </div>
    )
}