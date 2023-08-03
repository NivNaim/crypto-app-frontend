import { useEffect } from "react";
import CryptoChart from "../../UI/CryptoChart";
import classes from "./Home.module.scss";
import { useRealTimeData } from "../../../store/real-time-data-context";

const Home = () => {
    const { realTimeData } = useRealTimeData();

    // const cryptoData: { date: string; value: number }[] = [
    //     { date: "2023-07-24", value: 1000 },
    //     { date: "2023-07-25", value: 1200 },
    //     { date: "2023-07-26", value: 800 },
    //     { date: "2023-07-27", value: 1500 },
    //     { date: "2023-07-28", value: 1300 },
    //     { date: "2023-07-29", value: 1800 },
    //     { date: "2023-07-30", value: 2000 },
    // ];

    useEffect(() => {
        console.log("Real-time data:", realTimeData);
    }, [realTimeData]);

    return (
        <div className={`page-container ${classes['home-page']}`}>
            <CryptoChart data={realTimeData} />
            <CryptoChart data={realTimeData} />
            <CryptoChart data={realTimeData} />
            <CryptoChart data={realTimeData} />
        </div>
    );
}

export default Home;
