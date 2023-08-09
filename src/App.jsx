import './App.scss'
import Home from './components/pages/Home/Home.jsx'
import { Route, Routes } from 'react-router-dom'
import BeerList from './components/pages/BeerList/BeerList.jsx'
import BeerDetails from './components/pages/BeerDetails/BeerDetails.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/all'} element={<BeerList />} />
        <Route path={'/details/:id'} element={<BeerDetails />} />
      </Routes>
    </>
  )
}

export default App
