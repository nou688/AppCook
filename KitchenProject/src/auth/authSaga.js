import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from '../constants/constants'
import { put, takeEvery } from 'redux-saga/effects'
import getPeople from '../api'

function* fetchData (action) {
  try {
    const data = yield getPeople()
    yield put({ type: FETCHING_DATA_SUCCESS, data })
  } catch (e) {
    yield put({ type: FETCHING_DATA_FAILURE })
  }
}

export function* dataSaga () {
  yield takeEvery(FETCHING_DATA, fetchData)
}
