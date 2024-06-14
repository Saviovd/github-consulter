import { all, call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
   fetchRepositoriesSuccess,
   fetchRepositoriesFailure,
} from '../actions/RepositoriesActions';

const getRepositoryData = async (owner) => {
   try {
      const response = await axios.get(
         `https://api.github.com/users/${trimmedOwner}/repos`,
         {
            headers: {
               Authorization: `token ${process.env.NEXT_PUBLIC_GIT_TOKEN}`,
            },
         }
      );
      console.log('passando certo');
      return response.data;
   } catch (error) {
      console.error('Error fetching repositories data:', error);
      throw error;
   }
};


function* fetchRepositories(action) {
   try {
      const repos = yield call(getRepositoryData, action.payload.username);
      yield put(fetchRepositoriesSuccess(repos));
   } catch (error) {
      yield put(fetchRepositoriesFailure(error.message));
   }
}

function* watchFetchRepositories() {
   yield takeEvery('FETCH_REPOSITORIES_REQUEST', fetchRepositories);
}

export default function* rootSaga() {
   yield all([watchFetchRepositories()]);
}
