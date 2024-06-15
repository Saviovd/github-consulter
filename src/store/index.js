import {
   legacy_createStore as createStore,
   applyMiddleware,
   combineReducers,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import repositoriesReducer from './reducers/repositoriesReducer';
import modalReducer from './reducers/modalReducer';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
   repositories: repositoriesReducer,
   modal: modalReducer,
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
