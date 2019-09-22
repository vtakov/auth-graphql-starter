import React from 'react';
import { graphql } from 'react-apollo';
import CurrentUser from '../queries/CurrentUser.js';
import { Link } from 'react-router';
import Logout from '../mutations/Logout.js';

class Header extends React.Component {
    onLogoutClick() {
        this.props.mutate({});
    }

    renderButtons() {
        const { loading, user } = this.props.data;
        if (loading) {
            return <div/>;
        }
        return user ?
            <li><a onClick={this.onLogoutClick.bind(this)}>Logout</a></li> :
            <div>
                <li><Link to="/signup">Signup</Link></li>
                <li><Link to="/login">Login</Link></li>
            </div>;
    }

    render() {
        console.log(this.props.data);
        return(
            <nav>
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo left">
                        Home
                    </Link>
                    <ul className="right">
                        {this.renderButtons()}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default graphql(Logout)(
    graphql(CurrentUser)(Header)
);
