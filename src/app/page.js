'use client';
import React from 'react';
import { connect } from 'react-redux';
import {
   fetchRepositoriesRequest,
   setSortType,
} from '@/store/actions/RepositoriesActions';
import Search from '@/components/Search';
import RepositoryList from '@/components/RepositoryList';
import SortBox from '@/components/SortBox';
import { GlobalStyle } from '@/styles/GlobalStyle';
import { selectSortedRepositories } from '@/store/selectors/repositoriesSelectors';

const Home = ({
   repositories,
   loading,
   error,
   sortType,
   fetchRepositories,
   setSortType,
}) => {
   const handleSearch = (username) => {
      fetchRepositories(username);
   };

   const handleSortChange = (event) => {
      setSortType(event.target.value);
   };

   return (
      <div>
         <GlobalStyle />
         <Search onSearch={handleSearch} />
         <SortBox sortType={sortType} onSortChange={handleSortChange} />

         {loading && <p>Loading...</p>}
         {error && <p>Error: {error}</p>}

         <h2>Repositories</h2>
         <RepositoryList list={repositories} />
      </div>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
