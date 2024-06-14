export const FETCH_REPOSITORIES_REQUEST = 'FETCH_REPOSITORIES_REQUEST';
export const FETCH_REPOSITORIES_SUCCESS = 'FETCH_REPOSITORIES_SUCCESS';
export const FETCH_REPOSITORIES_FAILURE = 'FETCH_REPOSITORIES_FAILURE';

export const fetchRepositoriesRequest = (username) => ({
   type: FETCH_REPOSITORIES_REQUEST,
   payload: { username },
});

export const fetchRepositoriesSuccess = (repositories) => ({
   type: FETCH_REPOSITORIES_SUCCESS,
   payload: repositories,
});

export const fetchRepositoriesFailure = (error) => ({
   type: FETCH_REPOSITORIES_FAILURE,
   payload: error,
});
