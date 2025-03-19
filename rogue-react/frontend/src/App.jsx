import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './component/Navbar'
import About from './pages/About'
import Product from './pages/Product'
import Contact from './pages/Contact'
import { assets } from './assets/assets'
import ProductDetails from './pages/ProductDetail'
import Footer from './pages/Footer'
import { useLocation } from 'react-router-dom'
import Error from './component/Error'
import Career from './component/Career'
import NewsLetter from './component/NewsLetter'
import Terms from './component/Terms'
import Shipping from './component/Shipping'
import PreOrderTerms from './component/PreOrderTerms'
import PrivacyPolicy from './component/PrivacyPolicy'
import ReturnPolicy from './component/ReturnPolicy'
import StockLists from './component/StockLists'
import Login from './pages/Login'
import CheckOut from './component/checkOut'
import Cart from './component/Cart'
import Signup from './pages/Signup'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'









   const App = () => {
   const location =useLocation()
   const isLoginPage = location.pathname === '/login';
   const isSignUp=location.pathname==='/signup'
   const isForgotPassword=location.pathname==='/forgot-password'
   const isHomePage = location.pathname === "/";
   const isNewsLetter=location.pathname ==='/subscribe'

  return (
    <div 
     style={{
      backgroundImage: `url(${assets.bgImg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      width: "100vw",
      backgroundAttachment:'fixed',
      // height: "100vh",
    }}>
      
      {/* <Navbar  /> */}
      <ToastContainer/>
      {!isLoginPage && !isSignUp && !isForgotPassword && !isNewsLetter && <Navbar />}

        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Product/>}/>
        <Route path='/product/:productId' element={<ProductDetails />} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/subscribe' element={<NewsLetter/>}/>
        <Route path='/terms' element={<Terms/>}/>
        <Route path='/stocklists' element={<StockLists/>}/>
        <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
        <Route path='/preOrderTerms' element={<PreOrderTerms/>}/>
        <Route path='/shipping' element={<Shipping/>}/>
        <Route path='/subscribe' element={<NewsLetter/>}/>
        <Route path='/career' element={<Career />} />
        <Route  path='/shipping' element={<Shipping/>} />
        <Route  path='/return-policy' element={<ReturnPolicy/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path="/reset-password/:token" element={<ResetPassword/>} />
        <Route  path='/cart' element={<Cart/>} />
        <Route  path='/checkout' element={<CheckOut/>}/>
        <Route path='/forgot-password' element={<ForgotPassword />}/>

        
        <Route path='*'  element={<Error/>} />
      </Routes>

      {!isLoginPage && !isHomePage && !isSignUp && !isForgotPassword && !isNewsLetter && <Footer />}
      
    </div>
  )
}

export default App;
