import React from 'react';
import AuthForm from './AuthForm.js';
import Login from '../mutations/Login.js';
import { graphql } from 'react-apollo';
import CurrentUser from '../queries/CurrentUser.js';

class LoginForm extends React.Component {
    onSubmit({ email, password }) {
        this.props.mutate({
            variables: { email, password },
            refetchQueries: [{ query: CurrentUser }]
        });
    }

    render() {
        return (
            <div>
                <h3>Simply Login</h3>
                <AuthForm onSubmit={this.onSubmit.bind(this)}/>
            </div>
        );
    }
}

export default graphql(Login)(LoginForm);
