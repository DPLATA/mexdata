import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

function CustomLineChart({width, height, data, type, name, lineDataKey, xAxisDataKey, strokeHexColor, gridHexColor, legendHeight}) {
  return (
    <div className="column">
        <div className="card">
        <div className="card-content">
        <LineChart width={width} height={height} data={data}>
            <Line type={type}
                  name={name}
                  dataKey={lineDataKey}
                  stroke={strokeHexColor} />
            <CartesianGrid stroke={gridHexColor} />
            <XAxis dataKey={xAxisDataKey} />
            <YAxis />
            <Tooltip />
            <Legend verticalAlign="top" height={legendHeight}/>
        </LineChart>
        </div>
        </div>
    </div>
  )
}

export default CustomLineChart;