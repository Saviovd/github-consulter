import {
   OPEN_MODAL,
   CLOSE_MODAL,
   FETCH_CONTRIBUTORS_REQUEST,
   FETCH_CONTRIBUTORS_SUCCESS,
   FETCH_CONTRIBUTORS_FAILURE,
   FETCH_LANGUAGES_REQUEST,
   FETCH_LANGUAGES_SUCCESS,
   FETCH_LANGUAGES_FAILURE,
   FETCH_STATS_REQUEST,
   FETCH_STATS_SUCCESS,
   FETCH_STATS_FAILURE,
} from '../actions/modalActions';

const initialState = {
   isOpen: false,
   repoDetails: null,
   contributors: [],
   languages: [],
   stats: {
      commits: null,
      issues: null,
      pullRequests: null,
   },
   loadingVisible: true,
   error: null,
};

const modalReducer = (state = initialState, action) => {
   switch (action.type) {
      case OPEN_MODAL:
         return {
            ...state,
            isOpen: true,
            repoDetails: action.payload.repoDetails,
         };
      case CLOSE_MODAL:
         return {
            ...state,
            isOpen: false,
            repoDetails: null,
            contributors: [],
            languages: [],
            stats: {
               commits: null,
               issues: null,
               pullRequests: null,
            },
            loadingVisible: true,
            error: null,
         };
      case FETCH_CONTRIBUTORS_REQUEST:
      case FETCH_LANGUAGES_REQUEST:
      case FETCH_STATS_REQUEST:
         return {
            ...state,
            loadingVisible: true,
         };
      case FETCH_CONTRIBUTORS_SUCCESS:
         return {
            ...state,
            contributors: action.payload.contributors,
            loadingVisible: false,
         };
      case FETCH_CONTRIBUTORS_FAILURE:
         return {
            ...state,
            error: action.payload,
            loadingVisible: false,
         };
      case FETCH_LANGUAGES_SUCCESS:
         return {
            ...state,
            languages: action.payload.languages,
            loadingVisible: false,
         };
      case FETCH_LANGUAGES_FAILURE:
         return {
            ...state,
            error: action.payload,
            loadingVisible: false,
         };
      case FETCH_STATS_SUCCESS:
         return {
            ...state,
            stats: action.payload,
            loadingVisible: false,
         };
      case FETCH_STATS_FAILURE:
         return {
            ...state,
            error: action.payload,
            loadingVisible: false,
         };
      default:
         return state;
   }
};

export default modalReducer;
