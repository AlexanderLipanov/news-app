import { createStore, applyMiddleware  } from 'redux';
import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootWatcher from '../saga/saga';


const sagaMiddleware = createSagaMiddleware()

const configureStore = () => (
    createStore(
        rootReducer,
        applyMiddleware(sagaMiddleware)
    )
);

const store = configureStore({});

export default store;

sagaMiddleware.run(rootWatcher);