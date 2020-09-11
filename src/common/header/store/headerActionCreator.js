import  * as constants from './constants';
import axios from 'axios';
import { fromJS } from "immutable";

const updateList = (data) => ({
    type:constants.UPDATE_LIST,
    data:fromJS(data),
    totalPage: Math.ceil(data.length / 6)
});

export const searchFocus = () => ({
    type:constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
    type:constants.SEARCH_BLUR
});

export const mouseEnter = () => ({
    type:constants.MOUSE_ENTER
});

export const mouseLeave = () => ({
    type:constants.MOUSE_LEAVE
})

export const changePage = (page) => ({
    type:constants.CHANGE_PAGE,
    page:page
})

export const getList = () => {
    return (dispatch) => {
        axios.get('api/headerList.json').then((res) => {
            const data = res.data;
            dispatch(updateList(data.data));
        }).catch(() => {
            console.log('error1');
        })
    }
}