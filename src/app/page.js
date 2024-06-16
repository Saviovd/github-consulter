'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import {
   fetchRepositoriesRequest,
   setSortType,
   clearError,
   clearRepositories,
} from '@/store/actions/RepositoriesActions';
import { selectSortedRepositories } from '@/store/selectors/repositoriesSelectors';
import Search from '@/components/Search';
import RepositoryList from '@/components/RepositoryList';
import SortBox from '@/components/SortBox';
import Modal from '@/components/Modal';
import ErrorBox from '@/components/ErrorBox';
import Loading from '@/components/Loading';
import { GlobalStyle, HomeStyle, Assign } from '@/styles/GlobalStyle';

const Home = ({
   repositories,
   loading,
   error,
   userNotFound,
   sortType,
   fetchRepositories,
   setSortType,
   clearError,
   clearRepositories,
}) => {
   const [searchedUsername, setSearchedUsername] = useState('');
   const [usernameError, setUsernameError] = useState(false);

   const handleSearchByUsername = (username) => {
      clearError();

      if (!username.trim()) {
         setUsernameError(true);
         clearRepositories();
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
               <Search onSearch={handleSearchByUsername} />
               <SortBox sortType={sortType} onSortChange={handleSortChange} />
            </div>
            {error && !userNotFound && <ErrorBox message={error} />}
            {userNotFound && <ErrorBox message='User not found.' />}
            {!error &&
               repositories.length === 0 &&
               searchedUsername &&
               !loading &&
               !usernameError && (
                  <ErrorBox message='No repositories found for this user.' />
               )}
            {repositories.length > 0 && !error ? (
               <RepositoryList
                  owner={repositories[0]?.owner}
                  list={repositories}
               />
            ) : (
               <h2 className='null-list'>
                  Enter your username to view your repositories
               </h2>
            )}
            {loading && !usernameError && (
               <Loading loading={loading} size={30} />
            )}
            <Modal />
            <Assign>
               <p>
                  Dev by{' '}
                  <Link
                     className='portfolio'
                     href='https://savioalmeida.vercel.app/'
                     target='_blank'
                     rel='noopener noreferrer'
                  >
                     Sávio Almeida
                  </Link>
               </p>
            </Assign>
         </HomeStyle>
      </>
   );
};

const mapStateToProps = (state) => ({
   repositories: selectSortedRepositories(state),
   loading: state.repositories.loading,
   error: state.repositories.error,
   userNotFound: state.repositories.userNotFound,
   sortType: state.repositories.sortType,
});

const mapDispatchToProps = {
   fetchRepositories: fetchRepositoriesRequest,
   setSortType,
   clearError,
   clearRepositories,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
