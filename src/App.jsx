import React from 'react'
import Navigation from './Components/Navigation'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import './styles.css'
import About from './Components/About'
import Projects from './Components/Projects'
import Resume from './Components/Resume'
import Home from './Components/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import NFL from './Components/NFL'



export default function App() {

  return (
    <Router className='main-body'>
    <div >
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Projects" element={<Projects />}/>
        <Route path="/Resume" element={<Resume />}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/NFL" element={<NFL />}/>
      </Routes>
    </div>

    <Footer />

  </Router>

  )
}

