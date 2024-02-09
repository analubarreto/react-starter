import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Home } from './pages'

function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
