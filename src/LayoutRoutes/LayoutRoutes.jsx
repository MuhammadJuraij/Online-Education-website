import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from '../Comonents/Header/Header'
import Footer from '../Comonents/Footer/Footer'
import Plans from '../Comonents/Pages/Plans/Plans'
import Courses from '../Comonents/Pages/Courses/Courses'
import Home from '../Comonents/Pages/Home/Home'
import About from '../Comonents/Pages/About/About'
import Contact from '../Comonents/Pages/Contact/Contact'
import Support from '../Comonents/Pages/Support/Support'

function LayoutRoutes() {
  return (
    <Router>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/services' element={<Plans/>}/>
            <Route path='/courses' element={<Courses/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/support' element={<Support/>}/>
            

            
        </Routes>
        <Footer/>
    </Router>
  )
}

export default LayoutRoutes
