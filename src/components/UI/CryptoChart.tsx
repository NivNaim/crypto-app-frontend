import { FC } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import Card from "./Card";
import classes from "./CryptoChart.module.scss";
import { SymbolValue } from "../Layout/Home/Home";


interface CryptoChartProps {
  symbol: string;
  data: SymbolValue[];
}

const CryptoChart: FC<CryptoChartProps> = ({ symbol, data }) => {
  return (
    <Card className={classes['crypto-chart-container']}>
      <h2>{symbol} Chart</h2>
      <LineChart width={500} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#6e4afc" />
      </LineChart>
    </Card>
  );
};

export default CryptoChart;
