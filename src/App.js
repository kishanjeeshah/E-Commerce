import { Route, Routes } from 'react-router-dom';
import Profile from "./Page/Profile"
import Cart from './Page/Cart';
import Home from './Page/Home'
import About from './Page/About';
import Terms from './Page/Terms';
import Policy from './Page/Policy';
import Contact from './Page/Contact';
import Signin from './Page/Signin';
import Products from './Page/Products';
import PostDetails from './components/PostDetails';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Registration from './Page/Registration';
import PersonalDetails from './components/Profile-section/PersonalDetails';
import MyOrders from './components/Profile-section/MyOrders';
import ShippingAddress from './components/Profile-section/ShippingAddress';
import PaymentMethods from './components/Profile-section/PaymentsMethods';
import PromoCodes from './components/Profile-section/PromoCodes';
import MyReviews from './components/Profile-section/MyReviews';
import Settings from './components/Profile-section/Settings';

function App() {
  const [LoggedIn,setLoggedIn] = useState(false)


  return (
    <div>

<div className="relative">
        <div className="fixed top-0 left-0 right-0 ">
          <Navbar IsLoggedIn={LoggedIn} />
        </div>
      </div>


      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/registration" element={<Registration setLoggedIn={setLoggedIn}/>}/>
        <Route path="/profile" element={<Profile setLoggedIn={setLoggedIn}/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path ="/about" element={<About/>}/>
        <Route path ="/terms&condition" element={<Terms/>}/>
        <Route path ="/policy" element={<Policy/>}/>
        <Route path ="/contact" element={<Contact/>}/>
        <Route path='/signin' element={<Signin setLoggedIn={setLoggedIn} />}/>
        <Route path='/products' element={<Products IsLoggedIn={LoggedIn}/>}/>
        <Route path='/post/:id' element={<PostDetails IsLoggedIn={LoggedIn}/>}/>
        <Route path="/personal-details" element={<PersonalDetails />} />
        <Route path="/my-orders" element={<MyOrders/>} />
        <Route path="/shipping-address" element={<ShippingAddress />} />
        <Route path="/payment-methods" element={<PaymentMethods />} />
        <Route path="/promo-codes" element={<PromoCodes />} />
        <Route path="/my-reviews" element={<MyReviews />} />
        <Route path="/settings" element={<Settings />} />

      </Routes>

          <Footer/>

    </div>
  );
}

export default App;
