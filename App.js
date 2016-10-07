import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = { txt: '' };
  }
  update(e) {
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red).value,
      green: ReactDOM.findDOMNode(this.refs.green).value,
      blue: ReactDOM.findDOMNode(this.refs.blue).value
    });
  }
  render() {
    let txt = this.props.txt;

    return (
      <div>
        <Slider ref="red" update={e => this.update(e)} />
        {this.state.red}
        <br />
        <Slider ref="green" update={e => this.update(e)} />
        {this.state.green}
        <br />
        <Slider ref="blue" update={e => this.update(e)} />
        {this.state.blue}
        <br />
      </div>
    )
  }
}

class Slider extends React.Component {
  render() {
    return (
        <input 
          type="range"
          min="0"
          max="255"
          onChange={ this.props.update } 
        />
    )
  }
}

ReactDOM.render(
  <App cat={5} />,
  document.getElementById('app')
);