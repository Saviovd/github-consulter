import { all } from 'redux-saga/effects';
import { watchModalSagas } from './modalSagas';
import { watchFetchRepositories } from './repositoriesSagas';

export default function* rootSaga() {
   yield all([
      watchModalSagas(),
      watchFetchRepositories(),
   ]);
}
