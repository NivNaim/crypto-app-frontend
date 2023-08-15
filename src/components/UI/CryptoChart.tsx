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
  width: number;
  height: number;
}

const CryptoChart: FC<CryptoChartProps> = (props) => {
  return (
    <Card className={classes['crypto-chart-container']}>
      <LineChart width={props.width} height={props.height} data={props.data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#6e4afc" name={props.symbol} />
      </LineChart>
    </Card>
  );
};

export default CryptoChart;
