'use client';
import React from 'react';
import { connect } from 'react-redux';
import {
   fetchRepositoriesRequest,
   setSortType,
} from '@/store/actions/RepositoriesActions';
import Search from '@/components/Search';

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

   const sortRepositories = (repos, type) => {
      switch (type) {
         case 'a-z':
            return [...repos].sort((a, b) => a.name.localeCompare(b.name));
         case 'z-a':
            return [...repos].sort((a, b) => b.name.localeCompare(a.name));
         case 'oldest':
            return [...repos].sort(
               (a, b) => new Date(a.created_at) - new Date(b.created_at)
            );
         case 'newest':
            return [...repos].sort(
               (a, b) => new Date(b.created_at) - new Date(a.created_at)
            );
         default:
            return repos;
      }
   };

   const sortedRepositories = sortRepositories(repositories, sortType);

   return (
      <div>
         <Search onSearch={handleSearch} />

         <label>
            Sort by:
            <select value={sortType} onChange={handleSortChange}>
               <option value='a-z'>A-Z</option>
               <option value='z-a'>Z-A</option>
               <option value='oldest'>Oldest First</option>
               <option value='newest'>Newest First</option>
            </select>
         </label>

         {loading && <p>Loading...</p>}
         {error && <p>Error: {error}</p>}

         <h2>Repositories:</h2>
         <ul>
            {sortedRepositories.map((repo) => (
               <li key={repo.id}>
                  <strong>{repo.name}</strong> - {repo.description}
               </li>
            ))}
         </ul>
      </div>
   );
};

const mapStateToProps = (state) => ({
   repositories: state.repositories.repositories,
   loading: state.repositories.loading,
   error: state.repositories.error,
   sortType: state.repositories.sortType,
});

const mapDispatchToProps = {
   fetchRepositories: fetchRepositoriesRequest,
   setSortType,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
