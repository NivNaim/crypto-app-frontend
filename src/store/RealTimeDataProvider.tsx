import React, { useState } from 'react'
import RealTimeDataContext, { RealTimeDataItem } from './real-time-data-context';

interface RealTimeDataProviderProps {
    children: React.ReactNode;
}

const RealTimeDataProvider: React.FC<RealTimeDataProviderProps> = ({ children }) => {
    const [realTimeData, setRealTimeData] = useState<RealTimeDataItem[]>([]);
    return (
        <RealTimeDataContext.Provider value={{ realTimeData, setRealTimeData }}>
            {children}
        </RealTimeDataContext.Provider>
    )
}

export default RealTimeDataProvider
