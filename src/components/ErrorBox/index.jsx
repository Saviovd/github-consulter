import React from 'react';
import { motion } from 'framer-motion';

const ErrorBox = ({ message }) => {
   const variants = {
      hidden: { opacity: 0, y: 0 },
      visible: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 0 },
   };

   return (
      <motion.div
         initial="hidden"
         animate="visible"
         exit="exit"
         variants={variants}
         transition={{ duration: 0.3 }}
         style={{
            backgroundColor: 'rgba(255, 0, 0, 0.1)',
            padding: '1rem',
            margin: '0.5rem 0',
            border: '1px solid rgba(255, 0, 0, 0.3)',
         }}
      >
         <p style={{ color: 'rgba(255, 0, 0, 0.8)', fontWeight: 'lighter', fontSize: '1.5rem' }}>{message}</p>
      </motion.div>
   );
};

export default ErrorBox;
