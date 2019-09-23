import React from 'react';
import { graphql } from 'react-apollo';
import { hashHistory } from 'react-router';
import CurrentUser from '../queries/CurrentUser.js';

export default (WrappedComponent) => {
    class RequireAuth extends React.Component {
        shouldComponentUpdate(nextProps) {
            if (!nextProps.data.loading && !nextProps.data.user) {
                hashHistory.push('/login');
                return false;
            } else {
                return true;
            }
        }

        render () {
            return <WrappedComponent {...this.props}/>
        }
    }
    return graphql(CurrentUser)(RequireAuth);
};
