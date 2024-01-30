import React from 'react'
import '../styles.css'
// import resume from '../assets/Mike Walsh 2024.pdf'

export default function Resume() {

 
  
  return (
    <div className='main-body'>
      <h1>Resume</h1>
      <div className='wrapper'>
      <iframe className='resume' src={resume}></iframe>
      </div>
    </div>
  );
}