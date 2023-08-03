
import React from "react";
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
import { RealTimeDataItem } from "../../store/real-time-data-context";
// import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';


// interface CustomLegendProps {
//   payload?: Array<{ value: any, dataKey: string }>;
// }

// const CustomLegend: React.FC<CustomLegendProps> = ({ payload }) => {
//   return (
//     <ul>
//       {payload?.map((entry, index) => (
//         <li key={`item-${index}`}>
//           {entry.dataKey === "value" && (
//             <span>
//               <CurrencyBitcoinIcon style={{ marginRight: "5px" }} />
//             </span>
//           )}
//           {entry.value}
//         </li>
//       ))}
//     </ul>
//   );
// };

interface CryptoChartProps {
  data: RealTimeDataItem[];
}

const CryptoChart: React.FC<CryptoChartProps> = ({ data }) => {
  return (
    <Card className={classes['crypto-chart-container']}>
      <LineChart width={500} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="dateTime" />
        <YAxis />
        <Tooltip />
        {/* <Legend content={<CustomLegend />} /> */}
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#6e4afc" />
      </LineChart>
    </Card>
  );
};

export default CryptoChart;
