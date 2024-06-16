import {
   FETCH_REPOSITORIES_REQUEST,
   FETCH_REPOSITORIES_SUCCESS,
   FETCH_REPOSITORIES_FAILURE,
   SET_SORT_TYPE,
   CLEAR_ERROR,
   CLEAR_REPOSITORIES,
} from '../actions/RepositoriesActions';

const initialState = {
   repositories: [],
   loading: false,
   error: null,
   sortType: 'a-z',
   userNotFound: false,
};

const repositoriesReducer = (state = initialState, action) => {
   switch (action.type) {
      case CLEAR_REPOSITORIES:
         return {
            ...state,
            repositories: [],
         };
      case FETCH_REPOSITORIES_REQUEST:
         return {
            ...state,
            loading: true,
            error: null,
            userNotFound: false,
         };
      case FETCH_REPOSITORIES_SUCCESS:
         return {
            ...state,
            loading: false,
            repositories: action.payload.repositories,
            userNotFound: false,
         };
      case FETCH_REPOSITORIES_FAILURE:
         return {
            ...state,
            loading: false,
            error: action.payload.error,
            userNotFound: action.payload.error === 'User not found.',
         };
      case SET_SORT_TYPE:
         return {
            ...state,
            sortType: action.payload.sortType,
         };
      case CLEAR_ERROR:
         return {
            ...state,
            error: null,
         };
      default:
         return state;
   }
};

export default repositoriesReducer;
