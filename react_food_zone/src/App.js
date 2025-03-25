import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/home';
import Login from '../src/components/login/login';
import Signup from './components/login/signup';
import About from './components/aboutus/about';
import Contact from './components/contactForm/contact';
import Reservation from './components/reservation/reservation';
import PasswordReset from './components/login/passwordReset';
import AddToCart from './components/addToCart/addToCart';
import HomePage from './components/homePage/homepage';
import AddressDetails from './components/pages/addressDetails';
import Menu from "./components/menuAfterLogin/menu/menu"
import Dessertmenu from "./components/menuAfterLogin/desserts/des"
import Vegmenu from "./components/menuAfterLogin/vegMenuList/veg_list"
import Nonvegmenu from "./components/menuAfterLogin/nonVegMenuList/non_veg"
import Starterses from "./components/menuAfterLogin/starters/starterses";
import Veglist from "./components/menuBeforLogin/vegB/veg_listB";
import Menulist from "./components/menuBeforLogin/popularB/menuB";
import Dessertlist from "./components/menuBeforLogin/dessertsB/desB";
import Nonveglist from "./components/menuBeforLogin/nonvegB/non_vegB";
import Starterslist from "./components/menuBeforLogin/startersB/startersesB";
import Payment from "./components/payment/index"
import Myorders from "./components/myOrders/myOrders"
import Myreservation from "./components/myreservations/myreservation"

import AdminLogin from './adminComponents/login/login';
import ViewFood from './adminComponents/viewfood/viewfood';
import ViewReservation from './adminComponents/viewReservation/viewReservation';
import ViewOrder from './adminComponents/viewOrder/viewOrder';
import AddFood from './adminComponents/viewfood/addFood';
import UpdateFood from "./adminComponents/viewfood/updateFood";




function App() {

  return (

    <div>

      <Routes>

        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/reservation' element={<Reservation />} />
        <Route exact path='/passwordReset' element={<PasswordReset />} />
        <Route exact path='/cart' element={<AddToCart />} />
        <Route exact path='/homepage' element={<HomePage />} />
        <Route exact path='/addressDetails' element={<AddressDetails />} />
        <Route exact path='/menu' element={<Menu />} />
        <Route exact path='/des' element={<Dessertmenu />} />
        <Route exact path='/veg_list' element={<Vegmenu />} />
        <Route exact path='/non_veg' element={<Nonvegmenu />} />
        <Route exact path='/starterses' element={<Starterses />} />
        <Route exact path='/menuB' element={<Menulist />} />
        <Route exact path='/desB' element={<Dessertlist />} />
        <Route exact path='/veg_listB' element={<Veglist />} />
        <Route exact path='/non_vegB' element={<Nonveglist />} />
        <Route exact path='/startersesB' element={<Starterslist />} />
        <Route exact path='/payment' element={<Payment />} />
        <Route exact path='/myOrders' element={<Myorders />} />
        <Route exact path='/myreservation' element={<Myreservation />} />


        <Route exact path='/admin/login' element={<AdminLogin />} />
        <Route exact path='/admin/viewfood' element={<ViewFood />} />
        <Route exact path='/admin/viewReservation' element={<ViewReservation />} />
        <Route exact path='/admin/viewOrder' element={<ViewOrder />} />
        <Route exact path='/admin/addFood' element={<AddFood />} />
        <Route exact path="/admin/updateFood/:foodid" element={<UpdateFood />} />
        <Route exact path='*' element={<h1>404 Not Found</h1>} />
        
      </Routes>

    </div>

  );
}

export default App;
