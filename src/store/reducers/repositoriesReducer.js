import {
   FETCH_REPOSITORIES_REQUEST,
   FETCH_REPOSITORIES_SUCCESS,
   FETCH_REPOSITORIES_FAILURE,
} from '../actions/RepositoriesActions';

const initialState = {
   repositories: [],
   loading: false,
   error: null,
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
            repositories: action.payload,
            loading: false,
         };
      case FETCH_REPOSITORIES_FAILURE:
         return {
            ...state,
            loading: false,
            error: action.payload,
         };
      default:
         return state;
   }
};

export default repositoriesReducer;
