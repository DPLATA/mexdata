import CustomLineChart from '../components/Charts/LineChart/CustomLineChart'
import lmb_stats from '../assets/top_25_at_bat_LMB.json'


function LMBStatsPage() {
    return (
        <>
            <section className="section">
                <h1 className="title column is-full"> Estadísticas de bateo MLB 2022 </h1>
            </section>
            <section className="section">
                <div className="container">
                    <div className="columns">
                        <CustomLineChart width={600} height={300} data={lmb_stats} name='home runs'
                                         xAxisDataKey='player' type='monotone' gridHexColor='#ccc' legendHeight={36}
                                         lineDataKey='HR' strokeHexColor='#8884d8'/>
                        <CustomLineChart width={600} height={300} data={lmb_stats} name='porcentaje de bateo'
                                         xAxisDataKey='player' type='monotone' gridHexColor='#ccc' legendHeight={36}
                                         lineDataKey='AVG' strokeHexColor='#8884d8'/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LMBStatsPage;