import axios from 'axios';
import {PUT_DETAILS} from "./constants";
import {fromJS} from "immutable";

const putDetails = (result) => {
    return {
        type: PUT_DETAILS,
        title: fromJS(result.title),
        content: fromJS(result.content)
    };
}

export const getDetail = (id) => {
    return (dispatch) => {
        axios.get('/api/detail.json?id=' + id).then(
            (res) => {
                const result = res.data.data;
                dispatch(putDetails(result));
            }
        )
    }
}