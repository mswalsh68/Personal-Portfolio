import React from 'react'
import '../styles.css'
import ContactForm from '../Components/ContactForm'
import { motion } from 'framer-motion'


export default function Contact() {
  return (

    <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .5 }}
    >

    <div className='main-body'>

      <h1>
        Lets Get In touch
      </h1>

      <ContactForm />

    </div>
    
    </motion.div>
  )
}
