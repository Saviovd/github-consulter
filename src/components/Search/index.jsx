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
         <svg
               aria-hidden='true'
               height='16'
               viewBox='0 0 16 16'
               version='1.1'
               width='16'
               data-view-component='true'
               class='octicon octicon-search'
            >
               <path d='M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z'></path>
            </svg>
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