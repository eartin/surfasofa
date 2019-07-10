import { RECEIVE_HOSTINGS } from '../actions/hosting_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_HOSTINGS:
            return Object.assign({}, action.hostings);
        default:
            return state;
    }
}