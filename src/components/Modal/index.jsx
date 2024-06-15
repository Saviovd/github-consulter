import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../store/actions/modalActions';
import { ModalContent, ModalOverlay } from './ModalStyles';
import ModalHeader from './ModalHeader';
import ChartsSection from './ChartsSection';
import ContributorsSection from './ContributorsSection';
import LinksSection from './LinksSection';
import axios from 'axios';

const Modal = ({ isOpen, repoDetails, closeModal }) => {
   const [contributors, setContributors] = useState([]);
   const [languages, setLanguages] = useState([]);
   const [stats, setStats] = useState({
      commits: null,
      issues: null,
      pullRequests: null,
   });

   useEffect(() => {
      const fetchContributors = async () => {
         if (repoDetails && repoDetails.contributors_url) {
            try {
               const response = await fetch(repoDetails.contributors_url);
               if (response.ok) {
                  const data = await response.json();
                  setContributors(data);
               }
            } catch (error) {
               console.error('Error fetching contributors:', error);
            }
         }
      };

      const fetchLanguages = async () => {
         if (repoDetails && repoDetails.languages_url) {
            try {
               const response = await fetch(repoDetails.languages_url);
               if (response.ok) {
                  const data = await response.json();
                  setLanguages(data);
               }
            } catch (error) {
               console.error('Error fetching languages:', error);
            }
         }
      };

      const fetchStats = async () => {
         if (repoDetails) {
            try {
               const commitsResponse = await axios.get(`https://api.github.com/repos/${repoDetails.owner.login}/${repoDetails.name}/stats/commit_activity`);
               const commitsData = commitsResponse.data;

               const issuesResponse = await axios.get(`https://api.github.com/repos/${repoDetails.owner.login}/${repoDetails.name}/issues`);
               const issuesData = issuesResponse.data;

               const pullsResponse = await axios.get(`https://api.github.com/repos/${repoDetails.owner.login}/${repoDetails.name}/pulls`);
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

      fetchContributors();
      fetchLanguages();
      fetchStats();
   }, [repoDetails]);

   if (!isOpen || !repoDetails) return null;

   return (
      <ModalOverlay>
         <ModalContent>
            <button className='close-button' onClick={closeModal}>
               Close
            </button>
            <ModalHeader repoDetails={repoDetails} />
            <ChartsSection
               repoDetails={repoDetails}
               languages={languages}
               commitsCount={stats.commits}
               issuesCount={stats.issues}
               pullsCount={stats.pullRequests}
            />
            <ContributorsSection contributors={contributors} />
            <LinksSection repoDetails={repoDetails} />
         </ModalContent>
      </ModalOverlay>
   );
};

const mapStateToProps = (state) => ({
   isOpen: state.modal.isOpen,
   repoDetails: state.modal.repoDetails,
});

export default connect(mapStateToProps, { closeModal })(Modal);
