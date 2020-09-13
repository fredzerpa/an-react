import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

import RootReducer from './RootReducer';

const middleware = [logger];

const store = createStore(
    RootReducer, 
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;