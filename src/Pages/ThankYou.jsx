import '../styles.css'
import { Link } from 'react-router-dom'


export default function ThankYou() {
  return (
    <div className='main-body'>
        <h1>
        Thank you for contacting us. I will be in touch with you shortly
        </h1>
    
    
        <Link to='/' >
            <p>Back to Home</p>
        </Link>
    
    
    </div>
  )
}
