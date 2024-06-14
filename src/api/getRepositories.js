import axios from 'axios';
require('dotenv').config()

const getRepositoryData = async (owner) => {
   try {
      const response = await axios.get(
         `https://api.github.com/users/${owner}/repos`,
         {
            headers: {
               Authorization: `token ${process.env.NEXT_PUBLIC_GIT_TOKEN}`,
            },
         }
      );
      return response.data;
   } catch (error) {
      console.error('Error fetching repositories data:', error);
      throw error;
   }
};

export default getRepositoryData;
