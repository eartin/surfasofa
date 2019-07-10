import * as hostingAPIUtil from '../util/hosting_api_util';
export const RECEIVE_HOSTINGS = "RECEIVE_HOSTINGS";

const receiveHostings = hostings => ({
    type: RECEIVE_HOSTINGS,
    hostings
});

export const fetchHostings = () => dispatch => hostingAPIUtil.fetchHostings()
    .then(hostings => dispatch(receiveHostings(hostings)));


