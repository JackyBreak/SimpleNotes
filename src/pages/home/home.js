import React, { PureComponent, Fragment } from "react";
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    GoTop
} from './homeStyle';
import Topics from "./components/Topics";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writers from "./components/Writers";
import {connect} from 'react-redux';
import * as actionCreators from './store/homeActionCreator'

class Home extends PureComponent {

    handleScrollTop(){
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <Fragment>
                <HomeWrapper>
                    <HomeLeft>
                        <img
                            alt={''}
                            className={'banner-img'}
                            src={"https://theimageconference.org/wp-content/uploads/2020/04/vancouver_image_conference_3-scaled.jpg"}
                        />
                        <Topics/>
                        <List/>
                    </HomeLeft>
                    <HomeRight>
                        <Recommend/>
                        <Writers/>
                    </HomeRight>
                    {
                        this.props.showScroll  ? <GoTop onClick={this.handleScrollTop}>GO TOP</GoTop> : null
                    }

                </HomeWrapper>
            </Fragment>
        )
    }
    componentDidMount() {
        this.props.changeHomeData();
        this.props.initWritersRecommend();
        this.bindEvents();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }

    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }
}

const mapState = (state) => {
    return {
        showScroll:state.get('home').get('showScroll')

    }
}

const mapDispatch = (dispatch) => {
    return {
        changeHomeData() {
            dispatch(actionCreators.getHomeInfo());
        },
        changeScrollTopShow(e){
            if (document.documentElement.scrollTop > 400){
                dispatch(actionCreators.toggleTopShow(true));
            } else {
                dispatch(actionCreators.toggleTopShow(false));
            }
        },
        initWritersRecommend(){
            dispatch(actionCreators.initWritersRecommend());
        }
    }
}

export default connect(mapState, mapDispatch)(Home);