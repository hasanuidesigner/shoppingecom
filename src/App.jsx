import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import axios from 'axios'
import Navbar from './components/navbar'
import Registerform from './components/registration'
import Loginform from './components/login'
import Products from './components/products'
import Home from './components/home'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [alluserlist, setAlluserlist] = useState([]);
  const getallusers = async () => {
    const allusers = await axios.get('https://633a8658471b8c39556ecbb5.mockapi.io/usersList/');
    setAlluserlist(allusers.data);
  }

  useEffect(() => {
    getallusers();
  }, [])

  return (
    <>
      <div className="page-wrapper">
        <BrowserRouter basename='/shoppingecom'>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/lgoin" element={<Loginform />}></Route>
            <Route path="/register" element={<Registerform />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
