import React from 'react';
import { ModalHeaderStyles } from './ModalHeaderStyles';

const ModalHeader = ({ repoDetails }) => {
   const formatDate = (dateString) => {
      const date = new Date(dateString);
      const formattedDate = date.toLocaleDateString('en-US', {
         day: '2-digit',
         month: '2-digit',
         year: 'numeric',
      });
      return formattedDate;
   };

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
            <p className='project-license'>
               License: {repoDetails.license.name}
            </p>
         )}
         <div className='dates'>
            <div className='project-created'>
               Created at:{' '}
               <span>{createdDate}</span>
            </div>
            <div className='project-updated'>
               Last updated at:{' '}
               <span>{updatedDate}</span>
            </div>
         </div>
      </ModalHeaderStyles>
   );
};

export default ModalHeader;
