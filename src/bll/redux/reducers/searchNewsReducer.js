
export const DEFAULT_FETCH = 'DEFAULT_FETCH' ;
export const MENU = 'MENU';
export const COUNTRY = 'COUNTRY';
export const CATEGORY = 'CATEGORY';
const SET_NEWS = 'SET_NEWS';


let initialState = {
    TopHeadlines: '',
    Country: 'ru',
    Category: 'sports',
    CountryPresentation: 'Russia',
    menu: false,
    articles: [],
    fullNews: {
        image: '',
        title: '',
        date: '',
        author: '',
        article: '',
    }
}

const searchNewsReducer = (state = initialState, {type, Country, Category, CountryPresentation, articles, fullNewsParams}) => {

    switch(type) {

        case MENU:
            let copyStateMenu = {...state};
            if (copyStateMenu.menu === false) {
                copyStateMenu.menu = true;
            } else {copyStateMenu.menu = false};

        return copyStateMenu;

        case COUNTRY:
        return {
            ...state,
            Country: Country,
            CountryPresentation: CountryPresentation
        };

        case CATEGORY:
        return {
            ...state,
            Category: Category
        };

        case SET_NEWS:
        return {
            ...state,
            articles: [...articles]
        };

        case 'FETCH_NEWS':
        return {
            ...state,
            menu: false
        };

        case 'FULL_NEWS':
        return {
            ...state.fullNews,
                image: fullNewsParams.image,
                title: fullNewsParams.title,
                date: fullNewsParams.date,
                author: fullNewsParams.author,
                article: fullNewsParams.article,
        };

        case DEFAULT_FETCH:
        return state;

    default: return state;
    }
}

export default searchNewsReducer;