import React from 'react';
import { graphql } from 'react-apollo';
import CurrentUser from '../queries/CurrentUser.js';

class Header extends React.Component {
    renderButtons() {
        const { loading, user } = this.props.data;
        if (loading) {
            return <div/>;
        }
        return user ?
            <div>Logout</div> :
            <div>Login</div>;
    }

    render() {
        console.log(this.props.data);
        return(
            <nav>
                <div className="nav-wrapper">
                    {this.renderButtons()}
                </div>
            </nav>
        );
    }
}

export default graphql(CurrentUser)(Header);
