import { put, takeEvery, all, } from 'redux-saga/effects';

export const FETCH_NEWS = 'FETCH_NEWS';
export const baseURL = 'https://newsapi.org/v2/top-headlines?';

/** функция запроса на сервер с введенными данными */

//&apiKey=4b132a1d5e5e47a08aa1bc6a7e41328a
async function GetNews(fetchParams) {
    const request = await fetch(`${baseURL}country=${fetchParams.params.Country}&category=${fetchParams.params.Category}&apiKey=4b132a1d5e5e47a08aa1bc6a7e41328a`);
    const data = await request.json();
    console.log(data, 'data');
    return data;
}

function* fetchNews(fetchParams) {
        const News = yield GetNews(fetchParams);
        const articles = News.articles;
        yield put({type: 'SET_NEWS', articles: articles});
        console.log(fetchParams);
}

function* newsWatcher() {
    yield takeEvery('FETCH_NEWS',fetchNews);

}


export default function* rootWatcher() {
    yield all([newsWatcher()])
}