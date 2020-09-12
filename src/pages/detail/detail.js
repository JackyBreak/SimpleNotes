import React, {Fragment, PureComponent} from "react";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import {
    DetailWrapper,
    DetailHeader,
    DetailContent
} from "./detailStyle";
import * as actionCreators from './store/actionCreators';


class Detail extends PureComponent {
    render() {
        const {title, content} = this.props;
        return (
            <Fragment>
                <DetailWrapper>
                    <DetailHeader>{title}</DetailHeader>
                    <DetailContent dangerouslySetInnerHTML={{__html: content}} />
                </DetailWrapper>
            </Fragment>
        )
    }

    componentDidMount() {
        const {getDetailContent} = this.props;
        getDetailContent(this.props.match.params.id);
    }
}

const mapState = (state) => {
    return ({
        title: state.get('detail').get('title'),
        content: state.get('detail').get('content')
    })
}

const mapDispatch = (dispatch) => {
    return {
        getDetailContent(id){
            dispatch(actionCreators.getDetail(id));
        }
    }
}

export default connect(mapState, mapDispatch)(withRouter(Detail));