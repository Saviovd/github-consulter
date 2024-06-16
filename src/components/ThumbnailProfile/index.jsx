import Image from 'next/image';
import { ProfileStyles } from './ThumbnailProfileStyles';
import Link from 'next/link';

const ThumbnailProfile = ({ login, avatar_url }) => {
   const handleLinkClick = (e) => {
      e.stopPropagation();
   };
   return (
      <>
         <Link
            href={`https://github.com/${login}`}
            target='_blank'
            onClick={handleLinkClick}
            style={{textDecoration: 'none'}}
         >
            <ProfileStyles>
               <Image
                  width={25}
                  height={25}
                  quality={100}
                  alt={`profile photo of ${login}`}
                  src={avatar_url}
                  className='avatar'
               />
               <p className='login'>@{login}</p>
            </ProfileStyles>
         </Link>
      </>
   );
};

export default ThumbnailProfile;
