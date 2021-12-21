import { put, takeEvery, all, } from 'redux-saga/effects';

export const FETCH_NEWS = 'FETCH_NEWS';
export const baseURL = 'https://newsapi.org/v2/top-headlines?';

/** функция запроса на сервер с введенными данными */

//&apiKey=4b132a1d5e5e47a08aa1bc6a7e41328a
async function GetNews(fetchParams) {
    console.log(fetchParams, 'fetch');
    const request = await fetch(`${baseURL}country=${fetchParams.Country}&category=${fetchParams.Category}&apiKey=4b132a1d5e5e47a08aa1bc6a7e41328a`);
    const data = await request.json();
    console.log(data);
    return data;
}

function* fetchNews(fetchParams) {
    try {
        const News = yield GetNews(fetchParams);
        yield put({type: 'SET_NEWS_PAYLOAD', payload: News});
    } catch (error) {
        yield put({type: 'FETCH_FAILED', error});
    }
}

function* newsWatcher() {
    yield takeEvery('FETCH_NEWS',fetchNews);

}


export default function* rootWatcher() {
    yield all([newsWatcher()])
}