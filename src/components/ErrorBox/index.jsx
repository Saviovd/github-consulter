import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledErrorBox = styled(motion.div)`
   background-color: rgba(255, 0, 0, 0.1);
   padding: 1rem;
   margin: 0.5rem 0;
   border: 1px solid rgba(255, 0, 0, 0.3);

   p {
      color: rgba(255, 0, 0, 0.8);
      font-weight: lighter;
      font-size: 1.5rem;
   }
`;

const ErrorBox = ({ message }) => {
   const variants = {
      hidden: { opacity: 0, y: 0 },
      visible: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 0 },
   };

   return (
      <StyledErrorBox
         initial='hidden'
         animate='visible'
         exit='exit'
         variants={variants}
         transition={{ duration: 0.3 }}
      >
         <p>{message}</p>
      </StyledErrorBox>
   );
};

export default ErrorBox;
