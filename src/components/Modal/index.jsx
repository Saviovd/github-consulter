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

   return (<>
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
                  Close
               </button>
               <ModalHeader repoDetails={repoDetails} />
               <div className='charts'>
                  {stats && languages && (
                     <ChartsSection
                        repoDetails={repoDetails}
                        languages={languages}
                        commitsCount={stats.commits}
                        issuesCount={stats.issues}
                        pullsCount={stats.pullRequests}
                     />
                  )}
                  <ContributorsSection contributors={contributors} />
               </div>
               {loadingVisible && (
                  <Loading />
               )}
               {!loadingVisible && (!languages || languages.length === 0) && (
                  <p>Unable to fetch languages data. Please try again later.</p>
               )}
               <LinksSection repoDetails={repoDetails} />
            </ModalContent>
         </motion.div>
      </ModalOverlay>
      </>);
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
