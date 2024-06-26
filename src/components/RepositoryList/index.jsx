import Link from 'next/link';
import { Repository, RepositoryListStyle, Title } from './RepositoryListStyle';
import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../store/actions/modalActions';
import { motion } from 'framer-motion';

const RepositoryList = ({ owner, list, openModal }) => {
   const handleRepositoryClick = (repo) => {
      openModal(repo);
   };

   const handleLinkClick = (e) => {
      e.stopPropagation();
   };

   const containerVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: {
         opacity: 1,
         y: 0,
         transition: {
            staggerChildren: 0.2,
         },
      },
   };

   const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
   };
   return (
      <>
         <Title>
            Repositories of <span>{owner.login}</span>
         </Title>
         <RepositoryListStyle
            as={motion.div}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
         >
            {list.map((repo) => (
               <Repository
                  as={motion.div}
                  key={repo.id}
                  onClick={() => handleRepositoryClick(repo)}
                  variants={itemVariants}
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
                  <p className='repository-description'>
                     {repo.description ? repo.description : 'The repository has no description'}
                  </p>
               </Repository>
            ))}
         </RepositoryListStyle>
      </>
   );
};

export default connect(null, { openModal })(RepositoryList);
