import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../store/actions/modalActions';
import { ModalContent, ModalOverlay } from './ModalStyles';
import ModalHeader from './ModalHeader';
import ChartsSection from './ChartsSection';
import ContributorsSection from './ContributorsSection';
import LinksSection from './LinksSection';
import axios from 'axios';
import Loading from '../Loading';
import { motion } from 'framer-motion';

const Modal = ({ isOpen, repoDetails, closeModal }) => {
   const [contributors, setContributors] = useState([]);
   const [languages, setLanguages] = useState([]);
   const [stats, setStats] = useState({
      commits: null,
      issues: null,
      pullRequests: null,
   });
   const [loadingVisible, setLoadingVisible] = useState(true);

   useEffect(() => {
      const fetchContributors = async () => {
         if (repoDetails && repoDetails.contributors_url) {
            try {
               const response = await axios.get(repoDetails.contributors_url, {
                  timeout: 10000,
               });
               if (response.status === 200) {
                  setContributors(response.data);
               } else {
                  throw new Error('Failed to fetch contributors');
               }
            } catch (error) {
               console.error('Error fetching contributors:', error);
            }
         }
      };

      const fetchLanguages = async () => {
         if (repoDetails && repoDetails.languages_url) {
            try {
               const response = await axios.get(repoDetails.languages_url, {
                  timeout: 10000,
               });
               if (response.status === 200) {
                  setLanguages(response.data);
               } else {
                  throw new Error('Failed to fetch languages');
               }
            } catch (error) {
               console.error('Error fetching languages:', error);
            }
         }
      };

      const fetchStats = async () => {
         if (repoDetails) {
            try {
               const commitsResponse = await axios.get(
                  `https://api.github.com/repos/${repoDetails.owner.login}/${repoDetails.name}/stats/commit_activity`,
                  {timeout: 5000}
               );
               const commitsData = commitsResponse.data;

               const issuesResponse = await axios.get(
                  `https://api.github.com/repos/${repoDetails.owner.login}/${repoDetails.name}/issues`,
                  {timeout: 5000}
               );
               const issuesData = issuesResponse.data;

               const pullsResponse = await axios.get(
                  `https://api.github.com/repos/${repoDetails.owner.login}/${repoDetails.name}/pulls`,
                   {timeout: 5000}
               );
               const pullsData = pullsResponse.data;

               setStats({
                  commits: commitsData.length,
                  issues: issuesData.length,
                  pullRequests: pullsData.length,
               });
            } catch (error) {
               console.error('Error fetching repository statistics:', error);
            }
         }
      };

      const fetchDataWithTimeout = async () => {
         const fetchContributorsPromise = fetchContributors();
         const fetchLanguagesPromise = fetchLanguages();
         const fetchStatsPromise = fetchStats();

         try {
            await Promise.all([
               fetchContributorsPromise,
               fetchLanguagesPromise,
               fetchStatsPromise,
            ]);
         } catch (error) {
            console.error('Timeout or fetch error:', error);
         } finally {
            setTimeout(() => {
               setLoadingVisible(false);
            }, 5000);
         }
      };

      fetchDataWithTimeout();
   }, [repoDetails]);

   if (!isOpen || !repoDetails) return null;

   const animationVariants = {
      hidden: { opacity: 0, y: 100 },
      visible: { opacity: 1, y: 0 },
   };

   return (
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
               {stats && repoDetails && languages && (
                     <ChartsSection
                        repoDetails={repoDetails}
                        languages={languages}
                        commitsCount={stats.commits}
                        issuesCount={stats.issues}
                        pullsCount={stats.pullRequests}
                     />
                  )}
               {loadingVisible &&
                  (!repoDetails ||
                     languages.length === 0 ||
                     stats.commits === null) && <Loading />}
               {!loadingVisible && languages.length === 0 && (
                  <p>Unable to fetch data. Please try again later.</p>
               )}
               <LinksSection repoDetails={repoDetails} />
               <ContributorsSection contributors={contributors} />
            </ModalContent>
         </motion.div>
      </ModalOverlay>
   );
};

const mapStateToProps = (state) => ({
   isOpen: state.modal.isOpen,
   repoDetails: state.modal.repoDetails,
});

export default connect(mapStateToProps, { closeModal })(Modal);
