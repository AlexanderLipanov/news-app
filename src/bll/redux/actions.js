import { DEFAULT_FETCH, MENU, COUNTRY, CATEGORY, } from "./reducers/searchNewsReducer";
import {FETCH_NEWS} from '../saga/saga';

export const defaultFetch = () => ({
    type: DEFAULT_FETCH,
});

export const openMenu = () => ({
    type: MENU,
});

export const Contry = (Contry, CountryPresentation) => ({
    type: COUNTRY,
    Contry,
    CountryPresentation
});

export const Category = (Category) => ({
    type: CATEGORY,
    Category
});

export const fetchNews = (fetchParams) => ({
    type: FETCH_NEWS,
    fetchParams
});

