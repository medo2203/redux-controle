import Navbare from './components/navbare/Navbare'
import Hero from './components/hero/Hero'
import './App.css'
import Cards from './components/Cards/Cards'
import { Routes, Route } from 'react-router-dom'
import Store from './components/Store/Store'

function App() {

  return (
    <>
    <Navbare/>
    <div className="App">
      <Routes>
        <Route path='/Hero' element={<Hero/>}/>
        <Route path='/Cards' element={<Cards/>}/>
        <Route path='/Store' element={<Store/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
