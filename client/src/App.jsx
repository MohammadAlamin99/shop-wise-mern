import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/homePage'
import LoginPage from './pages/LoginPage'
import ShopPage from './pages/ShopPage'


function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path='/shop' element={<ShopPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
