import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import hostingsReducer from './hostings_reducer';

export default combineReducers({
    users: usersReducer,
    hostings: hostingsReducer
})