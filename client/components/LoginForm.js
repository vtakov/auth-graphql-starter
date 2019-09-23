import React from 'react';
import AuthForm from './AuthForm.js';
import Login from '../mutations/Login.js';
import { graphql } from 'react-apollo';

class LoginForm extends React.Component {
    render() {
        return (
            <div>
                <h3>Simply Login</h3>
                <AuthForm/>
            </div>
        );
    }
}

export default graphql(Login)(LoginForm);
