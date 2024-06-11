import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home />} />
        </Routes>
    </Router>
    </>
  )
}

export default App
