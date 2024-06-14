import {
   FETCH_REPOSITORIES_SUCCESS,
   FETCH_REPOSITORIES_FAILURE,
   FETCH_REPOSITORIES_REQUEST,
   SET_SORT_TYPE,
} from '../actions/RepositoriesActions';

const initialState = {
   repositories: [],
   loading: false,
   error: null,
   sortType: 'created:desc',
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
            repositories: action.payload,
         };
      case FETCH_REPOSITORIES_FAILURE:
         return {
            ...state,
            loading: false,
            error: action.payload,
         };
      case SET_SORT_TYPE:
         return {
            ...state,
            sortType: action.payload,
         };
      default:
         return state;
   }
};

export default repositoriesReducer;
