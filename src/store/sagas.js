import { getGistRequest } from "../api";
import { put, takeLatest, all } from "@redux-saga/core/effects";

function* getGist({ payload }) {
    try {
        const res = yield (getGistRequest(payload))
        if (res.data.length > 0 && payload.page<3) {
            yield put({
                type: 'API_SUCCESS',
                data: res.data
            })
        } else {
            yield put({ type: 'API_LIST_END' })
        }
    }

    catch (err) {
        yield put({
            type: 'API_FAILURE',
            error: err.message
        })
    }
}

function* gistSaga() {
    yield takeLatest('API_REQUEST', getGist);
}

export default function* rootSaga() {
    yield all([
        gistSaga(),
    ])
}
