import React, { useState, useEffect } from 'react'
import CustomLineChart from '../components/Charts/LineChart/CustomLineChart'
import {
	pitchingStatsMapping,
	battingStatsMapping
} from '../utils/stats_glossary_mappings'
import { FcBullish, FcBearish } from 'react-icons/fc'
import { TbMathAvg } from 'react-icons/tb'
import lmb from '../assets/imgs/lmb.svg'

function LMBStatsPage() {
	let [battingStat, setBattingStat] = useState('AB')
	let [pitchingStat, setPitchingStat] = useState('ERA')
	let [showBatting, setShowBatting] = useState(true)

	let [maxBatting, setMaxBatting] = useState({
		team: '',
		league: '',
		G: 0,
		AB: 0,
		R: 0,
		H: 0,
		'2B': 0,
		'3B': 0,
		HR: 0,
		RBI: 0,
		BB: 0,
		SO: 0,
		SB: 0,
		CS: 0,
		AVG: 0,
		OBP: 0,
		SLG: 0,
		OPS: 0
	})
	let [minBatting, setMinBatting] = useState({
		team: '',
		league: '',
		G: 10000000,
		AB: 10000000,
		R: 10000000,
		H: 10000000,
		'2B': 10000000,
		'3B': 10000000,
		HR: 10000000,
		RBI: 10000000,
		BB: 10000000,
		SO: 10000000,
		SB: 10000000,
		CS: 10000000,
		AVG: 10000000,
		OBP: 10000000,
		SLG: 10000000,
		OPS: 10000000
	})
	let [avgBatting, setAvgBatting] = useState(0)

	let [maxPitching, setMaxPitching] = useState({
		id: '',
		team: '',
		league: '',
		W: 0,
		L: 0,
		ERA: 0,
		G: 0,
		GS: 0,
		CG: 0,
		SHO: 0,
		SV: 0,
		SVO: 0,
		IP: 0,
		H: 0,
		R: 0,
		ER: 0,
		HR: 0,
		HB: 0,
		BB: 0,
		SO: 0,
		WHIP: 0,
		AVG: 0
	})
	let [minPitching, setMinPitching] = useState({
		id: '',
		team: '',
		league: '',
		W: 1000000,
		L: 1000000,
		ERA: 1000000,
		G: 1000000,
		GS: 1000000,
		CG: 1000000,
		SHO: 1000000,
		SV: 1000000,
		SVO: 1000000,
		IP: 1000000,
		H: 1000000,
		R: 1000000,
		ER: 1000000,
		HR: 1000000,
		HB: 1000000,
		BB: 1000000,
		SO: 1000000,
		WHIP: 1000000,
		AVG: 1000000
	})
	let [avgPitching, setAvgPitching] = useState(0)

	let [hittingData, setHittingData] = useState(null)
	let [pitchingData, setPitchingData] = useState(null)
	let [loading, setLoading] = useState(true)

	//sacar getData y envolverlo en usecallback

	useEffect(() => {
		const getData = async () => {
			try {
				let response = await fetch(
					`${process.env.REACT_APP_BASE_URL}/lmb/teams_hitting`
				)
				let actualData = await response.json()
				setHittingData(actualData.data)

				let response2 = await fetch(
					`${process.env.REACT_APP_BASE_URL}/lmb/teams_pitching`
				)
				let actualData2 = await response2.json()
				setPitchingData(actualData2.data)

				let topBattingObj = getBattingTopX(actualData.data, battingStat)
				setMaxBatting(topBattingObj)

				let bottomBattingObj = getBattingBottomX(actualData.data, battingStat)
				setMinBatting(bottomBattingObj)

				let averageBattingValue = getBattingAverageX(
					actualData.data,
					battingStat
				)
				setAvgBatting(averageBattingValue)

				let topPitchingObj = getPitchingTopX(actualData2.data, pitchingStat)
				setMaxPitching(topPitchingObj)

				let bottomPitchingObj = getPitchingBottomX(
					actualData2.data,
					pitchingStat
				)
				setMinPitching(bottomPitchingObj)

				let averagePitchingValue = getPitchingAverageX(
					actualData2.data,
					pitchingStat
				)
				setAvgPitching(averagePitchingValue)
			} catch (error) {
				setHittingData(null)
				setPitchingData(null)
				console.log(error.message)
			} finally {
				setLoading(false)
			}
		}
		getData()
	}, [battingStat, pitchingStat])

	const getBattingTopX = (arr, prop) => {
		let top = {
			team: '',
			league: '',
			G: 0,
			AB: 0,
			R: 0,
			H: 0,
			'2B': 0,
			'3B': 0,
			HR: 0,
			RBI: 0,
			BB: 0,
			SO: 0,
			SB: 0,
			CS: 0,
			AVG: 0,
			OBP: 0,
			SLG: 0,
			OPS: 0
		}
		arr.forEach((element) => {
			if (element[prop] > top[prop]) {
				top = element
			}
		})
		return top
	}

	const getBattingAverageX = (arr, prop) => {
		let total = 0
		arr.forEach((element) => {
			total += element[prop]
		})
		return total / arr.length
	}

	const getBattingBottomX = (arr, prop) => {
		let bottomObj = {
			team: '',
			league: '',
			G: 10000000,
			AB: 10000000,
			R: 10000000,
			H: 10000000,
			'2B': 10000000,
			'3B': 10000000,
			HR: 10000000,
			RBI: 10000000,
			BB: 10000000,
			SO: 10000000,
			SB: 10000000,
			CS: 10000000,
			AVG: 10000000,
			OBP: 10000000,
			SLG: 10000000,
			OPS: 10000000
		}
		arr.forEach((element) => {
			if (bottomObj[prop] > element[prop]) {
				bottomObj = element
			}
		})
		return bottomObj
	}

	const getPitchingTopX = (arr, prop) => {
		let top = {
			id: '',
			team: '',
			league: '',
			W: 0,
			L: 0,
			ERA: 0,
			G: 0,
			GS: 0,
			CG: 0,
			SHO: 0,
			SV: 0,
			SVO: 0,
			IP: 0,
			H: 0,
			R: 0,
			ER: 0,
			HR: 0,
			HB: 0,
			BB: 0,
			SO: 0,
			WHIP: 0,
			AVG: 0
		}
		arr.forEach((element) => {
			if (element[prop] > top[prop]) {
				top = element
			}
		})
		return top
	}

	const getPitchingAverageX = (arr, prop) => {
		let total = 0
		arr.forEach((element) => {
			total += element[prop]
		})
		return total / arr.length
	}

	const getPitchingBottomX = (arr, prop) => {
		let bottomObj = {
			id: '',
			team: '',
			league: '',
			W: 1000000,
			L: 1000000,
			ERA: 1000000,
			G: 1000000,
			GS: 1000000,
			CG: 1000000,
			SHO: 1000000,
			SV: 1000000,
			SVO: 1000000,
			IP: 1000000,
			H: 1000000,
			R: 1000000,
			ER: 1000000,
			HR: 1000000,
			HB: 1000000,
			BB: 1000000,
			SO: 1000000,
			WHIP: 1000000,
			AVG: 1000000
		}
		arr.forEach((element) => {
			if (bottomObj[prop] > element[prop]) {
				bottomObj = element
			}
		})
		return bottomObj
	}

	const handleBattingStatChange = (e) => {
		setBattingStat(e.target.value)

		let topObj = getBattingTopX(hittingData, e.target.value)
		setMaxBatting(topObj)

		let bottom = getBattingBottomX(hittingData, e.target.value)
		setMinBatting(bottom)

		let average = getBattingAverageX(hittingData, e.target.value)
		setAvgBatting(average)

		console.log(battingStat)
	}

	const handlePitchingStatChange = (e) => {
		setPitchingStat(e.target.value)

		let topObj = getPitchingTopX(hittingData, e.target.value)
		setMaxPitching(topObj)

		let bottom = getPitchingBottomX(hittingData, e.target.value)
		setMinPitching(bottom)

		let average = getPitchingAverageX(hittingData, e.target.value)
		setAvgPitching(average)

		console.log(pitchingStat)
	}

	const handleChartChange = (e) => {
		showBatting ? setShowBatting(false) : setShowBatting(true)
	}

	return (
		<>
			<p className="button is-danger is-large" onClick={handleChartChange}>
				{showBatting ? 'pitcheo' : 'bateo'}
			</p>
			{(showBatting && (
				<>
					<section className="section">
						<h1 className="title column is-full">
							{' '}
							Estadísticas de bateo por equipo LMB 2022{' '}
						</h1>
						<div className="select is-rounded">
							<select
								defaultValue={battingStat}
								onChange={handleBattingStatChange}
							>
								<option defaultValue value="AB">
									AB
								</option>
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
												<div className="is-widget-icon">
													<p className="image is-32x32">
														<img alt="team avatar" src={lmb} />
													</p>
												</div>
											</div>
											<div className="level-item">
												<div className="is-widget-label">
													<p className="subtitle is-spaced">Máximo</p>
													<span className="title has-text-success-dark">
														{(loading && loading) || (
															<p>
																{' '}
																{maxBatting[battingStat]} {maxBatting.team}{' '}
															</p>
														)}
													</span>
												</div>
											</div>
											<div className="level-item has-widget-icon">
												<div className="is-widget-icon">
													<span className="icon has-text-primary is-large">
														<FcBullish className="is-size-1" />
													</span>{' '}
													{/*revisar si se cambian los iconos de maximo y minimo */}
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
												<div className="is-widget-label">
													<p className="subtitle is-spaced">Promedio</p>
													<span className="title has-text-info">
														{(loading && loading) ||
															Math.round((avgBatting + Number.EPSILON) * 100) /
																100}
													</span>
												</div>
											</div>
											<div className="level-item has-widget-icon">
												<div className="is-widget-icon">
													<span className="icon has-text-info is-large">
														<TbMathAvg className="is-size-1" />
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
												<div className="level-item">
													<div className="is-widget-icon">
														<p className="image is-32x32">
															<img alt="team avatar" src={lmb} />
														</p>
													</div>
												</div>
												<div className="is-widget-label">
													<p className="subtitle is-spaced">Mínimo</p>
													<span className="title has-text-danger-dark">
														{(loading && loading) || (
															<p>
																{' '}
																{minBatting[battingStat]} {minBatting.team}{' '}
															</p>
														)}
													</span>
												</div>
											</div>
											<div className="level-item has-widget-icon">
												<div className="is-widget-icon">
													<span className="icon has-text-danger-dark is-large">
														<FcBearish className="is-size-1" />
													</span>
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
							<CustomLineChart
								width={1200}
								height={600}
								data={hittingData}
								name={battingStatsMapping[battingStat]}
								xAxisDataKey="team"
								type="monotone"
								gridHexColor="#ccc"
								legendHeight={36}
								lineDataKey={battingStat}
								strokeHexColor="#658354"
							/>
							{/*
                     APLICAR LEYENDA DE QUE SIGNIFICA Y LA EXPLICACION DETALLADA DE CADA ESTADISTICA
                   */}
						</div>
					</section>
				</>
			)) || (
				<>
					{/*pitcheo*/}
					<section className="section">
						<h1 className="title column is-full">
							{' '}
							Estadísticas de pitcheo por equipo LMB 2022{' '}
						</h1>
						<div className="select is-rounded">
							<select
								defaultValue={pitchingStat}
								onChange={handlePitchingStatChange}
							>
								<option defaultValue value="ERA">
									ERA
								</option>
								{/*revisar animacion de la grafica*/}
								<option value="W">W</option>
								<option value="L">L</option>
								<option value="G">G</option>
								<option value="GS">GS</option>
								<option value="CG">CG</option>
								<option value="SHO">SHO</option>
								<option value="SV">SV</option>
								<option value="SVO">SVO</option>
								<option value="IP">IP</option>
								<option value="H">H</option>
								<option value="R">R</option>
								<option value="ER">ER</option>
								<option value="HR">HR</option>
								<option value="HB">HB</option>
								<option value="BB">BB</option>
								<option value="SO">SO</option>
								<option value="WHIP">WHIP</option>
								<option value="AVG">AVG</option>
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
												<div className="is-widget-icon">
													<p className="image is-32x32">
														<img alt="team avatar" src={lmb} />
													</p>
												</div>
											</div>
											<div className="level-item">
												<div className="is-widget-label">
													<p className="subtitle is-spaced">Máximo</p>
													<span className="title has-text-success-dark">
														{/*Revisar si poner los colores al reves rojo mas y verde menos en secccion de pitcheo*/}
														{(loading && loading) || (
															<p>
																{' '}
																{maxPitching[pitchingStat]} {maxPitching.team}{' '}
															</p>
														)}
													</span>
												</div>
											</div>
											<div className="level-item has-widget-icon">
												<div className="is-widget-icon">
													<span className="icon has-text-primary is-large">
														<FcBullish className="is-size-1" />
													</span>{' '}
													{/*revisar si se cambian los iconos de maximo y minimo */}
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
												<div className="is-widget-label">
													<p className="subtitle is-spaced">Promedio</p>
													<span className="title has-text-info">
														{(loading && loading) ||
															Math.round((avgPitching + Number.EPSILON) * 100) /
																100}
													</span>
												</div>
											</div>
											<div className="level-item has-widget-icon">
												<div className="is-widget-icon">
													<span className="icon has-text-info is-large">
														<TbMathAvg className="is-size-1" />
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
												<div className="is-widget-icon">
													<p className="image is-32x32">
														<img alt="team avatar" src={lmb} />
													</p>
												</div>
											</div>
											<div className="level-item">
												<div className="is-widget-label">
													<p className="subtitle is-spaced">Mínimo</p>
													<span className="title has-text-danger-dark">
														{(loading && loading) || (
															<p>
																{' '}
																{minPitching[pitchingStat]} {minPitching.team}{' '}
															</p>
														)}
													</span>
												</div>
											</div>
											<div className="level-item has-widget-icon">
												<div className="is-widget-icon">
													<span className="icon has-text-danger-dark is-large">
														<FcBearish className="is-size-1" />
													</span>
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
							<CustomLineChart
								width={1200}
								height={600}
								data={pitchingData}
								name={pitchingStatsMapping[pitchingStat]}
								xAxisDataKey="team"
								type="monotone"
								gridHexColor="#ccc"
								legendHeight={36}
								lineDataKey={pitchingStat}
								strokeHexColor="#658354"
							/>
							{/*
                     APLICAR LEYENDA DE QUE SIGNIFICA Y LA EXPLICACION DETALLADA DE CADA ESTADISTICA
                   */}
						</div>
					</section>
				</>
			)}
		</>
	)
}

export default LMBStatsPage
