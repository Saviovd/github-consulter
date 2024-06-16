import axios from 'axios';

export const FETCH_REPOSITORIES_REQUEST = 'FETCH_REPOSITORIES_REQUEST';
export const FETCH_REPOSITORIES_SUCCESS = 'FETCH_REPOSITORIES_SUCCESS';
export const FETCH_REPOSITORIES_FAILURE = 'FETCH_REPOSITORIES_FAILURE';
export const SET_SORT_TYPE = 'SET_SORT_TYPE';
export const CLEAR_ERROR = 'CLEAR_ERROR';
export const CLEAR_REPOSITORIES = 'CLEAR_REPOSITORIES';

export const clearRepositories = () => ({
   type: CLEAR_REPOSITORIES,
});

export const fetchRepositoriesRequest = (username) => ({
   type: FETCH_REPOSITORIES_REQUEST,
   payload: { username },
});

export const fetchRepositoriesSuccess = (repositories) => ({
   type: FETCH_REPOSITORIES_SUCCESS,
   payload: { repositories },
});

export const fetchRepositoriesFailure = (error) => ({
   type: FETCH_REPOSITORIES_FAILURE,
   payload: { error },
});

export const setSortType = (sortType) => ({
   type: SET_SORT_TYPE,
   payload: { sortType },
});

export const clearError = () => ({
   type: CLEAR_ERROR,
});

export const fetchRepositories = (username) => async (dispatch) => {
   dispatch(fetchRepositoriesRequest(username));

   try {
      const response = await axios.get(
         `https://api.github.com/users/${username}/repos`
      );

      if (response.data.length === 0) {
         throw new Error('No repositories found for this user.');
      }

      dispatch(fetchRepositoriesSuccess(response.data));
   } catch (error) {
      if (error.response && error.response.status === 404) {
         dispatch(fetchRepositoriesFailure('User not found.'));
      } else {
         dispatch(fetchRepositoriesFailure(error.message));
      }
   }
};
