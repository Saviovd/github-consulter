export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const FETCH_CONTRIBUTORS_REQUEST = 'FETCH_CONTRIBUTORS_REQUEST';
export const FETCH_CONTRIBUTORS_SUCCESS = 'FETCH_CONTRIBUTORS_SUCCESS';
export const FETCH_CONTRIBUTORS_FAILURE = 'FETCH_CONTRIBUTORS_FAILURE';
export const FETCH_LANGUAGES_REQUEST = 'FETCH_LANGUAGES_REQUEST';
export const FETCH_LANGUAGES_SUCCESS = 'FETCH_LANGUAGES_SUCCESS';
export const FETCH_LANGUAGES_FAILURE = 'FETCH_LANGUAGES_FAILURE';
export const FETCH_STATS_REQUEST = 'FETCH_STATS_REQUEST';
export const FETCH_STATS_SUCCESS = 'FETCH_STATS_SUCCESS';
export const FETCH_STATS_FAILURE = 'FETCH_STATS_FAILURE';

export const openModal = (repoDetails) => ({
   type: OPEN_MODAL,
   payload: { repoDetails },
});

export const closeModal = () => ({
   type: CLOSE_MODAL,
});

export const fetchContributorsRequest = (url) => ({
   type: FETCH_CONTRIBUTORS_REQUEST,
   payload: { url },
});

export const fetchContributorsSuccess = (contributors) => ({
   type: FETCH_CONTRIBUTORS_SUCCESS,
   payload: { contributors },
});

export const fetchContributorsFailure = (error) => ({
   type: FETCH_CONTRIBUTORS_FAILURE,
   payload: { error },
});

export const fetchLanguagesRequest = (url) => ({
   type: FETCH_LANGUAGES_REQUEST,
   payload: { url },
});

export const fetchLanguagesSuccess = (languages) => ({
   type: FETCH_LANGUAGES_SUCCESS,
   payload: { languages },
});

export const fetchLanguagesFailure = (error) => ({
   type: FETCH_LANGUAGES_FAILURE,
   payload: { error },
});

export const fetchStatsRequest = (owner, repo) => ({
   type: FETCH_STATS_REQUEST,
   payload: { owner, repo },
});

export const fetchStatsSuccess = (stats) => ({
   type: FETCH_STATS_SUCCESS,
   payload: { stats },
});

export const fetchStatsFailure = (error) => ({
   type: FETCH_STATS_FAILURE,
   payload: { error },
});
