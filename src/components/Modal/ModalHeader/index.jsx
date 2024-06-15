import React from 'react';
import { ModalHeaderStyles } from './ModalHeaderStyles';

const formatWithLeadingZero = (number) => {
   return number.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false,
   });
};

const formatDate = (dateString) => {
   const date = new Date(dateString);
   const day = formatWithLeadingZero(date.getDate());
   const month = formatWithLeadingZero(date.getMonth() + 1);
   const year = date.getFullYear();

   return `${day}/${month}/${year}`;
};
const ModalHeader = ({ repoDetails }) => {
   const createdDate = formatDate(repoDetails.created_at);
   const updatedDate = formatDate(repoDetails.updated_at);
   return (
      <ModalHeaderStyles>
         <h2 className='project-name'>
            {repoDetails.name || 'No Name Available'}
         </h2>
         <p className='project-description'>
            {repoDetails.description || 'No description available'}
         </p>
         <p className='project-main-language'>
            Main language:{' '}
            <span>{repoDetails.language || 'Not specified'}</span>
         </p>
         {repoDetails.license && (
            <p className='project-main-language'>
               License: {repoDetails.license.name}
            </p>
         )}
         <div className='dates'>
            <p className='project-created'>
               Created at: <p>{createdDate}</p>
            </p>
            <p className='project-created'>
               Last updated at: <p>{updatedDate}</p>
            </p>
         </div>
      </ModalHeaderStyles>
   );
};

export default ModalHeader;
