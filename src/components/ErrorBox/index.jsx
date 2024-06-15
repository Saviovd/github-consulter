import React from 'react';

const ErrorBox = ({ message }) => {
   return (
      <div style={{ backgroundColor: 'rgba(255, 0, 0, 0.1)', padding: '1rem', margin: '0.5rem 0', border: '1px solid rgba(255, 0, 0, 0.3)' }}>
         <p style={{ color: 'rgba(255, 0, 0, 0.8)', fontWeight: 'lighter', fontSize: '1.5rem' }}>{message}</p>
      </div>
   );
};

export default ErrorBox;
