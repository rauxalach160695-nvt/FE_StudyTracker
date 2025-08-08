import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Area } from 'recharts';

function TimeLineChart({data}) {
  
  return (
    <div className="chart-content">
     <LineChart width={1200} height={500} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Area type="monotone" dataKey="uv" stroke="#0900bbff" fill="#8884d8" />
      <Line
        type="monotone"
        dataKey="value"
        stroke="#8884d8"
        fill="#8884d8"
        strokeWidth={2}
        dot={false}
        fillOpacity={0.3} // Điều chỉnh độ đậm phần tô
      />
    </LineChart>
    </div>
  );
}
export default TimeLineChart;