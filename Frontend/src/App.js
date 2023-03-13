import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Page/Home'
import Wilder from './Page/Wilder'
import Wilderprofil from './components/Wilderprofil/Wilderprofil'
import WilderNew from './components/WilderCard/WilderNew'

import './App.css'
//module bundler

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wilder" element={<Wilder />} />
          <Route path="/wilder/:id" element={<Wilderprofil />} />
          <Route path="/wildernew" element={<WilderNew />} />
          {/* <Route path="/inscription" element={<Inscription />} /> */}
        </Routes>
      </Router>
    </div>
  )
}

export default App
