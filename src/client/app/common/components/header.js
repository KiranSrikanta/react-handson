import React, {PropTypes} from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        {this.props.message}
        <input type="text" value={this.props.message} onChange={this.props.onChange} />
      </div>
    );
  }
}

Header.propTypes = {
  message: PropTypes.string.isRequired,
  onChange: PropTypes.func
};

export default Header;