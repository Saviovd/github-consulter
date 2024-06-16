import React from 'react';
import { ContributorsStyles } from './ContributorsStyles';
import Link from 'next/link';
import Image from 'next/image';
import ThumbnailProfile from '@/components/ThumbnailProfile';

const ContributorsSection = ({ contributors }) => {
   if (!contributors || contributors.length === 0) {
      return (
         <p className='message'>
            Unable to fetch contributor data from the repository. Please try
            again later.
         </p>
      );
   }
   return (
      <ContributorsStyles>
         <p>Devs:</p>
         <ul className='contributor-list'>
            {contributors.map((contributor) => (
               <li key={contributor.id}>
                  <ThumbnailProfile
                     avatar_url={contributor.avatar_url}
                     login={contributor.login}
                  />
               </li>
            ))}
         </ul>
      </ContributorsStyles>
   );
};

export default ContributorsSection;
