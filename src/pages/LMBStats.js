import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import lmb_stats from '../assets/top_25_at_bat_LMB.json'

function LMBStats() {
  return (
    <div className="">
        {/*refactor chart into own components*/}
        <LineChart width={600} height={300} data={lmb_stats}>
            <Line type="monotone"
                  name="home runs"
                  dataKey="HR"
                  stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="player" />
            <YAxis />
            <Tooltip />
            <Legend verticalAlign="top" height={36}/>
        </LineChart>
        <LineChart width={600} height={300} data={lmb_stats}>
            <Line type="monotone"
                  name="batting average"
                  dataKey="AVG"
                  stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="player" />
            <YAxis />
            <Tooltip />
            <Legend verticalAlign="top" height={36}/>
        </LineChart>
    </div>
  )
}

export default LMBStats;