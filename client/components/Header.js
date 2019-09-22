import React from 'react';
import { graphql } from 'react-apollo';
import CurrentUser from '../queries/CurrentUser.js';

class Header extends React.Component {
    render() {
        console.log(this.props.data);
        return(
            <div>Header</div>
        );
    }
}

export default graphql(CurrentUser)(Header);
