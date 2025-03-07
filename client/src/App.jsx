import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/homePage'
import LoginPage from './pages/LoginPage'
import ShopPage from './pages/ShopPage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import CartPage from './pages/CartPage'

function App() { 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path='/shop' element={<ShopPage/>}></Route>
          <Route path='/product-details' element={<ProductDetailsPage/>}></Route>
          <Route path='/cart' element={<CartPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
