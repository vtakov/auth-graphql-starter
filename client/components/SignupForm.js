import React from 'react';
import AuthForm from './AuthForm.js';
import Signup from '../mutations/Signup.js';
import { graphql } from 'react-apollo';
import CurrentUser from '../queries/CurrentUser.js';

class SignupForm extends React.Component {
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
            this.setState({ errors });
        });
    }

    render() {
        return (
            <div>
                <h3>SignupForm</h3>
                <AuthForm
                    onSubmit={this.onSubmit.bind(this)}
                    errors={this.state.errors}
                />
            </div>
        );
    }
}

export default graphql(Signup)(SignupForm);
