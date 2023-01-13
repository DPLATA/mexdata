import CustomLineChart from '../components/Charts/LineChart/CustomLineChart'
import React, {useState, useEffect} from "react"
import {statsMapping} from "../utils/stats_glossary_mappings"
import { FcBullish, FcBearish } from "react-icons/fc"
import { TbMathAvg } from "react-icons/tb";
import Navigation from "../components/Navigation";

function LMBStatsPage() {

    let [addrtype, setAddrType] = useState('AB')

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

    //sacar getData y envolverlo en usecallback


    useEffect(() => {
        const getData = async () => {
            try {
                let response = await fetch('https://mexdata-api.onrender.com/lmb/teams_hitting')
                let actualData = await response.json()
                setData(actualData.data)



                let topObj = getTopX(actualData.data, addrtype)
                setMax(topObj)


                let bottom = getBottomX(actualData.data, addrtype)
                setMin(bottom)



                let average = getAverageX(actualData.data, addrtype)
                setAvg(average)
            } catch (error) {
                setData(null)
                console.log(error.message)
            } finally {
                setLoading(false)
            }
        }
        getData()
    }, [addrtype])

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

                const getAverageX = (arr, prop) => {
                    let total = 0
                    arr.forEach((element) => {
                        total += element[prop]
                    })
                    return total / arr.length
                }

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


    const handleAddrTypeChange = (e) => {
        setAddrType(e.target.value);

       let topObj = getTopX(data, e.target.value)
        setMax(topObj)

        let bottom = getBottomX(data, e.target.value)
                setMin(bottom)



                let average = getAverageX(data, e.target.value)
                setAvg(average)

        console.log(addrtype)
    }

    return (
        <>
            <Navigation/>
            <section className="section">
                <h1 className="title column is-full"> Estadísticas de bateo por equipo LMB 2022 </h1>
                <div className="select is-rounded">
                    <select defaultValue={addrtype} onChange={handleAddrTypeChange}>
                        <option defaultValue value="AB">AB</option>
                        {/*revisar animacion de la grafica*/}
                        <option value="R">R</option>
                        <option value="H">H</option>
                        <option value="2B">2B</option>
                        <option value="3B">3B</option>
                        <option value="HR">HR</option>
                        <option value="RBI">RBI</option>
                        <option value="BB">BB</option>
                        <option value="SO">SO</option>
                        <option value="SB">SB</option>
                        <option value="CS">CS</option>
                        <option value="AVG">AVG</option>
                        <option value="OBP">OBP</option>
                        <option value="SLG">SLG</option>
                        <option value="OPS">OPS</option>
                    </select>
                </div>
            </section>
            <section className="section is-main-section">
                <div className="tile is-ancestor">
                    <div className="tile is-parent">
                        <div className="card tile is-child">
                            <div className="card-content">
                                <div className="level is-mobile">
                                    <div className="level-item">
                                        <div className="is-widget-label"><p className="subtitle is-spaced">
                                            Máximo
                                        </p>
                                            <span className="title has-text-success-dark">
                                                {(loading && loading) ||  <p> {max[addrtype]} {max.team} </p>}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="level-item has-widget-icon">
                                        <div className="is-widget-icon"><span
                                            className="icon has-text-primary is-large">
                                            <FcBullish className="is-size-1"/></span> {/*revisar si se cambian los iconos de maximo y minimo */}
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
                                        <div className="is-widget-label"><p className="subtitle is-spaced">
                                            Promedio
                                        </p>
                                            <span className="title has-text-info">
                                                {(loading && loading) || Math.round((avg + Number.EPSILON) * 100) / 100}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="level-item has-widget-icon">
                                        <div className="is-widget-icon"><span className="icon has-text-info is-large">
                                            <TbMathAvg className="is-size-1"/>
                                        </span>
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
                                        <div className="is-widget-label"><p className="subtitle is-spaced">
                                            Mínimo
                                        </p>
                                            <span className="title has-text-danger-dark">
                                                {(loading && loading) || <p> {min[addrtype]} {min.team} </p>}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="level-item has-widget-icon">
                                        <div className="is-widget-icon"><span
                                            className="icon has-text-danger-dark is-large">
                                            <FcBearish className="is-size-1"/></span>
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
                    <CustomLineChart width={1200} height={600} data={data} name={statsMapping[addrtype]}
                                     xAxisDataKey='team' type='monotone' gridHexColor='#ccc' legendHeight={36}
                                     lineDataKey={addrtype} strokeHexColor='#658354'/>
                    {/*
                   (loading && <p>Loading</p>) ||
                    <div className="columns is-multiline">
                        <CustomLineChart width={600} height={300} data={data} name='home runs'
                                         xAxisDataKey='player' type='monotone' gridHexColor='#ccc' legendHeight={36}
                                         lineDataKey='HR' strokeHexColor='#8884d8'/>
                     APLICAR LEYENDA DE QUE SIGNIFICA Y LA EXPLICACION DETALLADA DE CADA ESTADISTICA
                    </div>
                   */}
                </div>
            </section>
        </>
    )
}

export default LMBStatsPage;