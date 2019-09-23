import React from 'react';
import AuthForm from './AuthForm.js';

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

export default LoginForm;
