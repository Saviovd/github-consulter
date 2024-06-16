import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
   FETCH_REPOSITORIES_REQUEST,
   fetchRepositoriesSuccess,
   fetchRepositoriesFailure,
} from '../actions/RepositoriesActions';

function* fetchRepositoriesSaga(action) {
   try {
      const response = yield call(
         axios.get,
         `https://api.github.com/users/${action.payload.username}/repos`,
         {
            headers: {
               Authorization: `token ${
                  process.env.NEXT_PUBLIC_GIT_TOKEN || process.env.GIT_TOKEN
               }`,
            },
         }
      );

      if (response.data.length === 0) {
         yield put(
            fetchRepositoriesFailure('No repositories found for this user.')
         );
      } else {
         yield put(fetchRepositoriesSuccess(response.data));
      }
   } catch (error) {
      if (error.response && error.response.status === 404) {
         yield put(fetchRepositoriesFailure('User not found.'));
      } else {
         yield put(fetchRepositoriesFailure('Failed to fetch repositories.'));
      }
   }
}

export function* watchFetchRepositories() {
   yield takeEvery(FETCH_REPOSITORIES_REQUEST, fetchRepositoriesSaga);
}
