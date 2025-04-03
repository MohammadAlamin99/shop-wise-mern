import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/homePage'
import ShopPage from './pages/ShopPage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import CartPage from './pages/CartPage'
import SignUpPage from './pages/SignUpPage'
import SignInPage from './pages/SignInPage'
import CheckOutPage from './pages/CheckOutPage'
import OrderCompletePage from './pages/OrderCompletePage'
import MyAccountPage from './pages/MyAccountPage'
import OrderPage from './pages/OrderPage'
import WishlistPage from './pages/WishlistPage'
import AddressPage from './pages/AddressPage'

function App() { 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/signup' element={<SignUpPage/>}></Route>
          <Route path='/signin' element={<SignInPage/>}></Route>
          <Route path='/shop' element={<ShopPage/>}></Route>
          <Route path='/product-details/:id' element={<ProductDetailsPage/>}></Route>
          <Route path='/cart' element={<CartPage/>}></Route>
          <Route path='/checkout' element={<CheckOutPage/>}></Route>
          <Route path='/ordercomplete' element={<OrderCompletePage/>}></Route>
          <Route path='/account' element={<MyAccountPage/>}></Route>
          <Route path='/address' element={<AddressPage/>}></Route>
          <Route path='/order' element={<OrderPage/>}></Route>
          <Route path='/wishlist' element={<WishlistPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
