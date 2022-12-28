import './App.css'
import MapInfo from './pages/MapInfo'
import Home from './pages/Home'
import LMBStats from './pages/LMBStats'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/map' element={<MapInfo />} />
                <Route path='/lmbstats' element={<LMBStats />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
