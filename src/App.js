import './App.css'
import MapInfo from './pages/MapInfo'
import Home from './pages/Home'
import LMBStatsPage from './pages/LMBStatsPage'
import PoliticalMap from './pages/PoliticalMap'
import { Route, Routes } from 'react-router-dom'
import AdsPage from './pages/AdsPage'
import 'bulma/css/bulma.css'
import Layout from './components/Layout'

function App() {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/:subject" element={<Home />} />
				<Route path="/map" element={<MapInfo />} />
				<Route path="/political_map" element={<PoliticalMap />} />
				<Route path="/lmbstats" element={<LMBStatsPage />} />
				<Route path="/ads" element={<AdsPage />} />
			</Routes>
		</Layout>
	)
}

export default App
