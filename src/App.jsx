import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/layout'
import Home from './pages/home'
import Catalog from './pages/catalog'

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='catalog' element={<Catalog/>}/>
            </Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
