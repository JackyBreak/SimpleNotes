import { fromJS } from 'immutable';
import {CHANGE_LOGIN, CHANGE_LOGOUT} from "./constants";

const defaultState = fromJS({
    login: false
});

const reducers = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_LOGIN:
            return state.set('login', action.value);
        case CHANGE_LOGOUT:
            return state.set('login', action.value);
        default:
            return state;
    }
}
export default reducers;