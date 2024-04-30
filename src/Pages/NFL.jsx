import React from 'react';
import '../styles.css';
import NFLdata from '../Data/NFLdata';
import { motion } from 'framer-motion'


export default function NFL() {



  return (
    <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .5 }}
    >

    <NFLdata />

    </motion.div>
  );
}