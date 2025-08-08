import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function TimeBarChart({data}) {
  return (
    <BarChart width={1200} height={500} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#8884d8" />
    </BarChart>
  );
}

export default TimeBarChart;
