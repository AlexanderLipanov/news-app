import { put, takeEvery, all, } from 'redux-saga/effects';

export const FETCH_NEWS = 'FETCH_NEWS';
export const baseURL = 'https://newsapi.org/v2/';

/** функция запроса на сервер с введенными данными */


async function GetNews(fetchParams) {
    const request = await fetch(`${baseURL}`);
    const data = await request.json();
    return data;
}

function* fetchHotels(fetchParams) {
    try {
        const News = yield GetNews(fetchParams);
        yield put({type: 'SET_NEWS_PAYLOAD', payload: News});
    } catch (error) {
        yield put({type: 'FETCH_FAILED', error});
    }
}

function* newsWatcher() {
    yield takeEvery('FETCH_NEWS',fetchHotels);

}


export default function* rootWatcher() {
    yield all([newsWatcher()])
}