import '../styles.css'
import Resume from '../assets/Mike Walsh 2024.pdf'

export default function Resume() {

 
  
  return (
    <div className='main-body'>
      <h1>Resume</h1>
      <div className='wrapper'>
      <iframe className='resume' src={Resume}></iframe>
      </div>
    </div>
  );
}