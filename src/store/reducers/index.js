import { combineReducers } from 'redux';
import repositoriesReducer from './repositoriesReducer';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
   repositories: repositoriesReducer,
   modal: modalReducer,
});

export default rootReducer;
