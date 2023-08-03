import { createContext, useContext } from "react";

export interface RealTimeDataItem {
    symbol: string;
    value: number;
    dateTime: string;
}

interface RealTimeDataContextProps {
    realTimeData: RealTimeDataItem[];
    setRealTimeData: React.Dispatch<React.SetStateAction<RealTimeDataItem[]>>;
}

const RealTimeDataContext = createContext<RealTimeDataContextProps>({
    realTimeData: [],
    setRealTimeData: () => { },
});

export const useRealTimeData = () => useContext(RealTimeDataContext);

export default RealTimeDataContext;
