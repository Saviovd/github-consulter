import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
   closeModal,
   fetchContributorsRequest,
   fetchLanguagesRequest,
   fetchStatsRequest,
} from '../../store/actions/modalActions';
import { ModalContent, ModalOverlay } from './ModalStyles';
import ModalHeader from './ModalHeader';
import ChartsSection from './ChartsSection';
import ContributorsSection from './ContributorsSection';
import LinksSection from './LinksSection';
import Loading from '../Loading';
import { motion } from 'framer-motion';

const Modal = ({
   isOpen,
   repoDetails,
   closeModal,
   fetchContributors,
   fetchLanguages,
   fetchStats,
   contributors,
   languages,
   stats,
   loadingVisible,
   error,
}) => {
   useEffect(() => {
      const fetchData = async () => {
         if (repoDetails && repoDetails.contributors_url) {
            await fetchContributors(repoDetails.contributors_url);
         }

         if (repoDetails && repoDetails.languages_url) {
            await fetchLanguages(repoDetails.languages_url);
         }

         if (repoDetails) {
            await fetchStats(repoDetails.owner.login, repoDetails.name);
         }
      };

      if (isOpen && repoDetails) {
         fetchData();
      }
   }, [isOpen, repoDetails, fetchContributors, fetchLanguages, fetchStats]);

   if (!isOpen || !repoDetails) return null;

   const animationVariants = {
      hidden: { opacity: 0, y: 100 },
      visible: { opacity: 1, y: 0 },
   };

   return (
      <>
         <ModalOverlay>
            <motion.div
               className='modal-motion'
               initial='hidden'
               animate='visible'
               exit='hidden'
               variants={animationVariants}
               transition={{ duration: 0.5 }}
            >
               <ModalContent>
                  <button className='close-button' onClick={closeModal}>
                     <svg
                        aria-hidden='true'
                        viewBox='0 0 16 16'
                        version='1.1'
                        height='35'
                        width='35'
                        data-view-component='true'
                     >
                        <path d='M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z'></path>
                     </svg>
                  </button>
                  <ModalHeader
                     repoDetails={repoDetails}
                     contributors={contributors}
                  />
                  {loadingVisible && !stats && !languages ? (
                     <Loading size={50} />
                  ) : (
                     <ChartsSection
                        repoDetails={repoDetails}
                        languages={languages}
                        commitsCount={stats.commits}
                        issuesCount={stats.issues}
                        pullsCount={stats.pullRequests}
                     />
                  )}
                  <LinksSection repoDetails={repoDetails} />
               </ModalContent>
            </motion.div>
         </ModalOverlay>
      </>
   );
};

const mapStateToProps = (state) => ({
   isOpen: state.modal.isOpen,
   repoDetails: state.modal.repoDetails,
   contributors: state.modal.contributors,
   languages: state.modal.languages,
   stats: state.modal.stats,
   loadingVisible: state.modal.loadingVisible,
   error: state.modal.error,
});

const mapDispatchToProps = {
   closeModal,
   fetchContributors: fetchContributorsRequest,
   fetchLanguages: fetchLanguagesRequest,
   fetchStats: fetchStatsRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
