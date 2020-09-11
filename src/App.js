import React, {Component, Fragment} from 'react';
import {GlobalStyle} from "./style";
import {GlobalStyle_icon} from "./statics/iconfont/iconfont";
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./common/header/header";
import Home from "./pages/home/home"
import Detail from "./pages/detail/detail";
import store from './store/store.js';


class App extends Component {
    render() {
        return(
            <Provider
            store={store}>
                <Fragment>
                    <GlobalStyle />
                    {/* eslint-disable-next-line react/jsx-pascal-case */}
                    <GlobalStyle_icon />
                    <BrowserRouter>
                        <Header />
                        <div>
                            <Route exact path={'/detail'} component={Detail} ></Route>
                            <Route exact path={'/'} component={Home}></Route>
                        </div>
                    </BrowserRouter>
                </Fragment>
            </Provider>

        )
    }
}

export default App;
