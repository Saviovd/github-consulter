import Link from 'next/link';
import { Repository, RepositoryListStyle, Title } from './RepositoryListStyle';
import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../store/actions/modalActions';

const RepositoryList = ({ owner, list, openModal }) => {
   const handleRepositoryClick = (repo) => {
      openModal(repo);
   };
   const handleLinkClick = (e) => {
      e.stopPropagation();
   };

   return (
      <>
         <Title>
            Repositories of <span>{owner.login}</span>
         </Title>
         <RepositoryListStyle>
            {list.map((repo) => (
               <Repository
                  key={repo.id}
                  onClick={() => handleRepositoryClick(repo)}
               >
                  <h3 className='repository-name'>{repo.name}</h3>
                  <span className='owner'>
                     by{' '}
                     <Link
                        href={`https://github.com/${owner.login}`}
                        target='_blank'
                        className='link'
                        onClick={handleLinkClick}
                     >
                        {owner.login}
                     </Link>
                  </span>
                  <p className='repository-description'>{repo.description ? repo.description : 'The repository has no description'}</p>
               </Repository>
            ))}
         </RepositoryListStyle>
      </>
   );
};

export default connect(null, { openModal })(RepositoryList);
