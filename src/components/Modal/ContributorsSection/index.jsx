import React from 'react';
import { ContributorsStyles } from './ContributorsStyles';
import Link from 'next/link';

const ContributorsSection = ({ contributors }) => {
   return (
      <ContributorsStyles>
         <p>Contributors:</p>
         <ul className='contributor-list'>
            {contributors.map((contributor) => (
               <li key={contributor.id}>
                  <Link className='contributor' href={contributor.html_url} target='_blank' rel='noopener noreferrer'>
                     {contributor.login}
                  </Link>
               </li>
            ))}
         </ul>
      </ContributorsStyles>
   );
};

export default ContributorsSection;
