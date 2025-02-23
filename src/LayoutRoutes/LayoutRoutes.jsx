import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Header from "../components/Header/Header.jsx"
import Footer from "../components/Footer/Footer.jsx"
import Home from '../pages/Home/Home.jsx'
import Dishes from '../pages/Dishes/Dishes.jsx'
import Booking from '../pages/Booking/Booking.jsx'
import About from '../pages/About/About.jsx'
import NotFound from '../pages/NotFound/NotFound.jsx'

const LayoutRoutes = () => {
  return (
    <Router>
        <Header />
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dishes' element={<Dishes />} />
        <Route path='/services' element={<Booking />} />
        <Route path='/about' element={<About />} />
        <Route path='/*' element={<NotFound />} />
        </Routes> 
        <Footer />
    </Router>
  )
}

export default LayoutRoutes