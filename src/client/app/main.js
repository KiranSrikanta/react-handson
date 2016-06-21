import Header from './common/components/header';
import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {message: 'Hello'};
    this.onMessageChange = this.onMessageChange.bind(this);
  }

  onMessageChange(event) {
    this.setState({message: event.target.value});
  }

  render () {
    return (
        <div className="app-main">
            <Header message={this.state.message} onChange={this.onMessageChange} />
        </div>
    );
  }
}

render(
  <App></App>,
  document.getElementById('app')
);