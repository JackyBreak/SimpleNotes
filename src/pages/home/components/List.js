import React, { PureComponent, Fragment } from "react";
import {connect} from 'react-redux';
import {
    ListItem,
    ListInfo,
    LoadMore
} from '../homeStyle';
import * as actionCreator from "../store/homeActionCreator";
import {Link} from "react-router-dom";

class List extends PureComponent {
    render() {
        const {list, getMoreList, articlePage} = this.props;
        return (
            <Fragment>
                {
                    list&&list.map(
                        (item, index) => {
                            return (
                                <Link key={index} to={'/detail/' + item.get('id')}>
                                    <ListItem>
                                        <img
                                            alt={''}
                                            className={'list-img'}
                                            src={item.get('imgUrl')}
                                        />
                                        <ListInfo>
                                            <h3 className={'title'}>{item.get('title')}</h3>
                                            <p className={'desc'}>{item.get('desc')}</p>
                                        </ListInfo>
                                    </ListItem>
                                </Link>
                            )
                        }
                    )
                }
                <LoadMore onClick={() => getMoreList(articlePage)}>LOAD MORE</LoadMore>
            </Fragment>
        )
    }
}

const mapState = (state) => {
    return ({
        list:state.get('home').get('articleList'),
        articlePage:state.get('home').get('articlePage')
    })
}

const mapDispatch = (dispatch) => {
    return {
        getMoreList(articlePage){
            dispatch(actionCreator.getMoreList(articlePage))
        }
    }
}

export default connect(mapState,mapDispatch)(List);