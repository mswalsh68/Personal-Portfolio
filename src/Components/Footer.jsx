import React from 'react'
import '../styles.css'
import { Link } from 'react-router-dom'


export default function Footer() {
  return (
    <footer className="footer">
            <div className="creator">Site Created by Mike Walsh</div>
            <Link to='/'>Home</Link>
            <Link to='/Projects'>Projects</ Link>
            <Link to='/Resume'>Resume</Link>
            <Link to='/Contact'>Contact</Link>

    </footer>
  )
}
