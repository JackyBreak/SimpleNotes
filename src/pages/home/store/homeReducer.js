import { fromJS } from 'immutable';
import {CHANGE_HOME_DATA, LOAD_MORE, TOGGLE_SCROLL_TOP, LOAD_WRITERS} from "./constants";

const defaultState = fromJS({
    topicList:[],
    articleList:[],
    recommendList:[],
    articlePage:1,
    showScroll:false,
    writerList:[]
});

const reducers = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_HOME_DATA:
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList)
            });
        case LOAD_MORE:
            return state.merge({
                'articleList': state.get('articleList').concat(action.articleList),
                'articlePage': action.articlePage
            })
        case TOGGLE_SCROLL_TOP:
            return state.set('showScroll', action.scrollTop);
        case LOAD_WRITERS:
            return state.set('writerList', action.writerList);
        default:
            return state;
    }
}
export default reducers;