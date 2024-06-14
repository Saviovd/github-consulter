import {
   FETCH_REPOSITORIES_REQUEST,
   FETCH_REPOSITORIES_SUCCESS,
   FETCH_REPOSITORIES_FAILURE,
   SET_SORT_TYPE,
} from '../actions/RepositoriesActions';

const initialState = {
   repositories: [],
   loading: false,
   error: null,
   sortType: 'a-z',
};

const repositoriesReducer = (state = initialState, action) => {
   switch (action.type) {
      case FETCH_REPOSITORIES_REQUEST:
         return {
            ...state,
            loading: true,
            error: null,
         };
      case FETCH_REPOSITORIES_SUCCESS:
         return {
            ...state,
            loading: false,
            repositories: action.payload.repositories,
         };
      case FETCH_REPOSITORIES_FAILURE:
         return {
            ...state,
            loading: false,
            error: action.payload.error,
         };
      case SET_SORT_TYPE:
         return {
            ...state,
            sortType: action.payload.sortType,
         };
      default:
         return state;
   }
};

export default repositoriesReducer;
