import React, {PureComponent, Fragment} from "react";
import {CSSTransition} from "react-transition-group";
import {connect} from 'react-redux';
import * as actionCreators from './store/headerActionCreator'
import {Link} from "react-router-dom";
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoRefresh,
    SearchInfoItem,
    SearchInfoList,
} from './headerStyle'


class Header extends PureComponent {
    render() {
        const { focused, handleInputFocus, handleInputBlur, list } = this.props;
        return(
            <Fragment>
                <HeaderWrapper>
                    <Link to={'/'}>
                        <Logo />
                    </Link>
                    <Nav>
                        <NavItem className={'left mainPage'}>Main Page</NavItem>
                        <NavItem className={'left'}>Download App</NavItem>
                        <NavItem className={'right'}>Login</NavItem>
                        <NavItem className={'right'}>
                            <span className="iconfont">&#xe636;</span>
                        </NavItem>
                        <SearchWrapper>
                            <CSSTransition
                                in={focused}
                                timeout={200}
                                classNames={'slide'}
                            >
                                <NavSearch
                                    className={focused ? 'focused' : ''}
                                    onFocus={() => handleInputFocus(list)}
                                    onBlur={handleInputBlur}
                                />
                            </CSSTransition>
                            <span className={focused ? 'focused iconfont searchIcon' : 'iconfont searchIcon'}>&#xe60d;</span>
                            {this.getListArea()}
                        </SearchWrapper>
                    </Nav>
                    <Addition>
                        <Button className={'wri'}>
                            <span className="iconfont">&#xe724;</span>
                            Taking Notes
                        </Button>
                        <Button className={'reg'}>Sign up</Button>
                    </Addition>
                </HeaderWrapper>
            </Fragment>
        )
    }

    getListArea = () => {
        const { focused, mouseIn, list, page, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
        const jsList = list.toJS();
        const pageList = [];
        if (jsList.length){
            for (let i= (page - 1) * 6; i < page * 6 && i < jsList.length; i ++){
                pageList.push(
                    <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
                )
            }
        }
        if (focused || mouseIn){
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        Trends
                        <SearchInfoRefresh onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
                            <span ref={(icon) => {this.spinIcon=icon}} className="iconfont spin">&#xe606;</span>
                            More Topics
                        </SearchInfoRefresh>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null;
        }
    }
}


const mapStateToProps = (state) => {
    return {
        focused:state.get('header').get('focused'),
        list:state.get('header').get('list'),
        page:state.get('header').get('page'),
        mouseIn:state.get('header').get('mouseIn'),
        totalPage:state.get('header').get('totalPage')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list){
            if (list.size === 0){
                dispatch(actionCreators.getList());
            }
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page, totalPage, spin){
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if (originAngle){
                originAngle = parseInt(originAngle, 10);
            } else {
                originAngle = 0;
            }
            spin.style.transform = 'rotate('+ (originAngle + 360) + 'deg)';
            if (page < totalPage){
                dispatch(actionCreators.changePage(page + 1));
            } else {
                dispatch(actionCreators.changePage(1));
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);