import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
   FETCH_CONTRIBUTORS_REQUEST,
   fetchContributorsSuccess,
   fetchContributorsFailure,
   FETCH_LANGUAGES_REQUEST,
   fetchLanguagesSuccess,
   fetchLanguagesFailure,
   FETCH_STATS_REQUEST,
   fetchStatsSuccess,
   fetchStatsFailure,
} from '../actions/modalActions';

function* fetchContributors(action) {
   try {
      const response = yield call(axios.get, action.payload.url);
      yield put(fetchContributorsSuccess(response.data));
   } catch (error) {
      yield put(fetchContributorsFailure(error.message));
   }
}

function* fetchLanguages(action) {
   try {
      const response = yield call(axios.get, action.payload.url);
      yield put(fetchLanguagesSuccess(response.data));
   } catch (error) {
      yield put(fetchLanguagesFailure(error.message));
   }
}

function* fetchStats(action) {
   try {
      const commitsResponse = yield call(
         axios.get,
         `https://api.github.com/repos/${action.payload.owner}/${action.payload.repo}/stats/commit_activity`
      );
      const issuesResponse = yield call(
         axios.get,
         `https://api.github.com/repos/${action.payload.owner}/${action.payload.repo}/issues`
      );
      const pullsResponse = yield call(
         axios.get,
         `https://api.github.com/repos/${action.payload.owner}/${action.payload.repo}/pulls`
      );

      yield put(
         fetchStatsSuccess({
            commits: commitsResponse.data,
            issues: issuesResponse.data,
            pulls: pullsResponse.data,
         })
      );
   } catch (error) {
      yield put(fetchStatsFailure(error.message));
   }
}

export function* watchModalSagas() {
   yield takeEvery(FETCH_CONTRIBUTORS_REQUEST, fetchContributors);
   yield takeEvery(FETCH_LANGUAGES_REQUEST, fetchLanguages);
   yield takeEvery(FETCH_STATS_REQUEST, fetchStats);
}
