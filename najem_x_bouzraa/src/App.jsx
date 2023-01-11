import Navbare from './components/navbare/Navbare'
import Hero from './components/hero/Hero'
import './App.css'
import Cards from './components/Cards/Cards'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <Navbare/>
    <div className="App">
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/Cards' element={<Cards/>}/>
      </Routes>
      <Hero/>
    </div>
    </>
  )
}

export default App
