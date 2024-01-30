import Navigation from './Components/Navigation'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import './styles.css'
import Projects from './Pages/Projects'
import Resume from './Pages/Resume'
import Home from './Pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import Contact from './Pages/Contact'
import Footer from './Components/Footer'
import NFL from './Pages/NFL'
import NCAA from './Pages/NCAA'
import ThankYou from './Pages/ThankYou'
// import Weather from './Pages/Weather'
// import BlackJack from './Pages/BlackJack'


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
        <Route path="/NCAA" element={<NCAA />}/>
        <Route path="/ThankYou" element={<ThankYou />}/>
        {/* <Route path="/Weather" element={<Weather />}/> */}
        {/* <Route path="/BlackJack" element={<BlackJack />}/> */}
      </Routes>
    </div>

    <Footer />

  </Router>

  )
}

