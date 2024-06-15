'use client';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
   fetchRepositoriesRequest,
   setSortType,
   clearError,
} from '@/store/actions/RepositoriesActions';
import Search from '@/components/Search';
import RepositoryList from '@/components/RepositoryList';
import SortBox from '@/components/SortBox';
import { GlobalStyle, HomeStyle } from '@/styles/GlobalStyle';
import { selectSortedRepositories } from '@/store/selectors/repositoriesSelectors';
import ErrorBox from '@/components/ErrorBox';
import Modal from '@/components/Modal';
import Loading from '@/components/Loading';

const Home = ({
   repositories,
   loading,
   error,
   sortType,
   fetchRepositories,
   setSortType,
   clearError,
}) => {
   const [searchedUsername, setSearchedUsername] = useState('');
   const [usernameError, setUsernameError] = useState(false);

   const handleSearch = (username) => {
      clearError();

      if (!username.trim()) {
         setUsernameError(true);
         return;
      }

      if (username !== searchedUsername) {
         setSearchedUsername(username);
         fetchRepositories(username);
      }

      setUsernameError(false);
   };

   const handleSortChange = (event) => {
      setSortType(event.target.value);
   };

   return (
      <>
         <GlobalStyle />
         <HomeStyle>
            <div className='top-bar'>
               <Search onSearch={handleSearch} />

               <SortBox sortType={sortType} onSortChange={handleSortChange} />
            </div>
            {loading && !usernameError && <Loading loading={loading} />}
            {error && (
               <ErrorBox
                  message={error.message || 'No repositories found for this user.'}
               />
            )}
            {usernameError && (
               <ErrorBox message='Please enter a gitHub username to search.' />
            )}
            {repositories.length === 0 &&
               !loading &&
               !error &&
               searchedUsername && <p>No repositories found for this user.</p>}

            {repositories.length > 0 && (
               <RepositoryList
                  owner={repositories[0]?.owner}
                  list={repositories}
               />
            )}
            <Modal />
         </HomeStyle>
      </>
   );
};

const mapStateToProps = (state) => ({
   repositories: selectSortedRepositories(state),
   loading: state.repositories.loading,
   error: state.repositories.error,
   sortType: state.repositories.sortType,
});

const mapDispatchToProps = {
   fetchRepositories: fetchRepositoriesRequest,
   setSortType,
   clearError,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
