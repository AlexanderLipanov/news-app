
export const DEFAULT_FETCH = 'DEFAULT_FETCH' ;
export const MENU = 'MENU';
export const COUNTRY = 'COUNTRY';
export const CATEGORY = 'CATEGORY';


let initialState = {
    TopHeadlines: '',
    Country: '',
    Category: '',
    CountryPresentation: '',
    menu: false,
}

const searchNewsReducer = (state = initialState, {type, Country, Category, CountryPresentation}) => {

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

        case DEFAULT_FETCH:
        return state;

    default: return state;
    }
}

export default searchNewsReducer;