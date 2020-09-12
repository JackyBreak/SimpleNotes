import axios from 'axios';
import {CHANGE_LOGIN, CHANGE_LOGOUT} from "./constants";

const changeLogin = () => {
    return ({
        type: CHANGE_LOGIN,
        value: true
    })
}

export const login = (account, password) => {
    return (dispatch) => {
        axios.get('/api/login.json?account=' + account + '&password=' + password).then(
            (res) => {
                const result = res.data.data;
                if (result){
                    dispatch(changeLogin());
                } else {
                    alert('unable to log in');
                }
            }
        )
    }
}

export const logout = () => {
    return ({
        type: CHANGE_LOGOUT,
        value: false
    })
}