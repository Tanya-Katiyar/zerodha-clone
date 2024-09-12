import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import HomePage from './landing_pg/home/HomePage';
import Signup from './landing_pg/pages/Signup';
import AboutPage from './landing_pg/about/AboutPage';
import ProductPage from './landing_pg/products/ProductPage';
import PricingPage from './landing_pg/pricing/PricingPage';
import SupportPage from './landing_pg/support/SupportPage';
import Navbar from './landing_pg/Navbar';
import Footer from './landing_pg/Footer';
import NotFound from './landing_pg/NotFound';
import 'react-toastify';
import Login from './landing_pg/pages/Login';
import { Home } from './landing_pg/pages';
import Dashboard from './dashboard/source/components/DashboardHome';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />}> </Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/login" element={<Login />}></Route> 
      <Route path="/home" element={<Home />}></Route>                   
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/product" element={<ProductPage />}></Route>
      <Route path="/pricing" element={<PricingPage />}></Route>
      <Route path="/support" element={<SupportPage />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
    <Footer />
  </BrowserRouter>
);

