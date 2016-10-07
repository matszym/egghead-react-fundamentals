import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      val: 0
    };
  }
  update() {
    this.setState({
      val: this.state.val + 1
    });
  }
  componentWillMount() {
    console.log('will mount!');
  }
  componentDidMount() {
    console.log('mounted!');
  }
  componentWillUnmount() {
    console.log('unmounting...');
  }
  render() {
    console.log('rendering');
    return (
      <button
        onClick={ () => this.update() }>
        {this.state.val}
      </button>
    )
  }
}

class Wrapper extends React.Component {
  constructor() {
    super();
  }
  mount() {
    ReactDOM.render(
      <App />,
      document.getElementById('a')
    );
  }
  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('a'));
  }
  render() {
    return (
      <div>
        <button onClick={ () => this.mount() }>Mount</button>
        <button onClick={ () => this.unmount() }>Unmount</button>
        <div id="a"></div>
      </div>
    );
  }
}

export default Wrapper;