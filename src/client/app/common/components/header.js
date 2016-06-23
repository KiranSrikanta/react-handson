import {IndexLink, Link} from 'react-router';
import React, {PropTypes} from 'react';

class NavIndexLink extends React.Component {
  render() {
    
  }
}

NavIndexLink.contextTypes = {router: PropTypes.object};

class Header extends React.Component {
  render() {
    return (
      <ul className="header nav nav-tabs">
        <li role="presentation">
          <IndexLink to="/" activeClassName="active">Home</IndexLink>
        </li>
        <li role="presentation">
          <Link to="/todo" activeClassName="active">TODO</Link>
        </li>
      </ul>
    );
  }
}

export default Header;