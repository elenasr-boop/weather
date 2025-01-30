import { Route, Routes } from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/HomePage';
import { ForecastPage } from './pages/ForecastPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Layout } from './pages/Layout/Layout';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<HomePage />} />
        <Route path="/forecast/:place" element={<ForecastPage />} />
      </Route>
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
