import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
   FETCH_REPOSITORIES_REQUEST,
   fetchRepositoriesSuccess,
   fetchRepositoriesFailure,
} from '../actions/RepositoriesActions';

function* fetchRepositoriesSaga(action) {
   try {
      const response = yield call(axios.get, `https://api.github.com/users/${action.payload.username}/repos`, {
         headers: {
            Authorization: `token ${process.env.NEXT_PUBLIC_GIT_TOKEN || process.env.GIT_TOKEN}`,
         },
      });
      yield put(fetchRepositoriesSuccess(response.data));
   } catch (error) {
      yield put(fetchRepositoriesFailure(error.message));
   }
}

export function* watchFetchRepositories() {
   yield takeEvery(FETCH_REPOSITORIES_REQUEST, fetchRepositoriesSaga);
}
