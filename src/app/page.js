'use client';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchRepositoriesRequest } from '@/store/actions/RepositoriesActions';
import Search from '@/components/Search';

const Home = ({ repositories, loading, error, fetchRepositories }) => {
   const handleSearch = (username) => {
      fetchRepositories(username);
   };

   return (
      <div>
         <Search onSearch={handleSearch} />

         {loading && <p>Loading...</p>}
         {error && <p>Error: {error}</p>}

         <h2>Repositories:</h2>
         <ul>
            {repositories.map((repo) => (
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
});

const mapDispatchToProps = {
   fetchRepositories: fetchRepositoriesRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
