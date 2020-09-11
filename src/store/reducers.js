import { combineReducers } from "redux-immutable";
import headerReducer from "../common/header/store/headerReducer";
import homeReducer from '../pages/home/store/homeReducer'


const reducer = combineReducers({
    header:headerReducer,
    home:homeReducer
})

export default reducer;