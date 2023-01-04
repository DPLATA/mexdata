import CustomLineChart from '../components/Charts/LineChart/CustomLineChart'
import { useState, useEffect } from "react"


function LMBStatsPage() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                let response = await fetch('https://mexdata-api.onrender.com/lmb/players_hitting')
                let actualData = await response.json()
                // console.log(actualData.data)
                setData(actualData.data)
                setError(null)
            }catch (error){
                // console.log(error.message)
                setError(error.message)
                setData(null)
            }finally{
                setLoading(false)
            }
        }
        getData()
        console.log(data)
    }, [data])

    return (
        <>
            <section className="section">
                <h1 className="title column is-full"> Estadísticas de bateo MLB 2022 </h1>
            </section>
            <section className="section">
                <div className="container">
                    <div className="columns is-multiline">
                        <CustomLineChart width={600} height={300} data={data} name='home runs'
                                         xAxisDataKey='player' type='monotone' gridHexColor='#ccc' legendHeight={36}
                                         lineDataKey='HR' strokeHexColor='#8884d8'/>
                        <CustomLineChart width={600} height={300} data={data} name='porcentaje de bateo'
                                         xAxisDataKey='player' type='monotone' gridHexColor='#ccc' legendHeight={36}
                                         lineDataKey='AVG' strokeHexColor='#8884d8'/>
                        <CustomLineChart width={600} height={300} data={data} name='carreras impulsadas'
                                         xAxisDataKey='player' type='monotone' gridHexColor='#ccc' legendHeight={36}
                                         lineDataKey='RBI' strokeHexColor='#8884d8'/>
                        <CustomLineChart width={600} height={300} data={data} name='carreras'
                                         xAxisDataKey='player' type='monotone' gridHexColor='#ccc' legendHeight={36}
                                         lineDataKey='R' strokeHexColor='#658354'/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LMBStatsPage;