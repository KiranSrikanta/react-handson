import React, {PropType} from 'react';

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
  message: PropType.string.isRequired,
  onChange: PropType.func
};

export default Header;