import React from 'react';

class AuthForm extends React.Component {
    constructor (props) {
        super(props);

        this.state = { email: '', password: '' };
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state);
    }

    render() {
        return (
            <div className="row">
                <form className="col s4" onSubmit={this.onSubmit.bind(this)}>
                    <div className="input-field">
                        <input
                            placeholder="Email"
                            value={this.state.email}
                            onChange={e => this.setState({ email: e.target.value })}
                        />
                    </div>
                    <div className="input-field">
                        <input
                            placeholder="Password"
                            value={this.state.password}
                            onChange={e => this.setState({ password: e.target.value })}
                            type="password"
                        />
                    </div>
                    <button className="btn">Submit</button>
                    <div className="errors">
                        {this.props.errors.map(error => <div key={error}>{error}</div>)}
                    </div>
                </form>
            </div>
        );
    }
}

export default AuthForm;
