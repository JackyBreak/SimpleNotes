import axios from "axios";
import {CHANGE_HOME_DATA, LOAD_MORE, TOGGLE_SCROLL_TOP, LOAD_WRITERS} from "./constants";
import {fromJS} from 'immutable';

const updateHomeInfo = (result) => ({
    type: CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
});

const loadMore = (list, articlePage) => ({
    type: LOAD_MORE,
    articleList: fromJS(list),
    articlePage: articlePage
})

const initLoadWriters = (result) => ({
    type: LOAD_WRITERS,
    writerList: fromJS(result)
})

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then(
            (res) => {
                const result = res.data.data;
                dispatch(updateHomeInfo(result));
            }
        )
    }
};

export const getMoreList = (articlePage) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page=' + articlePage).then(
            (res) => {
                const list = res.data.data.articleList;
                dispatch(loadMore(list, articlePage + 1));
            }
        )
    }
}

export const toggleTopShow = (flag) => ({
    type: TOGGLE_SCROLL_TOP,
    scrollTop: fromJS(flag)
})

export const initWritersRecommend = () => {
    return (dispatch) => {
        axios.get('/api/homeWriters.json').then(
            (res) => {
                console.log(res);
                const result = res.data.data.writerList;
                dispatch(initLoadWriters(result));
            }
        )
    }
}