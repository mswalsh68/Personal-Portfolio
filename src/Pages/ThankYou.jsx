import '../styles.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


export default function ThankYou() {
  return (

    <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .5 }}
    >


    <div className='main-body'>
        <h1>
        Thank you for contacting us. I will be in touch with you shortly
        </h1>
    
    
        <Link to='/' >
            <p>Back to Home</p>
        </Link>
    
    
    </div>
    
    
    
    </motion.div>
  )
}
