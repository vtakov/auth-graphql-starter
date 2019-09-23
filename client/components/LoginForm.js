import React from 'react';
import AuthForm from './AuthForm.js';
import Login from '../mutations/Login.js';
import { graphql } from 'react-apollo';
import CurrentUser from '../queries/CurrentUser.js';
import { hashHistory } from 'react-router';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: []
        }
    }

    shouldComponentUpdate (nextProps, nextState, nextContext) {
        if (!this.props.data.user && nextProps.data.user) {
            hashHistory.push('/dashboard');
        }
        return true;
    }

    onSubmit({ email, password }) {
        this.props.mutate({
            variables: { email, password },
            refetchQueries: [{ query: CurrentUser }]
        }).catch(res => {
            const errors = res.graphQLErrors.map(error => error.message);
            this.setState({ errors });
        });
    }

    render() {
        return (
            <div>
                <h3>Simply Login</h3>
                <AuthForm
                    onSubmit={this.onSubmit.bind(this)}
                    errors={this.state.errors}
                />
            </div>
        );
    }
}

export default graphql(CurrentUser)(
    graphql(Login)(LoginForm)
);
