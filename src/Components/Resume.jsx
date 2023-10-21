import React from 'react'
import '../styles.css'
import resume from '../assets/Mike_Walsh_Portfolio_2023.pdf'

export default function Resume() {
  
  return (
    <div className='main-body'>
      <h1>Resume</h1>
      <iframe className='resume' src={resume} frameborder="0"></iframe>
    </div>
  );
}