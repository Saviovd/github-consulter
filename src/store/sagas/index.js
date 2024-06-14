import { all, call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
   FETCH_REPOSITORIES_REQUEST,
   fetchRepositoriesSuccess,
   fetchRepositoriesFailure,
} from '../actions/RepositoriesActions';

function* fetchRepositories(action) {
   try {
      const repos = yield call(getRepositoryData, action.payload.username);
      yield put(fetchRepositoriesSuccess(repos));
   } catch (error) {
      yield put(fetchRepositoriesFailure(error.message));
   }
}

function* watchFetchRepositories() {
   yield takeEvery(FETCH_REPOSITORIES_REQUEST, fetchRepositories);
}

export default function* rootSaga() {
   yield all([watchFetchRepositories()]);
}

const getRepositoryData = async (owner) => {
   try {
      const response = await axios.get(
         `https://api.github.com/users/${owner}/repos`,
         {
            headers: {
               Authorization: `token ${process.env.NEXT_PUBLIC_GIT_TOKEN}`,
            },
         }
      );
      return response.data;
   } catch (error) {
      console.error('Error fetching repositories data:', error);
      throw error;
   }
};
