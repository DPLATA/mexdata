import './App.css'
import MapInfo from './pages/MapInfo'
import Home from './pages/Home'
import LMBStatsPage from './pages/LMBStatsPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'bulma/css/bulma.css'

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/map' element={<MapInfo />} />
                <Route path='/lmbstats' element={<LMBStatsPage />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
