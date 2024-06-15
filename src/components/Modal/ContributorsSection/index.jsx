import React from 'react';
import { ContributorsStyles } from './ContributorsStyles';
import Link from 'next/link';
import Image from 'next/image';

const ContributorsSection = ({ contributors }) => {
   if (!contributors || contributors.length === 0) {
      return <p>No contributors found.</p>;
   }
   return (
      <ContributorsStyles>
         <p>Contributors:</p>
         <ul className='contributor-list'>
            {contributors.map((contributor) => (
               <li key={contributor.id}>
                  <Link
                     className='contributor'
                     href={contributor.html_url}
                     target='_blank'
                     rel='noopener noreferrer'
                  >
                  <Image
                     src={contributor.avatar_url}
                     height={60}
                     width={60}
                     alt={`Profile photo of ${contributor.login}`}
                     quality={100}
                     className='image'
                  />
                  <p>
                     {contributor.login}
                  </p>
                  </Link>
               </li>
            ))}
         </ul>
      </ContributorsStyles>
   );
};

export default ContributorsSection;
