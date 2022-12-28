import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';


function LMBStats() {
    const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400},
        {name: 'Page B', uv: 800, pv: 1400, amt: 1400},
    {name: 'Page C', uv: 650, pv: 2400, amt: 2400}]
  return (
    <div className="">
        <LineChart width={600} height={300} data={data}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
        </LineChart>
    </div>
  )
}

export default LMBStats;