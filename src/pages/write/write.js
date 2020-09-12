import React, {Fragment, PureComponent} from "react";
import { Redirect } from 'react-router-dom';
import {connect} from "react-redux";


class Write extends PureComponent {
    render() {
        const {loginStatus} = this.props;
        if (loginStatus) {
            return (
                <Fragment>
                    <div>Writing Page</div>
                </Fragment>
            )
        } else {
            return <Redirect to={'/login'}/>
        }

    }
}

const mapState = (state) => {
    return ({
        loginStatus:state.get('login').get('login')
    })
}


export default connect(mapState, null)(Write);