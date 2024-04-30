import '../styles.css'
import resume2024 from '../assets/Mike Walsh 2024.pdf'
import Csharp from '../assets/Mike Walsh Foundational CSharp Microsoft Certification.png'
import { motion } from 'framer-motion'


export default function Resume() {

 
  
  return (

    <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .5 }}
    >


    <div className='main-body'>
      <h1>Resume</h1>
      <div className='wrapper'>
      <iframe className='resume' src={resume2024}></iframe>
        <img className='homeImages' src={Csharp}/>
      </div>
    </div>
    
    </motion.div>
  );
}