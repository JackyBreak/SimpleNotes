import React, {Fragment, PureComponent} from "react";
import { Redirect } from 'react-router-dom';
import {connect} from "react-redux";
import {
    Button,
    Input,
    LoginBox,
    LoginWrapper
} from "./loginStyle";
import * as actionCreator from './store/loginActionCreators';


class Login extends PureComponent {
    render() {
        const {login, loginStatus} = this.props;
        if (!loginStatus) {
            return (
                <Fragment>
                    <LoginWrapper>
                        <LoginBox>
                            <Input placeholder={'Username'} ref={(input)=>{this.account = input}}></Input>
                            <Input placeholder={'Password'} type={'password'} ref={(input) => {this.password = input}}></Input>
                            <Button onClick={() => login(this.account, this.password)}>Log In</Button>
                        </LoginBox>
                    </LoginWrapper>
                </Fragment>
            )
        } else {
            return <Redirect to={'/'}/>
        }

    }
}

const mapState = (state) => {
    return ({
        loginStatus:state.get('login').get('login')
    })
}

const mapDispatch = (dispatch) => {
    return {
        login(account, password){
            dispatch(actionCreator.login(account, password));
        }
    }
}

export default connect(mapState, mapDispatch)(Login);