
export const DEFAULT_FETCH = 'DEFAULT_FETCH' ;

let initialState = {

}

const searchNewsReducer = (state=initialState, {type}) => {

    switch(type) {
        case DEFAULT_FETCH:

    default: return state;
    }
}

export default searchNewsReducer;