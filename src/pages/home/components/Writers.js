import React, { PureComponent, Fragment } from "react";
import {connect} from 'react-redux';
import {
    WriterWrapper,
    WriterRecommendTitle,
    WriterListRefresh,
    WriterList,
    WriterListItem,
    WriterDetail,
    WriterInfo,
    WriterIntro,
    WriterFollow
} from '../homeStyle';

class Writers extends PureComponent {
    render() {
        const { list } = this.props;
        return (
            <Fragment>
                <WriterWrapper>
                    <WriterRecommendTitle>
                        Writers
                        <WriterListRefresh>
                            More Writers
                        </WriterListRefresh>
                    </WriterRecommendTitle>
                    <WriterList>
                        {
                            list && list.map(
                                (item) => {
                                    return (
                                        <WriterListItem key={item.get('id')}>
                                            <img
                                                alt={''}
                                                className={'avatar-img'}
                                                src={item.get('avatarUrl')}
                                            />
                                            <WriterDetail>
                                                <WriterInfo>
                                                    {item.get('writerName')}
                                                    <WriterFollow>
                                                        +Follow
                                                    </WriterFollow>
                                                </WriterInfo>
                                                <WriterIntro>
                                                    {item.get('writerIntro')}
                                                </WriterIntro>
                                            </WriterDetail>
                                        </WriterListItem>
                                    )
                                }
                            )
                        }
                    </WriterList>

                </WriterWrapper>
            </Fragment>
        )
    }
}

const mapState = (state) => {
    return ({
        list:state.get('home').get('writerList')
    })
}


export default connect(mapState, null)(Writers);