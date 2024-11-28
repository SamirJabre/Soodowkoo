import './App.css'
import GamePage from './pages/GamePage/GamePage'
import LandingPage from './pages/LandingPage/LandingPage'
import { BrowserRouter , Routes , Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/soodowkoo" element={<GamePage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App