'use client';
import React, { useState, useEffect } from 'react';
import getUserData from '@/api/getUser';
import getRepositoryData from '@/api/getRepositories';

const Home = () => {
   const [userData, setUserData] = useState(null);
   const [repositories, setRepositories] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const user = await getUserData();
            setUserData(user);
            console.log(user)
            const repos = await getRepositoryData(
               user.login
            );
            setRepositories(repos);

            setLoading(false);
         } catch (error) {
            console.error('Error:', error);
         }
      };

      fetchData();
   }, []);

   if (loading) {
      return <p>Loading...</p>;
   }

   return (
      <div>
         <h1>User Data:</h1>
         <p>ID: {userData.id}</p>
         <p>First Name: {userData.firstName}</p>
         <p>Email: {userData.email}</p>

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

export default Home;
