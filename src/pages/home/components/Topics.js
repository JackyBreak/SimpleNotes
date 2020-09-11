import React, { PureComponent, Fragment } from "react";
import {connect} from 'react-redux';
import {
    TopicWrapper,
    TopicItem
} from "../homeStyle";

class Topics extends PureComponent {
    render() {
        const {list} = this.props;
        return (
            <Fragment>
                <TopicWrapper>
                    {
                        list&&list.map(
                            (item) => {
                                return (
                                    <TopicItem key={item.get('id')}>
                                        <img
                                            className={'topic-img'}
                                            src={item.get('imgUrl')}
                                            alt={''}
                                        />
                                        {item.get('title')}
                                    </TopicItem>
                                )
                            })
                    }
                </TopicWrapper>
            </Fragment>
        )
    }
}

const mapState = (state) => {
    return ({
        list:state.get('home').get('topicList')
    })
}

export default connect(mapState, null)(Topics);