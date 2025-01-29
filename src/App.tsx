import { Route, Routes } from 'react-router-dom'
import './App.css'
import { HomePage } from './pages/HomePage'
import { ForecastPage } from './pages/ForecastPage'
import { NotFoundPage } from './pages/NotFoundPage'

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/forecast/:place" element={<ForecastPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
