import '../styles.css';
import NCAAdata from '../Data/NCAAdata';
import { motion } from 'framer-motion'


export default function NCAA() {



  return (
    
    <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .5 }}
    >

      <NCAAdata />

    </motion.div>
  );
}   

