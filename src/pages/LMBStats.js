import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import lmb_stats from '../assets/top_25_at_bat_LMB.json'

function LMBStats() {
  return (
    <div className="">
        <LineChart width={600} height={300} data={lmb_stats}>
            <Line type="monotone"
                  dataKey="HR"
                  stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="player" />
            <YAxis />
            <Tooltip />
        </LineChart>
        <LineChart width={600} height={300} data={lmb_stats}>
            <Line type="monotone"
                  dataKey="AVG"
                  stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="player" />
            <YAxis />
            <Tooltip />
        </LineChart>
    </div>
  )
}

export default LMBStats;