import React from 'react';
import AuthForm from './AuthForm.js';
import Login from '../mutations/Login.js';
import { graphql } from 'react-apollo';
import CurrentUser from '../queries/CurrentUser.js';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: []
        }
    }

    onSubmit({ email, password }) {
        this.props.mutate({
            variables: { email, password },
            refetchQueries: [{ query: CurrentUser }]
        }).catch(res => {
            const errors = res.graphQLErrors.map(error => error.message);

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
