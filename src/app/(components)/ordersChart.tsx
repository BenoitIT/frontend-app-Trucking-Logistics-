import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const OrdersDistribution = ({
  data,
}: {
  data: { name: string; total: number }[];
}) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={20}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="total" fill="#333" background={{ fill: "white" }} />
      </BarChart>
    </ResponsiveContainer>
  );
};
export default OrdersDistribution;
