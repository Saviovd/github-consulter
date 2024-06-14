import axios from 'axios';

const axiosClient = axios.create({
   baseURL: 'https://api.github.com/graphql',
   headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_GIT_TOKEN}`,
   },
});

const getUserData = async () => {
   const query = `
   query {
      viewer {
         id
         login
         name
         email
      }
   }
   `;

   try {
      const response = await axiosClient.post('', { query });
      return response.data.data.viewer;
   } catch (error) {
      console.error('Error fetching user data', error);
      throw error;
   }
};

export default getUserData;
