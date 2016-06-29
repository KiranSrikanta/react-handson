import {IndexLink, Link} from 'react-router';
import React, {PropTypes} from 'react';

class NavIndexLink extends React.Component {
  render() {
    const isActive = this.context.router.isActive(this.props.to, true);

    // eslint-disable-next-line no-ternary
    let liClass = isActive ? 'active' : '';

    return (
      <li role="presentation" className={liClass}>
        <IndexLink to={this.props.to}>{this.props.linkTitle}</IndexLink>
      </li>
    );
  }
}

NavIndexLink.contextTypes = {router: PropTypes.object};

NavIndexLink.propTypes = {
  to: PropTypes.string.isRequired,
  linkTitle: PropTypes.string.isRequired
};

class Header extends React.Component {
  render() {
    return (
      <ul className="header nav nav-tabs">
        <NavIndexLink to="/" linkTitle="Home" />
        <li role="presentation">
          <Link to="/todo" activeClassName="active">TODO</Link>
        </li>
      </ul>
    );
  }
}

export default Header;