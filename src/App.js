import './App.css'
import MapInfo from './pages/MapInfo'
import Home from './pages/Home'
import LMBStatsPage from './pages/LMBStatsPage'
import PoliticalMap from "./pages/PoliticalMap";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AdsPage from "./pages/AdsPage";
import 'bulma/css/bulma.css'

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/map' element={<MapInfo />} />
                <Route path='/political_map' element={<PoliticalMap />} />
                <Route path='/lmbstats' element={<LMBStatsPage />} />
                <Route path='/ads' element={<AdsPage />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
