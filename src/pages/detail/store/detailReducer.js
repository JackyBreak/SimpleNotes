import { fromJS } from 'immutable';
import {PUT_DETAILS} from "./constants";

const defaultState = fromJS({
    title: '',
    content: ''
});

const reducers = (state = defaultState, action) => {
    switch (action.type) {
        case PUT_DETAILS:
            return state.merge({
                title: action.state,
                content: action.content
            })
        default:
            return state;
    }
}
export default reducers;