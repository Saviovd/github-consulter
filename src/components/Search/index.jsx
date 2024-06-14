import React, { useState } from 'react';

const Search = ({ onSearch }) => {
   const [username, setUsername] = useState('');

   const handleSubmit = (event) => {
      event.preventDefault();
      onSearch(username);
   };

   return (
      <>
         <form onSubmit={handleSubmit}>
            <input
               type='text'
               value={username}
               onChange={(e) => setUsername(e.target.value)}
               placeholder='Enter GitHub username'
            />
            <button type='submit'>Search</button>
         </form>
      </>
   );
};

export default Search;
