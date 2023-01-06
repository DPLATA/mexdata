import CustomLineChart from '../components/Charts/LineChart/CustomLineChart'
import React, {useState, useEffect} from "react"


function LMBStatsPage() {

    let [max, setMax] = useState({
        "team": "",
        "league": "",
        "G": 0,
        "AB": 0,
        "R": 0,
        "H": 0,
        "2B": 0,
        "3B": 0,
        "HR": 0,
        "RBI": 0,
        "BB": 0,
        "SO": 0,
        "SB": 0,
        "CS": 0,
        "AVG": 0,
        "OBP": 0,
        "SLG": 0,
        "OPS": 0
    })
    let [min, setMin] = useState({
        "team": "",
        "league": "",
        "G": 10000000,
        "AB": 10000000,
        "R": 10000000,
        "H": 10000000,
        "2B": 10000000,
        "3B": 10000000,
        "HR": 10000000,
        "RBI": 10000000,
        "BB": 10000000,
        "SO": 10000000,
        "SB": 10000000,
        "CS": 10000000,
        "AVG": 10000000,
        "OBP": 10000000,
        "SLG": 10000000,
        "OPS": 10000000
    })
    let [avg, setAvg] = useState({
        "team": "",
        "league": "",
        "G": 10000000,
        "AB": 10000000,
        "R": 10000000,
        "H": 10000000,
        "2B": 10000000,
        "3B": 10000000,
        "HR": 10000000,
        "RBI": 10000000,
        "BB": 10000000,
        "SO": 10000000,
        "SB": 10000000,
        "CS": 10000000,
        "AVG": 10000000,
        "OBP": 10000000,
        "SLG": 10000000,
        "OPS": 10000000
    })
    let [data, setData] = useState(null);
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            try {
                let response = await fetch('https://mexdata-api.onrender.com/lmb/teams_hitting')
                let actualData = await response.json()
                setData(actualData.data)

                const getTopX = (arr, prop) => {
                    let top = {
                        "team": "",
                        "league": "",
                        "G": 0,
                        "AB": 0,
                        "R": 0,
                        "H": 0,
                        "2B": 0,
                        "3B": 0,
                        "HR": 0,
                        "RBI": 0,
                        "BB": 0,
                        "SO": 0,
                        "SB": 0,
                        "CS": 0,
                        "AVG": 0,
                        "OBP": 0,
                        "SLG": 0,
                        "OPS": 0
                    }
                    arr.forEach((element) => {
                        if (element[prop] > top[prop]) {
                            top = element
                        }
                    })
                    return top
                }

                let topObj = getTopX(actualData.data, 'AB')
                setMax(topObj)

                const getBottomX = (arr, prop) => {
                    let bottomObj = {
                        "team": "",
                        "league": "",
                        "G": 10000000,
                        "AB": 10000000,
                        "R": 10000000,
                        "H": 10000000,
                        "2B": 10000000,
                        "3B": 10000000,
                        "HR": 10000000,
                        "RBI": 10000000,
                        "BB": 10000000,
                        "SO": 10000000,
                        "SB": 10000000,
                        "CS": 10000000,
                        "AVG": 10000000,
                        "OBP": 10000000,
                        "SLG": 10000000,
                        "OPS": 10000000
                    }
                    arr.forEach((element) => {
                        if (bottomObj[prop] > element[prop]) {
                            bottomObj = element
                        }
                    })
                    return bottomObj
                }
                let bottom = getBottomX(actualData.data, 'AB')
                setMin(bottom)


                const getAverageX = (arr, prop) => {
                    let total = 0
                    arr.forEach((element) => {
                        total += element[prop]
                    })
                    return total / arr.length
                }
                let average = getAverageX(actualData.data, 'AB')
                setAvg(average)
            } catch (error) {
                setData(null)
                console.log(error.message)
            } finally {
                setLoading(false)
            }
        }
        getData()
    }, [])


    return (
        <>
            <section className="section">
                <h1 className="title column is-full"> Estadísticas de bateo por equipo MLB 2022 </h1>
            </section>
            <section className="section is-main-section">
                <div className="tile is-ancestor">
                    <div className="tile is-parent">
                        <div className="card tile is-child">
                            <div className="card-content">
                                <div className="level is-mobile">
                                    <div className="level-item">
                                        <div className="is-widget-label"><h3 className="subtitle is-spaced">
                                            Máximo
                                        </h3>
                                            <h1 className="title">
                                                {(loading && <p> loading </p>) || max.AB}
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="level-item has-widget-icon">
                                        <div className="is-widget-icon"><span
                                            className="icon has-text-primary is-large"><i
                                            className="mdi mdi-account-multiple mdi-48px"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tile is-parent">
                        <div className="card tile is-child">
                            <div className="card-content">
                                <div className="level is-mobile">
                                    <div className="level-item">
                                        <div className="is-widget-label"><h3 className="subtitle is-spaced">
                                            Promedio
                                        </h3>
                                            <h1 className="title">
                                                {(loading && <p> loading </p>) || Math.round(avg)}
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="level-item has-widget-icon">
                                        <div className="is-widget-icon"><span className="icon has-text-info is-large"><i
                                            className="mdi mdi-cart-outline mdi-48px"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tile is-parent">
                        <div className="card tile is-child">
                            <div className="card-content">
                                <div className="level is-mobile">
                                    <div className="level-item">
                                        <div className="is-widget-label"><h3 className="subtitle is-spaced">
                                            Mínimo
                                        </h3>
                                            <h1 className="title">
                                                {(loading && <p> loading </p>) || min.AB}
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="level-item has-widget-icon">
                                        <div className="is-widget-icon"><span
                                            className="icon has-text-success is-large"><i
                                            className="mdi mdi-finance mdi-48px"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <CustomLineChart width={1200} height={600} data={data} name='turnos al bat'
                                     xAxisDataKey='team' type='monotone' gridHexColor='#ccc' legendHeight={36}
                                     lineDataKey='AB' strokeHexColor='#658354'/>
                    {/*
                   (loading && <p>Loading</p>) ||
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
                   */}
                </div>
            </section>
        </>
    )
}

export default LMBStatsPage;