import { useEffect, useState } from "react";
import CryptoChart from "../../UI/CryptoChart";
import classes from "./Home.module.scss";
import { io } from "socket.io-client";
import config from "../../../../config/config";

export interface SymbolValue {
    value: number;
    date: string;
}

const Home = () => {
    const [symbolData, setSymbolData] = useState<{ [symbol: string]: SymbolValue[] }>({});

    
    useEffect(() => {
        const socket = io(`http://${config.socketServer.host}:${config.socketServer.port}`);
        
        socket.on("lastWeekValues", (updatedSymbolData) => {
            console.log("Updated last week values:", updatedSymbolData);
            setSymbolData(updatedSymbolData);
        });

        socket.emit("getTodayData");

        const dailyUpdateInterval = setInterval(() => {
            socket.emit("getTodayData");
        }, 24 * 60 * 60 * 1000);

        return () => {
            socket.disconnect();
            clearInterval(dailyUpdateInterval);
        };
    }, []);

    return (
        <div className={`page-container ${classes['home-page']}`}>
            {Object.keys(symbolData).map((symbol) => (
                <CryptoChart key={symbol} symbol={symbol} data={symbolData[symbol]} width={500} height={250} />
            ))}
        </div>
    );
}

export default Home;