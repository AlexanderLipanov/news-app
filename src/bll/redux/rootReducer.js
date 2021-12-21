import { combineReducers } from "redux";
import searchNewsReducer from './reducers/searchNewsReducer';


const rootReducer = combineReducers({searchNewsReducer});

export default rootReducer; 