import React from 'react'
import Me from '../assets/me.jpg'
import '../styles.css'
import { Link } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'





export default function Navigation() {
  return (
    
    <Navbar className="navbar" expand="md">
    <div className="container">
    <Link to='/' >
        <img className="mainLogo" src={Me}/>
    </Link>

            <Navbar.Toggle className='button' data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav" aria-label="Expand Navigation">
                    <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>

            <Navbar.Collapse  id="nav">
                <Nav>
                    <Nav.Link>
                        <Link to='/Projects'>Projects</ Link>
                    </Nav.Link>

                    <Nav.Link>
                        <Link to='/NFL'>NFL Scoreboard</Link>
                    </Nav.Link>

                    <Nav.Link>
                        <Link to='/NCAA'>NCAA Scoreboard</Link>
                    </Nav.Link>

                    <Nav.Link>
                        <Link to='/Resume'>Resume</Link>
                    </Nav.Link>

                    <Nav.Link>
                        <Link to='/Contact'>Contact</Link>
                    </Nav.Link>


                    {/* <Nav.Link>
                        <Link to='/Weather'>Weather</Link>
                    </Nav.Link> */}
                </Nav>
            </Navbar.Collapse>
            </div>
    </Navbar>

  )
}