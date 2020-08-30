import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, token, loggedIn, ...rest }) => {
    // !token && console.log('Not authorized');
    return (
        <Route {...rest} render={props => token ? (
            <Component {...props} />
        ) : (
                <Redirect exact to={{ pathname: "/login" }} />
            )
        } />
    )
}

const mapStateToProps = state => ({
    token: state.auth.token,
    loggedIn: state.auth.loggedIn
})

export default connect(mapStateToProps)(PrivateRoute);