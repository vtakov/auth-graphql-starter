import React from 'react';
import { graphql } from 'react-apollo';
import { hashHistory } from 'react-router';
import CurrentUser from '../queries/CurrentUser.js';

export default (WrappedComponent) => {
    class RequireAuth extends React.Component {
        componentDidMount () {
            if (!this.props.data.loading && !this.props.data.user) {
                hashHistory.push('/login');
            }
        }

        render () {
            return <WrappedComponent {...this.props}/>
        }
    }
    return graphql(CurrentUser)(RequireAuth);
};
