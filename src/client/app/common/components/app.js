import React, {PropTypes} from 'react';
import Header from './header';

class App extends React.Component {
  render () {
    return (
      <div className="app-main">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {'children': PropTypes.object.isRequired};

export default App;