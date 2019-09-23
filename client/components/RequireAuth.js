import React from 'react';
import { graphql } from 'react-apollo';
import { hashHistory } from 'react-router';
import CurrentUser from '../queries/CurrentUser.js';

class RequireAuth extends React.Component {
    componentDidMount () {
        if (!this.props.data.loading && !this.props.data.user) {
            hashHistory.push('/login');
        }
    }
}

export default graphql(CurrentUser)(RequireAuth);
