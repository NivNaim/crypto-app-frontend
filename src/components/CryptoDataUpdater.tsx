import { useEffect } from "react";
import io from "socket.io-client";
import axios from "axios";

import { useRealTimeData } from "../store/real-time-data-context";
import config from "../../config/config";

const CryptoDataUpdater = () => {
    const { setRealTimeData } = useRealTimeData();

    useEffect(() => {
        const socket = io(
            `http://${config.socketClient.host}:${config.socketClient.port}`
        );

        const fetchCryptoRates = async (symbol: string) => {
            try {
                const response = await axios.get(
                    `https://min-api.cryptocompare.com/data/price?fsym=${symbol}&tsyms=${config.
                        cryptocompare.base_currency}&api_key=${config.cryptocompare.api_key}`
                );

                const currentDateTime = new Date().toISOString().replace("T", " ").slice(0, 19);

                socket.emit("message from client", {
                    symbol: symbol,
                    value: response.data.USD,
                    dateTime: currentDateTime
                });

                console.log(`saved ${response.data.USD} for ${symbol} in ${currentDateTime}`);

                setRealTimeData((prevData) => [
                    ...prevData,
                    { symbol: symbol, value: response.data.USD, dateTime: currentDateTime },
                ]);
            } catch (error) {
                console.log("Error fetching exchange rates:", error);
                throw error;
            }
        };

        const startLoop = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/get-symbols`);
                const symbols = response.data;
                console.log("Fetched symbols:", symbols);

                symbols.forEach((symbol: string) => {
                    fetchCryptoRates(symbol);
                });
            } catch (error) {
                console.log("Error fetching symbols:", error);
            }
        }

        // const fetchAndUpdateData = async () => {
        //     await startLoop();
        //     setTimeout(fetchAndUpdateData, config.socketClient.timeout);
        // };

        socket.on("connect", () => {
            console.log("Socket.IO connected");
            startLoop();
        });

        socket.on("disconnect", () => {
            console.log("Socket.IO disconnected");
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    return null;
}

export default CryptoDataUpdater;
