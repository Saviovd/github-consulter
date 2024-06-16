import React, { useEffect, useState } from 'react';
import { ContributorsStyles } from './ContributorsStyles';
import ThumbnailProfile from '@/components/ThumbnailProfile';
import Loading from '@/components/Loading';

const ContributorsSection = ({ contributors }) => {
   const [isLoading, setIsLoading] = useState(true);
   useEffect(() => {
      const timer = setTimeout(() => {
         setIsLoading(false);
      }, 1500);

      return () => clearTimeout(timer);
   }, []);
   if (isLoading) {
      return <Loading size={10} />;
   }
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
