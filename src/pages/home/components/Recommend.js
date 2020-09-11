import React, { PureComponent, Fragment } from "react";
import {connect} from 'react-redux';
import {
    RecommendWrapper,
    RecommendItem
} from '../homeStyle';

class Recommend extends PureComponent {
    render() {
        const {list} = this.props;
        return (
            <Fragment>
                <RecommendWrapper>
                    {
                        list&&list.map(
                            (item) => {
                                return (
                                    <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')}>
                                    </RecommendItem>
                                )
                            }
                        )
                    }
                </RecommendWrapper>
            </Fragment>
        )
    }
}

const mapState = (state) => {
    return (
        {
            list:state.get('home').get('recommendList')
        }
    )
}

export default connect(mapState, null)(Recommend);