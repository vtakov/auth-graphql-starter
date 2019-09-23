import React from 'react';
import AuthForm from './AuthForm.js';
import Login from '../mutations/Login.js';
import { graphql } from 'react-apollo';

class LoginForm extends React.Component {
    onSubmit({ email, password }) {
        this.props.mutate({
            variables: { email, password }
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
