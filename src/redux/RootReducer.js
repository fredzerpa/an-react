import { combineReducers } from 'redux';
import userReducer from './user/UserReducer';

import UserReducer from './user/UserReducer';

export default combineReducers({
    user: UserReducer
});