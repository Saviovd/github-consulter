import React from 'react';
import { LinksStyles } from './LinksStyles';
import Link from 'next/link';

const LinksSection = ({ repoDetails }) => {
   if (!repoDetails) {
      return <p>No links available.</p>;
   }
   return (
      <LinksStyles>
      <h2>Links: </h2>
         <Link
            className='link'
            href={repoDetails.html_url}
            target='_blank'
            rel='noopener noreferrer'
         >
            GitHub Repository
         </Link>
         {repoDetails.homepage && (
            <Link
               className='link'
               href={repoDetails.homepage}
               target='_blank'
               rel='noopener noreferrer'
            >
               Project Homepage
            </Link>
         )}
         <Link
            className='link'
            href={`${repoDetails.html_url}/issues`}
            target='_blank'
            rel='noopener noreferrer'
         >
            Issues
         </Link>
         <Link
            className='link'
            href={`${repoDetails.html_url}/pulls`}
            target='_blank'
            rel='noopener noreferrer'
         >
            Pull Requests
         </Link>
      </LinksStyles>
   );
};

export default LinksSection;
